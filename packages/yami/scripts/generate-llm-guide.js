// generate-llm-guide.mjs (Clean version)
import fs from "fs";
import path from "path";

const ROOT_DIR = path.resolve("./src");
const THEME_FILE = path.join(ROOT_DIR, "themes/theme.css");
const OUTPUT_FILE = path.resolve("../docs/public/llms.txt");
const EXCLUDE_DIRS = ["themes", "utilities", "blocks"];

// ===============================
// 工具方法
// ===============================
function getAllCssFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const e of entries) {
    const full = path.join(dir, e.name);

    if (e.isDirectory()) {
      if (!EXCLUDE_DIRS.includes(e.name)) {
        files = files.concat(getAllCssFiles(full));
      }
    } else if (e.name.endsWith(".css")) {
      files.push(full);
    }
  }

  return files;
}

const UTILITY_RE = /@utility\s+([\w-]+)/g;
function extractUtilityNames(content) {
  return [...content.matchAll(UTILITY_RE)].map((m) => m[1]);
}

// ===============================
// 解析注释元数据
// ===============================
function extractComponentMeta(content) {
  const meta = {
    name: null,
    desc: null,
    usage: null,
    syntax: null,
    rules: [],
  };

  const commentBlocks = [...content.matchAll(/\/\*\s*([\s\S]*?)\*\//g)];

  for (const block of commentBlocks) {
    const text = block[1];

    const name = text.match(/^\s*\*?\s*name[:=\-]\s*(.+)$/im);
    if (name) meta.name = name[1].trim();

    const desc = text.match(/^\s*\*?\s*desc[:=\-]\s*(.+)$/im);
    if (desc) meta.desc = desc[1].trim();

    const usage = text.match(/^\s*\*?\s*usage[:=\-]\s*(.+)$/im);
    if (usage) meta.usage = usage[1].trim();

    const syntax = text.match(
      /syntax\s*[:=]\s*([\s\S]*?)(?=\n\s*(name|desc|usage|rules)\s*[:=]|$)/i
    );
    if (syntax) meta.syntax = syntax[1].trim();

    const rules = [...text.matchAll(/^\s*\*?\s*[-*]\s*(.+)$/gim)];
    meta.rules.push(...rules.map((m) => m[1].trim()));
  }

  return meta;
}

// ===============================
// 颜色主题提取
// ===============================
function extractThemeColors(css) {
  const varRe = /--([\w-]+):\s*([^;]+);/g;

  const light = {};
  const dark = {};

  const rootBlocks = [...css.matchAll(/:root\s*\{([\s\S]*?)\}/g)];
  for (const b of rootBlocks) {
    for (const v of b[1].matchAll(varRe)) light[v[1]] = v[2].trim();
  }

  const darkBlocks = [...css.matchAll(/\.dark\s*\{([\s\S]*?)\}/g)];
  for (const b of darkBlocks) {
    for (const v of b[1].matchAll(varRe)) dark[v[1]] = v[2].trim();
  }

  const vars = new Set([...Object.keys(light), ...Object.keys(dark)]);

  return [...vars].map((v) => ({
    name: v,
    light: light[v] || "",
    dark: dark[v] || "",
  }));
}

// ===============================
// 主输出逻辑（精简版）
// ===============================
function main() {
  const files = getAllCssFiles(ROOT_DIR);
  const md = [];

  md.push("---");
  md.push("description: Yami UI Component Library");
  md.push("alwaysApply: true");
  md.push('applyTo: "**"');
  md.push("version: 1.0.0");
  md.push("---\n");

  md.push("# Yami UI - Component Library\n");

  // ================
  // 颜色主题
  // ================
  if (fs.existsSync(THEME_FILE)) {
    const css = fs.readFileSync(THEME_FILE, "utf8");
    const vars = extractThemeColors(css);

    md.push("## Color Theme\n");
    md.push("| Variable | Light | Dark |");
    md.push("|----------|--------|--------|");

    for (const v of vars) {
      md.push(`| \`--${v.name}\` | ${v.light} | ${v.dark} |`);
    }
    md.push("");
  }

  // ================
  // 组件
  // ================
  md.push("## Components\n");

  for (const file of files.sort()) {
    const css = fs.readFileSync(file, "utf8");
    const utils = extractUtilityNames(css);
    if (!utils.length) continue;

    const meta = extractComponentMeta(css);
    const compName = path.basename(file, ".css");

    md.push(`### ${compName}`);

    if (meta.desc) md.push(meta.desc + "\n");
    md.push(`[${compName} docs](https://yami.yuelili.com/${compName})\n`);
    if (meta.usage) md.push(`**Usage:** ${meta.usage}\n`);

    // class names
    md.push("#### Class Names");
    md.push(utils.map((u) => `- \`${u}\``).join("\n"));
    md.push("");

    // syntax
    if (meta.syntax) {
      md.push("#### Syntax");
      md.push("```html");
      md.push(meta.syntax);
      md.push("```\n");
    }

    // rules
    if (meta.rules.length) {
      md.push("#### Rules");
      meta.rules.forEach((r) => md.push(`- ${r}`));
      md.push("");
    }

    md.push("---\n");
  }

  fs.writeFileSync(OUTPUT_FILE, md.join("\n"));
  console.log("✅ LLM Guide Generated:", OUTPUT_FILE);
}

main();

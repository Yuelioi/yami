// generate-llm-guide.mjs (Modified to align with daisyUI style)
import fs from "fs";
import path from "path";

// 确保路径正确，为了演示，我假设这些文件存在于执行脚本的相对路径中
const ROOT_DIR = path.resolve("./src");
const THEME_FILE = path.join(ROOT_DIR, "themes/theme.css");
const OUTPUT_FILE = path.resolve("../docs/public/llms.txt");

const EXCLUDE_DIRS = ["themes", "utilities", "blocks"];

// === 工具函数 (保持不变) ===
function getAllCssFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  // 遍历当前目录下的所有文件和文件夹
  for (const e of entries) {
    const full = path.join(dir, e.name);

    if (e.isDirectory()) {
      if (EXCLUDE_DIRS.includes(e.name)) {
        console.log(`排除目录: ${full}`); // 可选：打印排除的目录
        continue;
      }

      // 递归搜索子目录
      files = files.concat(getAllCssFiles(full));
    } else if (e.isFile() && e.name.endsWith(".css")) {
      // 如果是 CSS 文件，则加入列表
      files.push(full);
    }
  }
  return files;
}

function extractUtilityNames(content) {
  const regex = /@utility\s+([\w-]+)/g;
  return [...content.matchAll(regex)].map((m) => m[1]);
}

/**
 * 从 CSS 文件注释中提取组件元数据
 * 支持格式：
 */
function extractComponentMeta(content) {
  const meta = {
    name: null,
    desc: null,
    usage: null,
    syntax: null,
    rules: [],
  }; // 匹配块注释

  const commentRegex = /\/\*\s*([\s\S]*?)\*\//g;
  const comments = [...content.matchAll(commentRegex)];

  for (const comment of comments) {
    const text = comment[1]; // 提取 name

    const nameMatch = text.match(/^\s*\*?\s*name\s*[:\-=]\s*(.+?)$/im);
    if (nameMatch) meta.name = nameMatch[1].trim().replace(/["']/g, ""); // 提取 desc

    const descMatch = text.match(/^\s*\*?\s*desc\s*[:\-=]\s*(.+?)$/im);
    if (descMatch) meta.desc = descMatch[1].trim().replace(/^["']|["']$/g, ""); // 提取 usage

    const usageMatch = text.match(/^\s*\*?\s*usage\s*[:\-=]\s*(.+?)$/im);
    if (usageMatch)
      meta.usage = usageMatch[1].trim().replace(/^["']|["']$/g, ""); // 提取 syntax (可选)

    const syntaxMatch = text.match(/^\s*\*?\s*syntax\s*[:\-=]\s*(.+?)$/im);
    if (syntaxMatch)
      meta.syntax = syntaxMatch[1].trim().replace(/^["']|["']$/g, ""); // 提取 rules (多行，以 - 或 * 开头)

    const rulesRegex = /^\s*\*?\s*[-*]\s*(.+?)$/gim;
    const ruleMatches = [...text.matchAll(rulesRegex)];
    for (const rm of ruleMatches) {
      const rule = rm[1].trim();
      if (rule && !rule.match(/^(name|desc|usage|syntax)/i)) {
        meta.rules.push(rule);
      }
    }
  }

  return meta;
}

// 调整 classifyUtility 以更精细地区分 'part' 和 'modifier'
function classifyUtility(name, componentName) {
  // 1. Component Part (e.g., card-header, chat-bubble)
  // 假设如果类名包含组件名且后面跟着 - ，则可能是 part
  if (
    name.startsWith(componentName + "-") &&
    name.match(/-body|-header|-footer|-title|-content|-image|-icon|-menu/)
  )
    return "part"; // 2. Size (xs, sm, md, lg, xl, etc.)

  const sizePattern = /(^|[\-_.])(xs|sm|md|lg|xl|xxl|2xl|3xl|4xl)($|[\-_.])/i;
  if (sizePattern.test(name)) return "size"; // 3. Color (primary, secondary, success, error, etc.)

  const colorKeywords = [
    "primary",
    "secondary",
    "accent",
    "muted",
    "neutral",
    "info",
    "success",
    "warning",
    "error",
    "destructive",
    "base",
    "chart",
    "sidebar",
    "foreground",
    "content",
  ]; // 仅匹配完整的颜色词作为后缀（例如 button-primary, 但排除 primary-content 等内部变量）
  if (colorKeywords.some((k) => name.endsWith("-" + k))) {
    return "color";
  } // 4. Behavior/State (active, disabled, hover, open, etc.)

  const behaviorKeywords = [
    "active",
    "disabled",
    "loading",
    "hover",
    "focus",
    "open",
    "close",
    "checked",
    "selected",
  ];
  if (behaviorKeywords.some((k) => name.includes(k))) return "behavior"; // 5. Style/Visual (outline, ghost, link, solid, shadow, rounded, etc.)

  const styleKeywords = [
    "outline",
    "ghost",
    "link",
    "solid",
    "soft",
    "filled",
    "bordered",
    "shadow",
    "rounded",
    "square",
    "circle",
  ];
  if (styleKeywords.some((k) => name.includes(k))) return "style"; // 6. Placement/Direction (top, bottom, left, right, center, start, end, vertical, horizontal)

  const placementKeywords = [
    "top",
    "bottom",
    "left",
    "right",
    "center",
    "start",
    "end",
    "vertical",
    "horizontal",
  ];
  if (placementKeywords.some((k) => name.includes(k))) return "placement"; // 7. Modifier (All others, e.g., wide, block, fluid)

  return "modifier";
}

function extractThemeColors(css) {
  const light = {};
  const dark = {}; // 匹配所有 :root { ... } 和 .dark { ... } 块
  const rootBlocks = [...css.matchAll(/:root\s*\{([\s\S]*?)\}/g)];
  const darkBlocks = [...css.matchAll(/\.dark\s*\{([\s\S]*?)\}/g)];
  const varRegex = /--([\w-]+):\s*([^;]+);/g; // 遍历并提取所有 :root 块中的变量

  for (const block of rootBlocks) {
    for (const m of block[1].matchAll(varRegex)) {
      // 确保后面的定义覆盖前面的定义 (保持 CSS 行为一致)
      light[m[1]] = m[2].trim();
    }
  } // 遍历并提取所有 .dark 块中的变量
  for (const block of darkBlocks) {
    for (const m of block[1].matchAll(varRegex)) {
      // 确保后面的定义覆盖前面的定义
      dark[m[1]] = m[2].trim();
    }
  }

  const keys = Array.from(
    new Set([...Object.keys(light), ...Object.keys(dark)])
  );
  return keys.map((k) => ({
    name: k,
    light: light[k] || "",
    dark: dark[k] || "",
  }));
}

function compLabelFromPath(file) {
  return path.basename(file, ".css");
}

function generateComponentDocs(componentName, utils, meta) {
  // 使用从文件中提取的元数据，如果没有则使用默认值
  const desc =
    meta.desc || `${componentName} component provides styled UI elements`;
  const usage = meta.usage || `Use for ${componentName} related UI patterns`; // 映射到 daisyUI 的分类名称

  const groups = {
    component: [], // 主类
    part: [], // 子元素类
    size: [], // 尺寸
    color: [], // 颜色
    behavior: [], // 行为/状态
    style: [], // 样式
    placement: [], // 位置
    modifier: [], // 其他修饰符
  }; // 基础组件类通常是组件名本身或者 meta.name

  const baseClassName = meta.name || componentName;
  const baseClassIndex = utils.findIndex((u) => u === baseClassName);
  if (baseClassIndex !== -1) {
    groups.component.push(utils[baseClassIndex]);
    utils.splice(baseClassIndex, 1); // 移除主类
  }

  for (const u of utils) {
    const category = classifyUtility(u, componentName);
    groups[category].push(u);
  }

  return { desc, usage, groups, syntax: meta.syntax, rules: meta.rules };
}

// === 主逻辑 (主要修改部分) ===
function main() {
  const files = getAllCssFiles(ROOT_DIR);
  const md = []; // 1. 修改头部元数据

  md.push("---");
  md.push("description: Yami UI Component Library");
  md.push("alwaysApply: true");
  md.push('applyTo: "**"');
  md.push("version: 1.0.0");
  md.push("---\n");

  md.push("# Yami UI - CSS Component Library");
  md.push(
    "Yami UI is a CSS component library built with modern design principles on top of Tailwind CSS.\n"
  );

  md.push(`- [Yami UI Docs](https://yami.yuelili.com)`);
  md.push("- [GitHub Repository](https://github.com/yuelioi/yami)\n"); //

  md.push("## Yami UI Usage Rules\n");
  md.push(
    "1. **Component and Modifiers**: Apply component styles by adding the main Yami class name (e.g., `button`) and combining it with modifier classes (e.g., `button-primary`, `button-md`) for variations."
  );
  md.push(
    "2. **Tailwind Integration**: Components can be customized using standard **Tailwind CSS utility classes**. For example, use `p-10` to set custom padding to a component."
  );
  md.push(
    "3. **Specificity Override**: If Tailwind utility classes do not override Yami's styles due to CSS specificity, use the `!` suffix on the Tailwind class to force the override (e.g., `bg-red-500!`). Use this sparingly."
  );
  md.push(
    "4. **Responsive Design**: Utilize Tailwind's breakpoint prefixes (e.g., `sm:`, `md:`, `lg:`) for responsive adjustments to both Yami and Tailwind classes."
  );
  md.push(
    "5. **Color System**: Prefer using Yami's semantic color names (like `primary`, `success`) as they automatically adapt to the current theme (light/dark mode)."
  );
  md.push(
    "6. **Prefer Composition**: Strive to combine existing component and utility classes instead of writing custom CSS."
  );
  md.push(
    "7. **Dark Mode**: Components and all semantic color classes automatically support the dark theme via theme variables.\n"
  );

  md.push(
    "Yami UI class names are categorized for better understanding (these type names are only for reference):"
  );
  md.push(
    "- `component`: The main, required class for the component (e.g., `button`)."
  );
  md.push(
    "- `part`: A class for a specific child element of a component (e.g., `card-body`)."
  );
  md.push(
    "- `color`: Sets a specific semantic color (e.g., `button-primary`)."
  );
  md.push("- `size`: Sets a predefined size (e.g., `button-lg`).");
  md.push(
    "- `style`: Applies a specific visual style (e.g., `button-outline`)."
  );
  md.push("- `behavior`: Changes the state or behavior (e.g., `is-active`).");
  md.push(
    "- `placement`: Sets a specific position or direction (e.g., `chat-end`)."
  );
  md.push("- `modifier`: Other classes that modify the component.\n"); // 4. 修改颜色主题的描述和结构

  if (fs.existsSync(THEME_FILE)) {
    const css = fs.readFileSync(THEME_FILE, "utf8");
    const colors = extractThemeColors(css);

    if (colors.length) {
      md.push("## Color Theme\n");
      md.push(
        "Yami UI uses **CSS variables** for all theming, ensuring all color-related classes automatically adapt to light and dark modes without needing `dark:` prefixes.\n"
      );

      md.push("### Theme Variables\n");
      md.push("| Variable | Light Mode | Dark Mode |");
      md.push("|----------|------------|-----------|");

      for (const c of colors) {
        md.push(`| \`--${c.name}\` | ${c.light} | ${c.dark} |`);
      }

      md.push("\n### Color Usage\n");
      md.push(
        "1. **Semantic Colors**: Use colors like `primary`, `secondary`, and `accent` for brand-related UI elements."
      );
      md.push(
        "2. **State Colors**: Use `info`, `success`, `warning`, and `error` for feedback messages and status indicators."
      );
      md.push(
        "3. **Content Colors**: **Always** pair a background color (e.g., `bg-primary`) with its corresponding content color (e.g., `text-primary-content`) to ensure optimal contrast and readability across themes."
      );
      md.push(
        '- Example: `<button class="bg-primary text-primary-content">Button</button>`\n'
      );
    }
  } // 组件文档

  const componentFiles = files;

  md.push("## Components\n");

  const categoryMap = {
    component: { label: "component", icon: "" },
    part: { label: "part", icon: "" },
    size: { label: "size", icon: "" },
    color: { label: "color", icon: "" },
    style: { label: "style", icon: "" },
    behavior: { label: "behavior", icon: "" },
    placement: { label: "placement", icon: "" },
    modifier: { label: "modifier", icon: "" },
  };

  for (const file of componentFiles.sort()) {
    const content = fs.readFileSync(file, "utf8");
    const utils = extractUtilityNames(content);
    if (!utils.length) continue;

    const componentName = compLabelFromPath(file);
    const meta = extractComponentMeta(content);
    const { desc, usage, groups, syntax, rules } = generateComponentDocs(
      componentName,
      utils,
      meta
    ); // 5. 为组件文档添加链接

    md.push(`### ${componentName}`);
    md.push(`${desc}\n`);
    md.push(
      `[${componentName} docs](https://yami.yuelili.com/${componentName})\n`
    );
    md.push(`**Usage:** ${usage}\n`);

    md.push("#### Class names"); // 6. 使用 daisyUI 的格式列出分类 // component
    if (groups.component.length) {
      md.push(`- component: \`${groups.component.join("`, `")}\``);
    } // part

    if (groups.part.length) {
      md.push(`- part: \`${groups.part.sort().join("`, `")}\``);
    } // 提取并合并所有修饰符类别

    const modifiers = [];
    const sizes = groups.size.sort().join("`, `");
    const colors = groups.color.sort().join("`, `");
    const styles = groups.style.sort().join("`, `");
    const behaviors = groups.behavior.sort().join("`, `");
    const placements = groups.placement.sort().join("`, `");
    const others = groups.modifier.sort().join("`, `");

    if (styles) modifiers.push(`style: \`${styles}\``);
    if (colors) modifiers.push(`color: \`${colors}\``);
    if (sizes) modifiers.push(`size: \`${sizes}\``);
    if (behaviors) modifiers.push(`behavior: \`${behaviors}\``);
    if (placements) modifiers.push(`placement: \`${placements}\``);
    if (others) modifiers.push(`modifier: \`${others}\``);
    if (modifiers.length > 0) {
      md.push(...modifiers.map((m) => `- ${m}`));
    }
    md.push(""); // 语法示例

    md.push("#### Syntax");
    if (syntax) {
      md.push("```html");
      md.push(syntax);
      md.push("```\n");
    } else {
      // 默认示例
      md.push("```html");
      if (groups.component.length === 0) groups.component.push(componentName);
      if (componentName === "button" || componentName === "btn") {
        md.push(
          `<button class="${groups.component[0]} ${componentName}-primary ${componentName}-md">Click me</button>`
        );
      } else if (
        componentName === "card" &&
        groups.part.includes("card-body")
      ) {
        md.push(`<div class="${groups.component[0]}">`);
        md.push(`  <div class="card-body">Content</div>`);
        md.push("</div>");
      } else if (
        componentName === "chat" &&
        groups.part.includes("chat-bubble")
      ) {
        md.push(`<div class="chat chat-start">`);
        md.push(`  <div class="chat-bubble chat-bubble-primary">Hello!</div>`);
        md.push("</div>");
      } else {
        md.push(`<div class="${groups.component[0]}">Content</div>`);
      }
      md.push("```\n");
    } // 使用规则

    if (rules && rules.length > 0) {
      md.push("#### Rules");
      for (const rule of rules) {
        md.push(`- ${rule}`);
      }
      md.push("");
    }

    md.push("---\n");
  } // 最佳实践 (保留，但使用更像 daisyUI 的措辞)

  md.push("## Best Practices\n");
  md.push(
    "1. **Semantic HTML**: Use appropriate HTML elements (button, nav, article, etc.)"
  );
  md.push(
    "2. **Accessibility**: Include ARIA labels, roles, and keyboard navigation"
  );
  md.push(
    "3. **Responsive Design**: Test on mobile, tablet, and desktop viewports"
  );
  md.push(
    "4. **Consistency**: Use the same component patterns throughout your app"
  );
  md.push("5. **Dark Mode**: Test both light and dark themes\n"); // 常见模式

  md.push("## Common Patterns\n");
  md.push("### Form Layout");
  md.push("```html");
  md.push('<form class="space-y-4">');
  md.push('  <div class="input-group">');
  md.push('    <label class="label">Email</label>');
  md.push('    <input type="email" class="input input-primary" />');
  md.push("  </div>");
  md.push('  <button type="submit" class="btn btn-primary">Submit</button>');
  md.push("</form>");
  md.push("```\n");

  md.push("### Card Grid");
  md.push("```html");
  md.push('<div class="grid grid-cols-1 md:grid-cols-3 gap-4">');
  md.push('  <div class="card card-shadow">');
  md.push('    <div class="card-body">Content</div>');
  md.push("  </div>");
  md.push("</div>");
  md.push("```\n"); // 写入文件

  fs.writeFileSync(OUTPUT_FILE, md.join("\n"), "utf8");
  console.log(`✅ Generated: ${OUTPUT_FILE}`);
  console.log(`📊 Total components: ${componentFiles.length}`);
}

main();

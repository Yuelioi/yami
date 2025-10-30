import fs from "fs";
import path from "path";

const srcDir = "./src";
const outFile = "./dist/all.css";

// 递归遍历目录，收集所有 .css 文件（忽略 index.css）
function getCssFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getCssFiles(fullPath));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".css") &&
      !/index\.css$/i.test(entry.name)
    ) {
      files.push(fullPath);
    }
  }
  return files;
}

try {
  const cssFiles = getCssFiles(srcDir);

  if (cssFiles.length === 0) {
    console.log("❌ 没有找到任何 CSS 文件。");
    process.exit(0);
  }

  // 确保输出目录存在
  fs.mkdirSync(path.dirname(outFile), { recursive: true });

  const output = fs.createWriteStream(outFile, "utf-8");

  for (const file of cssFiles) {
    const content = fs.readFileSync(file, "utf-8");
    const rel = path.relative(srcDir, file);
    output.write(`\n/* ===== ${rel} ===== */\n`);
    output.write(content);
    output.write("\n");
  }

  output.end();
  console.log(`🎉 已成功合并 ${cssFiles.length} 个 CSS 文件到 ${outFile}`);
} catch (err) {
  console.error("❌ 发生错误：", err);
  process.exit(1);
}

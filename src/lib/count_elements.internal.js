/**
 *
 * TO RUN THIS FILE WRITE THE FOLLOWING COMMAND IN TERMINAL:
 *
 * node src\lib\count_elements.internal.js public\assets
 *
 */

import fs from "fs";
import path from "path";

// Supported image extensions
const imageExtensions = new Set([
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "svg",
  "webp",
]);

// Get directory path from command line or use current directory
const dirPath = process.argv[2] || process.cwd();

try {
  const files = fs.readdirSync(dirPath);
  let imageCount = 0;

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);

    try {
      const stats = fs.statSync(filePath);

      if (stats.isFile()) {
        const extension = path.extname(file).toLowerCase().slice(1);
        if (imageExtensions.has(extension)) {
          imageCount++;
        }
      }
    } catch (err) {
      console.error(`Error reading file ${file}: ${err.message}`);
    }
  });

  console.log(`Found ${imageCount} image file(s) in ${dirPath}`);
} catch (err) {
  console.error(`Error reading directory: ${err.message}`);
  process.exit(1);
}

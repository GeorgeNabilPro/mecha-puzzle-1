/**
 *
 * TO RUN THIS FILE:
 *
 *  node src\lib\convert_to_webp.internal.js public\assets
 *
 */

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

async function convertPngsToWebp(directory) {
  try {
    const files = await fs.readdir(directory);
    const pngFiles = files.filter((file) =>
      file.toLowerCase().endsWith(".png")
    );

    for (const file of pngFiles) {
      try {
        const inputPath = path.join(directory, file);
        const outputFileName = `${path.parse(file).name}.webp`;
        const outputPath = path.join(directory, outputFileName);

        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Determine quality based on dimensions
        const quality = metadata.width < 700 && metadata.height < 700 ? 90 : 80;

        // Convert to WebP with determined quality
        await image.webp({ quality }).toFile(outputPath);
        console.log(
          `Converted ${file} to ${outputFileName} (Quality: ${quality}%)`
        );
      } catch (error) {
        console.error(`Error processing ${file}: ${error.message}`);
      }
    }

    console.log("Conversion process completed!");
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
  }
}

// Get directory path from command line arguments
const directory = process.argv[2];
if (!directory) {
  console.error("Please provide a directory path as an argument.");
  process.exit(1);
}

convertPngsToWebp(directory);

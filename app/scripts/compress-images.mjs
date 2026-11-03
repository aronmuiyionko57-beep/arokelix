import sharp from "sharp";
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const folders = ["industries", "services", "about", "pages"];
const MAX_WIDTH = 1600;
const QUALITY = 75;

let before = 0;
let after = 0;

for (const folder of folders) {
  const dir = path.join("public", folder);
  let files = [];
  try {
    files = await readdir(dir);
  } catch {
    console.log(`Skipping ${dir} (not found)`);
    continue;
  }

  for (const file of files) {
    if (!/\.(jpe?g)$/i.test(file)) continue;
    const full = path.join(dir, file);
    const size = (await stat(full)).size;

    const out = await sharp(full)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();

    before += size;
    if (out.length < size) {
      await writeFile(full, out);
      after += out.length;
      console.log(`${full}: ${(size / 1024).toFixed(0)} KB -> ${(out.length / 1024).toFixed(0)} KB`);
    } else {
      after += size;
      console.log(`${full}: already small (${(size / 1024).toFixed(0)} KB), kept`);
    }
  }
}

console.log(`\nTotal: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
import sharp from "sharp";
import { readdir, stat, writeFile, rename, mkdir, unlink } from "node:fs/promises";
import path from "node:path";

const folders = ["industries", "services", "about", "pages"];
const MAX_WIDTH = 1600;
const QUALITY = 75;

let before = 0;
let after = 0;
let fallback = 0;
const failed = [];

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

    try {
      const size = (await stat(full)).size;

      const out = await sharp(full, { failOn: "none" })
        .rotate()
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer();

      before += size;

      if (out.length >= size) {
        after += size;
        console.log(`${full}: already small (${(size / 1024).toFixed(0)} KB), kept`);
        continue;
      }

      const tmp = full + ".tmp";
      try {
        await writeFile(tmp, out);
        await rename(tmp, full);
        after += out.length;
        console.log(`${full}: ${(size / 1024).toFixed(0)} KB -> ${(out.length / 1024).toFixed(0)} KB`);
      } catch {
        try { await unlink(tmp); } catch {}
        const altDir = path.join("compressed-images", folder);
        await mkdir(altDir, { recursive: true });
        await writeFile(path.join(altDir, file), out);
        after += size;
        fallback++;
        console.log(`${full}: could not overwrite, saved a smaller copy in ${altDir}`);
      }
    } catch (err) {
      failed.push(full);
      console.log(`FAILED ${full}: ${err.message}`);
    }
  }
}

console.log(`\nTotal: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB`);
if (fallback > 0) {
  console.log(`${fallback} file(s) saved in the compressed-images folder. Copy them over the originals in public.`);
}
if (failed.length > 0) {
  console.log(`\nThese files could not be processed:\n${failed.join("\n")}`);
}
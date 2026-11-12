// cutest-picture-01 entry: copy the bundled picture to /output/entry.png.
// The picture is a JPEG stored in a file named entry.png (the gate tells PNG
// from JPEG by its first bytes), so the copy is byte for byte and fully
// deterministic: two runs write the same bytes. Standard library only.
//
// The picture: an adorable baby red panda hugging a tiny plush duckling,
// huge glossy dark eyes, soft fluffy fur, pastel pink and cream colors,
// gentle morning light, cozy and heartwarming.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

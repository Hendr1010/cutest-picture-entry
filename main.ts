// cutest-picture-01 entry (v2): copy the bundled picture to /output/entry.png.
// The picture is a JPEG stored in a file named entry.png (the gate tells PNG
// from JPEG by its first bytes), so the copy is byte for byte and fully
// deterministic: two runs write the same bytes. Standard library only.
//
// The picture (v2, cuter): an impossibly cute baby red panda with enormous
// glossy dark eyes, fluffy orange fur and rosy pink cheeks, hugging a tiny
// soft yellow plush duckling with both paws, wearing a tiny pastel pink bow,
// surrounded by floating pink hearts, sparkles and pastel flowers, soft
// pastel pink and cream background, big happy smile.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

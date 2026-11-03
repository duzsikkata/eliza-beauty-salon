const fs = require('node:fs/promises');
const path = require('node:path');
const photos = {
  face: 'photo-1611930022073-b7a4ba5fcccd',
  spa: 'photo-1600607687920-4e2a09cf159d',
  care: 'photo-1570172619644-dfd03ed5d881',
  bottles: 'photo-1608571423902-eed4a5ad8108',
  plant: 'photo-1608248543803-ba4f8c70ae0b',
};
async function main() {
  await fs.mkdir('dist/assets/photos', {recursive: true});
  const results = [];
  for (const [name, id] of Object.entries(photos)) {
    for (const width of [480, 800, 1200]) {
      const height = width * 1.25;
      const url = `https://images.unsplash.com/${id}?fm=webp&fit=crop&w=${width}&h=${height}&q=78`;
      const res = await fetch(url, {signal: AbortSignal.timeout(45000)});
      if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
      const bytes = Buffer.from(await res.arrayBuffer());
      if (bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WEBP') throw new Error('Invalid WebP');
      const output = path.join('dist/assets/photos', `${name}-${width}.webp`);
      await fs.writeFile(output, bytes);
      results.push({file: output, width, height, bytes: bytes.length});
    }
  }
  console.log(JSON.stringify(results));
}
main().catch(error => {console.error(error.message); process.exitCode = 1;});

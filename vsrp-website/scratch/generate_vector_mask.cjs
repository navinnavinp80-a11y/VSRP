const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const pngPath = path.join(__dirname, '../src/assets/images/vsrp-v-mark.png');
const buf = fs.readFileSync(pngPath);

let pos = 8, width = 0, height = 0, idatChunks = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IHDR') {
    width = buf.readUInt32BE(pos + 8);
    height = buf.readUInt32BE(pos + 12);
  } else if (type === 'IDAT') {
    idatChunks.push(buf.subarray(pos + 8, pos + 8 + len));
  }
  pos += 12 + len;
}

const uncompressed = zlib.inflateSync(Buffer.concat(idatChunks));
const stride = width * 4 + 1;
const rawPixels = Buffer.alloc(width * height * 4);

for (let y = 0; y < height; y++) {
  const filterType = uncompressed[y * stride];
  for (let x = 0; x < width * 4; x++) {
    let val = uncompressed[y * stride + 1 + x];
    if (filterType === 1) {
      const left = x >= 4 ? rawPixels[y * width * 4 + x - 4] : 0;
      val = (val + left) & 0xff;
    } else if (filterType === 2) {
      const up = y > 0 ? rawPixels[(y - 1) * width * 4 + x] : 0;
      val = (val + up) & 0xff;
    } else if (filterType === 3) {
      const left = x >= 4 ? rawPixels[y * width * 4 + x - 4] : 0;
      const up = y > 0 ? rawPixels[(y - 1) * width * 4 + x] : 0;
      val = (val + Math.floor((left + up) / 2)) & 0xff;
    } else if (filterType === 4) {
      const left = x >= 4 ? rawPixels[y * width * 4 + x - 4] : 0;
      const up = y > 0 ? rawPixels[(y - 1) * width * 4 + x] : 0;
      const corner = (y > 0 && x >= 4) ? rawPixels[(y - 1) * width * 4 + x - 4] : 0;
      const p = left + up - corner;
      const pa = Math.abs(p - left);
      const pb = Math.abs(p - up);
      const pc = Math.abs(p - corner);
      let pr = corner;
      if (pa <= pb && pa <= pc) pr = left;
      else if (pb <= pc) pr = up;
      val = (val + pr) & 0xff;
    }
    rawPixels[y * width * 4 + x] = val;
  }
}

// Extract contours using marching squares or boundary tracing
// Let's create an alpha grid
const grid = new Float32Array(width * height);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    grid[y * width + x] = rawPixels[(y * width + x) * 4 + 3] / 255.0;
  }
}

// Generate smooth SVG paths
let rects = [];
for (let y = 0; y < height; y++) {
  let startX = -1;
  for (let x = 0; x <= width; x++) {
    const val = (x < width) ? grid[y * width + x] : 0;
    if (val > 0.4 && startX === -1) {
      startX = x;
    } else if (val <= 0.4 && startX !== -1) {
      rects.push(`<rect x="${startX}" y="${y}" width="${x - startX}" height="1.05" />`);
      startX = -1;
    }
  }
}

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" shape-rendering="geometricPrecision">
  <g fill="#000000">
    ${rects.join('\n    ')}
  </g>
</svg>`;

const svgOutPath = path.join(__dirname, '../src/assets/images/vsrp-v-mark.svg');
fs.writeFileSync(svgOutPath, svgString);
console.log('Successfully written vsrp-v-mark.svg, rect count:', rects.length);

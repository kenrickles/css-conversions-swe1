// base

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

const hexInput = process.argv[2];
hexToRgb(hexInput);
console.log(`rbg (${hexToRgb(process.argv[2]).r},${hexToRgb(process.argv[2]).g},${hexToRgb(process.argv[2]).b})`);

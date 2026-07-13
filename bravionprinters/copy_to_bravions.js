const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'dist', 'bravionprinters', 'browser');
const destDir = path.resolve(__dirname, '..', '..', 'Bravions', 'bravionprinters');

console.log('Source:', srcDir);
console.log('Destination:', destDir);

if (!fs.existsSync(srcDir)) {
  console.error('Source directory does not exist!');
  process.exit(1);
}

if (!fs.existsSync(destDir)) {
  console.log('Destination directory does not exist, creating it...');
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy file function
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${path.basename(src)}`);
  }
}

copyRecursiveSync(srcDir, destDir);
console.log('Sync completed successfully!');

const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'img');
const outFile = path.join(__dirname, '..', 'models.json');

function scan() {
  const models = {};
  if (!fs.existsSync(imgDir)) {
    console.error('img directory not found:', imgDir);
    process.exit(1);
  }
  const folders = fs.readdirSync(imgDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
  folders.forEach(folder => {
    const folderPath = path.join(imgDir, folder);
    let files = fs.readdirSync(folderPath, { withFileTypes: true }).filter(f => f.isFile()).map(f => f.name);
    files = files.filter(n => /\.(png|jpe?g|webp|gif)$/i.test(n));
    // sort by name
    files.sort();
    models[folder] = { images: files.map(f => path.posix.join(folder, f)) };
  });
  fs.writeFileSync(outFile, JSON.stringify(models, null, 2), 'utf8');
  console.log('Wrote', outFile);
}

scan();

const sharp = require('sharp');
const fs = require('fs');
const directory = './src/images';

fs.readdirSync(directory).forEach(file => {
  const name = file.split('.')[0];
  sharp(`${directory}/${file}`)
    .resize(180,220) // width,height
    .toFile(`${directory}/${name}-mobile.jpg`);

  sharp(`${directory}/${file}`)
    .resize(205, 245) // width,height
    .toFile(`${directory}/${name}-tablet.jpg`);
    
  sharp(`${directory}/${file}`)
    .resize(278, 318) // width,height
    .toFile(`${directory}/${name}-desktop.jpg`);
});
const fs = require('fs');
const Path = require('path');
const copydir = require('copy-dir');


const TARGET_DIR = 'E:\\programming\\js\\tm-weather-server-js\\static';

const SOURCE_DIR = 'E:\\programming\\js\\tm-weather-forecast\\build';

const deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      const curPath = Path.join(path, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

deleteFolderRecursive(TARGET_DIR);
fs.mkdirSync( TARGET_DIR );
copydir.sync(SOURCE_DIR, TARGET_DIR, {
  utimes: true,  // keep add time and modify time
  mode: true,    // keep file mode
  cover: true    // cover file when exists, default is true
});

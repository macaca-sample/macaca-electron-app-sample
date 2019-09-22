const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const join = require('path').join;

let pathJoin = path.resolve(__dirname, '..') + '\\node_modules\\macaca-chromedriver\\exec\\';

function getJsonFiles(pathJoin) {
  let fPath;
  let files = fs.readdirSync(pathJoin);
  files.forEach((item, index)=> {

    fPath = join(pathJoin, item);
    //  let stat = fs.statSync(fPath);
    console.log(`item${item},index${index}`);

  });
  return fPath;
}

const bat = spawn(getJsonFiles(pathJoin));

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.error(data.toString());
});

bat.on('exit', (code) => {
  console.log(`winChromeDriver子进程退出，退出码 ${code}`);
});


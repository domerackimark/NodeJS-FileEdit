const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
const process = require("process");


const dirPath = resolve(__dirname, 'OldFiles');

const files = fs.readdirSync(dirPath);


files.forEach(file => fs.rename(
    dirPath + `/${file}`,
    dirPath + `/${file.replace(/\s/g, '')}`,
    statusUpdate => console.log('Updated Files')
));


 
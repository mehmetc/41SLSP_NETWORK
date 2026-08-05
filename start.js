// start.js
const pkg = require('./package.json');
const { execSync } = require('child_process');
const p = pkg.primo; // or primo_test / primo_rapido via process.argv[2]
execSync(
  `primoServe --vid ${p.institution}:${p.vidId} --proxy ${p.url} --dir ./dist --ve`,
  { stdio: 'inherit' }
);
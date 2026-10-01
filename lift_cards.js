const fs = require('fs');

let file = fs.readFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', 'utf8');

file = file.replace(
  'className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[85vh] max-h-[900px]"',
  'className="absolute top-1/2 left-1/2 w-[90vw] max-w-[600px] h-[80vh] max-h-[800px]"'
);

file = file.replace(
  'style={{ transform: \`rotateY(\${angle}deg) translateZ(1200px)\` }}',
  'style={{ transform: \`translate(-50%, -55%) rotateY(\${angle}deg) translateZ(1200px)\` }}'
);

fs.writeFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', file);
console.log("Successfully fixed the transform origin and lifted the cards.");

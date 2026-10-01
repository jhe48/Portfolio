const fs = require('fs');

let file = fs.readFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', 'utf8');

file = file.replace('overflow-x-hidden', 'overflow-clip');

file = file.replace(
  'const { scrollYProgress } = useScroll({ target: targetRef });',
  "const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start start', 'end end'] });"
);

file = file.replace(
  'w-[85vw] max-w-[450px] h-[75vh] max-h-[800px]',
  'w-[90vw] max-w-[600px] h-[85vh] max-h-[900px]'
);

file = file.replace('translateZ(800px)', 'translateZ(1200px)');
file = file.replace('z: -800', 'z: -1200');
file = file.replace('perspective: "2000px"', 'perspective: "3000px"');

file = file.replace('text-2xl lg:text-3xl font-black text-white leading-tight', 'text-3xl lg:text-4xl font-black text-white leading-tight');
file = file.replace('text-xs lg:text-sm text-slate-400 leading-relaxed', 'text-sm lg:text-base text-slate-400 leading-relaxed');

file = file.replace('w-full max-w-[450px] mx-auto', 'w-full max-w-[600px] mx-auto');

fs.writeFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', file);
console.log("Successfully fixed vault bugs and increased size");

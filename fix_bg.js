const fs = require('fs');

let file = fs.readFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', 'utf8');

file = file.replace('className="bg-slate-950 flex flex-col relative z-20', 'className="flex flex-col relative z-20');
file = file.replace('className="relative h-[400vh] bg-slate-950 z-20"', 'className="relative h-[400vh] z-20"');

file = file.replace('<div className="relative z-20 bg-black border-t border-white/5">', '<div className="relative z-20 border-t border-white/5">');

const expGridPattern = /<div className=\{`absolute inset-0 pointer-events-none \$\{cssGrid\}.*?\/>/s;
if (expGridPattern.test(file)) {
  file = file.replace(expGridPattern, '');
} else {
  console.log("Could not find localized experience grid. Skipping.");
}

file = file.replace('[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]', '[mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]');

file = file.replace('translate(-50%, -55%)', 'translate(-50%, -65%)');

fs.writeFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', file);
console.log("Successfully updated backgrounds and lifted cards.");

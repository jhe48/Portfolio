const fs = require('fs');

let file = fs.readFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', 'utf8');

file = file.replace('const rawOpacity = [0.1, 1, 0.1];', 'const rawOpacity = [0.3, 1, 0.3];');

file = file.replace(
  '<section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-20 lg:py-32 border-t border-white/5 text-center">',
  '<section id="contact" className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 py-20 lg:py-32 border-t border-white/5 text-center shadow-[0_-50px_100px_rgba(0,0,0,1)] bg-black/80">'
);

file = file.replace(
  'shadow-[0_-30px_60px_rgba(0,0,0,1)]',
  'shadow-[0_-50px_100px_rgba(0,0,0,1)]'
);

file = file.replace(
  '<div className={`fixed inset-0 pointer-events-none z-0 ${cssGrid} [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]`} />',
  `<div className={\`fixed inset-0 pointer-events-none z-0 \${cssGrid} [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]\`} />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_bottom,black_0%,transparent_15%,transparent_85%,black_100%)]" />`
);

fs.writeFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', file);
console.log("Successfully applied visual tweaks.");

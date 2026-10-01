const fs = require('fs');

let file = fs.readFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', 'utf8');

file = file.replace(
  'className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden border-t border-slate-800 shadow-[0_-50px_100px_rgba(0,0,0,1)]"',
  'className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"'
);

file = file.replace(
  '<section id="contact" className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 py-20 lg:py-32 border-t border-white/5 text-center shadow-[0_-50px_100px_rgba(0,0,0,1)] bg-black/80">',
  '<section id="contact" className="relative z-20 w-full px-4 md:px-6 py-20 lg:py-32 border-t border-white/5 text-center bg-black">'
);

file = file.replace(
  '<section id="contact" className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 py-20 lg:py-32 border-t border-white/5 text-center shadow-[0_-50px_100px_rgba(0,0,0,1)] bg-black/80">',
  '<section id="contact" className="relative z-20 w-full px-4 md:px-6 py-20 lg:py-32 border-t border-white/5 text-center bg-black"><div className="max-w-6xl mx-auto">'
);

file = file.replace(
  '</section>\n      </div>\n    </main>',
  '</div></section>\n      </div>\n    </main>'
);

fs.writeFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', file);
console.log("Successfully removed shadows and fixed Contact background width.");

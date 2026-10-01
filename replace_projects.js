const fs = require('fs');

let file = fs.readFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', 'utf8');

const startMarker = "const ProjectSection = ({ project, index, progress, totalProjects }: any) => {";
const endMarker = "export default function Home() {";

const replacement = `const HorizontalProjects = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // -80% translation for 5 items (moves exactly 4 items width to the left)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  if (isMobile) {
    return (
      <section id="projects" className="bg-slate-950 flex flex-col relative z-20 overflow-hidden">
        {PROJECTS.map((project, index) => (
          <div key={index} className="w-full min-h-[80vh] flex items-center justify-center px-4 py-24 border-t border-slate-800">
            <div className="flex flex-col gap-8 items-center justify-between w-full max-w-lg mx-auto">
              <div className="w-full flex flex-col text-center">
                <p className={\`font-black tracking-widest text-[10px] mb-2 \${project.typeColor}\`}>
                  {project.type}
                </p>
                <h3 className="text-4xl font-black text-white leading-tight break-words">
                  {project.title}
                </h3>
              </div>
              <div className="w-full flex flex-col text-center items-center">
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-row gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" className="px-4 py-2 bg-white text-black font-bold rounded-lg text-xs">View GitHub</a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" className="px-4 py-2 bg-slate-900 border border-slate-800 text-white font-bold rounded-lg text-xs">Live Demo</a>
                  )}
                </div>
              </div>
              <div className="w-full aspect-video bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden relative shadow-2xl">
                <div className="bg-slate-800 h-4 w-full flex items-center px-2 gap-1.5 border-b border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="relative w-full aspect-video bg-black overflow-hidden">
                  <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section id="projects" ref={targetRef} className="relative h-[500vh] bg-slate-950 z-20">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden border-t border-slate-800 shadow-[0_-30px_60px_rgba(0,0,0,1)]">
        <motion.div style={{ x }} className="flex w-[500vw]">
          {PROJECTS.map((project, index) => (
            <div key={index} className="w-screen h-screen flex items-center justify-center px-8 lg:px-16">
              <div className="flex flex-row gap-12 items-start justify-between w-full max-w-[1800px] mx-auto">
                <div className="w-[35%] flex flex-col pt-8 pr-8">
                  <p className={\`font-black tracking-widest text-sm mb-4 \${project.typeColor}\`}>
                    {project.type}
                  </p>
                  <h3 className="text-5xl lg:text-6xl font-black text-white leading-tight break-words">
                    {project.title}
                  </h3>
                </div>
                <div className="w-[25%] flex flex-col pt-2 pr-4">
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="text-xs font-bold bg-slate-900 text-slate-300 px-3 py-1.5 rounded-full border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-row gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors text-sm">View GitHub</a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" className="px-6 py-3 bg-slate-900 border border-slate-800 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors text-sm">Live Demo</a>
                    )}
                  </div>
                </div>
                <div className="w-[40%] aspect-video bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden relative group shadow-2xl max-w-2xl mx-auto">
                  <div className="bg-slate-800 h-8 w-full flex items-center px-4 gap-2 border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="relative w-full aspect-video bg-black overflow-hidden">
                    <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

`;

const startIdx = file.indexOf(startMarker);
const endIdx = file.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  file = file.substring(0, startIdx) + replacement + file.substring(endIdx);
  fs.writeFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', file);
  console.log("Successfully replaced ProjectSection with HorizontalProjects");
} else {
  console.error("Could not find markers!");
}

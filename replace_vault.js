const fs = require('fs');

let file = fs.readFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', 'utf8');

const startMarker = "const HorizontalProjects = () => {";
const endMarker = "export default function Home() {";

const replacement = `const ProjectCard = ({ project }: any) => (
  <div className="bg-[#030b14]/90 backdrop-blur-md border border-[#00F0FF]/30 p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col h-full w-full max-w-[450px] mx-auto">
    <div className="flex flex-col text-center mb-4 lg:mb-6">
      <p className={\`font-black tracking-widest text-[10px] lg:text-xs mb-2 \${project.typeColor}\`}>
        {project.type}
      </p>
      <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
        {project.title}
      </h3>
    </div>

    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-slate-800 shadow-2xl mb-4 lg:mb-6 flex-shrink-0">
      <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80" />
    </div>

    <div className="flex flex-col flex-grow justify-start text-center overflow-y-auto pr-2 custom-scrollbar">
      <p className="text-xs lg:text-sm text-slate-400 leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-bold bg-slate-900 text-slate-300 px-3 py-1 rounded-full border border-slate-800">
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="flex justify-center gap-3 mt-auto pt-4 border-t border-white/5">
      {project.github && (
        <a href={project.github} target="_blank" className="px-4 py-2 lg:px-6 lg:py-3 bg-white text-black font-bold rounded-lg lg:rounded-xl hover:bg-slate-200 transition-colors text-xs lg:text-sm">View GitHub</a>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" className="px-4 py-2 lg:px-6 lg:py-3 bg-slate-900 border border-slate-800 text-white font-bold rounded-lg lg:rounded-xl hover:bg-slate-800 transition-colors text-xs lg:text-sm">Live Demo</a>
      )}
    </div>
  </div>
);

const VaultProject = ({ project, index, progress, totalProjects }: any) => {
  // Distribute cards equally around a 360 degree circle
  const angle = (360 / totalProjects) * index;
  
  // Find the exact scroll progress where THIS card should be front and center
  const cardProgress = index / (totalProjects - 1);
  
  // Fade in as it approaches the front, fade out into the background vault
  const opacity = useTransform(
    progress,
    [cardProgress - 0.25, cardProgress, cardProgress + 0.25],
    [0.1, 1, 0.1]
  );

  // Scale up slightly when frontmost to pop out of the vault
  const scale = useTransform(
    progress,
    [cardProgress - 0.25, cardProgress, cardProgress + 0.25],
    [0.85, 1, 0.85]
  );

  return (
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[450px] h-[75vh] max-h-[800px]"
      style={{ transform: \`rotateY(\${angle}deg) translateZ(800px)\` }}
    >
      <motion.div style={{ opacity, scale }} className="w-full h-full">
        <ProjectCard project={project} />
      </motion.div>
    </div>
  );
};

const VaultProjects = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Rotate vault from 0 to -288 degrees (4 steps of 72) to cycle through all 5 cards
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -288]);

  if (isMobile) {
    return (
      <section id="projects" className="bg-slate-950 flex flex-col relative z-20 py-20 px-4 space-y-16 overflow-hidden">
        {PROJECTS.map((project, index) => (
          <div key={index} className="w-full flex justify-center">
             <ProjectCard project={project} />
          </div>
        ))}
      </section>
    );
  }

  return (
    <section id="projects" ref={targetRef} className="relative h-[400vh] bg-slate-950 z-20">
      <div 
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden border-t border-slate-800 shadow-[0_-30px_60px_rgba(0,0,0,1)]" 
        style={{ perspective: "2000px" }}
      >
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ 
            rotateY, 
            z: -800, // Pushes the cylinder's origin deep into the screen
            rotateX: -5, // Slight top-down viewing angle so you can see the vault curve
            transformStyle: "preserve-3d" 
          }}
        >
          {PROJECTS.map((project, index) => (
            <VaultProject 
              key={index} 
              index={index} 
              project={project} 
              progress={scrollYProgress} 
              totalProjects={PROJECTS.length} 
            />
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
  // Also replace the tag in Home
  file = file.replace(/<HorizontalProjects \/>/g, "<VaultProjects />");
  fs.writeFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', file);
  console.log("Successfully built the 3D Sword Vault");
} else {
  console.error("Could not find markers!");
}

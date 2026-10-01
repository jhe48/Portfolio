'use client';

import { useRef, useEffect, Suspense, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';

const PROJECTS = [
  {
    type: "PROBABILISTIC SYSTEM",
    typeColor: "text-red-500",
    title: "AI Red Team Evaluation Harness",
    description: "A multi-agent security pipeline that automatically generates adversarial prompts, attacks a RAG-powered chatbot, and evaluates whether confidential data was leaked.",
    tags: ["Python", "Docker", "LangChain", "Pinecone", "FastAPI"],
    video: "/dispatch.mp4",
    github: "#"
  },
  {
    type: "PROBABILISTIC SYSTEM",
    typeColor: "text-green-500",
    title: "Crop Classification (ResNet50)",
    description: "Collected 3,600 images of multiple crop types under varied real-world conditions and fine-tuned a pre-trained ResNet-50 CNN to achieve above 90% accuracy. Deployed as an interactive web app using Streamlit.",
    tags: ["Python", "PyTorch", "ResNet50", "Streamlit"],
    video: "/crop.mp4",
    github: "#"
  },
  {
    type: "DETERMINISTIC SYSTEM",
    typeColor: "text-blue-500",
    title: "DispatchMesh",
    description: "A distributed ride-share matching engine built on a microservices architecture with a Node.js gateway, Python FastAPI backend, and Redis Pub/Sub. Features real-time WebSocket streaming and geospatial matching via PostgreSQL + PostGIS.",
    tags: ["Node.js", "WebSockets", "Redis", "PostgreSQL", "AWS EC2"],
    video: "/dispatch.mp4",
    github: "https://github.com/jhe48/DispatchMesh",
    demo: "http://3.19.229.232:3001"
  },
  {
    type: "ACADEMIC RESEARCH",
    typeColor: "text-purple-500",
    title: "ML-Meta: Interactive Academic Platform",
    description: "Collaborated with university professors to build a community-driven, web-based educational platform for advanced machine learning and algorithms. Engineered a custom static site featuring an innovative side-by-side rendering engine that pairs dense academic text with plain-language explanations, utilizing MathJax for LaTeX and automated Node.js build scripts for content generation.",
    tags: ["JavaScript", "Node.js", "MathJax (LaTeX)", "HTML/CSS", "Technical Writing"],
    video: "/dispatch.mp4",
    github: "https://github.com/COD1995/ml-meta",
    demo: "https://cod1995.github.io/ml-meta/"
  },
  {
    type: "DETERMINISTIC SYSTEM",
    typeColor: "text-yellow-500",
    title: "CourtMate",
    description: "A LAMP stack web application providing real-time court capacity, weather, and condition tracking for pickleball players. Secured with password hashing, CSRF tokens, and protections against SQL injection.",
    tags: ["PHP", "MySQL", "JavaScript", "Apache"],
    video: "/dispatch.mp4",
    github: "#"
  }
];

function FallbackSphere() {
  const ref = useRef(null);
  useFrame((state, delta) => {
    // @ts-ignore
    if (ref.current) ref.current.rotation.y += delta * 1.5;
  });
  return (
    <group ref={ref} scale={15} position={[0, 0, 0]}>
      <Center>
        <mesh>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial 
            color="#00F0FF" 
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </Center>
    </group>
  );
}

function NavHead() {
  const { scene } = useGLTF('/head.glb');
  const groupRef = useRef(null);

  useEffect(() => {
    scene.traverse((child) => {
      // @ts-ignore
      if (child.isMesh) {
        // @ts-ignore
        child.material = new THREE.MeshStandardMaterial({
          color: '#00F0FF', 
          roughness: 0.2,   
          metalness: 0.9,   
        });
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // @ts-ignore
      groupRef.current.rotation.y += delta * 1.5; 
    }
  });

  return (
    <group ref={groupRef} scale={15} position={[0, 0, 0]}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

const ProjectCard = ({ project }: any) => (
  <div className="bg-[#030b14]/90 backdrop-blur-md border border-[#00F0FF]/30 p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col h-full w-full max-w-[600px] mx-auto">
    <div className="flex flex-col text-center mb-4 lg:mb-6">
      <p className={`font-black tracking-widest text-[10px] lg:text-xs mb-2 ${project.typeColor}`}>
        {project.type}
      </p>
      <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
        {project.title}
      </h3>
    </div>

    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-slate-800 shadow-2xl mb-4 lg:mb-6 flex-shrink-0">
      <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80" />
    </div>

    <div className="flex flex-col flex-grow justify-start text-center overflow-y-auto pr-2 custom-scrollbar">
      <p className="text-sm lg:text-base text-slate-400 leading-relaxed mb-4">
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
  
  // Create strict input mappings for Framer Motion. 
  // Web Animations API crashes if inputs are < 0 or > 1.
  const rawInput = [cardProgress - 0.25, cardProgress, cardProgress + 0.25];
  const rawOpacity = [0.3, 1, 0.3];
  const rawScale = [0.85, 1, 0.85];

  const safeInput: number[] = [];
  const safeOpacity: number[] = [];
  const safeScale: number[] = [];

  // Dynamically clamp arrays to strictly [0, 1] to prevent crashes
  for (let i = 0; i < rawInput.length; i++) {
    if (rawInput[i] >= 0 && rawInput[i] <= 1) {
      safeInput.push(rawInput[i]);
      safeOpacity.push(rawOpacity[i]);
      safeScale.push(rawScale[i]);
    }
  }

  const opacity = useTransform(progress, safeInput, safeOpacity);
  const scale = useTransform(progress, safeInput, safeScale);

  return (
    <div 
      className="absolute top-1/2 left-1/2 w-[90vw] max-w-[600px] h-[80vh] max-h-[800px]"
      style={{ transform: `translate(-50%, -65%) rotateY(${angle}deg) translateZ(1200px)` }}
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
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start start', 'end end'] });

  // Rotate vault from 0 to -288 degrees (4 steps of 72) to cycle through all 5 cards
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -288]);

  if (isMobile) {
    return (
      <section id="projects" className="flex flex-col relative z-20 py-20 px-4 space-y-16 overflow-hidden">
        {PROJECTS.map((project, index) => (
          <div key={index} className="w-full flex justify-center">
             <ProjectCard project={project} />
          </div>
        ))}
      </section>
    );
  }

  return (
    <section id="projects" ref={targetRef} className="relative h-[400vh] z-20">
      <div 
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden" 
        style={{ perspective: "3000px" }}
      >
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ 
            rotateY, 
            z: -1200, // Pushes the cylinder's origin deep into the screen
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

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 300);
  });

  const cssGrid = "bg-[linear-gradient(to_right,#00F0FF25_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF25_1px,transparent_1px)] bg-[size:3rem_3rem]";

  return (
    <main className="bg-black text-slate-200 relative overflow-clip">
      
      <div className={`fixed inset-0 pointer-events-none z-0 ${cssGrid} [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]`} />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_bottom,black_0%,transparent_15%,transparent_85%,black_100%)]" />

      <div className="fixed top-[20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[60%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className='max-w-6xl mx-auto px-4 lg:px-6 py-4 flex justify-between items-center'>
          
          <div className="flex items-center">
            {/* Shrunk the massive container heavily on mobile so it doesn't break the navbar height */}
            <div className="w-20 h-20 -my-8 -ml-6 lg:w-40 lg:h-40 lg:-my-16 lg:-ml-12 pointer-events-none">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={3} />
                <directionalLight position={[1, 1, 3]} intensity={6} color="#FFFFFF" />
                <pointLight position={[-2, 0, 2]} intensity={5} color="#00F0FF" /> 
                <Suspense fallback={<FallbackSphere />}>
                  <NavHead />
                </Suspense>
              </Canvas>
            </div>
            
            <div className='relative flex items-center h-10 w-32 lg:w-48 -ml-4 lg:-ml-6 overflow-hidden'>
              <AnimatePresence mode="wait">
                {!isScrolled ? (
                  <motion.span 
                    key="short"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 bg-gradient-to-r from-[#00F0FF] via-[#80FFFF] to-[#0080FF] bg-clip-text text-transparent font-black text-xl lg:text-3xl tracking-wider"
                  >
                    JH
                  </motion.span>
                ) : (
                  <motion.span 
                    key="long"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 bg-gradient-to-r from-[#00F0FF] via-[#80FFFF] to-[#0080FF] bg-clip-text text-transparent font-black text-xl lg:text-3xl tracking-wider whitespace-nowrap"
                  >
                    JACKY HE
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Shrunk gap and text size on mobile so links don't crash into logo */}
          <ul className='flex gap-4 md:gap-8 text-xs md:text-sm text-slate-400'>
            <li><a href="#projects" className='hover:text-white transition-colors'>Projects</a></li>
            <li><a href="#experience" className='hover:text-white transition-colors'>Experience</a></li>
            <li><a href="#contact" className='hover:text-white transition-colors'>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
        
        {/* Scaled the image container properly across all device sizes */}
        <div className="relative mt-12 mb-6 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 bg-[#00F0FF]/40 rounded-full blur-[70px]" />
          
          <img
            src="/profile.png"
            alt="Jacky He"
            className="relative w-full h-full object-contain drop-shadow-[0_0_25px_rgba(0,240,255,0.8)]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
            }}
          />
        </div>

        {/* Scaled text drastically down for mobile, but kept it massive on large screens */}
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 lg:mb-6 tracking-tight drop-shadow-2xl'>Jacky He</h1>
        <p className='text-lg md:text-2xl lg:text-3xl text-[#00F0FF] font-bold mb-6 lg:mb-8 drop-shadow-lg px-2'>
          Software Engineer | AI & Distributed Systems
        </p>
        <p className='text-sm md:text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed px-4'>
          I build secure AI pipelines, real-time distributed infrastructure, and
          full-stack applications. I break things on purpose so they never break
          in production.
        </p>
      </section>

      <VaultProjects />
      
      <div className="relative z-20 border-t border-white/5">
        
        <div className="relative w-full">
          
          <section id="experience" className='relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-20 lg:py-32'>
            <h2 className='text-3xl lg:text-5xl font-black text-white mb-8 lg:mb-12 bg-black/60 p-3 lg:p-4 inline-block rounded-xl lg:rounded-2xl backdrop-blur-sm border border-white/5'>Experience</h2>
            <div className="space-y-6">
              <div className='bg-[#030b14]/90 backdrop-blur-md border border-[#00F0FF]/30 rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-[0_0_50px_rgba(0,240,255,0.1)]'>
                <h3 className='text-xl lg:text-2xl font-bold text-[#00F0FF] mb-2'>IT Support / Systems Administration</h3>
                <p className='text-[#00F0FF]/60 font-bold tracking-wider text-xs lg:text-sm mb-4 lg:mb-6'>HARDWARE, NETWORKING & INFRASTRUCTURE</p>
                <p className='text-base lg:text-xl text-slate-400 leading-relaxed'>
                  Hands-on experience with enterprise hardware troubleshooting, networking configuration,
                  and systems administration. Built the foundation for understanding physical infrastructure
                  that distributed software runs on.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section id="contact" className="relative z-20 w-full px-4 md:px-6 py-20 lg:py-32 border-t border-[#00F0FF]/20 text-center bg-black shadow-[0_-30px_60px_-15px_rgba(0,240,255,0.15)]">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Get In Touch</h2>
          <p className='text-base lg:text-xl text-slate-400 mb-12'>Always open to new opportunities and interesting conversations!</p>
          
          <div className='flex flex-row flex-wrap justify-center gap-6 md:gap-10 text-slate-400'>
            <a 
              href='mailto:jackyhe0402@gmail.com' 
              className='text-base md:text-xl font-bold transition-all duration-300 hover:text-rose-400 hover:drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]'
            >
              Email
            </a>
            <a 
              href='https://linkedin.com/in/jacky-hecs' 
              target="_blank" 
              className='text-base md:text-xl font-bold transition-all duration-300 hover:text-blue-400 hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)]'
            >
              LinkedIn
            </a>
            <a 
              href='https://github.com/jhe48' 
              target="_blank" 
              // Changed to pure hacker-green on hover specifically for Github!
              className="text-base md:text-xl font-bold transition-all duration-300 hover:text-[#00FF41] hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.8)]"
            >
              Github
            </a>
          </div>

        </section>
        
      </div>
    </main>
  );
}
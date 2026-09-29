'use client';

// import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden z-
  0">

      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-red-500/10
  rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10
  rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* NAV BAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b
  border-slate-800">
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
          <span className='text-white font-bold text-lg'>JH</span>
          <ul className='flex gap-8 text-sm text-slate-400'>
            <li><a href="#projects" className='hover:text-white transition-
  colors'>Projects</a></li>
            <li><a href="#experience" className='hover:text-white transition-
  colors'>Experience</a></li>
            <li><a href="#contact" className='hover:text-white transition-
  colors'>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center
  px-6">
        {/* 3D MODEL GOES HERE */}
        <h1 className='text-6xl font-bold text-white mb-4'>Jacky He</h1>
        <p className='text-xl text-slate-400 mb-6'>
          Software Engineer | AI & Distributed Systems
        </p>
        <p className='text-slate-500 max-w-xl'>
          I build secure AI pipelines, real-time distributed infrastructure, and
          full-stack applications. I break things on purpose so they never break
          in production.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id='projects' className='max-w-6xl mx-auto px-6 py-32 relative'>

        <div className='flex flex-col space-y-40'> {/* Massive vertical gap between
  projects */}

          {/* --- AI RED TEAM --- */}
          <div className='flex flex-col md:flex-row gap-12 items-center'>

            {/* Left Side: Text & Buttons */}
            <div className='w-full md:w-1/2'>
              <p className='text-red-500 font-bold tracking-widest text-sm mb-
  2'>PROBABILISTIC SYSTEM</p>
              <h3 className='text-3xl font-bold text-white mb-4'>AI Red Team Evaluation
                Harness</h3>
              <p className='text-slate-400 mb-6 leading-relaxed'>
                A multi-agent security pipeline that automatically generates adversarial
                prompts,
                attacks a RAG-powered chatbot, and evaluates whether confidential data was
                leaked.
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-8'>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Python</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Docker</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>LangChain</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Pinecone</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>FastAPI</span>
              </div>
            </div>

            {/* Right Side: GIF / Image / Video Placeholder */}
            <div className='w-full md:w-1/2 aspect-video bg-slate-900/50 border border-
  slate-800 rounded-xl overflow-hidden relative group'>
              {/* To add a real GIF later, replace this div with: <img src="/your-gif.gif"
  className="w-full h-full object-cover" /> */}
              {/* The Mac Buttons (Header) */}
              <div className="bg-slate-800 h-8 w-full flex items-center px-4 gap-2 border-
  b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* The Looping Video */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  src="/dispatch.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100
  transition-opacity"
                />
              </div>
            </div>
          </div>
          {/* --- CROP CLASSIFICATION --- */}
          <div className='flex flex-col md:flex-row gap-12 items-center'>

            {/* Left Side: Text & Buttons */}
            <div className='w-full md:w-1/2'>
              <p className='text-green-500 font-bold tracking-widest text-sm mb-
  2'>PROBABILISTIC SYSTEM</p>
              <h3 className='text-3xl font-bold text-white mb-4'>Crop Classification
                (ResNet50)</h3>
              <p className='text-slate-400 mb-6 leading-relaxed'>
                Collected 3,600 images of multiple crop types under varied real-world
                conditions and
                fine-tuned a pre-trained ResNet-50 CNN to achieve above 90% accuracy.
                Deployed
                as an interactive web app using Streamlit.
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-8'>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Python</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>PyTorch</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>ResNet50</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Streamlit</span>
              </div>

            </div>

            {/* Right Side: GIF / Image Placeholder */}
            <div className='w-full md:w-1/2 aspect-video bg-slate-900/50 border border-
  slate-800 rounded-xl overflow-hidden relative group'>
              {/* The Mac Buttons (Header) */}
              <div className="bg-slate-800 h-8 w-full flex items-center px-4 gap-2 border-
  b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* The Looping Video */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  src="/crop.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100
  transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* --- DISPATCH MESH --- */}
          <div className='flex flex-col md:flex-row-reverse gap-12 items-center'>

            {/* Right Side: Text & Buttons */}
            <div className='w-full md:w-1/2'>
              <p className='text-blue-500 font-bold tracking-widest text-sm mb-
  2'>DETERMINISTIC SYSTEM</p>
              <h3 className='text-3xl font-bold text-white mb-4'>DispatchMesh</h3>
              <p className='text-slate-400 mb-6 leading-relaxed'>
                A distributed ride-share matching engine built on a microservices
                architecture with
                a Node.js gateway, Python FastAPI backend, and Redis Pub/Sub. Features
                real-time
                WebSocket streaming and geospatial matching via PostgreSQL + PostGIS.
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-8'>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Node.js</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>WebSockets</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Redis</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>PostgreSQL</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>AWS EC2</span>
              </div>

              {/* Links */}
              <div className='flex gap-4'>
                <a href="https://github.com/jhe48/DispatchMesh" className='px-6 py-2 bg-white text-black font-bold rounded-lg
  hover:bg-slate-200 transition-colors'>View GitHub</a>
                <a href="http://3.19.229.232:3001" className='px-6 py-2 bg-slate-900 border border-slate-800
  text-white font-bold rounded-lg hover:bg-slate-800 transition-colors'>Live Demo</a>
              </div>
            </div>

            {/* Left Side: GIF / Image / Video Placeholder */}
            <div className='w-full md:w-1/2 aspect-video bg-slate-900/50 border border-
  slate-800 rounded-xl overflow-hidden relative group'>
              {/* To add a real GIF later, replace this div with: <img src="/your-gif.
  gif" className="w-full h-full object-cover" /> */}
              {/* The Mac Buttons (Header) */}
              <div className="bg-slate-800 h-8 w-full flex items-center px-4 gap-2 border-
  b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* The Looping Video */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  src="/dispatch.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100
  transition-opacity"
                />
              </div>
            </div>
          </div>
          {/* --- ML-META ACADEMIC RESEARCH --- */}
          <div className='flex flex-col md:flex-row-reverse gap-12 items-center'>

            {/* Left Side: Text & Buttons */}
            <div className='w-full md:w-1/2'>
              <p className='text-purple-500 font-bold tracking-widest text-sm mb-
  2'>ACADEMIC RESEARCH</p>
              <h3 className='text-3xl font-bold text-white mb-4'>ML-Meta: Interactive
                Academic Platform</h3>
              <p className='text-slate-400 mb-6 leading-relaxed'>
                Collaborated with university professors to build a community-driven, web-
                based educational platform
                for advanced machine learning and algorithms. Engineered a custom static
                site featuring an innovative
                side-by-side rendering engine that pairs dense academic text with plain-
                language explanations,
                utilizing MathJax for LaTeX and automated Node.js build scripts for
                content generation.
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-8'>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>JavaScript</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Node.js</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>MathJax (LaTeX)</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>HTML/CSS</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Technical Writing</span>
              </div>

              {/* Links */}
              <div className='flex gap-4'>
                <a href="https://github.com/COD1995/ml-meta" target="_blank"
                  className='px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors'>View GitHub</a>
                <a href="https://cod1995.github.io/ml-meta/" className='px-6 py-2 bg-slate-900 border border-slate-800
  text-white font-bold rounded-lg hover:bg-slate-800 transition-colors'>Live Demo</a>
              </div>
            </div>

            {/* Right Side: CSS MAC WINDOW FRAME */}
            <div className='w-full md:w-1/2 aspect-video bg-slate-900/50 border border-
  slate-800 rounded-xl overflow-hidden relative group'>
              {/* To add a real GIF later, replace this div with: <img src="/your-gif.
  gif" className="w-full h-full object-cover" /> */}
              {/* The Mac Buttons (Header) */}
              <div className="bg-slate-800 h-8 w-full flex items-center px-4 gap-2 border-
  b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* The Looping Video */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  src="/dispatch.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100
  transition-opacity"
                />
              </div>
            </div>
          </div>
          {/* --- COURTMATE --- */}
          <div className='flex flex-col md:flex-row-reverse gap-12 items-center'>

            {/* Right Side: Text & Buttons */}
            <div className='w-full md:w-1/2'>
              <p className='text-yellow-500 font-bold tracking-widest text-sm mb-
  2'>DETERMINISTIC SYSTEM</p>
              <h3 className='text-3xl font-bold text-white mb-4'>CourtMate</h3>
              <p className='text-slate-400 mb-6 leading-relaxed'>
                A LAMP stack web application providing real-time court capacity, weather,
                and condition tracking
                for pickleball players. Secured with password hashing, CSRF tokens, and
                protections against SQL injection.
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-8'>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>PHP</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>MySQL</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>JavaScript</span>
                <span className='text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-
  full border border-slate-800'>Apache</span>
              </div>

            </div>

            {/* Left Side: GIF / Image Placeholder */}
            <div className='w-full md:w-1/2 aspect-video bg-slate-900/50 border border-
  slate-800 rounded-xl overflow-hidden relative group'>
              {/* The Mac Buttons (Header) */}
              <div className="bg-slate-800 h-8 w-full flex items-center px-4 gap-2 border-
  b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* The Looping Video */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  src="/dispatch.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100
  transition-opacity"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className='max-w-6xl mx-auto px-6 py-20 border-t border-slate-800'>
        <h2 className='text-3xl font-bold text-white mb-8'>Experience</h2>
        <div className="space-y-6">
          <div className='bg-slate-900 border border-slate-800 rounded-lg p-6'>
            <h3 className='text-lg font-bold text-white'>IT Support / Systems Administration</h3>
            <p className='text-slate-500 text-sm mb-2'>Hardware, Networking & Infrastructure</p>
            <p className='text-slate-400 text-sm'>
              Hands-on experience with enterprise hardware troubleshooting, networking configuration,
              and systems administration. Built the foundation for understanding physical infrastructure
              that distributed software runs on.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className='text-slate-400 mb-8'>Always open to new opportunities and interesting conversations!</p>
        <div className='flex justify-center gap-8 text-slate-400'>
          <a href='mailto:jackyhe0402@gmail.com' className='hover:text-white transition-colors'>Email</a>
          <a href='https://linkedin.com/in/jacky-hecs' target="_blank" className='hover:text-white transition-colors'>LinkedIn</a>
          <a href='https://github.com/jhe48' target="_blank" className="hover:text-white transition-colors">Github</a>
        </div>
      </section>
    </main >
  );
}
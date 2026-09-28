'use client';

// import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* NAV BAR */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90
      backdrop-blur-md border-b border-slate-800">
        <div className='max-w-6xl mx-auto px-6 py-4 flex
        justify-between items-center'>
          <span className='text-white font-bold text-lg'>JH</span>
          <ul className='flex gap-8 text-sm text-slate-400'>
            <li><a href="#projects"
              className='hover:text-white transition-colors'>Projects</a></li>
            <li><a href="#experience"
              className='hover:text-white transition-colors'>Experience</a></li>
            <li><a href="#contact"
              className='hover:text-white transition-colors'>Contact</a></li>
          </ul>
        </div>
      </nav>
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center
      justify-center text-center px-6">
        {/* 3D MODEL GOES HERE */}
        <h1 className='text-6xl font-bold text-white mb-4'>Jacky He</h1>
        <p className='text-xl text-slate-400 mb-6'>
          Software Engineer | AI/SI & Distributed Systems
        </p>
        <p className='text-slate-500 max-w-xl'>
          I build secure AI pipelines, real-time distributed infrastructure, and
          full-stack applications. I break things on purpose so they never break
          in production.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id='projects' className='max-w-6xl mx-auto px-6 py-20'>
        {/* Probabilistic Projects */}
        <h2 className='text-3xl font-bold text-white mb-2'>Probabilistic Systems</h2>
        <p className='text-slate-500 mb-8'>AI-powered systems where outputs are non-deterministic</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
          {/* AI Red Team */}
          <div className='bg-slate-900 border border-slate-800 rounded-lg
          p-6 hover:border-red-500/50 transition-colors'>
            <h3 className='text-xl font-bold text-red-400 mb-2'>
              AI Red Team Evaluation Harness</h3>
            <p className='text-slate-400 text-sm mb-4'>
              A multi-agent security pipeline that automatically generates adversarial prompts,
              attacks a RAG-powered chatbot, and evaluates whether confidential data was leaked.
            </p>
            <div className='flex flex-wrap gap-2'>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Python</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Next.js</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>LangChain</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Pinecone</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Docker</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>OpenAI</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>FastAPI</span>

            </div>
          </div>
          {/* Crop Classification*/}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6
            hover:border-green-500/50 transition-colors">
            <h3 className='text-xl font-bold text-green-400 mb-2'>Crop Classification (ResNet50)</h3>
            <p className="text-slate-400 text-sm mb-4">
              Collected 3,600 images of multiple crop types under varied real-world conditions and 
              fine-tuned a pre-trained ResNet-50 CNN to achieve above 90% accuracy on crop variety identification. 
              Deployed as an interactive web application using Streamlit for real-time predictions on user-uploaded images.
            </p>
            <div className='flex flex-wrap gap-2'>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Python</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>PyTorch</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>ResNet50</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Computer Vision</span>
            </div>
          </div>
        </div>
        {/* Deterministic Projects */}
        <h2 className='text-3xl font-bold text-white mb-2'>Deterministic Systems</h2>
        <p className='text-slate-500 mb-8'>Traditional software where outputs
          are predictable and reproducible.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          {/* Dispatch Mesh*/}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6
          hover:border-blue-500/50 transition-colors">
            <h3 className='text-xl font-bold text-blue-400 mb-2'>DispatchMesh</h3>
            <p className="text-slate-400 text-sm mb-4">
              A distributed ride-share matching engine built on a microservices architecture with 
              a Node.js gateway, Python FastAPI backend, and Redis Pub/Sub message broker. Features 
              real-time WebSocket streaming of live driver GPS locations and geospatial matching via 
              PostgreSQL + PostGIS. Deployed on AWS EC2 with Terraform and automated via Github Actions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Node.js</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Python</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>FastAPI</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Redis</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>WebSockets</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>PostgreSQL</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>PostGIS</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Terraform</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>Docker</span>
              <span className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'>AWS EC2</span>
            </div>
          </div>
          {/* CourtMate */}
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6
          hover:border-yellow-500/50 transition-colors">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Courtmate</h3>
            <p className='text-slate-400 text-sm mb-4'>
              A LAMP stack web application providing real-time court capacity, weather, and condition tracking 
              for pickleball players. Features include live chat, player rankings, and tournament brackets. Secured 
              with password hashing, CSRF tokens, and protections against SQL injection and XSS. Led a 3-person Agile 
              team through an 8-week development cycle.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">PHP</span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Apache</span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Agile</span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">JavaScript</span>
              <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">MySQL</span>
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
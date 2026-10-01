const fs = require('fs');

let file = fs.readFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', 'utf8');

const searchStr = `<section id="projects" ref={container} className="relative z-20">
        {PROJECTS.map((project, i) => (
          <ProjectSection 
            key={i} 
            index={i} 
            project={project} 
            progress={scrollYProgress} 
            totalProjects={PROJECTS.length}
          />
        ))}
      </section>`;

const replaceStr = `<HorizontalProjects />`;

if (file.includes(searchStr)) {
  file = file.replace(searchStr, replaceStr);
  fs.writeFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', file);
  console.log("Successfully updated Home to use HorizontalProjects");
} else {
  console.error("Could not find section to replace! Please check the exact string.");
  // Print a fuzzy match near 'section id="projects"'
  const idx = file.indexOf('section id="projects"');
  console.log(file.substring(idx - 50, idx + 400));
}

const fs = require('fs');

let file = fs.readFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', 'utf8');

const searchStr = `const [isScrolled, setIsScrolled] = useState(false);
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const { scrollY } = useScroll();`;

const replaceStr = `const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();`;

if (file.includes(searchStr)) {
  file = file.replace(searchStr, replaceStr);
  fs.writeFileSync('/home/jhe48/JHE_PORTFOLIO/Portfolio/src/app/page.tsx', file);
  console.log("Successfully cleaned up Home variables");
} else {
  console.error("Could not find variables to replace!");
}

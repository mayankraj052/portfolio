import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certification from './components/Certification'; // Added Certification
import Contact from './components/Contact';
import Experience from "./components/Experience";


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Experience />
        <Certification /> {/* Added Certification Section */}
        <Contact />
      </main>
    </div>
  );
}
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume'; // Added Resume
import Certification from './components/Certification'; // Added Certification
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certification /> {/* Added Certification Section */}
        <Resume /> {/* Added Resume Section */}
        <Contact />
      </main>
    </div>
  );
}
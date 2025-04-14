import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <span className="text-2xl font-bold text-gray-800">Portfolio</span>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-600 rounded-lg transition-colors duration-300 hover:bg-indigo-600 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            {/* Download Resume Button */}
            <a
              href="Mayank_Raj_Resume.pdf"
              download
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-600 rounded-lg transition-colors duration-300 hover:bg-indigo-600 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Download Resume Button */}
            <a
              href="/Mayank_Raj_Resume.pdf"
              download
              className="block mx-4 mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-center"
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

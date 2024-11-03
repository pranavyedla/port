import React from 'react';

export function Navigation() {

  return (
    <nav className="fixed w-full bg-gray-800/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold cursor-pointer">Pranav Yedla</div>
          <div className="flex gap-6">
            <a href="#education" className="hover:text-blue-400 transition">Education</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#certifications" className="hover:text-blue-400 transition">Certifications</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
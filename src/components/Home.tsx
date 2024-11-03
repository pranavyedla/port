import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img 
              src="images/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Pranav Yedla</h1>
            <p className="text-xl text-gray-400 mb-8">Aspiring Software Developer</p>
            <p className="text-gray-300 max-w-2xl mb-8">
              I am passionate about software development and looking forward to building innovative solutions that make a difference.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/pranavyedla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pranav-yedla-128009281/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#contact" 
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
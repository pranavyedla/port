import React from 'react';
import { Award } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: "PCAP: Programming Essentials in Python",
      issuer: "CISCO Networking Academy",
      date: "2022",
      description: "Fundamental understanding of Programming using Python"
    },
    {
      name: "Software Engineering Virtual Experience Program",
      issuer: "JPMorgan and Co.",
      date: "2023",
      description: "A simple and basic understanding of the environment in a software firm"
    },
    {
      name: "MERN stack certification",
      issuer: "VNR-VJIET college",
      date: "2023",
      description: "Hands-on Web Development using MERN Stack"
    },
    {
      name: "Basics of AIML certification (in progress)",
      issuer: "Linkedin",
      date: "2024",
      description: "Basic concepts of AI and ML and integration with Web Apps"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition">
              <Award className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-4">{cert.name}</h3>
              <p className="text-blue-400 mb-2">{cert.issuer}</p>
              <p className="text-gray-400 mb-2">{cert.date}</p>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const education = [
    {
      institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
      degree: "Bachelor of Technology in Information Technology",
      period: "2022 - 2026",
      details: [
        "CGPA: 9/10",
        "Mastered Web Development",
        "Specialized in Problem Solving",
        "Active participant in coding competitions"
      ]
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate Education (11th & 12th)",
      period: "2020 - 2022",
      details: [
        "Major: Mathematics, Physics, Chemistry",
        "Percentage: 96.4%",
        "Participated in various academic competitions"
      ]
    },
    {
      institution: "Schooling",
      degree: "Sanghamitra School",
      period: "2010 - 2020",
      details: [
        "Percentage: 92.2%",
        "Participated in various academic competitions"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition">
              <GraduationCap className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
              <p className="text-gray-400">{edu.degree}</p>
              <p className="text-blue-400 mb-4">{edu.period}</p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                {edu.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
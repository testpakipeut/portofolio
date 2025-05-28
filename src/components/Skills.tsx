'use client';
import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Langages & Frameworks",
    items: [
      { name: "Java 8/11, Java EE", level: 100 },
      { name: "Spring Boot / Spring MVC", level: 80 },
      { name: "Hibernate / JPA", level: 80 },
      { name: "JavaScript (ES6+), React.js", level: 80 },
      { name: "Angular", level: 80 },
      { name: "Node.js / Express.js", level: 80 },
      { name: "PHP", level: 60 }
    ]
  },
  {
    category: "GED & Middleware",
    items: [
      { name: "IBM FileNet (Content Engine, ICN)", level: 80 },
      { name: "Batch Java / Control-M", level: 80 }
    ]
  },
  {
    category: "Frontend UI",
    items: [
      { name: "React", level: 80 },
      { name: "Angular", level: 80 },
      { name: "Tailwind CSS, Material-UI", level: 80 },
      { name: "Redux, Hooks, Context API", level: 60 }
    ]
  },
  {
    category: "Base de données",
    items: [
      { name: "MongoDB, Oracle, SQL", level: 80 }
    ]
  },
  {
    category: "Outils & CI/CD",
    items: [
      { name: "GitLab, Jenkins, XL Deploy/Release", level: 80 },
      { name: "SVN", level: 80 }
    ]
  },
  {
    category: "Sécurité & API",
    items: [
      { name: "JWT, OAuth, CORS, XSS/CSRF", level: 80 },
      { name: "RESTful API, SOAP Web Services", level: 80 }
    ]
  },
  {
    category: "Méthodologies",
    items: [
      { name: "Agile / Scrum, Rédaction specs", level: 80 },
      { name: "Gestion de projets et coordination", level: 60 }
    ]
  },
  {
    category: "Autres",
    items: [
      { name: "Machine Learning (bases), IA", level: 40 },
      { name: "Automatisation & scripting Unix", level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-12 text-center">
        Compétences
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {skills.map((category, categoryIdx) => (
          <motion.div
            key={categoryIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIdx * 0.1, duration: 0.7 }}
            className="bg-gray-800 rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((skill, skillIdx) => (
                <div key={skillIdx} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: skillIdx * 0.1 }}
                      className="bg-cyan-500 h-3 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 
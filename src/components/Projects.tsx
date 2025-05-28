'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import ImageModal from "./ImageModal";
import Image from "next/image";

const projects = [
  {
    title: "CRMiracle - Gestion commerciale",
    description: "Développement d'une application full-stack complète pour la gestion commerciale, incluant la gestion des clients, factures, contrats et paiements.",
    period: "Juillet 2024 – Décembre 2025",
    details: [
      "Gestion clients : profils, historique, contacts et facturation",
      "Gestion financière : factures, devis, paiements, TVA collectée et déductible, relances automatiques et manuelles",
      "Gestion contrats : création, suivi, versions, échéances, alertes sur contrats expirés",
      "Système de paiement : intégration, suivi, reçus, gestion des impayés avec alertes et relances",
      "Fonctionnalités avancées : génération PDF, notifications en temps réel, tableaux de bord analytiques, export de données"
    ],
    technologies: [
      "React.js", "Material-UI", "Redux", "Axios",
      "Node.js", "Express.js", "MongoDB", "JWT",
      "CORS", "XSS/CSRF Protection", "Session Management", "Data Encryption"
    ],
    results: [
      "Réduction de 60% du temps de traitement des factures",
      "Amélioration de 40% du suivi des paiements",
      "Automatisation de 80% des tâches administratives",
      "Interface intuitive réduisant la courbe d'apprentissage"
    ],
    screenshot: { src: "/logos/crmiracle.png", alt: "Capture d'écran CRMiracle" },
    link: "https://crmiracle.railway.app",
    github: "https://github.com/votre-username/crmiracle"
  },
  {
    title: "RHControl - Gestion RH",
    description: "Plateforme unifiée de gestion des ressources humaines, équipements et paie avec système de réclamations intégré.",
    period: "Janvier 2025 - Maintenant",
    details: [
      "Espace Employé : gestion des informations personnelles, suivi des congés, réclamations, consultation des équipements",
      "Espace RH : gestion complète des employés, validation des congés, traitement des réclamations, génération des bulletins",
      "Espace Équipements : suivi détaillé des équipements, gestion des affectations, notifications de maintenance",
      "Espace Paie : calcul automatique des salaires, génération des bulletins, gestion des réclamations",
      "Système de réclamations intégré pour tous les espaces avec suivi et historique"
    ],
    technologies: [
      "PHP", "MySQL", "Tailwind CSS", "JavaScript",
      "Architecture MVC", "Sessions PHP", "Vanilla JS"
    ],
    screenshots: [
      { src: "/logos/rhcontrol_rh.png", alt: "Interface RH" },
      { src: "/logos/rhcontrol_rp.png", alt: "Interface Paie" },
      { src: "/logos/rhcontrol_eq.png", alt: "Interface Équipements" }
    ],
    link: "#",
    github: "https://github.com/votre-username/rhcontrol"
  },
  {
    title: "OhMyFood - Réservation de restaurants",
    description: "Développement complet d'un site web de réservation de restaurants gastronomiques, avec un positionnement haut de gamme, responsive et accessible.",
    period: "Mai 2025",
    details: [
      "Présentation détaillée des restaurants : photos, menus, descriptions",
      "Formulaire de réservation en ligne avec gestion des disponibilités",
      "Navigation fluide avec header et footer personnalisés",
      "Respect des normes d'accessibilité (WCAG)",
      "Design moderne, épuré et responsive, adapté à tous les supports"
    ],
    technologies: [
      "PHP", "JavaScript", "Tailwind CSS",
      "Responsive Design", "Accessibilité WCAG"
    ],
    results: [
      "Interface utilisateur intuitive et élégante",
      "Site performant et accessible sur mobile et desktop",
      "Facilitation des réservations et amélioration de l'expérience client"
    ],
    screenshot: { src: "/logos/ohmyfood.png", alt: "Logo OhMyFood" },
    link: "https://ohmyfood-production.up.railway.app/index.php",
    github: "https://github.com/testpakipeut/ohmyfood"
  },
  {
    title: "Portfolio Next.js",
    description: "Site personnel moderne avec animations et responsive.",
    link: "#",
    details: [
      "Développement d'un portfolio moderne avec Next.js et TypeScript",
      "Intégration d'animations fluides avec Framer Motion",
      "Design responsive avec Tailwind CSS",
      "Optimisation des performances et du SEO",
      "Interface utilisateur intuitive et accessible"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: ["/portfolio-1.jpg", "/portfolio-2.jpg"],
    github: "https://github.com/votre-username/portfolio"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    if (selectedProject?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject?.screenshots) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-12 text-center">
        Projets
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:scale-105 hover:shadow-cyan-500/30 transition-all"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0);
            }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              {project.period && (
                <div className="text-cyan-400 font-medium mb-2">{project.period}</div>
              )}
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Voir les détails →
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => {
          setSelectedProject(null);
          setCurrentImageIndex(0);
        }}
        title={selectedProject?.title || ""}
      >
        {selectedProject && (
          <div className="space-y-6">
            {selectedProject.period && (
              <div className="text-cyan-400 font-medium">{selectedProject.period}</div>
            )}

            {selectedProject.screenshot && (
              <div 
                className="relative w-full h-64 mb-6 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedProject.screenshot);
                }}
              >
                <Image
                  src={selectedProject.screenshot.src}
                  alt={selectedProject.screenshot.alt}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            )}

            {selectedProject.screenshots && (
              <div className="relative w-full h-64 mb-6">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedProject.screenshots[currentImageIndex].src}
                    alt={selectedProject.screenshots[currentImageIndex].alt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePreviousImage();
                      }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-r-lg transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage();
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-l-lg transition-colors"
                    >
                      →
                    </button>
                  </>
                )}
              </div>
            )}

            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">Description</h4>
              <p className="text-gray-300">{selectedProject.description}</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">Fonctionnalités</h4>
              <ul className="list-disc list-inside space-y-2">
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-300">{detail}</li>
                ))}
              </ul>
            </div>

            {selectedProject.results && (
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">Résultats</h4>
                <ul className="list-disc list-inside space-y-2">
                  {selectedProject.results.map((result, idx) => (
                    <li key={idx} className="text-gray-300">{result}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors"
              >
                Voir sur GitHub
              </a>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-500 rounded-lg text-white hover:bg-cyan-400 transition-colors"
              >
                Voir le projet
              </a>
            </div>
          </div>
        )}
      </Modal>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage || { src: "", alt: "" }}
      />
    </section>
  );
};

export default Projects; 
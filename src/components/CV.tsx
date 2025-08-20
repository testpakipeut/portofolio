"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Types pour les données du CV
interface CVData {
  experiences: Array<{
    poste: string;
    entreprise: string;
    lieu: string;
    periode: string;
    description: string;
    technologies: string[];
  }>;
  competences: Array<{
    nom: string;
    niveau: number;
    technologies: string[];
  }>;
  projets: Array<{
    nom: string;
    periode: string;
    description: string;
    technologies: string[];
    lien: string;
  }>;
  diplomes: Array<{
    nom: string;
    ecole: string;
    annee: string;
    specialisation: string;
  }>;
}

// Composant Modal pour la prévisualisation
const PreviewModal = ({ isOpen, onClose, cvData }: { isOpen: boolean; onClose: () => void; cvData: CVData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800">Prévisualisation du CV</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {/* En-tête du CV */}
          <div className="text-center mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">CURRICULUM VITAE</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Zoumeye TOURE</h2>
            <p className="text-lg text-gray-600 mb-4">
              Développeur Full Stack passionné par la création d&apos;applications web modernes et performantes
            </p>
            <div className="flex justify-center gap-6 text-gray-600">
              <span>✉️ tizi.lion@gmail.com</span>
              <span>📞 076283933</span>
            </div>
          </div>

          {/* Présentation */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cyan-500 pl-4">
              PRÉSENTATION
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Développeur Full Stack passionné avec plus de 8 ans d&apos;expérience dans la création 
              d&apos;applications web modernes et performantes. Spécialisé dans les technologies 
              Java/JEE, Spring Boot, React.js et l&apos;expertise en Gestion Électronique de Documents (GED) avec IBM FileNet.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Je suis constamment à la recherche de nouveaux défis techniques et j&apos;aime 
              partager mes connaissances avec les équipes. Mon approche combine créativité, 
              rigueur technique et une vision orientée utilisateur, avec une expertise particulière 
              dans l&apos;architecture de systèmes documentaires et les solutions d&apos;intelligence artificielle.
            </p>
          </div>

          {/* Expériences */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cyan-500 pl-4">
              EXPÉRIENCES PROFESSIONNELLES
            </h3>
            <div className="space-y-6">
              {cvData.experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{exp.poste}</h4>
                      <p className="text-blue-600 font-medium">{exp.entreprise}</p>
                      <p className="text-gray-500 text-sm">{exp.lieu}</p>
                    </div>
                    <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {exp.periode}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cyan-500 pl-4">
              COMPÉTENCES TECHNIQUES
            </h3>
            <div className="space-y-4">
              {cvData.competences.map((comp, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">{comp.nom}</h4>
                    <span className="text-cyan-600 font-bold">{comp.niveau}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                      style={{ width: `${comp.niveau}%` }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {comp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projets */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cyan-500 pl-4">
              PROJETS RÉALISÉS
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {cvData.projets.map((projet, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-1">{projet.nom}</h4>
                  <p className="text-cyan-600 text-sm mb-2">{projet.periode}</p>
                  <p className="text-gray-700 text-sm mb-3">{projet.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {projet.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diplômes */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-cyan-500 pl-4">
              FORMATION ET DIPLÔMES
            </h3>
            <div className="space-y-4">
              {cvData.diplomes.map((diplome, index) => (
                <div key={index} className="border-l-4 border-purple-200 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">{diplome.nom}</h4>
                      <p className="text-purple-600">{diplome.ecole}</p>
                      <p className="text-gray-500 text-sm">{diplome.specialisation}</p>
                    </div>
                    <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {diplome.annee}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CV = () => {
  const [activeSection, setActiveSection] = useState('presentation');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const competences = [
    { nom: 'Langages & Frameworks', niveau: 90, technologies: ['Java 8/11', 'Spring Boot', 'JavaScript (ES6+)', 'React.js', 'Angular', 'Node.js'] },
    { nom: 'GED & Middleware', niveau: 85, technologies: ['IBM FileNet', 'Content Engine', 'ICN', 'Batch Java', 'Control-M'] },
    { nom: 'Frontend UI', niveau: 80, technologies: ['React', 'Angular', 'Tailwind CSS', 'Material-UI', 'Redux'] },
    { nom: 'Base de données', niveau: 80, technologies: ['MongoDB', 'Oracle', 'SQL', 'Hibernate', 'JPA'] },
    { nom: 'Outils & CI/CD', niveau: 80, technologies: ['GitLab', 'Jenkins', 'XL Deploy/Release', 'SVN'] },
    { nom: 'Sécurité & API', niveau: 80, technologies: ['JWT', 'OAuth', 'CORS', 'RESTful API', 'SOAP'] },
  ];

  const experiences = [
    {
      poste: 'Consultant GED',
      entreprise: 'Natixis / BPCE',
      lieu: 'Charenton-le-Pont',
      periode: 'Mai 2022 – Juin 2024',
      description: 'Participation à l&apos;évolution et à la maintenance des plateformes GED basées sur IBM FileNet P8, notamment pour le crédit-bail mobilier, immobilier et outre-mer. Mise en place de nouvelles GED pour la division Madrid.',
      technologies: ['IBM FileNet', 'Content Engine', 'ICN', 'Java', 'Control-M']
    },
    {
      poste: 'Consultant Java / Expert GED FileNet',
      entreprise: 'Swiss Life',
      lieu: 'Levallois-Perret',
      periode: 'Mars 2021 – Avril 2022',
      description: 'Modernisation du système documentaire, création d\'une GED dédiée au Luxembourg, optimisation des solutions GED existantes en France.',
      technologies: ['Java', 'FileNet', 'Spring', 'Oracle', 'Jenkins']
    },
    {
      poste: 'Tech Lead Java',
      entreprise: 'CDG Paris (ADP)',
      lieu: 'Aéroport de Roissy-Charles-de-Gaulle',
      periode: 'Avril 2020 – Novembre 2020',
      description: 'Conception d\'un Proof of Concept basé sur l\'intelligence artificielle, capable de prédire les plans de vol en temps réel, en exploitant les données EUROCONTROL.',
      technologies: ['Java', 'Machine Learning', 'Spring Boot', 'API REST', 'IA']
    },
    {
      poste: 'Tech Lead Java',
      entreprise: 'La Poste Mobile',
      lieu: 'Suresnes',
      periode: 'Mars 2017 – Mars 2020',
      description: 'Intégration des nouveaux clients BOX, personnalisation du CRM, évolution du système d\'information et intégration dans la chaîne de facturation.',
      technologies: ['Java', 'Spring MVC', 'Hibernate', 'Oracle', 'CRM']
    },
    {
      poste: 'Consultant Java',
      entreprise: 'METROLAB',
      lieu: 'Vélizy (RATP/Alstom)',
      periode: 'Décembre 2015 – Décembre 2016',
      description: 'Réalisation d\'un POC d\'une plateforme intelligente pour la gestion du trafic métro et l\'information voyageur.',
      technologies: ['Java', 'Spring', 'JPA', 'Oracle', 'Web Services']
    }
  ];

  const projets = [
    {
      nom: 'CRMiracle - Gestion commerciale',
      periode: 'Juillet 2024 – Décembre 2024',
      description: 'Développement d\'une application full-stack complète pour la gestion commerciale, incluant la gestion des clients, factures, contrats et paiements.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      lien: '#'
    },
    {
      nom: 'RHControl - Gestion RH',
      periode: 'Janvier 2025 - Maintenant',
      description: 'Plateforme unifiée de gestion des ressources humaines, équipements et paie avec système de réclamations intégré.',
      technologies: ['React', 'Spring Boot', 'Oracle', 'Jenkins', 'Docker'],
      lien: '#'
    },
    {
      nom: 'OhMyFood - Réservation de restaurants',
      periode: 'Mai 2025',
      description: 'Développement complet d\'un site web de réservation de restaurants gastronomiques, avec un positionnement haut de gamme, responsive et accessible.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'],
      lien: '#'
    },
    {
      nom: 'Portfolio Next.js',
      periode: '2024 - 2025',
      description: 'Site personnel moderne avec animations et responsive design, développé avec Next.js et Tailwind CSS.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      lien: '#'
    }
  ];

  const diplomes = [
    {
      nom: 'Master en Informatique',
      ecole: 'École Supérieure d\'Informatique',
      annee: '2015',
      specialisation: 'Développement Web et Technologies Java'
    },
    {
      nom: 'Licence Professionnelle Informatique',
      ecole: 'Université Paris-Est Créteil',
      annee: '2013',
      specialisation: 'Développement d\'applications'
    },
    {
      nom: 'Certifications Techniques',
      ecole: 'IBM / Oracle',
      annee: '2016-2024',
      specialisation: 'FileNet P8, Java EE, Spring Framework'
    }
  ];

  const downloadCV = () => {
    // Import dynamique de jsPDF pour éviter les erreurs SSR
    import('jspdf').then((jsPDFModule) => {
      const { jsPDF } = jsPDFModule;
      const doc = new jsPDF();
      
      // Configuration du document
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(0, 150, 199);
      doc.text('CURRICULUM VITAE', 105, 20, { align: 'center' });
      
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text('Zoumeye TOURE', 105, 35, { align: 'center' });
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text('Développeur Full Stack passionné par la création d\'applications web modernes', 105, 45, { align: 'center' });
      
      // Coordonnées
      doc.setFontSize(10);
      doc.setTextColor(0, 150, 199);
      doc.text('Email: tizi.lion@gmail.com', 20, 60);
      doc.text('Téléphone: 076283933', 20, 70);
      
      // Présentation
      doc.setFontSize(14);
      doc.setTextColor(0, 150, 199);
      doc.text('PRÉSENTATION', 20, 90);
      
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      const presentationText = 'Développeur Full Stack passionné avec plus de 8 ans d\'expérience dans la création d\'applications web modernes et performantes. Spécialisé dans les technologies Java/JEE, Spring Boot, React.js et l\'expertise en Gestion Électronique de Documents (GED) avec IBM FileNet.';
      const splitPresentation = doc.splitTextToSize(presentationText, 170);
      doc.text(splitPresentation, 20, 100);
      
      // Expériences
      let yPos = 130;
      doc.setFontSize(14);
      doc.setTextColor(0, 150, 199);
      doc.text('EXPÉRIENCES PROFESSIONNELLES', 20, yPos);
      yPos += 15;
      
      experiences.forEach((exp) => {
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'bold');
        doc.text(`${exp.poste}`, 20, yPos);
        yPos += 7;
        
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(`${exp.entreprise} - ${exp.lieu}`, 20, yPos);
        doc.text(`${exp.periode}`, 150, yPos);
        yPos += 7;
        
        doc.setTextColor(0, 0, 0);
        const descSplit = doc.splitTextToSize(exp.description, 170);
        doc.text(descSplit, 20, yPos);
        yPos += descSplit.length * 5 + 5;
        
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
      });
      
      // Compétences
      if (yPos > 200) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(14);
      doc.setTextColor(0, 150, 199);
      doc.text('COMPÉTENCES TECHNIQUES', 20, yPos);
      yPos += 15;
      
      competences.forEach((comp) => {
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'bold');
        doc.text(`${comp.nom} (${comp.niveau}%)`, 20, yPos);
        yPos += 5;
        
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(comp.technologies.join(', '), 20, yPos);
        yPos += 10;
        
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
      });
      
      // Sauvegarde
      doc.save('CV_Zoumeye_TOURE.pdf');
    }).catch(() => {
      alert('Erreur lors de la génération du PDF. Merci de me contacter directement pour recevoir mon CV.');
    });
  };

  return (
    <section id="cv" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-6">
        {/* En-tête du CV */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mon CV
          </h2>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Zoumeye TOURE
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Développeur Full Stack passionné par la création d&apos;applications web modernes et performantes
          </p>
          
          {/* Boutons d'action */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPreviewOpen(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-xl">👁️</span>
              Prévisualiser le CV
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-xl">📥</span>
              Télécharger le CV (PDF)
            </motion.button>
          </div>

          {/* Coordonnées */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-cyan-400 text-xl">✉️</span>
              <span>tizi.lion@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-cyan-400 text-xl">📞</span>
              <span>076283933</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation des sections */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-full p-2 flex gap-2 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('presentation')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeSection === 'presentation'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="text-lg">👤</span>
              Présentation
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('competences')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeSection === 'competences'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="text-lg">💻</span>
              Compétences
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('experiences')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeSection === 'experiences'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="text-lg">💼</span>
              Expériences
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('projets')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeSection === 'projets'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="text-lg">⭐</span>
              Projets
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('diplomes')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeSection === 'diplomes'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="text-lg">🎓</span>
              Diplômes
            </motion.button>
          </div>
        </div>

        {/* Contenu des sections */}
        <div className="max-w-6xl mx-auto">
          {/* Section Présentation */}
          {activeSection === 'presentation' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">👤</span>
                Présentation
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Développeur Full Stack passionné avec plus de 8 ans d&apos;expérience dans la création 
                    d&apos;applications web modernes et performantes. Spécialisé dans les technologies 
                    Java/JEE, Spring Boot, React.js et l&apos;expertise en Gestion Électronique de Documents (GED) avec IBM FileNet.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Je suis constamment à la recherche de nouveaux défis techniques et j&apos;aime 
                    partager mes connaissances avec les équipes. Mon approche combine créativité, 
                    rigueur technique et une vision orientée utilisateur, avec une expertise particulière 
                    dans l&apos;architecture de systèmes documentaires et les solutions d&apos;intelligence artificielle.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                    <h4 className="text-cyan-400 font-semibold mb-2">Points forts</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Expertise GED IBM FileNet P8</li>
                      <li>• Architecture logicielle robuste</li>
                      <li>• Développement Full Stack Java/React</li>
                      <li>• Leadership technique et mentorat</li>
                      <li>• Intelligence artificielle et Machine Learning</li>
                      <li>• Travail en équipe agile</li>
                      <li>• Veille technologique constante</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Section Compétences */}
          {activeSection === 'competences' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">💻</span>
                Compétences Techniques
              </h3>
              <div className="space-y-6">
                {competences.map((comp, index) => (
                  <motion.div
                    key={comp.nom}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-700 bg-opacity-50 p-6 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-xl font-semibold text-white">{comp.nom}</h4>
                      <span className="text-cyan-400 font-bold">{comp.niveau}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-3 mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${comp.niveau}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {comp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-500 bg-opacity-20 text-cyan-300 rounded-full text-sm border border-cyan-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Section Expériences */}
          {activeSection === 'experiences' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">💼</span>
                Expériences Professionnelles
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.poste}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border-l-4 border-cyan-500"
                  >
                    <div className="flex justify-between items-start mb-4 flex-wrap">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{exp.poste}</h4>
                        <p className="text-cyan-400 font-medium">{exp.entreprise}</p>
                        <p className="text-gray-400 text-sm">{exp.lieu}</p>
                      </div>
                      <span className="text-gray-400 bg-gray-600 px-3 py-1 rounded-full text-sm">
                        {exp.periode}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded-full text-sm border border-blue-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Section Projets */}
          {activeSection === 'projets' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">⭐</span>
                Projets Réalisés
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projets.map((projet, index) => (
                  <motion.div
                    key={projet.nom}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-700 bg-opacity-50 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">{projet.nom}</h4>
                    <p className="text-cyan-400 text-sm mb-3">{projet.periode}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{projet.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projet.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded-full text-xs border border-green-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={projet.lien}
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                    >
                      Voir le projet →
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Section Diplômes */}
          {activeSection === 'diplomes' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">🎓</span>
                Formation et Diplômes
              </h3>
              <div className="space-y-6">
                {diplomes.map((diplome, index) => (
                  <motion.div
                    key={diplome.nom}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border-l-4 border-purple-500"
                  >
                    <div className="flex justify-between items-start mb-4 flex-wrap">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{diplome.nom}</h4>
                        <p className="text-purple-400 font-medium">{diplome.ecole}</p>
                        <p className="text-gray-400 text-sm">{diplome.specialisation}</p>
                      </div>
                      <span className="text-gray-400 bg-gray-600 px-3 py-1 rounded-full text-sm">
                        {diplome.annee}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modal de prévisualisation */}
      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        cvData={{
          experiences,
          competences,
          projets,
          diplomes
        }}
      />
    </section>
  );
};

export default CV; 
'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import Image from "next/image";

const experiences = [
  {
    title: "Consultant GED",
    company: "Natixis / BPCE – Charenton-le-Pont",
    period: "Mai 2022 – Juin 2024",
    description: "Participation à l'évolution et à la maintenance des plateformes GED basées sur IBM FileNet P8, notamment pour le crédit-bail mobilier, immobilier et outre-mer. Mise en place de nouvelles GED pour la division Madrid, avec un focus sur l'automatisation et la standardisation des processus documentaires.",
    details: [
      "Évolution des GED en travaillant avec les composants FileNet : Content Engine (gestion des documents et métadonnées), IBM Content Navigator (ICN) (interface web utilisateur) et workflows",
      "Création et paramétrage de GED spécifiques, gestion du plan de classement et automatisation via batchs Java",
      "Développement de plugins FileNet personnalisés pour la recherche avancée, le téléchargement sécurisé et la visualisation de documents",
      "Automatisation des traitements documentaires avec des batchs planifiés via Control-M pour synchronisation et gestion des workflows",
      "Gestion des déploiements applicatifs avec GitLab, XL Deploy et XL Release",
      "Rédaction des spécifications fonctionnelles, réalisation des tests fonctionnels et support auprès des utilisateurs"
    ],
    technologies: ["Java", "JavaScript", "IBM FileNet P8 (Content Engine, ICN)", "Control-M", "Jenkins", "GitLab", "XL Deploy", "XL Release"],
    companyDescription: "Natixis est une banque de financement et d'investissement internationale, filiale du groupe BPCE. Le projet s'inscrit dans une démarche de modernisation et d'optimisation des processus documentaires.",
    result: "Mise en place réussie des nouvelles GED pour la division Madrid avec une amélioration significative de l'automatisation des processus documentaires.",
    logos: [
      { src: "/logos/bpce.png", alt: "Logo BPCE" }
    ]
  },
  {
    title: "Consultant Java / Expert GED FileNet",
    company: "Swiss Life – Levallois-Perret",
    period: "Mars 2021 – Avril 2022 (CDI)",
    description: "Dans le cadre de la modernisation du système documentaire, participation à un projet visant à créer une GED dédiée au Luxembourg, tout en optimisant les solutions GED existantes en France.",
    details: [
      "Rédaction des matrices des exigences (fonctionnelles, techniques) et macro-chiffrage",
      "Coordination des équipes projet (MOA, MOE, DBA, urbanisation, homologation)",
      "Rédaction des spécifications fonctionnelles générales (SFG) et validation des SFD/ST",
      "Définition de la stratégie de tests et pilotage des phases de validation (recette, pré-prod, prod)",
      "Développement et mise en production d'une nouvelle GED dédiée au Luxembourg (multi-référentiels)",
      "Réalisation de plugins ICN (IBM Content Navigator) pour ajouter des fonctionnalités spécifiques (raccourcis d'accès, filtres dynamiques, actions contextuelles)",
      "Développement de custom actions, menus, et widgets personnalisés sur ICN",
      "Intégration poussée avec le Content Engine (CE) : recherche fulltext, gestion des ACLs, création de classes documentaires",
      "Refactoring et maintenance évolutive des GED existantes",
      "Accompagnement des mises en production et gestion des livrables de déploiement (Docker/Ansible dans certains environnements)"
    ],
    technologies: ["Méthodes agiles (Scrum)", "Unix", "IBM FileNet", "ICN (IBM Content Navigator)", "CE (Content Engine)", "Java 8", "Java EE", "Spring Integration", "Hibernate", "Struts", "SOAP-UI", "Maven", "Jenkins", "Sonar", "Tesseract", "CARA", "Elasticsearch", "Git", "Shell", "WebSphere"],
    companyDescription: "Swiss Life France, filiale d'un groupe d'assurance-vie suisse de référence, souhaitait renforcer sa gestion documentaire pour répondre aux exigences réglementaires et opérationnelles du marché luxembourgeois.",
    result: "La GED Luxembourg a été mise en production avec succès et utilisée activement par les équipes métiers. Optimisation des performances et ergonomie des solutions GED existantes.",
    logos: [
      { src: "/logos/logo-swisslife-4.jpg", alt: "Logo Swiss Life" }
    ]
  },
  {
    title: "Tech Lead Java",
    company: "CDG Paris – Aéroport de Roissy-Charles-de-Gaulle",
    period: "Avril 2020 – Novembre 2020 (CDI)",
    description: "Conception d'un Proof of Concept basé sur l'intelligence artificielle, capable de prédire les plans de vol en temps réel, en exploitant les données fournies par EUROCONTROL.",
    details: [
      "Nettoyage et préparation des données de vol (structuration, filtrage)",
      "Conception et développement d'une IHM intuitive pour visualiser les prévisions",
      "Intégration de RabbitMQ pour la communication interservices (messagerie asynchrone)",
      "Déploiement d'une partie des composants sur Microsoft Azure",
      "Participation aux revues de code et validation des bonnes pratiques",
      "Étude et benchmark de modèles de machine learning pour affiner la précision des prédictions"
    ],
    technologies: ["UNIX", "Windows Azure", "Java 8", "JavaFX", "Spring Boot", "RabbitMQ", "Machine Learning", "Git", "Maven", "Hibernate", "EUROCONTROL"],
    companyDescription: "Groupe ADP (Aéroports de Paris) – Gestionnaire des principaux aéroports parisiens. Le projet s'est inscrit dans une démarche d'innovation visant à moderniser les systèmes de gestion du trafic aérien.",
    result: "Mise en place d'une IHM fonctionnelle utilisée en interne. Le PoC a débouché sur une phase d'expérimentation avancée en vue d'une industrialisation.",
    logos: [
      { src: "/logos/adp.jpg", alt: "Logo ADP" }
    ]
  },
  {
    title: "Tech Lead Java",
    company: "La Poste Mobile – Suresnes",
    period: "Mars 2017 – Mars 2020 (CDI)",
    description: "Dans le cadre de l'intégration des nouveaux clients BOX, participation à un projet stratégique visant à personnaliser le CRM, faire évoluer le système d'information et garantir l'intégration dans la chaîne de facturation.",
    details: [
      "Mise à jour de l'IHM de gestion de la relation client selon les nouvelles offres",
      "Mise à jour de l'IHM de support technique",
      "Création et mise à jour de batchs liés à la facturation",
      "Ajout et adaptation de workflows dans le système de plan de relance",
      "Réalisation de refactoring du code existant pour améliorer la maintenabilité",
      "Personnalisation du CRM basé sur Exalead",
      "Paramétrage du logiciel Adobe Campaign pour la gestion des campagnes marketing",
      "Rédaction des spécifications fonctionnelles et techniques",
      "Réalisation de tests unitaires et fonctionnels, participation aux phases de recette"
    ],
    technologies: ["UNIX", "Java 1.4 et 8", "Java EE", "Spring Boot", "Hibernate", "Angular 8", "BSCS (Prologiciel)", "Adobe Campaign", "Exalead", "JAXB", "JAX-WS", "JAX-RS"],
    companyDescription: "La Poste Mobile est un opérateur télécom français, filiale du groupe La Poste, proposant des offres mobiles et Internet.",
    result: "Déploiement réussi en production de l'ensemble des évolutions. Amélioration de la réactivité des équipes support et marketing grâce aux nouveaux outils.",
    logos: [
      { src: "/logos/postemobile.jpg", alt: "Logo La Poste Mobile" }
    ]
  },
  {
    title: "Consultant Java",
    company: "METROLAB – Vélizy",
    period: "Décembre 2015 – Décembre 2016 (CDI)",
    description: "Participation à la réalisation d'un POC d'une plateforme intelligente pour la gestion du trafic métro et l'information voyageur.",
    details: [
      "Développement d'un simulateur de trafic et de son interface homme-machine (IHM)",
      "Conception et développement d'une application web mobile destinée aux voyageurs",
      "Création de Web Services pour l'interopérabilité entre modules",
      "Mise en place des tests automatisés (JUnit, Mockito) et de l'intégration continue (Maven, Sonar)",
      "Rédaction des spécifications techniques et participation aux ateliers de conception",
      "Maintenance évolutive et corrective du socle technique"
    ],
    technologies: ["UNIX", "Java 7", "Spring Boot", "Hibernate", "JUnit", "Mockito", "Servlets", "SOA", "railML", "Maven", "SonarQube", "Git"],
    companyDescription: "Metrolab est un laboratoire de recherche créé par Alstom et la RATP, dédié à l'innovation dans le transport urbain. Il vise à concevoir le métro du futur à travers le développement de prototypes combinant coordination d'infrastructures et services à destination des voyageurs.",
    result: "Passage en phase d'industrialisation à l'issue du POC.",
    logos: [
      { src: "/logos/ratp.png", alt: "Logo RATP" },
      { src: "/logos/alstom.png", alt: "Logo Alstom" }
    ]
  }
];

const Experiences = () => {
  const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    if (selectedExp?.logos) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedExp.logos.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedExp?.logos) {
      setCurrentImageIndex((prev) => 
        prev === selectedExp.logos.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section id="experiences" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-12 text-center">
        Expériences
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-cyan-500/30 transition-all"
            onClick={() => {
              setSelectedExp(exp);
              setCurrentImageIndex(0);
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <div className="text-cyan-400 font-medium mb-1">{exp.company} | {exp.period}</div>
              </div>
              {exp.logos && (
                <div className="flex gap-4">
                  {exp.logos.map((logo, logoIdx) => (
                    <div key={logoIdx} className="relative w-12 h-12">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <p className="text-gray-300">{exp.description}</p>
            <div className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors">
              Voir les détails →
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedExp}
        onClose={() => {
          setSelectedExp(null);
          setCurrentImageIndex(0);
        }}
        title={selectedExp ? `${selectedExp.title} - ${selectedExp.company}` : ""}
      >
        {selectedExp && (
          <div className="space-y-6">
            {selectedExp.logos && selectedExp.logos.length > 0 && (
              <div className="relative w-full h-64 mb-6">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedExp.logos[currentImageIndex].src}
                    alt={selectedExp.logos[currentImageIndex].alt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                {selectedExp.logos.length > 1 && (
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

            {selectedExp.companyDescription && (
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">Entreprise</h4>
                <p className="text-gray-300">{selectedExp.companyDescription}</p>
              </div>
            )}

            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">Description</h4>
              <p className="text-gray-300">{selectedExp.description}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">Missions réalisées</h4>
              <ul className="list-disc list-inside space-y-2">
                {selectedExp.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-300">{detail}</li>
                ))}
              </ul>
            </div>

            {selectedExp.result && (
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">Résultat</h4>
                <p className="text-gray-300">{selectedExp.result}</p>
              </div>
            )}

            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedExp.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Experiences; 
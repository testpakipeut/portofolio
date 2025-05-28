'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: '🛠️',
      title: 'Développement sur mesure',
      description: 'Conception et développement d\'applications web performantes, scalables et sécurisées, adaptées à vos besoins métiers.',
      technologies: ['Java', 'Node.js', 'PHP', 'JavaScript (React, Angular)'],
      features: ['APIs REST, SOAP, GraphQL', 'Architecture modulaire (MVC, microservices)']
    },
    {
      icon: '🗂️',
      title: 'Gestion Électronique de Documents (GED)',
      description: 'Mise en place ou évolution de systèmes GED pour optimiser la gestion documentaire de votre entreprise.',
      features: [
        'Expertise FileNet, ICN, Content Engine',
        'Création de plugins personnalisés',
        'Automatisation du plan de classement',
        'OCR & recherche plein texte (Tesseract, Elasticsearch)'
      ]
    },
    {
      icon: '🧠',
      title: 'Intelligence artificielle & Data',
      description: 'Exploration de cas d\'usage IA/Machine Learning pour la prédiction ou l\'analyse métier.',
      features: [
        'Nettoyage et préparation de données',
        'Déploiement de modèles de prédiction',
        'Interfaces utilisateurs pour visualisation des résultats'
      ]
    },
    {
      icon: '🌐',
      title: 'Création de sites web & CMS',
      description: 'Développement de sites vitrines modernes et efficaces pour les indépendants, associations et TPE.',
      features: [
        'Conception de sites WordPress (installation, thème, contenu, SEO)',
        'Création de sites HTML/CSS/JS sur mesure',
        'Responsive design (mobile, tablette, desktop)',
        'Intégration de formulaires de contact, modules de réservation ou de paiement',
        'Adapté aux petits budgets avec accompagnement personnalisé'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        💼 Mes Services
      </motion.h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              {service.technologies && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Technologies :</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            href="#devis"
            className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const Devis = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    pays: '',
    typeProjet: '',
    objectif: '',
    fonctionnalites: [] as string[],
    design: '',
    budget: '',
    delais: '',
    autres: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      fonctionnalites: checked
        ? [...prev.fonctionnalites, value]
        : prev.fonctionnalites.filter(f => f !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Votre demande de devis a été envoyée avec succès ! Je vous répondrai dans les plus brefs délais.', {
          duration: 5000,
          style: {
            background: '#10B981',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
        });
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          ville: '',
          pays: '',
          typeProjet: '',
          objectif: '',
          fonctionnalites: [],
          design: '',
          budget: '',
          delais: '',
          autres: ''
        });
      } else {
        toast.error(data.error || 'Une erreur est survenue. Veuillez réessayer.', {
          duration: 5000,
          style: {
            background: '#EF4444',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
        });
      }
    } catch {
      toast.error('Une erreur est survenue. Veuillez réessayer.', {
        duration: 5000,
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="devis" className="py-20 bg-gray-900 text-white">
      <Toaster position="top-center" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        🔍 Demande de devis
      </motion.h2>
      <div className="max-w-4xl mx-auto px-4">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Informations de contact */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">1. Informations de contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet / Raison sociale
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-300 mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                />
              </div>
              <div>
                <label htmlFor="ville" className="block text-sm font-medium text-gray-300 mb-2">
                  Ville / Pays
                </label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                />
              </div>
            </div>
          </div>

          {/* Type de projet */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">2. Type de projet</h3>
            <div className="space-y-4">
              <select
                name="typeProjet"
                value={formData.typeProjet}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              >
                <option value="">Sélectionnez un type de projet</option>
                <option value="site-vitrine">Création de site vitrine</option>
                <option value="application">Développement d&apos;application web ou mobile</option>
                <option value="ged">Intégration d&apos;une GED (gestion documentaire)</option>
                <option value="sur-mesure">Développement sur mesure (CRM, RH/paie, IA…)</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          {/* Objectifs du projet */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">3. Objectifs du projet</h3>
            <div>
              <textarea
                name="objectif"
                value={formData.objectif}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-none"
                placeholder="Décrivez les objectifs principaux de votre projet..."
              />
            </div>
          </div>

          {/* Fonctionnalités */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">4. Fonctionnalités souhaitées</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Formulaire de contact',
                'Authentification utilisateur',
                'Paiement en ligne',
                'Tableau de bord',
                'Blog / Actualités',
                'Gestion de contenu',
                'Génération de PDF',
                'Intégration API'
              ].map((feature) => (
                <label key={feature} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="fonctionnalites"
                    value={feature}
                    checked={formData.fonctionnalites.includes(feature)}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-cyan-500 rounded border-gray-600 bg-gray-700 focus:ring-cyan-500"
                  />
                  <span className="text-gray-300">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Design et branding */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">5. Design et branding</h3>
            <div>
              <select
                name="design"
                value={formData.design}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              >
                <option value="">Sélectionnez une option</option>
                <option value="oui">Oui, j'ai une charte graphique</option>
                <option value="non">Non, j'ai besoin d'accompagnement</option>
              </select>
            </div>
          </div>

          {/* Budget et délais */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">6. Budget et délais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Budget estimé
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                >
                  <option value="">Sélectionnez une fourchette</option>
                  <option value="<500">Moins de 500€</option>
                  <option value="500-1000">500€ - 1000€</option>
                  <option value="1000-2000">1000€ - 2000€</option>
                  <option value=">2000">Plus de 2000€</option>
                </select>
              </div>
              <div>
                <label htmlFor="delais" className="block text-sm font-medium text-gray-300 mb-2">
                  Délais souhaités
                </label>
                <select
                  id="delais"
                  name="delais"
                  value={formData.delais}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                >
                  <option value="">Sélectionnez un délai</option>
                  <option value="urgent">Urgent (moins d'un mois)</option>
                  <option value="1-2">1-2 mois</option>
                  <option value="2-3">2-3 mois</option>
                  <option value="discussion">À discuter</option>
                </select>
              </div>
            </div>
          </div>

          {/* Autres précisions */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">7. Autres précisions</h3>
            <div>
              <textarea
                name="autres"
                value={formData.autres}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-none"
                placeholder="Exemples de sites/applications que vous aimez ou toute autre précision utile..."
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande de devis'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Devis; 
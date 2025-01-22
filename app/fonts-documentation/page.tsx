"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MousePointerClickIcon,
  SquareArrowOutUpLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/ui/Modal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FontsDocumentation: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="max-w-4xl mx-auto p-6 space-y-8"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* Bouton Retour */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            aria-label="Go back to the previous page"
          >
            <SquareArrowOutUpLeft className="w-5 h-5 mr-2" />
            Back to Typography
          </button>
        </div>

        <motion.div variants={item} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Typography Guide: Modern and Popular Fonts
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Bouton pour/et modal */}
        <>
          <div className="flex justify-end  space-x-4">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600"
            >
              🇫🇷 Open to choose in French 😉
              <MousePointerClickIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            title="Catégories et Conseils Typographiques"
          >
            <div className="space-y-6 max-h-[70vh] overflow-y-auto">
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  1. Sans-serif Modernes
                </h2>
                <p className="mb-2">
                  Ces polices sans empattements sont largement utilisées pour
                  leur clarté et leur modernité :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Roboto (Google):</strong> Très utilisée dans les
                    applications Android et le Material Design. Idéale pour les
                    interfaces modernes.
                  </li>
                  <li>
                    <strong>Inter:</strong> Optimisée pour les interfaces
                    utilisateur (UI). Conçue pour une excellente lisibilité à
                    petite taille.
                  </li>
                  <li>
                    <strong>Open Sans:</strong> Utilisée dans de nombreux sites
                    web modernes. Lisibilité et polyvalence excellentes.
                  </li>
                  <li>
                    <strong>Poppins:</strong> Style géométrique moderne avec une
                    touche ludique. Adaptée pour des interfaces légères et
                    dynamiques.
                  </li>
                  <li>
                    <strong>Lato:</strong> Typo élégante et discrète, adaptée à
                    une large gamme de designs. Souvent utilisée pour les
                    applications professionnelles.
                  </li>
                  <li>
                    <strong>Helvetica Neue:</strong> Classique intemporelle avec
                    un design modernisé. Beaucoup utilisée dans les applications
                    iOS.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  2. Polices pour un Look Technique et Futuriste
                </h2>
                <p className="mb-2">
                  Ces polices sont idéales pour les projets techniques et
                  professionnels :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Source Sans 3:</strong> Première police open-source
                    d’Adobe, très professionnelle. Idéale pour les projets
                    techniques ou corporatifs.
                  </li>
                  <li>
                    <strong>Fira Sans:</strong> Conçue à l’origine pour Mozilla
                    Firefox OS. Style technique, excellent pour le
                    développement.
                  </li>
                  <li>
                    <strong>Montserrat:</strong> Moderne, avec des formes
                    arrondies et géométriques. Parfait pour un design web
                    élégant et accrocheur.
                  </li>
                  <li>
                    <strong>Manrope:</strong> Mélange de formes géométriques et
                    humanistes. Excellent pour les designs modernes et les
                    applications technologiques.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  3. Typos Monospace
                </h2>
                <p className="mb-2">
                  Les typos monospace sont idéales pour les outils de
                  développement ou les interfaces où le texte technique est
                  central.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>JetBrains Mono:</strong> Conçue pour le
                    développement, avec une lisibilité optimale. Idéale pour les
                    IDE et les interfaces techniques.
                  </li>
                  <li>
                    <strong>Fira Code:</strong> Version monospace de Fira Sans,
                    avec support des ligatures de code. Appréciée des
                    développeurs.
                  </li>
                  <li>
                    <strong>IBM Plex Mono:</strong> Esthétique technique,
                    parfaite pour les tableaux de bord ou les outils.
                  </li>
                  <li>
                    <strong>Courier New:</strong> Bien qu’un peu classique, elle
                    reste utilisée dans certaines interfaces.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  4. Polices Artistiques
                </h2>
                <p className="mb-2">
                  Pour des applications orientées design, créatives ou à fort
                  impact visuel :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Playfair Display:</strong> Avec des empattements
                    élégants, idéale pour un design sophistiqué.
                  </li>
                  <li>
                    <strong>Raleway:</strong> Police fine et élégante, souvent
                    utilisée pour les titres.
                  </li>
                  <li>
                    <strong>Circular:</strong> Moderne et géométrique, utilisée
                    par des marques comme Airbnb. _(Non gratuite, mais très
                    prisée)._
                  </li>
                  <li>
                    <strong>Proxima Nova:</strong> Polie et équilibrée, souvent
                    choisie par des startups et plateformes modernes. _(Licence
                    payante, mais populaire)._
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  5. Polices de Branding
                </h2>
                <p className="mb-2">
                  Ces polices véhiculent souvent une image forte et actuelle :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>SF Pro (Apple):</strong> Police officielle d’Apple,
                    utilisée dans iOS/macOS. Disponible uniquement pour les
                    développeurs Apple.
                  </li>
                  <li>
                    <strong>Google Sans:</strong> Police officielle de Google,
                    moderne et adaptée aux UI.
                  </li>
                  <li>
                    <strong>Noto Sans:</strong> Adaptée pour une prise en charge
                    multilingue. Particulièrement utile pour les applications
                    globales.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  6. Combinaisons de Typos Populaires
                </h2>
                <p className="mb-2">Pour créer une hiérarchie visuelle :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Roboto</strong> + <strong>Roboto Slab</strong>:
                    Combinaison minimaliste.
                  </li>
                  <li>
                    <strong>Montserrat</strong> + <strong>Open Sans</strong>:
                    Parfait pour les titres et le corps.
                  </li>
                  <li>
                    <strong>Lato</strong> + <strong>Merriweather</strong>:
                    Professionnel et équilibré.
                  </li>
                  <li>
                    <strong>Inter</strong> + <strong>Fira Code</strong>: Adapté
                    aux applications techniques.
                  </li>
                </ul>
              </section>
            </div>
          </Modal>
        </>
        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              1. Why Typography Matters
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Typography plays a crucial role in design. It impacts readability,
            user experience, and conveys the tone of your application. Choosing
            the right fonts ensures your message is both clear and aesthetically
            pleasing.
          </p>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              2. Popular Fonts for Modern Applications
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Inter:</strong> A clean and modern sans-serif font, great
              for UI design and body text.
            </li>
            <li>
              <strong>Roboto:</strong> Known for its readability, it&apos;s a
              staple in Android applications.
            </li>
            <li>
              <strong>Poppins:</strong> A geometric sans-serif font with a
              contemporary style.
            </li>
            <li>
              <strong>Playfair Display:</strong> A serif font perfect for
              elegant headlines and high-end branding.
            </li>
            <li>
              <strong>Montserrat:</strong> Versatile and stylish, ideal for both
              headings and branding.
            </li>
          </ul>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              3. Tips for Effective Typography
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              Use no more than two or three fonts to maintain consistency and
              balance.
            </li>
            <li>
              Ensure contrast between text and background for readability.
            </li>
            <li>
              Adjust line height and spacing for better text clarity, especially
              for body content.
            </li>
            <li>Pair serif fonts with sans-serif fonts for visual harmony.</li>
          </ul>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              4. Choosing Fonts for Your Project
            </h2>
          </div>
          <p>Select fonts that align with your app&apos;s tone. For example:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Professional apps:</strong> Use clean fonts like Inter or
              Roboto.
            </li>
            <li>
              <strong>Creative apps:</strong> Experiment with Playfair Display
              or Poppins.
            </li>
            <li>
              <strong>E-commerce:</strong> Choose versatile fonts like
              Montserrat for branding.
            </li>
          </ul>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              5. Optimizing Performance with Fonts
            </h2>
          </div>
          <p>
            Use tools like `next/font` for efficient font loading. Optimize by:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Loading only the necessary font weights and styles.</li>
            <li>Using subsets to reduce font file size.</li>
            <li>Testing font rendering on different devices and browsers.</li>
          </ul>
        </motion.section>

        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              6. Accessibility in Typography
            </h2>
          </div>
          <p>Always ensure your typography is accessible to all users by:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Using sufficient contrast ratios for readability.</li>
            <li>Choosing readable font sizes (16px minimum for body text).</li>
            <li>Testing fonts with screen readers to ensure compatibility.</li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default FontsDocumentation;

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CircleHelp,
  HandHelping,
  KeyRound,
  SquareArrowOutUpLeft,
  TextQuote,
  Wrench,
} from "lucide-react";
import DocumentationCard from "../../components/DocumentationCard";
import { useRouter } from "next/navigation";

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
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const AccessibilityDocumentation = () => {
  const router = useRouter();

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
            aria-label="Retour à la page précédente"
          >
            <SquareArrowOutUpLeft className="w-5 h-5 mr-2" />
            Back to Home page
          </button>
        </div>

        <motion.div className="text-center mb-12" aria-labelledby="doc-title">
          <h1
            id="doc-title"
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Documentation sur l’Accessibilité
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300"
          aria-describedby="doc-intro"
        >
          Cette page est une guide pour aider les développeurs à intégrer les
          standards d’accessibilité dans leurs composants. Un design accessible
          est essentiel pour créer des expériences utilisateur inclusives.
        </motion.p>

        <DocumentationCard
          icon={<CircleHelp className="w-6 h-6 text-blue-500" />}
          title="Pourquoi l’Accessibilité est Importante"
          description="L’accessibilité permet aux utilisateurs avec différentes capacités de naviguer, interagir et comprendre votre application. Elle est également conforme aux standards web et aux exigences légales dans de nombreuses régions."
          ariaLabel="importance-accessibilite"
          variants={item}
        />

        <DocumentationCard
          icon={<KeyRound className="w-6 h-6 text-blue-500" />}
          title="Principes Clés"
          description={
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              <li>
                Fournir des textes alternatifs significatifs pour les images et
                les médias.
              </li>
              <li>
                Assurer un contraste suffisant entre le texte et l’arrière-plan.
              </li>
              <li>
                Utiliser du HTML sémantique pour un meilleur support des
                lecteurs d’écran.
              </li>
              <li>
                Rendre tous les éléments interactifs accessibles au clavier.
              </li>
              <li>
                Implémenter correctement les rôles et attributs ARIA (Accessible
                Rich Internet Applications).
              </li>
            </ul>
          }
          ariaLabel="principes-cles"
          variants={item}
        />

        <DocumentationCard
          icon={<TextQuote className="w-6 h-6 text-blue-500" />}
          title="Répondre aux Différents Handicaps"
          description={
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Déficiences visuelles :</strong> Utilisez un contraste
                de couleur approprié et supportez les lecteurs d&apos;écran.
              </li>
              <li>
                <strong>Déficiences auditives :</strong> Fournissez des
                sous-titres ou des transcriptions pour le contenu audio.
              </li>
              <li>
                <strong>Déficiences motrices :</strong> Assurez-vous que toutes
                les actions peuvent être effectuées avec un clavier.
              </li>
              <li>
                <strong>Déficiences cognitives :</strong> Simplifiez la
                navigation et évitez les animations accablantes.
              </li>
            </ul>
          }
          ariaLabel="different-disabilities"
        />

        <DocumentationCard
          icon={<HandHelping className="w-6 h-6 text-blue-500" />}
          title="Utilisation d’ARIA pour une Accessibilité Avancée"
          description={
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Rôles ARIA :</strong> Utilisez{" "}
                <code>role=&quot;dialog&quot;</code> pour les modales et{" "}
                <code>role=&quot;navigation&quot;</code> pour les menus.
              </li>
              <li>
                <strong>Points de repère ARIA :</strong> Aidez les lecteurs
                d’écran à naviguer avec <code>role=&quot;banner&quot;</code>,{" "}
                <code>role=&quot;main&quot;</code>, et{" "}
                <code>role=&quot;contentinfo&quot;</code>.
              </li>
              <li>
                <strong>Accessibilité au clavier :</strong> Gérez l’ordre de
                focus avec <code>tabindex</code> et évitez les pièges de focus.
              </li>
            </ul>
          }
          ariaLabel="aria-roles"
        />

        <DocumentationCard
          icon={<HandHelping className="w-6 h-6 text-blue-500" />}
          title="Ressources Utiles"
          description={
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="https://www.w3.org/WAI/standards-guidelines/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  aria-label="Consulter les standards d’accessibilité du W3C"
                >
                  W3C Initiative pour l’Accessibilité Web (WAI)
                </Link>
              </li>
              <li>
                <Link
                  href="https://developer.mozilla.org/fr/docs/Web/Accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  aria-label="Lire sur l’accessibilité dans la documentation MDN"
                >
                  MDN Web Docs : Accessibilité
                </Link>
              </li>
              <li>
                <Link
                  href="https://webaim.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  aria-label="En savoir plus sur l’accessibilité chez WebAIM"
                >
                  WebAIM : Web Accessibility In Mind
                </Link>
              </li>
              <li>
                <Link
                  href="https://webaim.org/resources/contrastchecker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  aria-label="Vérifier un contraste suffisant avec des outils comme Contrast Checker"
                >
                  WebAIM : Web Accessibility Color Contrast Checker
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.a11yproject.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  aria-label="Explorer le projet A11Y pour les ressources d’accessibilité"
                >
                  Le Projet A11Y
                </Link>
              </li>
            </ul>
          }
          ariaLabel="ressources-utiles"
          variants={item}
        />

        <DocumentationCard
          icon={<Wrench className="w-6 h-6 text-blue-500" />}
          title="Outils de Test d’Accessibilité"
          description={
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  href="https://web.dev/lighthouse-accessibility/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Lighthouse
                </Link>{" "}
                – Intégré aux outils de développement Chrome, évalue le score
                d’accessibilité de votre application.
              </li>
              <li>
                <Link
                  href="https://www.deque.com/axe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Axe
                </Link>{" "}
                – Une extension de navigateur pour des tests d’accessibilité
                détaillés.
              </li>
              <li>
                <Link
                  href="https://wave.webaim.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  WAVE
                </Link>{" "}
                – Un outil d’évaluation de l’accessibilité web pour inspecter et
                corriger les problèmes.
              </li>
            </ul>
          }
          ariaLabel="outils-test-accessibilite"
          variants={item}
        />

        <motion.footer
          className="pt-6 border-t border-gray-300 dark:border-gray-700"
          aria-label="Footer"
        >
          <p className="text-gray-600 dark:text-gray-300">
            L&apos;accessibilité n&apos;est pas seulement une exigence ;
            c&apos;est une responsabilité. Commencez à intégrer ces principes
            dès aujourd&apos;hui pour créer des applications plus inclusives.
          </p>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default AccessibilityDocumentation;

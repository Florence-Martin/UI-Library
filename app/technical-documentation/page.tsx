"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Code2,
  FileCode,
  GitBranch,
  Layout,
  Palette,
  Server,
  SquareArrowOutUpLeft,
} from "lucide-react";
import DocumentationCard from "@/components/DocumentationCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };

const TechnicalDocumentation: React.FC = () => {
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
            aria-label="Go back to the previous page"
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
            Documentation technique : UI Component Library
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <DocumentationCard
          icon={<BookOpen className="w-6 h-6 text-blue-500" />}
          title="1. Vue d'ensemble"
          description={
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Cette application est une bibliothèque de composants UI
              interactive construite avec Next.js, React, et TypeScript. Elle
              présente une collection de composants réutilisables et
              personnalisables, chacun avec sa propre page de démonstration et
              de documentation.
            </p>
          }
          ariaLabel="overview"
          variants={item} // Passe l'animation à la section
        />

        <DocumentationCard
          icon={<Server className="w-6 h-6 text-blue-500" />}
          title="2. Technologies principales"
          description={
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <strong className="text-gray-800 dark:text-white">
                  Next.js 15+
                </strong>{" "}
                : Framework React avec support du routage basé sur les fichiers
                et du rendu côté serveur.
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-gray-800 dark:text-white">
                  React 19+
                </strong>{" "}
                : Bibliothèque JavaScript pour la construction d&apos;interfaces
                utilisateur.
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-gray-800 dark:text-white">
                  TypeScript
                </strong>{" "}
                : Superset typé de JavaScript pour un développement plus
                robuste.
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-gray-800 dark:text-white">
                  Tailwind CSS
                </strong>{" "}
                : Framework CSS utilitaire pour un stylage rapide et cohérent.
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-gray-800 dark:text-white">
                  Framer Motion
                </strong>{" "}
                : Bibliothèque d&apos;animation pour React.
              </li>
              <li className="flex items-start gap-2">
                <strong className="text-gray-800 dark:text-white">
                  next/font
                </strong>{" "}
                : Solution de chargement et d&apos;optimisation des polices
                intégrée à Next.js.
              </li>
            </ul>
          }
          ariaLabel="technologies"
          variants={item} // Passe l'animation à la section
        />

        <DocumentationCard
          icon={<FileCode className="w-6 h-6 text-blue-500" />}
          title="3. Structure du projet"
          description={
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
              {`
            /
            ├── app/
            │   └── catalog/
            │       ├── page.tsx
            │       └── [component]/
            │           └── page.tsx
            |       └── alert/
            |           └── page.tsx
            |       └── animated-hero/
            |           └── page.tsx
            |       └── ...
            │   └── accessibility-documentation/
            |           └── page.tsx
            │   └── fonts-documentation/
            |           └── page.tsx
            │   └── technical-documentation/
            |           └── page.tsx
            │   ├── global.css
            │   ├── layout.tsx
            │   ├── page.tsx
            ├── components/
            │   ├── ui/
            │   │   ├── Button.tsx
            │   │   ├── Navbar.tsx
            │   │   ├── Footer.tsx
            │   │   └── ...
            │   ├── SearchBar.tsx
            │   ├── ComponentCard.tsx
            │   └── CodeBlock.tsx
            ├── hooks/
            │   └── useClickOutside.ts
            │   └── useEscapeKey.ts
            ├── lib/
            │   └── components.ts
            │   └── utils.ts
            └── public/
                └── ...`}
            </pre>
          }
          ariaLabel="project-structure"
          variants={item} // Passe l'animation à la section
        />

        <DocumentationCard
          icon={<Layout className="w-6 h-6 text-blue-500" />}
          title="4. Architecture de l'application"
          description={
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  4.1 Routage
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  L&apos;application utilise le système de routage basé sur les
                  fichiers de Next.js App Router :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      /app/page.tsx
                    </code>{" "}
                    : Page d&apos;accueil
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      /app/catalog/page.tsx
                    </code>{" "}
                    : Page du catalogue des composants
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      /app/catalog/[component]/page.tsx
                    </code>{" "}
                    : Pages dynamiques pour chaque composant
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  4.2 Composants principaux
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      layout.tsx
                    </code>{" "}
                    : Layout principal de l&apos;application, incluant le{" "}
                    <code>ThemeProvider</code>, <code>Navbar</code>, et{" "}
                    <code>Footer</code>.
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      Navbar.tsx
                    </code>{" "}
                    : Barre de navigation responsive avec menu mobile.
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      Button.tsx
                    </code>{" "}
                    : Composant de bouton réutilisable avec différentes
                    variantes.
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      SearchBar.tsx
                    </code>{" "}
                    : Barre de recherche pour filtrer les composants dans le
                    catalogue.
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      ComponentCard.tsx
                    </code>{" "}
                    : Carte affichant les informations de base d&apos;un
                    composant dans le catalogue.
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      CodeBlock.tsx
                    </code>{" "}
                    : Composant pour afficher du code avec coloration
                    syntaxique.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  4.3 Gestion de l&apos;état
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Utilisation des hooks React (
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    useState
                  </code>
                  ,{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    useEffect
                  </code>
                  ) pour la gestion de l&apos;état local des composants. Pas de
                  gestion d&apos;état globale complexe nécessaire pour cette
                  application.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  4.4 Hooks personnalisés
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Cette application utilise des hooks personnalisés pour
                  encapsuler des comportements réutilisables et améliorer la
                  modularité. Voici deux exemples :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <strong className="text-gray-800 dark:text-white">
                      useClickOutside
                    </strong>{" "}
                    : Permet de détecter les clics en dehors d&apos;un élément
                    et de déclencher une action, comme fermer une modale ou un
                    menu.
                  </li>
                  <li>
                    <strong className="text-gray-800 dark:text-white">
                      useEscapeKey
                    </strong>{" "}
                    : Capture la touche <em>Escape</em> pour exécuter une
                    logique spécifique, comme la fermeture d&apos;un composant
                    interactif.
                  </li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                  Ces hooks sont documentés et organisés dans le dossier{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    hooks/
                  </code>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  4.5 Stylisation
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    Utilisation intensive de Tailwind CSS pour le stylage.
                  </li>
                  <li>
                    Utilisation de{" "}
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      class-variance-authority
                    </code>{" "}
                    pour créer des variantes de composants (ex:{" "}
                    <code>Button</code>).
                  </li>
                  <li>
                    Support du mode sombre avec{" "}
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      next-themes
                    </code>
                    .
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  4.6 Gestion des classes CSS avec clsx
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  L&apos;application utilise <strong>clsx</strong> pour composer
                  les classes CSS de manière lisible et conditionnelle. Cela
                  facilite la gestion des classes dynamiques et améliore la
                  lisibilité du code.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Concatenation de plusieurs classes CSS.</li>
                  <li>
                    Application conditionnelle de classes selon des états (ex:{" "}
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      isOpen
                    </code>
                    ).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  4.7 Animations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Utilisation de Framer Motion pour les animations de composants
                  et les transitions de page.
                </p>
              </div>
            </div>
          }
          ariaLabel="application-architecture"
          variants={item} // Passe l'animation à la section
        />

        <DocumentationCard
          icon={<Code2 className="w-6 h-6 text-blue-500" />}
          title="5. Fonctionnalités clés"
          description={
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  5.1 Catalogue de composants
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    Liste des composants disponibles avec filtrage par
                    recherche.
                  </li>
                  <li>
                    Chaque composant a sa propre page de démonstration avec
                    preview, code d&apos;utilisation, et documentation.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  5.2 Composants interactifs
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Composants comme{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Typography
                  </code>{" "}
                  permettent une interaction en temps réel pour visualiser les
                  changements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  5.3 Thème dynamique
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Support du mode clair/sombre avec basculement dynamique.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  5.4 Optimisation des performances
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    Utilisation de composants côté serveur quand possible.
                  </li>
                  <li>
                    Chargement optimisé des polices avec{" "}
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      next/font
                    </code>
                    .
                  </li>
                </ul>
              </div>
            </div>
          }
          ariaLabel="key-features"
          variants={item} // Passe l'animation à la section
        />

        <DocumentationCard
          icon={<Palette className="w-6 h-6 text-blue-500" />}
          title="6. ColorPaletteGenerator"
          description={
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Le <strong>ColorPaletteGenerator</strong> est un nouveau
                composant interactif permettant de générer et d&apos;explorer
                des palettes de couleurs adaptées aux interfaces modernes.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  Génération de palettes basées sur des harmonies (analogues,
                  complémentaires, etc.).
                </li>
                <li>
                  Sélection interactive de la couleur de base et ajustement des
                  nuances.
                </li>
                <li>
                  Calcul des ratios de contraste pour garantir
                  l&apos;accessibilité.
                </li>
                <li>
                  Utilisation de dépendances modernes comme{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    chroma-js
                  </code>{" "}
                  et{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    @radix-ui/react-slider
                  </code>
                  .
                </li>
                <li>
                  Intégration de composants existants :{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Button
                  </code>
                  ,{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Input
                  </code>
                  , et{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Slider
                  </code>
                  .
                </li>
                <li>
                  Génération optimisée de la palette avec{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    useEffect
                  </code>{" "}
                  pour des performances améliorées.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                Intégration dans le catalogue
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Une nouvelle page a été ajoutée au catalogue :{" "}
                <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                  app/catalog/color-palette-generator/page.tsx
                </code>
                , permettant de prévisualiser le composant, d&apos;accéder au
                code source et à sa documentation.
              </p>
            </div>
          }
          ariaLabel="color-palette-generator"
          variants={item} // Passe l'animation à la section
        />

        <DocumentationCard
          icon={<GitBranch className="w-6 h-6 text-blue-500" />}
          title="7. Bonnes pratiques"
          description={
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Utilisation de TypeScript pour le typage statique.</li>
              <li>Composants modulaires et réutilisables.</li>
              <li>
                Accessibilité prise en compte dans la conception des composants.
              </li>
              <li>Code formaté et lint avec des règles cohérentes.</li>
            </ul>
          }
          ariaLabel="best-practices"
          variants={item} // Passe l'animation à la section
        />

        <DocumentationCard
          icon={<Server className="w-6 h-6 text-blue-500" />}
          title="8. Déploiement"
          description={
            <p className="text-gray-600 dark:text-gray-300">
              L&apos;application est conçue pour être facilement déployée sur
              Vercel ou d&apos;autres plateformes supportant Next.js.
            </p>
          }
          ariaLabel="deployment"
          variants={item} // Passe l'animation à la section
        />

        <DocumentationCard
          icon={<GitBranch className="w-6 h-6 text-blue-500" />}
          title="9. Contribution"
          description={
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pour ajouter un nouveau composant :
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  Créer le composant dans{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    /components/ui/
                  </code>
                  .
                </li>
                <li>
                  Ajouter une entrée dans{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    /lib/components.ts
                  </code>
                  .
                </li>
                <li>
                  Créer une page de démonstration dans{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    /app/catalog/[nom-du-composant]/page.tsx
                  </code>
                  .
                </li>
                <li>Mettre à jour la documentation si nécessaire.</li>
              </ol>
            </div>
          }
          ariaLabel="contribution"
          variants={item} // Passe l'animation à la section
        />
        <DocumentationCard
          icon={<BookOpen className="w-6 h-6 text-blue-500" />}
          title="10. Conclusion"
          description={
            <p className="text-gray-600 dark:text-gray-300">
              En exploitant des hooks personnalisés et la bibliothèque clsx,
              cette application atteint un niveau plus élevé de modularité et de
              maintenabilité. Ces outils permettent de simplifier la gestion des
              états et des classes CSS tout en favorisant une structure de code
              cohérente.
            </p>
          }
          ariaLabel="conclusion"
          variants={item} // Passe l'animation à la section
        />
      </motion.div>
    </div>
  );
};

export default TechnicalDocumentation;

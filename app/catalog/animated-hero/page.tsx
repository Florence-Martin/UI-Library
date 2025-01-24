"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import AnimatedHero from "@/components/ui/AnimatedHero";
import BackToCatalog from "@/components/BackToCatalog";

/**
 * Page AnimatedHeroPage
 * Cette page illustre l'utilisation du composant AnimatedHero avec un aperçu,
 * des instructions d'utilisation, du code source, et des conseils de personnalisation.
 */
export default function AnimatedHeroPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  // Exemple de code source du composant AnimatedHero
  const animatedHeroComponentCode = `
"use client";

import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import clsx from "clsx";

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

/**
 * AnimatedHero
 * Composant affichant une section Hero avec des animations, un titre, une description et un bouton.
 */
const AnimatedHero: FC<AnimatedHeroProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  // Détecte si le composant est monté pour gérer des animations spécifiques
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); // Nettoyage à la destruction du composant
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
      {/* Formes animées en arrière-plan */}
      <motion.div
        className={clsx(
          "absolute inset-0 z-0",
          isMounted ? "opacity-100" : "opacity-0"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Cercle 1 */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-indigo-300/70"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ left: "10%", top: "20%" }}
        />
        {/* Cercle 2 */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-300/70"
          animate={{ x: [0, -70, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ right: "15%", top: "10%" }}
        />
        {/* Carré rotatif */}
        <motion.div
          className="absolute w-72 h-72 bg-blue-300/70"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ left: "50%", bottom: "15%", transform: "translateX(-50%)" }}
        />
      </motion.div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          {/* Sous-titre */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <span
              className={clsx(
                "inline-flex items-center px-6 py-2 rounded-full text-sm font-medium",
                "bg-white/90 text-indigo-700 ring-1 ring-inset ring-indigo-700/10 backdrop-blur-sm"
              )}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {subtitle}
            </span>
          </motion.div>
          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={clsx(
              "text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl"
            )}
          >
            {title}
          </motion.h1>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={clsx(
              "mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
            )}
          >
            {description}
          </motion.p>
          {/* Bouton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onButtonClick}
              className={clsx(
                "rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm",
                "hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                "flex items-center backdrop-blur-sm"
              )}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedHero;
`;

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <BackToCatalog />

      <h1 className="text-3xl font-bold">Composant Animated Hero</h1>

      {/* Aperçu */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg overflow-hidden max-h-[400px] overflow-y-auto">
          <AnimatedHero
            title="Create Unique Experiences"
            subtitle="Discover Our New Features"
            description="Transform your ideas into reality with our innovative platform. Create, innovate, and push the boundaries of your imagination."
            buttonText="Get Started"
            onButtonClick={() => alert("Button clicked!")}
          />
        </div>
      </section>

      {/* Usage */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { AnimatedHero } from '@/components/ui/AnimatedHero';

export default function MonComposant() {
  return (
    <AnimatedHero
      title="Titre incroyable"
      subtitle="Un sous-titre captivant"
      description="Une description détaillée ici."
      buttonText="Commencer"
      onButtonClick={() => alert('Bouton cliqué !')}
    />
  );
}`}
          language="tsx"
        />
      </section>

      {/* Code du composant */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Component code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode ? "Hide Component Code" : "Show Component Code"}
        </Button>
        {showComponentCode && (
          <CodeBlock code={animatedHeroComponentCode} language="tsx" />
        )}
      </section>

      {/* Props du composant */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>title</code>: The main heading of the hero section.
          </li>
          <li>
            <code>subtitle</code>: The subheading or description text.
          </li>
          <li>
            <code>description</code>: Additional descriptive text.
          </li>
          <li>
            <code>buttonText</code>: Text displayed on the button.
          </li>
          <li>
            <code>onButtonClick</code>: Callback function for button click.
          </li>
        </ul>
      </section>

      {/* Fonctionnalités du composant */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Showcase of various animation techniques using Framer Motion.</li>
          <li>
            Includes fade-in, scale, rotate, hover effects, and keyframe
            animations.
          </li>
          <li>Easy to copy and adapt for use in other components.</li>
          <li>Customizable styling using Tailwind CSS.</li>
        </ul>
      </section>

      {/* Conseils de personnalisation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p>
          To use these animations in your own components, you can copy the
          relevant <code>motion.div</code> elements and their properties. Adjust
          the <code>className</code> and animation properties as needed to fit
          your specific use case.
        </p>
      </section>

      {/* Meilleures pratiques */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            {/* Évitez une surcharge d'animations pour conserver une expérience utilisateur optimale. */}
            Ensure animations are not overused to maintain good user experience.
          </li>
          <li>
            {/* Associez les animations à des interactions significatives pour renforcer leur impact. */}
            Combine animations with meaningful user interactions.
          </li>
          <li>
            {/* Optimisez les performances en limitant la complexité des transitions d'animation. */}
            Optimize performance by limiting the complexity of animation
            transitions.
          </li>
          <li>
            {/* Utilisez Tailwind CSS pour garantir un design réactif et cohérent. */}
            Use Tailwind utilities to manage consistent spacing and responsive
            design.
          </li>
        </ul>
      </section>

      {/* Future améliorations */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Future Enhancements</h2>
        <p>
          {/* Des mises à jour futures pourraient inclure des effets avancés comme le parallaxe, des transformations 3D et des contrôles interactifs. */}
          Future updates could include more advanced animations such as parallax
          effects, 3D transformations, and interactive controls.
        </p>
      </section>
    </div>
  );
}

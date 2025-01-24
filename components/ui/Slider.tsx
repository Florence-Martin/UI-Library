"use client";

import React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

import clsx from "clsx";

// Définition d'un objet contenant les styles CSS.
// Cela facilite la gestion des classes et rend le code plus lisible.
const styles = {
  root: "relative flex w-full touch-none select-none items-center",
  // Style pour le conteneur racine du slider.

  track:
    "relative h-2 w-full grow overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
  // Style pour la piste du slider, qui représente la ligne de progression.

  range: "absolute h-full bg-slate-900 dark:bg-slate-400",
  // Style pour la plage de progression active du slider (la partie "remplie").

  thumb:
    "block h-5 w-5 rounded-full border-2 border-slate-900 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-100 dark:bg-slate-400 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
  // Style pour le "thumb" (bouton glissable) du slider, avec des styles pour les états focus et désactivé.
};

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;
// Définition du type des propriétés du composant Slider, basé sur celles du composant Radix `SliderPrimitive.Root`.

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>, // Type pour la référence vers l'élément racine.
  SliderProps
>(({ className, ...props }, ref) => (
  // Composant fonctionnel qui accepte des propriétés personnalisées et une référence vers l'élément racine.
  <SliderPrimitive.Root
    ref={ref}
    className={clsx(styles.root, className)}
    {...props}
  >
    <SliderPrimitive.Track className={styles.track}>
      <SliderPrimitive.Range className={styles.range} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={styles.thumb}
      // Fournit une étiquette pour les lecteurs d'écran, améliorant l'accessibilité.
      aria-label="Slider Thumb"
    />
    {/* Définit le "thumb", le bouton que l'utilisateur peut glisser. */}
  </SliderPrimitive.Root>
));
// Définit un nom d'affichage pour le composant afin de faciliter le débogage.
Slider.displayName = "Slider";

export { Slider };
// Exporte le composant pour qu'il puisse être utilisé dans d'autres parties de l'application.

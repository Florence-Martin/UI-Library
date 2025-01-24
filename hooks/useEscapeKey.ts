import { useEffect } from "react";

// Ce hook personnalisé permet d'exécuter une fonction spécifique lorsque la touche "Échap" est pressée.
export function useEscapeKey(onEscape: () => void) {
  useEffect(() => {
    // Définition de la fonction qui sera appelée lors de l'événement "keydown".
    const handleEscape = (event: KeyboardEvent) => {
      // Vérifie si la touche pressée est "Échap".
      if (event.key === "Escape") {
        // Appelle la fonction passée en paramètre.
        onEscape();
      }
    };

    // Ajoute un écouteur d'événements pour la touche "keydown" sur l'objet window.
    window.addEventListener("keydown", handleEscape);

    // Nettoie l'écouteur d'événements lorsque le composant est démonté ou lorsque onEscape change.
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onEscape]); // Le tableau de dépendances contient onEscape pour s'assurer que l'effet est réexécuté si onEscape change.
}

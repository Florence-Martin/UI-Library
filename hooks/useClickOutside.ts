import { useEffect } from "react";

/**
 * Un hook personnalisé qui exécute une fonction de rappel lorsque l'utilisateur clique en dehors de l'élément référencé.
 *
 * @param ref - Une référence à un élément HTML.
 * @param callback - La fonction à exécuter lorsque l'utilisateur clique en dehors de l'élément référencé.
 */
export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

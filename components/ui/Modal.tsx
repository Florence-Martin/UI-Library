"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useClickOutside } from "../../hooks/useClickOutside";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

/**
 * Composant Modal qui affiche une fenêtre modale avec des animations.
 *
 * @param {boolean} isOpen - Indique si la modale est ouverte ou fermée.
 * @param {() => void} onClose - Fonction appelée pour fermer la modale.
 * @param {string} title - Titre de la modale.
 * @param {React.ReactNode} children - Contenu à afficher dans la modale.
 *
 * @returns {JSX.Element} La fenêtre modale avec animations.
 *
 * @example
 * ```tsx
 * <Modal isOpen={isModalOpen} onClose={handleClose} title="Titre de la modale">
 *   <p>Contenu de la modale</p>
 * </Modal>
 * ```
 */
export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Hook pour fermer la modale lorsque la touche Échap est pressée.
  useEscapeKey(onClose);
  // Hook pour fermer la modale en cliquant à l'extérieur.
  useClickOutside(modalRef, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-pointer"
            onClick={onClose}
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-background rounded-lg shadow-xl max-w-md w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="flex justify-between items-center border-b p-4">
                <h2 id="modal-title" className="text-xl font-semibold">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-4">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

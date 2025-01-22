"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onValidationError?: (isValid: boolean) => void; // Callback pour signaler une erreur de validation
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onValidationError, ...props }, ref) => {
    const [value, setValue] = React.useState(props.value || "");

    // Fonction pour valider les couleurs hexadécimales
    const validateHexColor = (color: string) => {
      const hexRegex = /^#[0-9A-Fa-f]{6}$/;
      return hexRegex.test(color);
    };

    // Gestion du changement de l'input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setValue(inputValue);

      // Validation si la saisie correspond au format hexadécimal complet
      if (inputValue.startsWith("#") && inputValue.length <= 7) {
        if (onValidationError) {
          onValidationError(validateHexColor(inputValue));
        }
      }
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",
          className
        )}
        ref={ref}
        value={value}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };

// Interface représentant un contenu supplémentaire.
export interface ExtraContent {
  why?: {
    heading: string;
    content: string;
  };
  how?: {
    heading: string;
    content: string;
    steps?: (string | { step: string; substeps: string[] })[];
  };
}

// Interface représentant un composant d'interface utilisateur.
export interface UIComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  path?: string; // Optionnel, pour spécifier un chemin si nécessaire
}

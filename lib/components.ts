export interface UIComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  path?: string; // Optionnel, pour spécifier un chemin si nécessaire
}

export const components: UIComponent[] = [
  {
    id: "navbar",
    name: "Navbar",
    description: "A responsive navigation bar component",
    category: "Navigation",
    path: "/catalog/navbar",
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "A tabbed interface component",
    category: "Navigation",
    path: "/catalog/tabs",
  },
  {
    id: "button",
    name: "Button",
    description:
      "A customizable and accessible button component with different variants",
    category: "Form",
    path: "/catalog/button",
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "A tooltip component for displaying additional information",
    category: "Overlay",
    path: "/catalog/tooltip",
  },
  {
    id: "menu",
    name: "Menu",
    description: "A dropdown menu component",
    category: "Navigation",
    path: "/catalog/menu",
  },
  {
    id: "footer",
    name: "Footer",
    description: "A customizable footer component",
    category: "Layout",
    path: "/catalog/footer",
  },
  {
    id: "modal",
    name: "Modal",
    description: "A modal dialog component",
    category: "Overlay",
    path: "/catalog/modal",
  },
  {
    id: "animations",
    name: "Animations",
    description: "Various animation components and examples",
    category: "Animation",
    path: "/catalog/animations",
  },
  {
    id: "animated-hero",
    name: "Animated Hero",
    description: "An animated hero section component",
    category: "Hero",
    path: "/catalog/animated-hero",
  },
  {
    id: "toast",
    name: "Toast",
    description: "A toast notification component for displaying brief messages",
    category: "Feedback",
    path: "/catalog/toast",
  },
  {
    id: "alert",
    name: "Alert",
    description: "An alert component for displaying important messages",
    category: "Feedback",
    path: "/catalog/alert",
  },
];

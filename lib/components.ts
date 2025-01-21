export interface UIComponent {
  id: string;
  name: string;
  description: string;
  category: string;
}

export const components: UIComponent[] = [
  {
    id: "navbar",
    name: "Navbar",
    description: "A responsive navigation bar component",
    category: "Navigation",
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "A tabbed interface component",
    category: "Navigation",
  },
  {
    id: "button",
    name: "Button",
    description:
      "A customizable and accessible button component with different variants",
    category: "Form",
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "A tooltip component for displaying additional information",
    category: "Overlay",
  },
  {
    id: "menu",
    name: "Menu",
    description: "A dropdown menu component",
    category: "Navigation",
  },
  {
    id: "footer",
    name: "Footer",
    description: "A customizable footer component",
    category: "Layout",
  },
  {
    id: "modal",
    name: "Modal",
    description: "A modal dialog component",
    category: "Overlay",
  },
  {
    id: "animations",
    name: "Animations",
    description: "Various animation components and examples",
    category: "Animation",
  },
  {
    id: "toast",
    name: "Toast",
    description: "A toast notification component for displaying brief messages",
    category: "Feedback",
  },
  {
    id: "alert",
    name: "Alert",
    description: "An alert component for displaying important messages",
    category: "Feedback",
  },
];

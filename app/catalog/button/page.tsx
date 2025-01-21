// "use client";

// import React from "react";
// import { Button } from "@/components/ui/Button";
// import CodeBlock from "@/components/CodeBlock";

// export default function ButtonPage() {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold">Button Component</h1>

//       {/* Aperçu des boutons */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Preview</h2>
//         <div className="flex flex-wrap gap-4">
//           <Button>Default Button</Button>
//           <Button variant="destructive">Destructive</Button>
//           <Button variant="outline">Outline</Button>
//           <Button variant="subtle">Subtle</Button>
//           <Button variant="ghost">Ghost</Button>
//           <Button variant="link">Link</Button>
//           <Button isLoading>Loading Button</Button>
//         </div>
//       </section>

//       {/* Exemple d'utilisation */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Usage</h2>
//         <CodeBlock
//           code={`import { Button } from '@/components/ui/Button'

// export default function MyComponent() {
//   return (
//     <Button variant="default" size="default">
//       Click me
//     </Button>
//   )
// }`}
//           language="tsx"
//         />
//       </section>

//       {/* Props documentées */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Props</h2>
//         <ul className="list-disc pl-6 space-y-2">
//           <li>
//             <code>variant</code>: &apos;default&apos; | &apos;destructive&apos;
//             | &apos;outline&apos; | &apos;subtle&apos; | &apos;ghost&apos; |
//             &apos;link&apos;
//           </li>
//           <li>
//             <code>size</code>: &apos;default&apos; | &apos;sm&apos; |
//             &apos;lg&apos;
//           </li>
//           <li>
//             <code>isLoading</code>: boolean
//           </li>
//           <li>All standard button props are also supported</li>
//         </ul>
//       </section>

//       {/* Accessibilité */}
//       <section>
//         <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
//         <p>
//           This button component is built with accessibility in mind. It supports
//           keyboard navigation, includes appropriate ARIA attributes, and
//           provides visual feedback for different states.
//         </p>
//       </section>
//     </div>
//   );
// }

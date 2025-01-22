"use client";

import React, { useState } from "react";
import {
  Inter,
  Roboto,
  Poppins,
  Playfair_Display,
  Montserrat,
  Open_Sans,
  Lato,
  Fira_Sans,
  Manrope,
  JetBrains_Mono,
  Fira_Code,
  IBM_Plex_Mono,
  Source_Sans_3,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });
const firaSans = Fira_Sans({ weight: ["400", "700"], subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const SourceSans3 = Source_Sans_3({ subsets: ["latin"] });

const fonts = [
  // Modern Sans-serif Fonts
  { name: "Inter", font: inter },
  { name: "Roboto", font: roboto },
  { name: "Open Sans", font: openSans },
  { name: "Lato", font: lato },

  // Geometric and Futuristic Fonts
  { name: "Montserrat", font: montserrat },
  { name: "Poppins", font: poppins },
  { name: "Fira Sans", font: firaSans },
  { name: "Manrope", font: manrope },

  // Monospace Fonts
  { name: "JetBrains Mono", font: jetBrainsMono },
  { name: "Fira Code", font: firaCode },
  { name: "IBM Plex Mono", font: ibmPlexMono },
  { name: "Source Sans Pro", font: SourceSans3 },

  // Serif and Artistic Fonts
  { name: "Playfair Display", font: playfair },
];

export function Typography() {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [sampleText, setSampleText] = useState(
    "Polar bears are on the brink of extinction"
  );

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="font-select"
          className="block text-sm font-medium text-gray-400 mb-2"
        >
          Select a font:
        </label>
        <select
          id="font-select"
          className="mt-1 block w-full pl-3 dark:bg-gray-800 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedFont.name}
          onChange={(e) =>
            setSelectedFont(
              fonts.find((f) => f.name === e.target.value) || fonts[0]
            )
          }
        >
          {fonts.map((font) => (
            <option key={font.name} value={font.name}>
              {font.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="sample-text"
          className="block text-sm font-medium text-gray-400 mb-2"
        >
          Sample text:
        </label>
        <input
          type="text"
          id="sample-text"
          className="mt-1 block w-full border dark:bg-gray-800 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
        />
      </div>
      <div className="p-4 border border-gray-300 dark:bg-gray-800 rounded-md">
        <p className={`text-3xl ${selectedFont.font.className}`}>
          {sampleText}
        </p>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { ColorPaletteGenerator } from "@/components/ui/ColorPaletteGenerator";
import { Button } from "@/components/ui/Button";
import CodeBlock from "@/components/CodeBlock";
import BackToCatalog from "@/components/BackToCatalog";

const colorPaletteGeneratorCode = `
"use client";

import React, { useState, useEffect, useCallback } from "react";
import chroma from "chroma-js";
import { Slider } from "./Slider";
import { Input } from "./Input";

interface ColorSwatch {
  color: string;
  contrastWithWhite: number;
  contrastWithBlack: number;
}

export function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState("#3b82f6");
  const [palette, setPalette] = useState<ColorSwatch[]>([]);
  const [harmonyType, setHarmonyType] = useState<
    "analogous" | "triadic" | "tetradic" | "split-complementary"
  >("analogous");
  const [shades, setShades] = useState(5);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const validateHexColor = (color: string): boolean => {
    const hexRegexFull = /^#[0-9A-Fa-f]{6}$/;
    const hexRegexShort = /^#[0-9A-Fa-f]{3}$/;
    return hexRegexFull.test(color) || hexRegexShort.test(color);
  };

  const normalizeHexColor = (color: string): string => {
    if (color.length === 4) {
      return \`#\${color[1]}\${color[1]}\${color[2]}\${color[2]}\${color[3]}\${color[3]}\`;
    }
    return color;
  };

  useEffect(() => {
    if (!validateHexColor(baseColor)) {
      setError(
        baseColor.length < 7
          ? "Incomplete hex code. Please complete the color code."
          : "Invalid hexadecimal color format. Please use #RRGGBB or #RGB."
      );
      setPalette([]);
      return;
    }

    setError(null);
    generatePalette();
  }, [baseColor, harmonyType, shades]);

  const generatePalette = useCallback(() => {
    try {
      const base = chroma(normalizeHexColor(baseColor));
      let colors: chroma.Color[];

      switch (harmonyType) {
        case "analogous":
          colors = [
            base.set("hsl.h", (base.get("hsl.h") - 30 + 360) % 360),
            base,
            base.set("hsl.h", (base.get("hsl.h") + 30) % 360),
          ];
          break;

        case "triadic":
          colors = [
            base,
            base.set("hsl.h", (base.get("hsl.h") + 120) % 360),
            base.set("hsl.h", (base.get("hsl.h") + 240) % 360),
          ];
          break;

        case "tetradic":
          colors = [
            base,
            base.set("hsl.h", (base.get("hsl.h") + 90) % 360),
            base.set("hsl.h", (base.get("hsl.h") + 180) % 360),
            base.set("hsl.h", (base.get("hsl.h") + 270) % 360),
          ];
          break;

        case "split-complementary":
          colors = [
            base,
            base.set("hsl.h", (base.get("hsl.h") + 150) % 360),
            base.set("hsl.h", (base.get("hsl.h") + 210) % 360),
          ];
          break;

        default:
          colors = [base];
      }

      const newPalette = colors.flatMap((color) =>
        chroma
          .scale([color.darken(2), color, color.brighten(2)])
          .mode("lch")
          .colors(shades)
          .map((c) => ({
            color: c,
            contrastWithWhite: parseFloat(
              chroma.contrast(c, "white").toFixed(2)
            ),
            contrastWithBlack: parseFloat(
              chroma.contrast(c, "black").toFixed(2)
            ),
          }))
      );

      setPalette(newPalette);
    } catch (err) {
      setError("Failed to generate palette. Please check the base color.");
    }
  }, [baseColor, harmonyType, shades]);

  if (!isClient) return null;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="baseColor"
          className="block text-sm font-medium text-gray-400"
        >
          Base Color
        </label>
        <div className="flex items-center space-x-2">
          <Input
            type="color"
            id="baseColor"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="w-12 h-12 p-0 border-0"
          />
          <Input
            type="text"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="w-28"
          />
        </div>
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="harmonyType"
          className="block text-sm font-medium text-gray-400"
        >
          Harmony Type
        </label>
        <select
          id="harmonyType"
          value={harmonyType}
          onChange={(e) => setHarmonyType(e.target.value as any)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base dark:bg-gray-800 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="analogous">Analogous</option>
          <option value="triadic">Triadic</option>
          <option value="tetradic">Tetradic</option>
          <option value="split-complementary">Split-Complementary</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="shades"
          className="block text-sm font-medium text-gray-400"
        >
          Number of shades: {shades}
        </label>
        <Slider
          id="shades"
          min={3}
          max={9}
          value={[shades]}
          onValueChange={(value) => setShades(value[0])}
          className="w-[60%]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {palette.map((swatch, index) => (
          <div key={index} className="space-y-2">
            <div
              className="w-full h-24 rounded"
              style={{ backgroundColor: swatch.color }}
            ></div>
            <div className="text-sm">
              <p>Hex : {swatch.color}</p>
              <p>Contrast with white: {swatch.contrastWithWhite}</p>
              <p>Contrast with black: {swatch.contrastWithBlack}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`;

export default function ColorPaletteGeneratorPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <BackToCatalog />

      <h1 className="text-3xl font-bold">Color Palette Generator</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <ColorPaletteGenerator />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import { ColorPaletteGenerator } from '@/components/ui/ColorPaletteGenerator'

export default function MyComponent() {
  return <ColorPaletteGenerator />
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Component code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode
            ? "Masquer le code du composant"
            : "Afficher le code du composant"}
        </Button>
        {showComponentCode && (
          <div className="mt-4">
            <CodeBlock code={colorPaletteGeneratorCode} language="tsx" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Generation of color palettes based on color harmony principles
          </li>
          <li>
            Choice between different harmony types: analogous, triadic,
            tetradic, and split-complementary
          </li>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Analogous:</strong> Colors that are next to each other on
              the color wheel.
            </li>
            <li>
              <strong>Triadic:</strong> Three colors that are evenly spaced
              around the color wheel.
            </li>
            <li>
              <strong>Tetradic:</strong> Four colors that form a rectangle on
              the color wheel, consisting of two complementary color pairs.
            </li>
            <li>
              <strong>Split-complementary:</strong> A base color and the two
              colors adjacent to its complementary color.
            </li>
          </ul>
          <li>Adjustment of the number of shades for each color</li>
          <li>
            Display of contrast ratios with white and black for accessibility
          </li>
          <li>Interactive color picker to choose the base color</li>
          <li>Real-time updates of the palette when adjusting parameters</li>
        </ul>
      </section>
    </div>
  );
}

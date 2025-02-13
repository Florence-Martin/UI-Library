"use client";

import React, { useState } from "react";
import WaveWaterComponent from "../../../components/ui/WaveWater";
import CodeBlock from "../../../components/CodeBlock";
import BackToCatalog from "../../../components/BackToCatalog";
import { Button } from "../../../components/ui/Button";
import { Slider } from "../../../components/ui/Slider";

const waveComponentCode = `
'use client';

import { useEffect, useState } from "react";

interface WaveWaterProps {
  percent: number;
}

const WaveWater: React.FC<WaveWaterProps> = ({ percent }) => {
  return (
    <div className="box">
      <div className="percent">
        <div className="percentNum">{percent}</div>
        <div className="percentB">%</div>
      </div>
      <div
        id="water"
        className="water"
        style={{ transform: "translate(0, " + (100 - percent) + "%)", transition: "transform 0.3s ease-in-out" }}
      >
        <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
          <use xlinkHref="#wave"></use>
        </svg>
        <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
          <use xlinkHref="#wave"></use>
        </svg>
      </div>

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        style={{ display: "none" }}
      >
        <symbol id="wave">
          <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
          <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
          <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
          <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
        </symbol>
      </svg>
    </div>
  );
};

export default WaveWater;
`;

export default function WaveWaterPage() {
  const [showComponentCode, setShowComponentCode] = useState(false);
  const [percent, setPercent] = useState(50);

  return (
    <div className="container mx-auto mb-20 sm:mb-3 px-4 py-8 space-y-6">
      <BackToCatalog />
      <h1 className="text-3xl font-bold">Wave Water Component</h1>

      <p className="text-lg text-gray-700">
        A wave water component with animated waves that dynamically visualizes
        progress in percentage.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Preview</h2>
        <WaveWaterComponent percent={percent} />
        <div className="mt-4">
          <label
            htmlFor="percent-slider"
            className="block mb-2 text-lg font-medium"
          >
            Adjust Progress (%):
          </label>
          <Slider
            id="percent-slider"
            value={[percent]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value: number[]) => setPercent(value[0])}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <CodeBlock
          code={`import WaveWater from '../../components/ui/WaveWater';

export default function MyComponent() {
  return (
    <WaveWater percent={50} />
  );
}`}
          language="tsx"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Component Code</h2>
        <Button onClick={() => setShowComponentCode(!showComponentCode)}>
          {showComponentCode ? "Hide Component Code" : "Show Component Code"}
        </Button>
        {showComponentCode && (
          <div className="mt-4">
            <CodeBlock code={waveComponentCode} language="tsx" />
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>percent</code>: The fill percentage of the wave (default: 0,
            max: 100)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Smooth animation to fill the wave</li>
          <li>Customizable styling with TailwindCSS</li>
          <li>Responsive design for various screen sizes</li>
          <li>Easy integration into other components</li>
          <li>Progress displayed dynamically in percentage</li>
        </ul>
      </section>
    </div>
  );
}

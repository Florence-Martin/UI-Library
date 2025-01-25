import { useEffect, useState } from "react";

interface WaveWaterProps {
  percent: number;
}

const WaveWater = ({ percent }: WaveWaterProps) => {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPercent((prev) => {
        const next = prev + 1;
        if (next > percent) {
          clearInterval(interval);
          return percent;
        }
        return next;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [percent]);

  return (
    <div className="box">
      <div className="percent">
        <div className="percentNum">{currentPercent}</div>
        <div className="percentB">%</div>
      </div>
      <div
        id="water"
        className="water"
        style={{ transform: `translate(0, ${100 - currentPercent}%)` }}
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

      <style jsx>{`
        .box {
          height: 280px;
          width: 280px;
          position: relative;
          margin: 0 auto;
          background: #dcdcdc82;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .box::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 20px;
          background: #f4f4f4;
          border-radius: 0 0 50% 50%;
          box-shadow: 0 0 10px #333;
          z-index: 4;
        }

        .percent {
          position: absolute;
          z-index: 3;
          color: #fff;
          font-size: 60px;
          font-weight: bold;
          text-align: center;
        }

        .water {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: #2563eb;
          transform: translateY(100%);
          transition: transform 0.1s ease-in-out;
        }

        .water_wave {
          position: absolute;
          bottom: 100%;
          width: 200%;
        }

        .water_wave_back {
          right: 0;
          fill: #2563eb;
          animation: wave-back 10s infinite linear;
        }

        .water_wave_front {
          left: 0;
          fill: #2563eb;
          animation: wave-front 5s infinite linear;
        }

        @keyframes wave-front {
          100% {
            transform: translate(-50%, 0);
          }
        }

        @keyframes wave-back {
          100% {
            transform: translate(50%, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default WaveWater;

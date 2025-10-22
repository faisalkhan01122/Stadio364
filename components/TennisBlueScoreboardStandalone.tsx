// "use client";

import React, { useState, useEffect, useCallback } from "react";

// Standalone SlideRight component
const SlideRight = ({
  hide,
  children,
  start,
  finish,
  delay,
}: {
  readonly children: React.ReactNode;
  readonly delay?: number;
  readonly finish: number;
  readonly hide: boolean;
  readonly start: number;
}) => {
  const [xPosition, setXPosition] = useState(start);

  useEffect(() => {
    if (hide) setXPosition(finish);
    else setXPosition(start);
  }, [finish, hide, start]);

  return (
    <g
      style={{
        transition: `transform ${delay ? delay / 1_000 : 0.5}s ease-in-out`,
      }}
      transform={`translate(${xPosition}, 0)`}
    >
      {children}
    </g>
  );
};

// Standalone FadeIn component
const FadeIn = ({
  show,
  children,
  delay,
}: {
  readonly children: React.ReactNode;
  readonly delay?: number;
  readonly show: boolean;
}) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (show) setOpacity(1);
    else setOpacity(0);
  }, [show]);

  return (
    <g
      opacity={opacity}
      style={{
        transition: `opacity ${delay ? delay / 1_000 : 0.5}s ease-in-out`,
      }}
    >
      {children}
    </g>
  );
};

// Default data types
interface Team {
  greyCards?: number;
  id?: string | null;
  name: string;
  redCards?: number;
  yellowCards?: number;
}

interface Colors {
  c1?: string;
  c2?: string;
  c3?: string;
  c4?: string;
  c5?: string;
  c6?: string;
  c7?: string;
  c8?: string;
}

interface TennisBlueScoreboardProps {
  readonly colors?: Colors;
  readonly isFirstServer?: boolean;
  readonly legs?: [number, number];
  readonly notice?: string;
  readonly onCollapse?: () => void;
  readonly onExpand?: () => void;
  readonly sets?: [number, number];
  readonly showNotice?: boolean;
  readonly teamA?: Team;
  readonly teamB?: Team;
  readonly tennisCurrentScore?: [number | string, number | string];
}

function TennisBlueScoreboardStandalone({
  teamA = { name: "Player A" },
  teamB = { name: "Player B" },
  colors = {
    c1: "#ffffff",
    c2: "#1a1a1a",
    c3: "#3b82f6",
    c4: "#1e293b",
    c5: "#ffffff",
    c6: "#ffffff",
    c7: "#1a1a1a",
  },
  sets = [0, 0],
  legs = [0, 0],
  isFirstServer = true,
  notice = "Match Point",
  showNotice = true,
  tennisCurrentScore = [0, 0],
  onCollapse,
  onExpand,
}: TennisBlueScoreboardProps) {
  // Track animation state
  const [animationStep, setAnimationStep] = useState(3);

  // State for collapse animation - controls which sections are hidden
  const [isCollapsed, setIsCollapsed] = useState(false);

  // State for fade out of entire scoreboard
  const [isFadedOut, setIsFadedOut] = useState(false);

  // Animation effect - initial demo animation on mount
  useEffect(() => {
    setTimeout(() => setAnimationStep(1), 0);
    setTimeout(() => setAnimationStep(2), 500);
    setTimeout(() => setAnimationStep(3), 1_000);
    setTimeout(() => setAnimationStep(4), 1_500);
  }, []);

  // Function to trigger collapse animation (can be called externally)
  const triggerCollapse = useCallback(() => {
    // Fade out entire scoreboard
    setIsFadedOut(true);

    // Start collapsing sections after fade begins
    setTimeout(() => {
      setIsCollapsed(true);
    }, 200);

    onCollapse?.();
  }, [onCollapse]);

  // Function to trigger expand animation (reverse of collapse)
  const triggerExpand = useCallback(() => {
    // Expand sections first
    setIsCollapsed(false);

    // Then fade in
    setTimeout(() => {
      setIsFadedOut(false);
    }, 200);

    onExpand?.();
  }, [onExpand]);

  // Add collapse and expand triggers to window for demo purposes
  useEffect(() => {
    // @ts-ignore
    window.triggerTennisCollapse = triggerCollapse;
    // @ts-ignore
    window.triggerTennisExpand = triggerExpand;
    return () => {
      // @ts-ignore
      delete window.triggerTennisCollapse;
      // @ts-ignore
      delete window.triggerTennisExpand;
    };
  }, [triggerCollapse, triggerExpand]);

  return (
    <svg
      viewBox="0 0 354 108"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        opacity: isFadedOut ? 0 : 1,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      <defs>
        <style>
          {
            ".svg-TennisBlueScoreboard .cls-3,.svg-TennisBlueScoreboard .cls-4,.svg-TennisBlueScoreboard .cls-7{font-size:28px;font-family:Roboto-Medium,Roboto;font-weight:500} .svg-TennisBlueScoreboard .cls-5{letter-spacing:.00928em} .svg-TennisBlueScoreboard .cls-6{letter-spacing:-.07324em}"
          }
        </style>
        <style>
          {`
          .slide-notice {
            transition: transform 1s ease-in-out, opacity 1s ease-in-out;
            opacity: 0;
            transform: translateY(100%);
          }

          .slide-notice.show {
            opacity: 1;
            transform: translateY(0);
          }

          .slide-notice.hide {
            opacity: 0;
            transform: translateY(100%);
          }
        `}
        </style>
      </defs>

      {/* Notice banner - slides down from top when hidden */}
      <g
        className={`slide-notice ${showNotice ? "show" : "hide"}`}
        id="tennis-blue-Notice"
      >
        <path
          className="cls-2"
          d="M0 0h146v27H0z"
          data-name="small-white-bg"
          fill={colors.c4}
          id="tennis-blue-small-white-bg-2"
        />
        <text
          fill={colors.c5}
          style={{
            fontSize: "17.1px",
            fontFamily: "Roboto-Medium, Roboto",
            fontWeight: 500,
          }}
          textAnchor="middle"
          transform="translate(73 20.205)"
        >
          {notice}
        </text>
      </g>

      {/* Background elements - static */}
      <g id="tennis-blue-backgrounds">
        <path
          className="cls-1"
          d="M11 27h226v81H11z"
          fill={colors.c1}
          id="tennis-blue-lg-white"
        />
        <path
          className="cls-2"
          d="M0 27h11v81H0z"
          fill={colors.c4}
          id="tennis-blue-green-left-bg"
        />
      </g>

      {/* Team names - static */}
      <g id="tennis-blue-Names">
        <text
          className="cls-4"
          fill={colors.c2}
          transform="translate(16.872 57.882)"
        >
          {teamA.name}
        </text>
        <text
          className="cls-4"
          fill={colors.c2}
          transform="translate(15.872 98.882)"
        >
          {teamB.name}
        </text>
      </g>

      {/* Server indicator and divider line */}
      <FadeIn delay={0} show={animationStep >= 2}>
        <g data-name="Layer 8" id="tennis-blue-Layer_8">
          {isFirstServer ? (
            <circle className="cls-3" cx={220} cy={49} fill={colors.c3} r={4} />
          ) : (
            <circle className="cls-3" cx={220} cy={90} fill={colors.c3} r={4} />
          )}
        </g>
        <g id="tennis-blue-Line">
          <path
            d="M11 69h400"
            style={{
              opacity: 0.61,
              stroke: "#9e9e9e",
              strokeWidth: ".25px",
              fill: "none",
              strokeMiterlimit: 10,
            }}
          />
        </g>
      </FadeIn>

      {/* Rightmost white section (current score) - slides left into blue section */}
      <SlideRight delay={600} finish={-39} hide={isCollapsed} start={0}>
        <path
          className="cls-1"
          d="M315 27h39v81h-39z"
          fill={colors.c1}
          id="tennis-blue-small-white-bg"
        />
        <g id="tennis-blue-AD">
          <text
            className="cls-4"
            fill={colors.c7}
            textAnchor="middle"
            transform="translate(334 57.882)"
          >
            {tennisCurrentScore[0].toString()}
          </text>
          <text
            className="cls-4"
            fill={colors.c7}
            textAnchor="middle"
            transform="translate(334 98.882)"
          >
            {tennisCurrentScore[1].toString()}
          </text>
        </g>
      </SlideRight>

      {/* Blue section (legs) - slides left into navy section */}
      <SlideRight delay={400} finish={-39} hide={isCollapsed} start={0}>
        <path
          className="cls-3"
          d="M276 27h39v81h-39z"
          fill={colors.c3}
          id="tennis-blue-purple-right-bg"
        />
        <g id="tennis-blue-Legs">
          <text
            className="cls-7"
            fill={colors.c6}
            transform="translate(286.915 57.882)"
          >
            {legs[0]}
          </text>
          <text
            className="cls-7"
            fill={colors.c6}
            transform="translate(286.915 98.882)"
          >
            {legs[1]}
          </text>
        </g>
      </SlideRight>

      {/* Navy section (sets) - slides left into names section */}
      <SlideRight delay={200} finish={-39} hide={isCollapsed} start={0}>
        <path
          className="cls-2"
          d="M237 27h39v81h-39z"
          fill={colors.c4}
          id="tennis-blue-green-right-bg"
        />
        <g id="tennis-blue-Sets">
          <text
            className="cls-7"
            fill={colors.c5}
            transform="translate(249 57.882)"
          >
            {sets[0]}
          </text>
          <text
            className="cls-7"
            fill={colors.c5}
            transform="translate(249 98.882)"
          >
            {sets[1]}
          </text>
        </g>
      </SlideRight>
    </svg>
  );
}

// Demo wrapper with controls
export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(true);
    window.triggerTennisCollapse();
  };

  const handleExpand = () => {
    setIsCollapsed(false);
    window.triggerTennisExpand();
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex gap-4 justify-center">
          <button
            onClick={handleExpand}
            disabled={!isCollapsed}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            Show Scoreboard
          </button>
          <button
            onClick={handleCollapse}
            disabled={isCollapsed}
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            Hide Scoreboard
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-2xl">
          <TennisBlueScoreboardStandalone
            teamA={{ name: "Player A" }}
            teamB={{ name: "Player B" }}
            sets={[2, 1]}
            legs={[3, 2]}
            tennisCurrentScore={[40, 30]}
            isFirstServer={true}
            notice="Match Point"
            showNotice={true}
          />
        </div>

        <div className="mt-8 text-white text-center space-y-2">
          <p className="text-sm opacity-75">
            Click "Hide" to see each section slide into the next (right to left)
          </p>
          <p className="text-sm opacity-75">
            Click "Show" to see the reverse animation (expand from left to
            right)
          </p>
        </div>
      </div>
    </div>
  );
}

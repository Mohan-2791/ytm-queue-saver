interface ReelProps {
  spokeCount?: number;
  reverse?: boolean;
}

export default function Reel({ spokeCount = 26, reverse = false }: ReelProps) {
  const spokeAngles = Array.from(
    { length: spokeCount },
    (_, i) => (360 / spokeCount) * i
  );

  return (
    <svg
      className={`reel${reverse ? ' reel--reverse' : ''}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="reel__rim" cx="50" cy="50" r="47" />
      <g className="reel__rotor">
        <circle className="reel__hub" cx="50" cy="50" r="22" />
        {spokeAngles.map((angle) => (
          <rect
            key={angle}
            className="reel__spoke"
            x="48.5"
            y="11"
            width="3"
            height="25"
            rx="1.5"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        <circle className="reel__dot" cx="50" cy="50" r="4.5" />
      </g>
    </svg>
  );
}
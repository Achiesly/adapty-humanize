interface LogoProps  {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <svg width="280" height="50" viewBox="0 0 157 55" xmlns="http://www.w3.org/2000/svg" fill="none" className={className}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFC2" />
              <stop offset="100%" stopColor="#007CF0" />
            </linearGradient>
          </defs>
      
          <g transform="translate(20,20)">
            <circle cx="20" cy="20" r="18" fill="url(#gradient)" />
            <path d="M10 25 L20 10 L30 25" stroke="#0A0A0A" strokeWidth="2" fill="none" />
          </g>
      
          <text
            x="70"
            y="50"
            fontFamily="Poppins, Helvetica, Arial, sans-serif"
            fontSize="32"
            fontWeight="600"
            fill="#0A0A0A"
            letterSpacing="1"
          >
            Adapty
          </text>
        </svg>
    );
}

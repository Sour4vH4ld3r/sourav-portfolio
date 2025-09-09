'use client'

interface LogoProps {
  size?: number
  className?: string
}

const Logo = ({ size = 40, className = '' }: LogoProps) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="hover-glow transition-all duration-300 hover:scale-110"
        style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' }}
      >
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          {/* Text shadow filter */}
          <filter id="textShadow">
            <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.3"/>
          </filter>

          {/* Animated shimmer effect */}
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-100 0;200 0;-100 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring with animation */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          opacity="0.4"
          className="animate-rotate-slow"
        />

        {/* Main background circle */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="url(#logoGradient)"
          filter="url(#glow)"
          className="animate-pulse-glow"
        />

        {/* Inner circle for depth */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="rgba(0,0,0,0.15)"
        />

        {/* Letter S - Much clearer and larger */}
        <text
          x="35"
          y="62"
          fontSize="28"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="url(#textGradient)"
          textAnchor="middle"
          filter="url(#textShadow)"
          className="animate-text-focus"
        >
          S
        </text>

        {/* Letter H - Much clearer and larger */}
        <text
          x="65"
          y="62"
          fontSize="28"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="url(#textGradient)"
          textAnchor="middle"
          filter="url(#textShadow)"
          className="animate-text-focus"
        >
          H
        </text>

        {/* Shimmer overlay */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="url(#shimmer)"
          opacity="0.4"
        />

        {/* Small decorative elements */}
        <circle cx="25" cy="25" r="1" fill="#60a5fa" opacity="0.8" className="animate-pulse" />
        <circle cx="75" cy="25" r="1" fill="#a855f7" opacity="0.6" className="animate-pulse" style={{animationDelay: '1s'}} />
        <circle cx="25" cy="75" r="1" fill="#3b82f6" opacity="0.7" className="animate-pulse" style={{animationDelay: '2s'}} />
        <circle cx="75" cy="75" r="1" fill="#ec4899" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.5s'}} />
      </svg>
    </div>
  )
}

export default Logo 
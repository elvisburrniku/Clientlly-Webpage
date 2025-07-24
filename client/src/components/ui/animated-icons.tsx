import React from 'react';

// App Store Icon with animated gradient and scaling
export const AppStoreIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} group cursor-pointer`}>
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full transition-all duration-300 group-hover:scale-110"
      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
    >
      <defs>
        <linearGradient id="appStoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007AFF" className="animate-pulse" />
          <stop offset="100%" stopColor="#0051D5" className="animate-pulse" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect 
        width="80" 
        height="80" 
        x="10" 
        y="10" 
        rx="16" 
        fill="url(#appStoreGrad)" 
        filter="url(#glow)"
        className="transition-all duration-300 group-hover:animate-pulse"
      />
      <path 
        d="M30 60 L35 50 L40 60 M25 65 L45 65 M45 35 L50 45 L70 15 M50 45 L55 35"
        stroke="white" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round"
        className="transition-all duration-300 group-hover:stroke-yellow-200"
      />
    </svg>
  </div>
);

// Google Play Icon with rotating elements
export const GooglePlayIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} group cursor-pointer`}>
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full transition-all duration-300 group-hover:scale-110"
      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
    >
      <defs>
        <linearGradient id="playGreen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="25%" stopColor="#00C851" />
          <stop offset="50%" stopColor="#FFBB33" />
          <stop offset="75%" stopColor="#FF4444" />
          <stop offset="100%" stopColor="#AA66CC" />
        </linearGradient>
      </defs>
      <rect 
        width="80" 
        height="80" 
        x="10" 
        y="10" 
        rx="16" 
        fill="white" 
        stroke="url(#playGreen)" 
        strokeWidth="2"
        className="transition-all duration-300 group-hover:animate-pulse"
      />
      <path 
        d="M25 20 L25 80 L50 50 Z" 
        fill="#00C851" 
        className="transition-all duration-500 group-hover:animate-pulse origin-center"
      />
      <path 
        d="M25 20 L50 50 L75 25 Z" 
        fill="#FFBB33" 
        className="transition-all duration-500 group-hover:animate-bounce origin-center"
      />
      <path 
        d="M50 50 L75 25 L75 75 Z" 
        fill="#FF4444" 
        className="transition-all duration-500 group-hover:animate-pulse origin-center"
      />
      <path 
        d="M25 80 L50 50 L75 75 Z" 
        fill="#00D4FF" 
        className="transition-all duration-500 group-hover:animate-bounce origin-center"
      />
    </svg>
  </div>
);

// Facebook Icon with pulsing effect
export const FacebookIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} group cursor-pointer`}>
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full transition-all duration-300 group-hover:scale-110"
      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
    >
      <defs>
        <linearGradient id="fbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1877F2" />
          <stop offset="100%" stopColor="#42A5F5" />
        </linearGradient>
        <filter id="fbGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect 
        width="80" 
        height="80" 
        x="10" 
        y="10" 
        rx="16" 
        fill="url(#fbGrad)" 
        filter="url(#fbGlow)"
        className="transition-all duration-300 group-hover:animate-pulse"
      />
      <path 
        d="M55 25 L55 35 L60 35 L60 45 L55 45 L55 75 L45 75 L45 45 L40 45 L40 35 L45 35 L45 30 C45 27 47 25 50 25 L55 25 Z" 
        fill="white"
        className="transition-all duration-300 group-hover:fill-yellow-200"
      />
    </svg>
  </div>
);

// YouTube Icon with play button animation
export const YouTubeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} group cursor-pointer`}>
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full transition-all duration-300 group-hover:scale-110"
      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
    >
      <defs>
        <linearGradient id="ytGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        <filter id="ytGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect 
        width="80" 
        height="60" 
        x="10" 
        y="20" 
        rx="8" 
        fill="url(#ytGrad)" 
        filter="url(#ytGlow)"
        className="transition-all duration-300 group-hover:animate-pulse"
      />
      <path 
        d="M40 35 L40 65 L60 50 Z" 
        fill="white"
        className="transition-all duration-300 group-hover:animate-bounce group-hover:fill-yellow-200"
      />
    </svg>
  </div>
);

// Social Links Component with all animated icons
export const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center space-x-4 ${className}`}>
    <a
      href="https://apps.apple.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
      aria-label="Download on the App Store"
    >
      <AppStoreIcon className="w-10 h-10" />
    </a>
    
    <a
      href="https://play.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-110 hover:-rotate-3"
      aria-label="Get it on Google Play"
    >
      <GooglePlayIcon className="w-10 h-10" />
    </a>
    
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-110 hover:rotate-2"
      aria-label="Follow us on Facebook"
    >
      <FacebookIcon className="w-10 h-10" />
    </a>
    
    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-110 hover:-rotate-2"
      aria-label="Subscribe to our YouTube channel"
    >
      <YouTubeIcon className="w-10 h-10" />
    </a>
  </div>
);

export default SocialLinks;
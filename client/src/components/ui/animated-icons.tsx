import React from 'react';

// App Store Icon with animated gradient and scaling
export const AppStoreIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} group cursor-pointer relative`}>
    <div className="flex flex-col items-center space-y-2">
      <svg
        viewBox="0 0 120 120"
        className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
        style={{ filter: 'drop-shadow(0 6px 16px rgba(0,122,255,0.3))' }}
      >
        <defs>
          <linearGradient id="appStoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#007AFF" />
            <stop offset="50%" stopColor="#0051D5" />
            <stop offset="100%" stopColor="#003DA5" />
          </linearGradient>
          <filter id="appGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect 
          width="100" 
          height="100" 
          x="10" 
          y="10" 
          rx="22" 
          fill="url(#appStoreGrad)" 
          filter="url(#appGlow)"
          className="transition-all duration-300 group-hover:animate-pulse"
        />
        <g transform="translate(60, 60)">
          <path 
            d="M-15 10 L-8 -5 L-1 10 M-20 15 L4 15 M4 -15 L11 -2 L35 -35 M11 -2 L18 -15"
            stroke="white" 
            strokeWidth="3.5" 
            fill="none" 
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-yellow-200"
          />
          <circle cx="0" cy="0" r="2" fill="white" className="animate-pulse" />
        </g>
      </svg>
      <span className="text-white text-xs font-medium group-hover:text-blue-300 transition-colors">
        Download on the<br/>App Store
      </span>
    </div>
  </div>
);

// Google Play Icon with rotating elements
export const GooglePlayIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} group cursor-pointer relative`}>
    <div className="flex flex-col items-center space-y-2">
      <svg
        viewBox="0 0 120 120"
        className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
        style={{ filter: 'drop-shadow(0 6px 16px rgba(76,175,80,0.3))' }}
      >
        <defs>
          <linearGradient id="playBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="100%" stopColor="#2E7D32" />
          </linearGradient>
        </defs>
        <rect 
          width="100" 
          height="100" 
          x="10" 
          y="10" 
          rx="22" 
          fill="white" 
          stroke="url(#playBorder)" 
          strokeWidth="3"
          className="transition-all duration-300 group-hover:shadow-lg"
        />
        <g transform="translate(60, 60)">
          <path 
            d="M-25 -30 L-25 30 L0 0 Z" 
            fill="#4CAF50" 
            className="transition-all duration-500 group-hover:animate-pulse origin-center"
          />
          <path 
            d="M-25 -30 L0 0 L25 -25 Z" 
            fill="#FF9800" 
            className="transition-all duration-500 group-hover:animate-bounce origin-center"
          />
          <path 
            d="M0 0 L25 -25 L25 25 Z" 
            fill="#F44336" 
            className="transition-all duration-500 group-hover:animate-pulse origin-center"
          />
          <path 
            d="M-25 30 L0 0 L25 25 Z" 
            fill="#2196F3" 
            className="transition-all duration-500 group-hover:animate-bounce origin-center"
          />
        </g>
      </svg>
      <span className="text-white text-xs font-medium group-hover:text-green-300 transition-colors">
        Get it on<br/>Google Play
      </span>
    </div>
  </div>
);

// Facebook Icon with pulsing effect
export const FacebookIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} group cursor-pointer relative`}>
    <div className="flex flex-col items-center space-y-2">
      <svg
        viewBox="0 0 120 120"
        className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
        style={{ filter: 'drop-shadow(0 6px 16px rgba(24,119,242,0.3))' }}
      >
        <defs>
          <linearGradient id="fbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1877F2" />
            <stop offset="50%" stopColor="#166FE5" />
            <stop offset="100%" stopColor="#0E5FD8" />
          </linearGradient>
          <filter id="fbGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect 
          width="100" 
          height="100" 
          x="10" 
          y="10" 
          rx="22" 
          fill="url(#fbGrad)" 
          filter="url(#fbGlow)"
          className="transition-all duration-300 group-hover:animate-pulse"
        />
        <path 
          d="M75 35 L75 50 L82 50 L82 65 L75 65 L75 95 L60 95 L60 65 L50 65 L50 50 L60 50 L60 42 C60 37 63 35 68 35 L75 35 Z" 
          fill="white"
          className="transition-all duration-300 group-hover:fill-blue-100"
        />
      </svg>
      <span className="text-white text-xs font-medium group-hover:text-blue-300 transition-colors text-center">
        Facebook
      </span>
    </div>
  </div>
);

// YouTube Icon with play button animation
export const YouTubeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} group cursor-pointer relative`}>
    <div className="flex flex-col items-center space-y-2">
      <svg
        viewBox="0 0 120 120"
        className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
        style={{ filter: 'drop-shadow(0 6px 16px rgba(255,0,0,0.3))' }}
      >
        <defs>
          <linearGradient id="ytGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0000" />
            <stop offset="50%" stopColor="#E60000" />
            <stop offset="100%" stopColor="#CC0000" />
          </linearGradient>
          <filter id="ytGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect 
          width="100" 
          height="70" 
          x="10" 
          y="25" 
          rx="16" 
          fill="url(#ytGrad)" 
          filter="url(#ytGlow)"
          className="transition-all duration-300 group-hover:animate-pulse"
        />
        <path 
          d="M45 45 L45 75 L75 60 Z" 
          fill="white"
          className="transition-all duration-300 group-hover:animate-bounce group-hover:fill-red-100"
        />
      </svg>
      <span className="text-white text-xs font-medium group-hover:text-red-300 transition-colors text-center">
        YouTube
      </span>
    </div>
  </div>
);

// Social Links Component with all animated icons
export const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center space-x-8 ${className}`}>
    <a
      href="https://apps.apple.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-105 hover:rotate-1"
      aria-label="Download on the App Store"
    >
      <AppStoreIcon className="w-16 h-16" />
    </a>
    
    <a
      href="https://play.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-105 hover:-rotate-1"
      aria-label="Get it on Google Play"
    >
      <GooglePlayIcon className="w-16 h-16" />
    </a>
    
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-105 hover:rotate-1"
      aria-label="Follow us on Facebook"
    >
      <FacebookIcon className="w-16 h-16" />
    </a>
    
    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-105 hover:-rotate-1"
      aria-label="Subscribe to our YouTube channel"
    >
      <YouTubeIcon className="w-16 h-16" />
    </a>
  </div>
);

export default SocialLinks;
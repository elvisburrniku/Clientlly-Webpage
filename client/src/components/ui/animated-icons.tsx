import React from 'react';

// App Store Icon - Clean and simple
export const AppStoreIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} cursor-pointer`}>
    <div className="flex items-center space-x-3 bg-black rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors">
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-white">
        <div className="text-xs">Download on the</div>
        <div className="text-sm font-semibold">App Store</div>
      </div>
    </div>
  </div>
);

// Google Play Icon - Clean and simple
export const GooglePlayIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} cursor-pointer`}>
    <div className="flex items-center space-x-3 bg-black rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors">
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
      <div className="text-white">
        <div className="text-xs">Get it on</div>
        <div className="text-sm font-semibold">Google Play</div>
      </div>
    </div>
  </div>
);

// Facebook Icon - Clean and simple
export const FacebookIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} cursor-pointer`}>
    <div className="flex items-center space-x-3 bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors">
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      <div className="text-white">
        <div className="text-sm font-semibold">Facebook</div>
      </div>
    </div>
  </div>
);

// YouTube Icon - Clean and simple
export const YouTubeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} cursor-pointer`}>
    <div className="flex items-center space-x-3 bg-red-600 rounded-lg px-4 py-2 hover:bg-red-700 transition-colors">
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
      <div className="text-white">
        <div className="text-sm font-semibold">YouTube</div>
      </div>
    </div>
  </div>
);

// Social Links Component with clean, horizontal layout
export const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
    <a
      href="https://apps.apple.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
    >
      <AppStoreIcon />
    </a>
    
    <a
      href="https://play.google.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
    >
      <GooglePlayIcon />
    </a>
    
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Facebook"
    >
      <FacebookIcon />
    </a>
    
    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Subscribe to our YouTube channel"
    >
      <YouTubeIcon />
    </a>
  </div>
);

export default SocialLinks;
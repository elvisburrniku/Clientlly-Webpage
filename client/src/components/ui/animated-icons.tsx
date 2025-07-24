import React from 'react';

// Simple App Store Button
export const AppStoreIcon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} inline-block cursor-pointer`}>
    <div className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors min-w-[140px]">
      <div className="text-sm font-medium text-center">Download on the App Store</div>
    </div>
  </div>
);

// Simple Google Play Button  
export const GooglePlayIcon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} inline-block cursor-pointer`}>
    <div className="bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors min-w-[140px]">
      <div className="text-sm font-medium text-center">Get it on Google Play</div>
    </div>
  </div>
);

// Simple Facebook Button
export const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} inline-block cursor-pointer`}>
    <div className="bg-blue-600 text-white border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors min-w-[140px]">
      <div className="text-sm font-medium text-center">Facebook</div>
    </div>
  </div>
);

// Simple YouTube Button
export const YouTubeIcon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} inline-block cursor-pointer`}>
    <div className="bg-red-600 text-white border border-red-500 rounded-lg px-4 py-2 hover:bg-red-700 transition-colors min-w-[140px]">
      <div className="text-sm font-medium text-center">YouTube</div>
    </div>
  </div>
);

// Simple Social Links Component
export const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
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
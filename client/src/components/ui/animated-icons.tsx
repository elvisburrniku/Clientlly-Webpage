import React from 'react';

// App Store Button with Apple Logo
export const AppStoreIcon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} inline-block cursor-pointer transform hover:scale-105 transition-all duration-300`}>
    <div className="bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition-colors min-w-[160px] flex items-center space-x-3">
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-left">
        <div className="text-xs">Download on the</div>
        <div className="text-sm font-bold -mt-1">App Store</div>
      </div>
    </div>
  </div>
);

// Google Play Button with Play Store Logo
export const GooglePlayIcon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} inline-block cursor-pointer transform hover:scale-105 transition-all duration-300`}>
    <div className="bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 transition-colors min-w-[160px] flex items-center space-x-3">
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
      <div className="text-left">
        <div className="text-xs">Get it on</div>
        <div className="text-sm font-bold -mt-1">Google Play</div>
      </div>
    </div>
  </div>
);

// Facebook Button with Facebook Logo
export const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} inline-block cursor-pointer transform hover:scale-105 transition-all duration-300`}>
    <div className="bg-[#1877F2] text-white rounded-lg px-6 py-3 hover:bg-[#166FE5] transition-colors min-w-[140px] flex items-center justify-center space-x-2">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      <span className="font-semibold">Facebook</span>
    </div>
  </div>
);

// Instagram Button with Instagram Logo
export const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} inline-block cursor-pointer transform hover:scale-105 transition-all duration-300`}>
    <div className="bg-gradient-to-br from-[#405DE6] via-[#5B51D8] via-[#833AB4] via-[#C13584] via-[#E1306C] to-[#FD1D1D] text-white rounded-lg px-6 py-3 hover:shadow-lg transition-all duration-300 min-w-[140px] flex items-center justify-center space-x-2">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
      <span className="font-semibold">Instagram</span>
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
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
    >
      <InstagramIcon />
    </a>
  </div>
);

export default SocialLinks;
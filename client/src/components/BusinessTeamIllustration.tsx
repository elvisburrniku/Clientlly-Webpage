import { useEffect, useState } from 'react';

export function BusinessTeamIllustration() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <svg 
        viewBox="0 0 800 400" 
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background elements */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          
          {/* Animated floating elements */}
          <g id="floatingIcon">
            <circle cx="0" cy="0" r="8" fill="#3b82f6" opacity="0.3">
              <animate attributeName="cy" values="0;-10;0" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
        </defs>

        {/* Background */}
        <rect width="800" height="400" fill="url(#bgGradient)" />

        {/* Floating background elements */}
        <use href="#floatingIcon" x="100" y="80" opacity="0.4">
          <animateTransform attributeName="transform" type="translate" 
            values="0,0; 5,5; 0,0" dur="4s" repeatCount="indefinite" />
        </use>
        <use href="#floatingIcon" x="700" y="120" opacity="0.3">
          <animateTransform attributeName="transform" type="translate" 
            values="0,0; -3,8; 0,0" dur="5s" repeatCount="indefinite" />
        </use>

        {/* Person 1 - On bean bag with laptop */}
        <g className="person-1">
          {/* Bean bag */}
          <ellipse cx="150" cy="320" rx="60" ry="25" fill="#94a3b8" />
          <ellipse cx="150" cy="300" rx="55" ry="35" fill="#cbd5e1" />
          
          {/* Person sitting */}
          <g transform="translate(130, 250)">
            {/* Body */}
            <rect x="10" y="20" width="25" height="40" rx="12" fill="#ef4444" />
            
            {/* Head */}
            <circle cx="22" cy="10" r="12" fill="#fbbf24" />
            
            {/* Hair */}
            <path d="M10 5 Q22 -2 34 5 Q32 15 22 15 Q12 15 10 5" fill="#1f2937" />
            
            {/* Arms */}
            <rect x="0" y="25" width="15" height="20" rx="7" fill="#fbbf24" />
            <rect x="30" y="25" width="15" height="20" rx="7" fill="#fbbf24" />
            
            {/* Legs */}
            <rect x="8" y="55" width="12" height="25" rx="6" fill="#1f2937" />
            <rect x="25" y="55" width="12" height="25" rx="6" fill="#1f2937" />
            
            {/* Animation */}
            <animateTransform attributeName="transform" type="translate" 
              values="130,250; 130,248; 130,250" dur="2s" repeatCount="indefinite" />
          </g>
          
          {/* Laptop */}
          <g transform="translate(140, 280)">
            <rect x="0" y="0" width="30" height="20" rx="2" fill="#374151" />
            <rect x="2" y="2" width="26" height="16" rx="1" fill="#60a5fa" />
            
            {/* Screen glow animation */}
            <rect x="2" y="2" width="26" height="16" rx="1" fill="#3b82f6" opacity="0.5">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>

        {/* Person 2 - Standing with tablet */}
        <g className="person-2">
          <g transform="translate(320, 180)">
            {/* Body */}
            <rect x="10" y="40" width="25" height="60" rx="12" fill="#ffffff" />
            
            {/* Head */}
            <circle cx="22" cy="25" r="15" fill="#fbbf24" />
            
            {/* Hair */}
            <path d="M8 18 Q22 8 36 18 Q34 30 22 30 Q10 30 8 18" fill="#92400e" />
            
            {/* Arms holding tablet */}
            <rect x="-5" y="50" width="18" height="25" rx="9" fill="#fbbf24" />
            <rect x="32" y="50" width="18" height="25" rx="9" fill="#fbbf24" />
            
            {/* Legs */}
            <rect x="8" y="95" width="12" height="40" rx="6" fill="#059669" />
            <rect x="25" y="95" width="12" height="40" rx="6" fill="#059669" />
            
            {/* Tablet */}
            <rect x="5" y="55" width="35" height="25" rx="3" fill="#1f2937" />
            <rect x="7" y="57" width="31" height="21" rx="2" fill="#34d399" />
            
            {/* Gentle swaying animation */}
            <animateTransform attributeName="transform" type="translate" 
              values="320,180; 322,180; 320,180" dur="4s" repeatCount="indefinite" />
          </g>
        </g>

        {/* Person 3 - Professional woman presenting */}
        <g className="person-3">
          <g transform="translate(480, 160)">
            {/* Body */}
            <rect x="10" y="40" width="25" height="65" rx="12" fill="#ffffff" />
            
            {/* Skirt */}
            <rect x="8" y="95" width="29" height="25" rx="3" fill="#fbbf24" />
            
            {/* Head */}
            <circle cx="22" cy="25" r="15" fill="#fbbf24" />
            
            {/* Hair */}
            <path d="M8 15 Q22 5 36 15 Q35 35 28 40 Q16 40 9 35 Q8 25 8 15" fill="#92400e" />
            
            {/* Arms - one raised presenting */}
            <rect x="-5" y="50" width="18" height="25" rx="9" fill="#fbbf24" 
              transform="rotate(-30 4 62)" />
            <rect x="32" y="45" width="18" height="30" rx="9" fill="#fbbf24" 
              transform="rotate(45 41 60)" />
            
            {/* Legs */}
            <rect x="12" y="115" width="10" height="35" rx="5" fill="#fbbf24" />
            <rect x="26" y="115" width="10" height="35" rx="5" fill="#fbbf24" />
            
            {/* Presentation charts floating */}
            <g transform="translate(50, 20)">
              <rect x="0" y="0" width="40" height="30" rx="3" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="5" y="20" width="6" height="5" fill="#3b82f6" />
              <rect x="13" y="15" width="6" height="10" fill="#10b981" />
              <rect x="21" y="10" width="6" height="15" fill="#f59e0b" />
              <rect x="29" y="5" width="6" height="20" fill="#ef4444" />
              
              <animateTransform attributeName="transform" type="translate" 
                values="50,20; 52,18; 50,20" dur="3s" repeatCount="indefinite" />
            </g>
            
            {/* Presenting animation */}
            <animateTransform attributeName="transform" type="translate" 
              values="480,160; 481,158; 480,160" dur="3.5s" repeatCount="indefinite" />
          </g>
        </g>

        {/* Person 4 - Casual person with laptop */}
        <g className="person-4">
          <g transform="translate(620, 200)">
            {/* Body */}
            <rect x="10" y="40" width="25" height="55" rx="12" fill="#06d6a0" />
            
            {/* Head */}
            <circle cx="22" cy="25" r="15" fill="#fbbf24" />
            
            {/* Hair - ponytail */}
            <path d="M8 20 Q22 10 36 20 Q34 32 22 32 Q10 32 8 20" fill="#fbbf24" />
            <ellipse cx="40" cy="22" rx="8" ry="4" fill="#fbbf24" />
            
            {/* Arms typing */}
            <rect x="0" y="50" width="15" height="20" rx="7" fill="#fbbf24" />
            <rect x="30" y="50" width="15" height="20" rx="7" fill="#fbbf24" />
            
            {/* Legs sitting */}
            <rect x="8" y="90" width="12" height="30" rx="6" fill="#06d6a0" />
            <rect x="25" y="90" width="12" height="30" rx="6" fill="#06d6a0" />
            
            {/* Chair */}
            <rect x="5" y="85" width="35" height="8" rx="2" fill="#94a3b8" />
            <rect x="18" y="93" width="8" height="30" fill="#64748b" />
            
            {/* Laptop */}
            <g transform="translate(12, 70)">
              <rect x="0" y="0" width="25" height="15" rx="2" fill="#374151" />
              <rect x="2" y="2" width="21" height="11" rx="1" fill="#60a5fa" />
              
              {/* Typing animation */}
              <rect x="2" y="2" width="21" height="11" rx="1" fill="#3b82f6" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
              </rect>
            </g>
            
            {/* Subtle movement */}
            <animateTransform attributeName="transform" type="translate" 
              values="620,200; 620,198; 620,200" dur="2.5s" repeatCount="indefinite" />
          </g>
        </g>

        {/* Floating UI elements and data visualizations */}
        <g className="floating-elements">
          {/* Chart icons */}
          <g transform="translate(250, 80)">
            <rect width="60" height="40" rx="4" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" opacity="0.9" />
            <path d="M10 30 L20 20 L30 25 L40 15 L50 10" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <circle cx="10" cy="30" r="2" fill="#3b82f6" />
            <circle cx="20" cy="20" r="2" fill="#3b82f6" />
            <circle cx="30" cy="25" r="2" fill="#3b82f6" />
            <circle cx="40" cy="15" r="2" fill="#3b82f6" />
            <circle cx="50" cy="10" r="2" fill="#3b82f6" />
            
            <animateTransform attributeName="transform" type="translate" 
              values="250,80; 255,75; 250,80" dur="4s" repeatCount="indefinite" />
          </g>

          {/* Dollar sign */}
          <g transform="translate(580, 100)">
            <circle cx="15" cy="15" r="15" fill="#10b981" opacity="0.8" />
            <text x="15" y="20" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">$</text>
            
            <animateTransform attributeName="transform" type="translate" 
              values="580,100; 585,95; 580,100" dur="5s" repeatCount="indefinite" />
          </g>

          {/* Document icons */}
          <g transform="translate(150, 120)">
            <rect width="20" height="25" rx="2" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="4" y1="6" x2="16" y2="6" stroke="#94a3b8" strokeWidth="1" />
            <line x1="4" y1="10" x2="16" y2="10" stroke="#94a3b8" strokeWidth="1" />
            <line x1="4" y1="14" x2="12" y2="14" stroke="#94a3b8" strokeWidth="1" />
            
            <animateTransform attributeName="transform" type="translate" 
              values="150,120; 152,125; 150,120" dur="6s" repeatCount="indefinite" />
          </g>
        </g>

        {/* Success indicators and checkmarks */}
        <g className="success-elements">
          <g transform="translate(400, 120)">
            <circle cx="10" cy="10" r="8" fill="#10b981" opacity="0.8">
              <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
            </circle>
            <path d="M6 10 L9 13 L14 7" stroke="white" strokeWidth="2" fill="none" />
          </g>
        </g>
      </svg>
    </div>
  );
}
import React from 'react';

// All macOS-style SVG icons for the dock
const icons = {
  finder: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <defs>
        <linearGradient id="finderBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4eb5f7"/>
          <stop offset="100%" stopColor="#006ed1"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#finderBg)"/>
      {/* Left half face */}
      <path d="M50 10 C25 10 10 30 10 50 C10 70 25 90 50 90 L50 10Z" fill="#3da8f0"/>
      {/* Right half face */}
      <path d="M50 10 C75 10 90 30 90 50 C90 70 75 90 50 90 L50 10Z" fill="#1a7fe0"/>
      {/* Face */}
      <ellipse cx="50" cy="55" rx="32" ry="30" fill="#f5e6d0"/>
      {/* Forehead blue */}
      <ellipse cx="50" cy="28" rx="32" ry="18" fill="#1a7fe0"/>
      {/* Eyes left */}
      <ellipse cx="37" cy="50" rx="7" ry="8" fill="white"/>
      <circle cx="38" cy="51" r="4.5" fill="#2c5ba8"/>
      <circle cx="39" cy="50" r="2" fill="#111"/>
      <circle cx="40" cy="49" r="1" fill="white"/>
      {/* Eyes right */}
      <ellipse cx="63" cy="50" rx="7" ry="8" fill="white"/>
      <circle cx="62" cy="51" r="4.5" fill="#2c5ba8"/>
      <circle cx="63" cy="50" r="2" fill="#111"/>
      <circle cx="64" cy="49" r="1" fill="white"/>
      {/* Smile */}
      <path d="M38 65 Q50 75 62 65" stroke="#c0927a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),

  safari: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <defs>
        <linearGradient id="safBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#e8e8e8"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#safBg)"/>
      <circle cx="50" cy="50" r="35" fill="none" stroke="#d0d0d0" strokeWidth="2"/>
      {/* Compass rose spokes */}
      <line x1="50" y1="17" x2="50" y2="83" stroke="#c8c8c8" strokeWidth="1"/>
      <line x1="17" y1="50" x2="83" y2="50" stroke="#c8c8c8" strokeWidth="1"/>
      <line x1="26" y1="26" x2="74" y2="74" stroke="#c8c8c8" strokeWidth="1"/>
      <line x1="74" y1="26" x2="26" y2="74" stroke="#c8c8c8" strokeWidth="1"/>
      {/* Compass needle - red/white */}
      <polygon points="50,18 54,50 50,38 46,50" fill="#e63b3b"/>
      <polygon points="50,82 54,50 50,62 46,50" fill="#999"/>
      <circle cx="50" cy="50" r="5" fill="white" stroke="#ddd" strokeWidth="1.5"/>
      <circle cx="50" cy="50" r="2" fill="#555"/>
      {/* Gradient ring for Apple look */}
      <circle cx="50" cy="50" r="35" fill="none" stroke="url(#safBg)" strokeWidth="0"/>
    </svg>
  ),

  figma: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="100" height="100" rx="22" fill="#1e1e1e"/>
      {/* Figma logo shapes */}
      <rect x="33" y="13" width="16" height="16" rx="8" fill="#f24e1e"/>
      <rect x="51" y="13" width="16" height="16" rx="8" fill="#ff7262"/>
      <rect x="33" y="31" width="16" height="16" rx="8" fill="#a259ff"/>
      <circle cx="59" cy="39" r="8" fill="#1abcfe"/>
      <rect x="33" y="49" width="16" height="16" rx="8" fill="#0acf83"/>
    </svg>
  ),

  notes: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <defs>
        <linearGradient id="notesBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd95c"/>
          <stop offset="100%" stopColor="#f5a623"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#notesBg)"/>
      {/* Notepad paper */}
      <rect x="18" y="22" width="64" height="60" rx="5" fill="white" opacity="0.95"/>
      {/* Lines on notepad */}
      <line x1="27" y1="38" x2="73" y2="38" stroke="#ddd" strokeWidth="2"/>
      <line x1="27" y1="48" x2="73" y2="48" stroke="#ddd" strokeWidth="2"/>
      <line x1="27" y1="58" x2="73" y2="58" stroke="#ddd" strokeWidth="2"/>
      <line x1="27" y1="68" x2="73" y2="68" stroke="#ddd" strokeWidth="2"/>
      {/* Pencil line at top */}
      <rect x="18" y="22" width="64" height="9" rx="5" fill="#f5a623"/>
      {/* Text lines hint */}
      <line x1="27" y1="38" x2="55" y2="38" stroke="#aaa" strokeWidth="2"/>
      <line x1="27" y1="48" x2="68" y2="48" stroke="#aaa" strokeWidth="2"/>
      <line x1="27" y1="58" x2="48" y2="58" stroke="#aaa" strokeWidth="2"/>
    </svg>
  ),

  photos: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <defs>
        <radialGradient id="photosBg" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#f0f0f0"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#photosBg)"/>
      {/* Flower petals */}
      <ellipse cx="50" cy="28" rx="8" ry="14" fill="#ff3b30" opacity="0.9"/>
      <ellipse cx="50" cy="28" rx="8" ry="14" fill="#ff3b30" opacity="0.9" transform="rotate(45 50 50)"/>
      <ellipse cx="50" cy="28" rx="8" ry="14" fill="#ff9500" opacity="0.9" transform="rotate(90 50 50)"/>
      <ellipse cx="50" cy="28" rx="8" ry="14" fill="#34c759" opacity="0.9" transform="rotate(135 50 50)"/>
      <ellipse cx="50" cy="28" rx="8" ry="14" fill="#007aff" opacity="0.9" transform="rotate(180 50 50)"/>
      <ellipse cx="50" cy="28" rx="8" ry="14" fill="#5856d6" opacity="0.9" transform="rotate(225 50 50)"/>
      <ellipse cx="50" cy="28" rx="8" ry="14" fill="#ff2d55" opacity="0.9" transform="rotate(270 50 50)"/>
      <ellipse cx="50" cy="28" rx="8" ry="14" fill="#ffcc00" opacity="0.9" transform="rotate(315 50 50)"/>
      <circle cx="50" cy="50" r="12" fill="white"/>
    </svg>
  ),

  mail: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <defs>
        <linearGradient id="mailBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#54b3f7"/>
          <stop offset="100%" stopColor="#007aff"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#mailBg)"/>
      {/* Envelope body */}
      <rect x="14" y="30" width="72" height="46" rx="5" fill="white" opacity="0.95"/>
      {/* Envelope flap */}
      <path d="M14 30 L50 56 L86 30Z" fill="#e8f4ff"/>
      <path d="M14 30 L50 56 L86 30" stroke="#cce0ff" strokeWidth="1.5" fill="none"/>
      {/* Bottom triangle shadows */}
      <path d="M14 76 L40 52" stroke="#cce0ff" strokeWidth="1.5"/>
      <path d="M86 76 L60 52" stroke="#cce0ff" strokeWidth="1.5"/>
    </svg>
  ),

  dribbble: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="100" height="100" rx="22" fill="#ea4c89"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0"/>
      {/* Basketball */}
      <circle cx="50" cy="50" r="28" fill="#f27daa" opacity="0.4"/>
      <circle cx="50" cy="50" r="28" fill="none" stroke="white" strokeWidth="2.5"/>
      {/* Dribbble arcs */}
      <path d="M25 34 Q50 48 75 34" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M22 65 Q50 52 78 65" stroke="white" strokeWidth="2.5" fill="none"/>
      <line x1="50" y1="22" x2="50" y2="78" stroke="white" strokeWidth="2.5"/>
    </svg>
  ),

  behance: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="100" height="100" rx="22" fill="#053eff"/>
      {/* Behance B */}
      <text x="50" y="67" textAnchor="middle" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="52" fill="white">Be</text>
    </svg>
  ),

  github: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect width="100" height="100" rx="22" fill="#24292e"/>
      <path d="M50 15c-19.3 0-35 15.7-35 35 0 15.5 10 28.6 24 33.3 1.8.3 2.4-.8 2.4-1.7 0-.8-.1-3.6-.1-6.8-9.7 2.1-11.8-4.1-11.8-4.1-1.6-4-3.9-5-3.9-5-3.2-2.2.2-2.1.2-2.1 3.5.2 5.4 3.6 5.4 3.6 3.1 5.3 8.2 3.8 10.2 2.9.3-2.3 1.2-3.8 2.2-4.7-7.8-.9-16-3.9-16-17.4 0-3.8 1.4-7 3.6-9.4-.3-.9-1.6-4.5.3-9.3 0 0 2.9-.9 9.6 3.6 2.8-.8 5.8-1.2 8.8-1.2s6 .4 8.8 1.2c6.7-4.5 9.6-3.6 9.6-3.6 1.9 4.8.6 8.4.3 9.3 2.2 2.4 3.6 5.6 3.6 9.4 0 13.5-8.2 16.5-16 17.3 1.3 1.1 2.4 3.3 2.4 6.6 0 4.8-.1 8.6-.1 9.8 0 .9.6 2 2.4 1.7 14-4.7 24-17.8 24-33.3 0-19.3-15.7-35-35-35z" fill="white"/>
    </svg>
  ),

  linkedin: () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <defs>
        <linearGradient id="linkBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0082c9"/>
          <stop offset="100%" stopColor="#00679c"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#linkBg)"/>
      <g fill="white">
        <rect x="22" y="34" width="13" height="40" rx="2"/>
        <circle cx="28.5" cy="21.5" r="7.5"/>
        <path d="M42 34 h12.5 v5.5 c2.5-3.5 6.5-6.5 13.5-6.5 13 0 15 8 15 18.5 v22.5 h-13 v-20 c0-5-1.5-8-6.5-8-4 0-6.5 2.5-7.5 5.5-0.5 1.2-0.5 3-0.5 4.5 v18 h-13.5 v-40 z" />
      </g>
    </svg>
  ),
};

export default function DockIcon({ type }) {
  const Icon = icons[type.toLowerCase()];
  if (!Icon) return null;
  return <Icon />;
}

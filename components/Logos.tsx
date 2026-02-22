
import React from 'react';

export const LogoHorizontal: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 420 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    preserveAspectRatio="xMaxYMid meet"
  >
    {/* Icon - Moved closer and made bolder */}
    <g transform="translate(370, 45)">
      <path d="M0 -30L0 30M0 0L20 -18M0 0L28 0M0 0L20 18M0 0L-20 18M0 0L-28 0M0 0L-20 -18" stroke="#017768" strokeWidth="8" strokeLinecap="round"/>
      <path d="M-28 50L0 32L28 50" stroke="#b9995e" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    
    {/* Arabic Text - Enlarged and shifted */}
    <text 
      x="330" 
      y="55" 
      fill="#017768" 
      style={{ 
        fontFamily: "'Tajawal', sans-serif", 
        fontWeight: 900, 
        fontSize: '52px',
        letterSpacing: '-1px'
      }} 
      textAnchor="end"
    >
      هدية الخير
    </text>
    
    {/* English Text - Made bolder */}
    <text 
      x="330" 
      y="88" 
      fill="#b9995e" 
      style={{ 
        fontFamily: "'Tajawal', sans-serif", 
        fontWeight: 800, 
        fontSize: '22px',
        textTransform: 'uppercase'
      }} 
      textAnchor="end" 
      letterSpacing="1"
    >
      HADIYAH ALKHAIR
    </text>
  </svg>
);

export const LogoVertical: React.FC<{ className?: string, light?: boolean }> = ({ className, light }) => {
  const primary = light ? "#ffffff" : "#017768";
  const accent = light ? "#f3f4f6" : "#b9995e";
  
  return (
    <svg 
      viewBox="0 0 300 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Icon (Centered Top) */}
      <g transform="translate(150, 90)">
        <path d="M0 -45L0 45M0 0L32 -28M0 0L45 0M0 0L32 28M0 0L-32 28M0 0L-45 0M0 0L-32 -28" stroke={primary} strokeWidth="12" strokeLinecap="round"/>
        <path d="M-45 80L0 58L45 80" stroke={accent} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      
      {/* Arabic Text - Extra Bold */}
      <text 
        x="150" 
        y="235" 
        fill={primary} 
        style={{ 
          fontFamily: "'Tajawal', sans-serif", 
          fontWeight: 900, 
          fontSize: '60px' 
        }} 
        textAnchor="middle"
      >
        هدية الخير
      </text>
      
      {/* English Text */}
      <text 
        x="150" 
        y="285" 
        fill={accent} 
        style={{ 
          fontFamily: "'Tajawal', sans-serif", 
          fontWeight: 800, 
          fontSize: '28px' 
        }} 
        textAnchor="middle" 
        letterSpacing="2"
      >
        HADIYAH ALKHAIR
      </text>
    </svg>
  );
};


import React from 'react';
import { LawyerState } from '../types';

interface LawyerIconProps {
  className?: string;
  state?: LawyerState;
}

export const LawyerIcon: React.FC<LawyerIconProps> = ({ 
  className = "w-48 h-48", 
  state = LawyerState.Neutral 
}) => {
  return (
    <svg
      className={`${className} animate-bob`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Lawyer icon in ${state} state`}
    >
      <g id="lawyer-body">
        {/* Suit Body */}
        <path d="M35 60 C 30 70, 30 90, 35 110 H 85 C 90 90, 90 70, 85 60 Z" fill="#1e293b" />

        {/* Shirt */}
        <path d="M50 60 L60 55 L70 60 L60 70 Z" fill="#f1f5f9" />
        <path d="M50 60 L60 70 L70 60 V 80 H 50 V 60 Z" fill="#f1f5f9" />

        {/* Lapels */}
        <path d="M50 60 L35 60 C 45 75, 45 85, 50 100 V 60 Z" fill="#29374d" />
        <path d="M70 60 L85 60 C 75 75, 75 85, 70 100 V 60 Z" fill="#29374d" />
        
        {/* Tie */}
        <g className="animate-tie-sway">
            <path d="M55 70 L60 65 L65 70 L60 85 Z" fill="#991b1b" />
            <path d="M57 85 L60 95 L63 85 Z" fill="#991b1b" />
        </g>
      </g>
      
      <g id="lawyer-head" className={state === LawyerState.Thinking ? 'animate-head-tilt' : ''}>
        {/* Head */}
        <circle cx="60" cy="38" r="24" fill="#E4A07E" />
        
        {/* Hair */}
        <path d="M36 38 C 40 15, 80 15, 84 38" fill="#42281a" />
        <path d="M38 42 C 35 30, 45 22, 55 25" stroke="#5a3825" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Ears */}
        <circle cx="36" cy="42" r="4" fill="#E4A07E" />
        <path d="M36 40 C 37 42, 37 44, 36 46" stroke="#d39274" strokeWidth="1" fill="none" />
        <circle cx="84" cy="42" r="4" fill="#E4A07E" />
        <path d="M84 40 C 83 42, 83 44, 84 46" stroke="#d39274" strokeWidth="1" fill="none" />

        {/* Eyes & Eyebrows */}
        <g id="eyes" className="animate-subtle-blink">
          {/* Left Eye */}
          <circle cx="50" cy="38" r="2.5" fill="#1e293b" />
          {/* Right Eye */}
          <circle cx="70" cy="38" r="2.5" fill="#1e293b" />
        </g>
        
        {/* Eyebrows */}
        <path d={state === LawyerState.Thinking ? "M45 32 Q50 28 55 32" : "M45 32 Q50 30 55 32"} stroke="#42281a" strokeWidth="2.5" fill="none" strokeLinecap="round" className="transition-all" />
        <path d="M65 32 Q70 30 75 32" stroke="#42281a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Mouth Expressions */}
        <g id="mouth">
           {/* Neutral Mouth */}
           <path d="M55 50 Q60 52 65 50" stroke="#42281a" strokeWidth="2" fill="none" strokeLinecap="round" className={`transition-opacity duration-300 ${state === LawyerState.Neutral ? 'opacity-100' : 'opacity-0'}`} />
           
           {/* Thinking Mouth */}
           <path d="M56 51 Q60 50 64 51" stroke="#42281a" strokeWidth="2" fill="none" strokeLinecap="round" className={`transition-opacity duration-300 ${state === LawyerState.Thinking ? 'opacity-100' : 'opacity-0'}`} />
           
           {/* Confident Mouth */}
           <path d="M52 49 Q60 55 68 49" stroke="#42281a" strokeWidth="2" fill="none" strokeLinecap="round" className={`transition-opacity duration-300 ${state === LawyerState.Confident ? 'opacity-100' : 'opacity-0'}`} />
        </g>
      </g>
    </svg>
  );
};

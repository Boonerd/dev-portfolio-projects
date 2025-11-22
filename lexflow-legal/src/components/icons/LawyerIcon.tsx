// src/components/icons/LawyerIcon.tsx
import React from 'react';
import { LawyerGender } from '../../types'; 

interface LawyerIconProps {
  className?: string;
  gender?: LawyerGender;
}

const LawyerIcon: React.FC<LawyerIconProps> = ({ 
  className = "w-40 h-40", 
  gender = LawyerGender.Male
}) => {
  const wigFill = "#f8fafc";
  const wigStroke = "#d1d5db";
  const wigStrokeWidth = "1.5";
  const skinTone = "#E4A07E";

  const MaleAdvocate = () => (
    <>
      <g id="lawyer-body-male">
        <path d="M35 60 C 30 70, 30 90, 35 110 H 85 C 90 90, 90 70, 85 60 Z" fill="#1e293b" />
        <path d="M50 60 L60 55 L70 60 L60 70 Z" fill="#f1f5f9" />
        <path d="M50 60 L60 70 L70 60 V 80 H 50 V 60 Z" fill="#f1f5f9" />
        <path d="M50 60 L35 60 C 45 75, 45 85, 50 100 V 60 Z" fill="#29374d" />
        <path d="M70 60 L85 60 C 75 75, 75 85, 70 100 V 60 Z" fill="#29374d" />
        <g className="animate-tie-sway">
          <path d="M55 70 L60 65 L65 70 L60 85 Z" fill="#991b1b" />
          <path d="M57 85 L60 95 L63 85 Z" fill="#991b1b" />
        </g>
      </g>
      <g id="lawyer-head-male">
        <circle cx="60" cy="42" r="22" fill={skinTone} />
        <circle cx="38" cy="46" r="4" fill={skinTone} />
        <path d="M38 44 C 39 46, 39 48, 38 50" stroke="#d39274" strokeWidth="1" fill="none" />
        <circle cx="82" cy="46" r="4" fill={skinTone} />
        <path d="M82 44 C 81 46, 81 48, 82 50" stroke="#d39274" strokeWidth="1" fill="none" />
        <g id="wig-male">
          <path d="M40 32 C 38 18, 82 18, 80 32 Q 70 34, 60 32 Q 50 34, 40 32 Z" fill={wigFill} stroke={wigStroke} strokeWidth={wigStrokeWidth} />
          <path d="M50 21 C 55 19, 65 19, 70 21" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M48 25 C 55 23, 65 23, 72 25" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M52 29 C 55 27, 65 27, 68 29" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M38,38 C32,38 32,50 38,50 Z" fill={wigFill} stroke={wigStroke} strokeWidth={wigStrokeWidth} />
          <path d="M36,41 C34,42 34,43 36,44" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M36,46 C34,47 34,48 36,49" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M82,38 C88,38 88,50 82,50 Z" fill={wigFill} stroke={wigStroke} strokeWidth={wigStrokeWidth} />
          <path d="M84,41 C86,42 86,43 84,44" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M84,46 C86,47 86,48 84,49" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        </g>
        <g className="animate-subtle-blink">
          <circle cx="52" cy="42" r="2.5" fill="#1e293b" />
          <circle cx="68" cy="42" r="2.5" fill="#1e293b" />
        </g>
        <path d="M47 36 Q52 34 57 36" stroke="#29374d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M63 36 Q68 34 73 36" stroke="#29374d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M55 55 Q60 57 65 55" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </>
  );

  const FemaleAdvocate = () => (
    <>
      <g id="lawyer-body-female">
        <path d="M38 60 C 32 70, 32 90, 38 110 H 82 C 88 90, 88 70, 82 60 Z" fill="#1e293b" />
        <path d="M48 60 C 50 65, 70 65, 72 60 V 75 H 48 Z" fill="#f1f5f9" />
        <path d="M48 60 C 50 55, 70 55, 72 60" stroke="#d1d5db" strokeWidth="1" fill="none" />
        <path d="M48 60 L38 60 C 48 75, 48 85, 48 100 V 60 Z" fill="#29374d" />
        <path d="M72 60 L82 60 C 72 75, 72 85, 72 100 V 60 Z" fill="#29374d" />
      </g>
      <g id="lawyer-head-female">
        <circle cx="60" cy="45" r="21" fill={skinTone} />
        <circle cx="39" cy="48" r="3.5" fill={skinTone} />
        <path d="M39 46 C 40 48, 40 50, 39 51.5" stroke="#d39274" strokeWidth="1" fill="none" />
        <circle cx="81" cy="48" r="3.5" fill={skinTone} />
        <path d="M81 46 C 80 48, 80 50, 81 51.5" stroke="#d39274" strokeWidth="1" fill="none" />
        <g id="wig-female">
          <path d="M41 35 C 38 20, 82 20, 79 35 Q 70 38, 60 35 Q 50 38, 41 35 Z" fill={wigFill} stroke={wigStroke} strokeWidth={wigStrokeWidth} />
          <path d="M41,40 C35,40 35,52 41,52 Z" fill={wigFill} stroke={wigStroke} strokeWidth={wigStrokeWidth} />
          <path d="M39,43 C37,44 37,45 39,46" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M39,48 C37,49 37,50 39,51" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M79,40 C85,40 85,52 79,52 Z" fill={wigFill} stroke={wigStroke} strokeWidth={wigStrokeWidth} />
          <path d="M81,43 C83,44 83,45 81,46" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M81,48 C83,49 83,50 81,51" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          <path d="M50 24 C 55 22, 65 22, 70 24" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M52 28 C 55 26, 65 26, 68 28" stroke={wigStroke} strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>
        <g className="animate-subtle-blink">
          <circle cx="52" cy="44" r="2.5" fill="#1e293b" />
          <circle cx="68" cy="44" r="2.5" fill="#1e293b" />
        </g>
        <path d="M48 37 Q52 36 56 37" stroke="#29374d" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M64 37 Q68 36 72 37" stroke="#29374d" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M56 57 Q60 58 64 57" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </>
  );

  return (
    <svg
      className={`${className} animate-bob`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="briefcase" className="animate-briefcase-sway">
        <rect x="18" y="85" width="22" height="15" rx="2" fill="#854d0e" stroke="#6b4a2d" strokeWidth="1" />
        <path d="M25 85 Q 29 78 33 85" stroke="#6b4a2d" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="27.5" y="87" width="3" height="2" fill="#facc15" />
      </g>
      {gender === LawyerGender.Male ? <MaleAdvocate /> : <FemaleAdvocate />}
    </svg>
  );
};

export default LawyerIcon;
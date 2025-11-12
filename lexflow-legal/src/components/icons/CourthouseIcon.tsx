// src/components/icons/CourthouseIcon.tsx
export default function CourthouseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 10L12 3l9 7" />
      <path d="M2 10h20" />
      <path d="M4 10v10" />
      <path d="M8 10v10" />
      <path d="M16 10v10" />
      <path d="M20 10v10" />
      <path d="M2 20h20" />
    </svg>
  );
}
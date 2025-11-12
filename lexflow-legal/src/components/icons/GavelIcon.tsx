export default function GavelIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
      <path d="M12 12l-3-3 3-3 3 3-3 3z" />
      <path d="M2 22h20" />
    </svg>
  );
}
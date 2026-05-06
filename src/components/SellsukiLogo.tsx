export function SellsukiLogo({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* App icon style — rounded rect with S */}
      <rect width="120" height="120" rx="28" fill="url(#ssk_grad)" />
      <defs>
        <linearGradient id="ssk_grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      {/* Stylized S */}
      <path
        d="M38 42 C38 36 43 32 52 32 L72 32 C78 32 82 36 82 42 C82 48 78 52 72 52 L52 52 C46 52 40 56 40 62 C40 68 44 74 52 74 L74 74"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M82 78 C82 84 77 88 68 88 L46 88 C40 88 36 84 36 78 C36 72 40 68 46 68 L68 68 C74 68 80 64 80 58"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

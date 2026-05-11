/**
 * SellsukiLogo — Custom component (DS3 Gap #3: ไม่มีใน DS3 catalog)
 * Design: wordmark-style S icon ใน rounded rect, gradient Sky blue
 */
export function SellsukiLogo({ size = 96 }: { size?: number }) {
  const r = size * 0.233; // corner radius ratio
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sellsuki">
      <defs>
        <linearGradient id="logo_bg" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#56c4ff" />
          <stop offset="100%" stopColor="#1b8bf5" />
        </linearGradient>
      </defs>
      {/* Rounded rect background */}
      <rect width="96" height="96" rx={r} fill="url(#logo_bg)" />
      {/* S lettermark — double curve */}
      <path
        d="M62 28H44c-6 0-10 4-10 9s4 9 10 9h8c6 0 10 4 10 9s-4 9-10 9H34"
        stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    </svg>
  );
}

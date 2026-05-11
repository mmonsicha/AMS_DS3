/**
 * SellsukiLogo — Placeholder (DS3 Gap #3)
 * รูปแบบ: wordmark S บน rounded rect gradient Sky blue
 * ใช้จนกว่า DS3 จะ export Logo component จริง
 */
export function SellsukiLogo({ size = 96 }: { size?: number }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 96 96" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img" aria-label="Sellsuki"
    >
      <defs>
        <linearGradient id="ssk_g" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60cfff" />
          <stop offset="100%" stopColor="#1b8bf5" />
        </linearGradient>
        <clipPath id="ssk_clip">
          <rect width="96" height="96" rx="22" />
        </clipPath>
      </defs>
      <rect width="96" height="96" rx="22" fill="url(#ssk_g)" />
      {/* S lettermark — clean double-arc */}
      <path
        d="M63 30C63 30 57 26 48 26C39 26 32 31 32 38C32 45 38 48 48 48C58 48 64 51 64 58C64 65 57 70 48 70C39 70 33 66 33 66"
        stroke="white" strokeWidth="7.5" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

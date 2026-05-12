/**
 * SellsukiLogo — Figma-accurate placeholder
 * Figma: rf4iHkS4ndjkHPv8mex4aH — Logo component (node approx)
 * ใช้จนกว่า DS3 จะ export Logo component จริง (Gap #3)
 *
 * Design spec:
 * - Shape: rounded rect, rx=22 (≈23% of 96px)
 * - Background: Sky gradient #60cfff → #1b8bf5
 * - S lettermark: white, stroke 7.5px, rounded ends
 * - Size: 96px default (120px ใน Figma header)
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
        <linearGradient id="ssk_logo_g" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60cfff" />
          <stop offset="100%" stopColor="#1b8bf5" />
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="22" fill="url(#ssk_logo_g)" />
      <path
        d="M63 30C63 30 57 26 48 26C39 26 32 31 32 38C32 45 38 48 48 48C58 48 64 51 64 58C64 65 57 70 48 70C39 70 33 66 33 66"
        stroke="white" strokeWidth="7.5" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

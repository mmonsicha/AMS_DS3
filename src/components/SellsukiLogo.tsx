/**
 * SellsukiLogo — Brand placeholder (DS3 Gap #3)
 * ใช้จนกว่า DS3 จะ export Logo component จริง
 * Style: wordmark S บน gradient Sky-400→Sky-600 rounded rect
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
        <linearGradient id="ssk_bg" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="ssk_shine" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="96" height="96" rx="22" fill="url(#ssk_bg)" />
      {/* Shine overlay */}
      <rect width="96" height="40" rx="22" fill="url(#ssk_shine)" />
      {/* S lettermark */}
      <path
        d="M62 30C62 30 56 26 47 26C38 26 31 31 31 38.5C31 46 37.5 49 47 49C56.5 49 63 52 63 59.5C63 67 56 70 47 70C38 70 32 66 32 66"
        stroke="white" strokeWidth="8" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

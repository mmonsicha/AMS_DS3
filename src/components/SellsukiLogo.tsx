// ════════════════════════════════════════════════
// SellsukiLogo — Official SVG logo component
// Source: Sellsuki_Logo.svg (ported from Amsauthentication-main)
// ════════════════════════════════════════════════
interface SellsukiLogoProps {
  size?: number
  className?: string
}

export function SellsukiLogo({ size = 96, className }: SellsukiLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sellsuki"
    >
      {/* Center diamond */}
      <path d="M26.7304 19.8598H18.7227L22.727 23.8631L26.7304 19.8598Z" fill="#09193A" />

      {/* Right upper wing — light gray */}
      <path d="M22.727 23.8631L30.9827 32.1188L35.5745 27.4101C36.1152 26.8562 36.4171 26.1133 36.4171 25.3388V19.8598H26.7314L22.727 23.8641L22.727 23.8631Z" fill="#E6EAEE" />

      {/* Right upper wing — Blue gradient */}
      <path
        d="M36.416 12.0614C36.412 11.3693 35.5461 11.0441 35.0562 11.534L26.7304 19.8598L22.726 23.8641L30.9817 32.1198L35.5735 27.4111C36.1142 26.8572 36.416 26.1143 36.416 25.3398V12.0777C36.416 12.072 36.416 12.0667 36.416 12.0614Z"
        fill="url(#logo_g0)"
      />

      {/* Left lower wing — light gray */}
      <path d="M18.7227 19.8598L9.28601 19.8598V25.3378C9.28601 26.1123 9.58888 26.8562 10.1296 27.4101L14.6004 31.9887L22.726 23.8631L18.7217 19.8587L18.7227 19.8598Z" fill="#E6EAEE" />

      {/* Bottom wing — light gray */}
      <path d="M14.6014 31.9887L18.3243 35.802C20.8112 38.3489 24.9081 38.3479 27.393 35.7989L30.9817 32.1188L22.726 23.8631L14.6004 31.9887L14.6014 31.9887Z" fill="#E6EAEE" />

      {/* Bottom wing — Blue gradient */}
      <path
        d="M14.6014 31.9887L18.3243 35.802C20.8112 38.3489 24.9081 38.3479 27.393 35.7989L30.9817 32.1188L22.726 23.8631L14.6004 31.9887Z"
        fill="url(#logo_g1)"
      />

      {/* Left upper wing — Orange gradient */}
      <path
        d="M22.727 23.8631L10.4467 11.5827C10.0188 11.1548 9.28703 11.4567 9.28601 12.0624V25.0542C9.28601 25.5128 9.46896 25.9534 9.79591 26.2831L14.6014 31.1673L22.727 23.8631Z"
        fill="url(#logo_g2)"
      />

      {/* Top dot — Blue gradient */}
      <path
        d="M36.4171 9.96374C35.1487 9.96374 34.1212 8.96468 34.1212 7.73187C34.1212 6.49906 35.1487 5.5 36.4171 5.5C37.6855 5.5 38.713 6.49906 38.713 7.73187C38.713 8.96468 37.6855 9.96374 36.4171 9.96374Z"
        fill="url(#logo_g3)"
      />

      <defs>
        {/* Blue: #00CFF4 → #00BBF4 → #0098F5 */}
        <linearGradient id="logo_g0" x1="22.726" y1="11.534" x2="36.416" y2="32.1198" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00CFF4" />
          <stop offset="50%" stopColor="#00BBF4" />
          <stop offset="100%" stopColor="#0098F5" />
        </linearGradient>

        <linearGradient id="logo_g1" x1="14.6" y1="23.863" x2="30.982" y2="38.349" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00CFF4" />
          <stop offset="50%" stopColor="#00BBF4" />
          <stop offset="100%" stopColor="#0098F5" />
        </linearGradient>

        {/* Orange: #F5B059 → #F37E37 → #F35B1F */}
        <linearGradient id="logo_g2" x1="9.286" y1="11.458" x2="22.727" y2="31.167" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5B059" />
          <stop offset="50%" stopColor="#F37E37" />
          <stop offset="100%" stopColor="#F35B1F" />
        </linearGradient>

        {/* Blue dot */}
        <linearGradient id="logo_g3" x1="34.121" y1="5.5" x2="38.713" y2="9.964" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00CFF4" />
          <stop offset="50%" stopColor="#00BBF4" />
          <stop offset="100%" stopColor="#0098F5" />
        </linearGradient>
      </defs>
    </svg>
  )
}

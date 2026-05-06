export function SellsukiLogo({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
      <rect width="120" height="120" rx="24" fill="#32a9ff"/>
      <text x="60" y="72" textAnchor="middle" fill="white"
        fontFamily="DB HeaventRounded, sans-serif" fontSize="36" fontWeight="700">
        SSK
      </text>
    </svg>
  );
}

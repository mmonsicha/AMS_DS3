/**
 * ChocbarMenu — App Switcher Dropdown
 * Figma: CRM-Posh-2025 node 476:29075
 * DS3 Gap #3 — no equivalent in @uxuissk/design-system
 * GitHub Issue: DS3 Gap #3 ChocbarMenu / App Switcher
 */
import { useNavigate } from "react-router";
import akitaLogo   from "../../assets/logo-akita.png";
import patonaLogo  from "../../assets/logo-patona.png";
import oc2plusLogo from "../../assets/logo-oc2plus.png";

const FONT = "DB HeaventRounded, sans-serif";

const CLR = {
  bg:           "#ffffff",
  border:       "#e5e7eb",
  text:         "#1f2937",
  textMuted:    "#6b7280",
  sectionLabel: "#9ca3af",
  iconBg:       "#fcefe7",
  iconBorder:   "#f9ddce",
  hoverBg:      "#f9fafb",
};

// Cog icon (Settings / Company Management)
function CogIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

const APPS = [
  {
    id:       "akita",
    name:     "Akita",
    subtitle: "บริการคลังสินค้าครบวงจร",
    logo:     akitaLogo,
    route:    "/akita",
  },
  {
    id:       "patona",
    name:     "Patona",
    subtitle: "ผู้ช่วยของคนทำธุรกิจ",
    logo:     patonaLogo,
    route:    "/patona",
  },
  {
    id:       "oc2plus",
    name:     "Oc2plus",
    subtitle: "เครื่องมือจัดเก็บข้อมูล สำหรับวางแผนการตลาด",
    logo:     oc2plusLogo,
    route:    "/oc2plus",
  },
];

type Props = { onClose: () => void };

export function ChocbarMenu({ onClose }: Props) {
  const navigate = useNavigate();

  const handleNav = (route: string) => {
    onClose();
    navigate(route);
  };

  return (
    <div
      style={{
        background:   CLR.bg,
        border:       `1px solid ${CLR.border}`,
        borderRadius: 12,
        boxShadow:    "0px 8px 24px rgba(17,24,39,0.12), 0px 2px 8px rgba(17,24,39,0.08)",
        boxSizing:    "border-box",
        fontFamily:   FONT,
        padding:      16,
        position:     "fixed",
        right:        60,
        top:          80,
        width:        324,
        zIndex:       50,
      }}
    >
      {/* Section: ระบบจัดการ */}
      <div style={{ marginBottom: 12 }}>
        <span style={{ color: CLR.sectionLabel, display: "block", fontSize: 14, fontWeight: 500, marginBottom: 4, paddingLeft: 8 }}>
          ระบบจัดการ
        </span>
        <button
          onClick={() => handleNav("/app-selector")}
          style={{
            alignItems:    "center",
            background:    "none",
            border:        "none",
            borderRadius:  8,
            cursor:        "pointer",
            display:       "flex",
            gap:           12,
            padding:       "8px 8px",
            transition:    "background 0.15s",
            width:         "100%",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = CLR.hoverBg)}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}
        >
          <div style={{
            alignItems:    "center",
            background:    CLR.iconBg,
            border:        `1px solid ${CLR.iconBorder}`,
            borderRadius:  8,
            display:       "flex",
            flexShrink:    0,
            height:        40,
            justifyContent:"center",
            width:         40,
          }}>
            <CogIcon />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ color: CLR.text, fontSize: 16, fontWeight: 500 }}>Company Management</div>
            <div style={{ color: CLR.textMuted, fontSize: 13 }}>จัดการข้อมูลบริษัท</div>
          </div>
        </button>
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${CLR.border}`, marginBottom: 12 }} />

      {/* Section: แอปพลิเคชัน */}
      <div>
        <span style={{ color: CLR.sectionLabel, display: "block", fontSize: 14, fontWeight: 500, marginBottom: 4, paddingLeft: 8 }}>
          แอปพลิเคชัน
        </span>
        {APPS.map((app) => (
          <button
            key={app.id}
            onClick={() => handleNav(app.route)}
            style={{
              alignItems:   "center",
              background:   "none",
              border:       "none",
              borderRadius: 8,
              cursor:       "pointer",
              display:      "flex",
              gap:          12,
              padding:      "8px 8px",
              transition:   "background 0.15s",
              width:        "100%",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = CLR.hoverBg)}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}
          >
            <img
              alt={app.name}
              src={app.logo}
              style={{ flexShrink: 0, height: 40, objectFit: "contain", width: 40 }}
            />
            <div style={{ textAlign: "left" }}>
              <div style={{ color: CLR.text, fontSize: 16, fontWeight: 500 }}>{app.name}</div>
              <div style={{ color: CLR.textMuted, fontSize: 13, whiteSpace: "normal" }}>{app.subtitle}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

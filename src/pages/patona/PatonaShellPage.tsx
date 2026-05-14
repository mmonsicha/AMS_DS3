/**
 * PatonaShellPage — App Shell (Phase 1)
 * Patona Seller Center layout skeleton
 */
import { useNavigate } from "react-router";

const FONT      = "DB HeaventRounded, sans-serif";
const CLR_BG    = "#f9fafb";
const CLR_SIDEBAR = "#ffffff";
const CLR_HEADER  = "#ffffff";
const CLR_BRAND   = "#32a9ff";
const CLR_TEXT    = "#1f2937";
const CLR_SUBTLE  = "#6b7280";
const CLR_BORDER  = "#e5e7eb";

const SIDEBAR_W = 240;
const HEADER_H  = 56;

const PatonaLogo = () => (
  <svg fill="none" height={28} viewBox="0 0 90 28" width={90}>
    <text dominantBaseline="middle" fill={CLR_BRAND} fontFamily="DB HeaventRounded, sans-serif" fontSize={20} fontWeight={700} x={0} y={14}>
      Patona
    </text>
  </svg>
);

const MenuIcon = () => (
  <svg fill="none" height={20} stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" width={20}>
    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BackIcon = () => (
  <svg fill="none" height={20} stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" width={20}>
    <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NAV_ITEMS = [
  { icon: "🏠", label: "หน้าหลัก", path: "/" },
  { icon: "📦", label: "สินค้า", path: "/products" },
  { icon: "🛒", label: "คำสั่งซื้อ", path: "/orders" },
  { icon: "🏪", label: "ร้านค้า", path: "/shop" },
  { icon: "📊", label: "รายงาน", path: "/reports" },
  { icon: "⚙️", label: "ตั้งค่า", path: "/settings" },
];

export default function PatonaShellPage() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", fontFamily: FONT, minHeight: "100vh" }}>

      {/* Sidebar */}
      <aside style={{
        background: CLR_SIDEBAR,
        borderRight: `1px solid ${CLR_BORDER}`,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        height: "100vh",
        left: 0,
        overflowY: "auto",
        position: "fixed",
        top: 0,
        width: SIDEBAR_W,
        zIndex: 20,
      }}>

        {/* Sidebar header */}
        <div style={{
          alignItems: "center",
          borderBottom: `1px solid ${CLR_BORDER}`,
          display: "flex",
          gap: 8,
          height: HEADER_H,
          padding: "0 16px",
        }}>
          <PatonaLogo />
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, padding: "12px 8px" }}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.path}
              style={{
                alignItems: "center",
                borderRadius: 8,
                color: CLR_TEXT,
                cursor: "not-allowed",
                display: "flex",
                fontSize: 16,
                fontWeight: 500,
                gap: 10,
                opacity: 0.45,
                padding: "10px 12px",
              }}
            >
              <span style={{ fontSize: 18, lineHeight: 1 }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>

        {/* Back to App Selector */}
        <div style={{ borderTop: `1px solid ${CLR_BORDER}`, padding: "12px 8px" }}>
          <button
            onClick={() => navigate("/app-selector")}
            style={{
              alignItems: "center",
              background: "none",
              border: "none",
              borderRadius: 8,
              color: CLR_SUBTLE,
              cursor: "pointer",
              display: "flex",
              fontSize: 15,
              gap: 8,
              padding: "10px 12px",
              width: "100%",
            }}
          >
            <BackIcon />
            กลับหน้าเลือกระบบ
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div style={{ display: "flex", flex: 1, flexDirection: "column", marginLeft: SIDEBAR_W }}>

        {/* Top header */}
        <header style={{
          alignItems: "center",
          background: CLR_HEADER,
          borderBottom: `1px solid ${CLR_BORDER}`,
          boxSizing: "border-box",
          display: "flex",
          height: HEADER_H,
          justifyContent: "space-between",
          left: SIDEBAR_W,
          padding: "0 24px",
          position: "fixed",
          right: 0,
          top: 0,
          zIndex: 10,
        }}>
          <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <MenuIcon />
            <span style={{ color: CLR_TEXT, fontSize: 18, fontWeight: 600 }}>
              Patona Seller Center
            </span>
          </div>
          <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
            <div style={{
              alignItems: "center",
              background: CLR_BG,
              border: `1px solid ${CLR_BORDER}`,
              borderRadius: 20,
              display: "flex",
              gap: 8,
              padding: "4px 14px",
            }}>
              <div style={{
                background: CLR_BRAND,
                borderRadius: "50%",
                height: 28,
                width: 28,
              }} />
              <span style={{ color: CLR_TEXT, fontSize: 14, fontWeight: 500 }}>Username</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main style={{
          background: CLR_BG,
          boxSizing: "border-box",
          flex: 1,
          marginTop: HEADER_H,
          minHeight: `calc(100vh - ${HEADER_H}px)`,
          padding: 32,
        }}>
          <div style={{
            alignItems: "center",
            border: `2px dashed ${CLR_BORDER}`,
            borderRadius: 12,
            color: CLR_SUBTLE,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            justifyContent: "center",
            minHeight: 400,
          }}>
            <span style={{ fontSize: 48 }}>🚧</span>
            <span style={{ fontSize: 24, fontWeight: 600 }}>Patona Seller Center</span>
            <span style={{ fontSize: 16 }}>กำลังพัฒนา — Phase 1 App Shell</span>
          </div>
        </main>
      </div>
    </div>
  );
}

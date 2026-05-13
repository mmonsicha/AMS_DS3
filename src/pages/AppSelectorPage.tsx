import { useNavigate } from "react-router";
import { SellsukiLogo } from "../components/SellsukiLogo";

const FONT = "DB HeaventRounded, sans-serif";

const CLR = {
  pageBg:    "#F9FAFB",
  white:     "#FFFFFF",
  border:    "#E5E7EB",
  borderActive: "#EC5E2A",
  primary:   "#EC5E2A",
  primaryBg: "#FCEFE7",
  gray400:   "#9CA3AF",
  gray500:   "#6B7280",
  gray800:   "#1F2937",
  gray900:   "#111827",
  disabled:  "#F3F4F6",
};

const APPS = [
  {
    id: "patona",
    name: "Patona",
    desc: "Seller Center — จัดการร้านค้าออนไลน์และออฟไลน์",
    icon: "🏪",
    url: "https://sellercenter.patona.online",
    available: true,
  },
  { id: "app2", name: "ระบบที่ 2", desc: "อยู่ระหว่างการพัฒนา", icon: "📦", url: null, available: false },
  { id: "app3", name: "ระบบที่ 3", desc: "อยู่ระหว่างการพัฒนา", icon: "📊", url: null, available: false },
  { id: "app4", name: "ระบบที่ 4", desc: "อยู่ระหว่างการพัฒนา", icon: "🛒", url: null, available: false },
  { id: "app5", name: "ระบบที่ 5", desc: "อยู่ระหว่างการพัฒนา", icon: "💬", url: null, available: false },
  { id: "app6", name: "ระบบที่ 6", desc: "อยู่ระหว่างการพัฒนา", icon: "⚙️", url: null, available: false },
];

export default function AppSelectorPage() {
  const navigate = useNavigate();

  const handleNavigate = (app: typeof APPS[0]) => {
    if (!app.available || !app.url) return;
    window.location.href = app.url;
  };

  const handleLogout = () => {
    navigate("/ams-ds3", { state: { toast: "ออกจากระบบแล้ว", toastType: "info" } });
  };

  return (
    <ssk-theme-provider brand="ccs3">
      <div style={{ background: CLR.pageBg, display: "flex", flexDirection: "column", fontFamily: FONT, minHeight: "100vh" }}>

        {/* ── Header ── */}
        <header style={{ alignItems: "center", background: CLR.white, borderBottom: `1px solid ${CLR.border}`, boxSizing: "border-box", display: "flex", height: 72, justifyContent: "space-between", padding: "0 40px", width: "100%" }}>
          <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
            <SellsukiLogo size={40} />
            <span style={{ color: CLR.gray800, fontSize: 24, fontWeight: 600 }}>เลือกระบบที่ต้องการเข้าใช้</span>
          </div>
          <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
            <ssk-avatar size="sm" themeColor="primary" label="U" shape="circle" />
            <ssk-button
              variant="outline"
              size="md"
              themeColor="primary"
              onClick={handleLogout}
            >
              ออกจากระบบ
            </ssk-button>
          </div>
        </header>

        {/* ── Body ── */}
        <main style={{ alignItems: "center", display: "flex", flex: 1, flexDirection: "column", gap: 40, padding: "60px 40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "center" }}>
            <span style={{ color: CLR.gray900, fontSize: 36, fontWeight: 700 }}>ยินดีต้อนรับสู่ Sellsuki</span>
            <span style={{ color: CLR.gray500, fontSize: 20 }}>กรุณาเลือกระบบที่ต้องการเข้าใช้งาน</span>
          </div>

          {/* App Grid */}
          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(3, 1fr)", maxWidth: 960, width: "100%" }}>
            {APPS.map((app) =>
              app.available ? (
                <div
                  key={app.id}
                  onClick={() => handleNavigate(app)}
                  style={{
                    alignItems: "center", background: CLR.white, border: `2px solid ${CLR.border}`,
                    borderRadius: 10, boxSizing: "border-box", cursor: "pointer", display: "flex",
                    flexDirection: "column", gap: 16, padding: "32px 24px", textAlign: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = CLR.borderActive;
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(236,94,42,0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = CLR.border;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: 48 }}>{app.icon}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ color: CLR.gray900, fontSize: 24, fontWeight: 600 }}>{app.name}</span>
                    <span style={{ color: CLR.gray500, fontSize: 18 }}>{app.desc}</span>
                  </div>
                  <ssk-button variant="solid" size="md" themeColor="primary">เข้าใช้งาน</ssk-button>
                </div>
              ) : (
                <ssk-tooltip
                  key={app.id}
                  label="เร็วๆ นี้"
                  placement="top"
                  trigger="hover"
                  size="md"
                  themeColor="primary"
                  hideArrow={false}
                  hideCloseButton={true}
                >
                  <div
                    style={{
                      alignItems: "center", background: CLR.disabled, border: `2px solid ${CLR.border}`,
                      borderRadius: 10, boxSizing: "border-box", cursor: "not-allowed", display: "flex",
                      flexDirection: "column", gap: 16, opacity: 0.55, padding: "32px 24px",
                      position: "relative", textAlign: "center",
                    }}
                  >
                    {/* Coming Soon badge */}
                    <div style={{
                      background: CLR.border, borderRadius: 6, fontSize: 16, fontWeight: 500,
                      padding: "2px 10px", position: "absolute", right: 12, top: 12,
                    }}>
                      <span style={{ color: CLR.gray500 }}>Coming Soon</span>
                    </div>
                    <span style={{ filter: "grayscale(1)", fontSize: 48 }}>{app.icon}</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <span style={{ color: CLR.gray400, fontSize: 24, fontWeight: 600 }}>{app.name}</span>
                      <span style={{ color: CLR.gray400, fontSize: 18 }}>{app.desc}</span>
                    </div>
                  </div>
                </ssk-tooltip>
              )
            )}
          </div>
        </main>

        {/* ── Footer ── */}
        <footer style={{ borderTop: `1px solid ${CLR.border}`, padding: "16px", textAlign: "center" }}>
          <span style={{ color: CLR.gray400, fontSize: 18 }}>AMS v1.0.0 | Powered by Sellsuki DS3</span>
        </footer>

      </div>
    </ssk-theme-provider>
  );
}

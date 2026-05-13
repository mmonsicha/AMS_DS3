/**
 * AppSelectorPage — Phase 0 (Post-Login)
 * DS3 MCP: @uxuissk/design-system (DSButton, Card, CardBody, Badge, Tooltip, Avatar)
 * Route: /app-selector
 */
import { useNavigate } from "react-router";
import { Avatar, Badge, Card, CardBody, DSButton, Tooltip } from "@uxuissk/design-system";
import { SellsukiLogo } from "../components/SellsukiLogo";

const FONT = "DB HeaventRounded, sans-serif";
const CLR_PAGE   = "var(--bg-secondary, #F3F4F6)";
const CLR_WHITE  = "#ffffff";
const CLR_BORDER = "var(--border-primary, #E5E7EB)";
const CLR_ACTIVE = "#EC5E2A";
const CLR_H      = "var(--text-primary, #1f2937)";
const CLR_SUB    = "var(--text-secondary, #6b7280)";
const CLR_MUTED  = "var(--text-placeholder, #9ca3af)";

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

  const handleLogout = () => {
    navigate("/ams-ds3", { state: { toast: "ออกจากระบบแล้ว", toastType: "info" } });
  };

  return (
    <div style={{ background: CLR_PAGE, display: "flex", flexDirection: "column", fontFamily: FONT, minHeight: "100vh" }}>

      {/* ── Header ── */}
      <header style={{
        alignItems: "center", background: CLR_WHITE, borderBottom: `1px solid ${CLR_BORDER}`,
        boxSizing: "border-box", display: "flex", height: 72,
        justifyContent: "space-between", padding: "0 40px", width: "100%",
      }}>
        <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
          <SellsukiLogo size={40} />
          <span style={{ color: CLR_H, fontSize: 24, fontWeight: 600 }}>
            เลือกระบบที่ต้องการเข้าใช้
          </span>
        </div>
        <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
          <Avatar name="User" size="sm" />
          <DSButton size="md" variant="outline" onClick={handleLogout}>
            ออกจากระบบ
          </DSButton>
        </div>
      </header>

      {/* ── Body ── */}
      <main style={{ alignItems: "center", display: "flex", flex: 1, flexDirection: "column", gap: 40, padding: "60px 40px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "center" }}>
          <span style={{ color: CLR_H, fontSize: 36, fontWeight: 700 }}>ยินดีต้อนรับสู่ Sellsuki</span>
          <span style={{ color: CLR_SUB, fontSize: 20 }}>กรุณาเลือกระบบที่ต้องการเข้าใช้งาน</span>
        </div>

        {/* App Grid */}
        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(3, 1fr)", maxWidth: 960, width: "100%" }}>
          {APPS.map((app) => (
            <Tooltip key={app.id} content={app.available ? undefined! : "เร็วๆ นี้"} placement="top">
              <div
                onClick={() => app.available && app.url && (window.location.href = app.url)}
                style={{
                  cursor: app.available ? "pointer" : "not-allowed",
                  opacity: app.available ? 1 : 0.55,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  if (!app.available) return;
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-2px)";
                  const card = el.querySelector<HTMLElement>(".app-card-inner");
                  if (card) card.style.borderColor = CLR_ACTIVE;
                }}
                onMouseLeave={e => {
                  if (!app.available) return;
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  const card = el.querySelector<HTMLElement>(".app-card-inner");
                  if (card) card.style.borderColor = CLR_BORDER;
                }}
              >
                <Card elevation="sm">
                  <CardBody>
                    <div
                      className="app-card-inner"
                      style={{
                        alignItems: "center", border: `2px solid ${CLR_BORDER}`, borderRadius: 8,
                        boxSizing: "border-box", display: "flex", flexDirection: "column",
                        gap: 16, padding: 24, position: "relative", textAlign: "center",
                        transition: "border-color 0.2s ease",
                      }}
                    >
                      {!app.available && (
                        <div style={{ position: "absolute", right: 12, top: 12 }}>
                          <Badge variant="secondary" size="sm">Coming Soon</Badge>
                        </div>
                      )}
                      <span style={{ filter: app.available ? "none" : "grayscale(1)", fontSize: 48 }}>
                        {app.icon}
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        <span style={{ color: app.available ? CLR_H : CLR_MUTED, fontSize: 24, fontWeight: 600 }}>
                          {app.name}
                        </span>
                        <span style={{ color: CLR_SUB, fontSize: 18 }}>{app.desc}</span>
                      </div>
                      {app.available && (
                        <DSButton fullWidth size="md" variant="primary">เข้าใช้งาน</DSButton>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Tooltip>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${CLR_BORDER}`, padding: 16, textAlign: "center" }}>
        <span style={{ color: CLR_MUTED, fontSize: 18 }}>AMS v1.0.0 | Powered by Sellsuki DS3</span>
      </footer>

    </div>
  );
}

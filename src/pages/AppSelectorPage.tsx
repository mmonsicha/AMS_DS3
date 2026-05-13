/**
 * AppSelectorPage — Phase 0 (Post-Login)
 * Figma: CRM-Posh-2025 node 476:14001
 * DS3 MCP: DSButton (available)
 * Custom: AppCard (see GitHub Issue #1)
 */
import { useLocation, useNavigate } from "react-router";
import { DSButton } from "@uxuissk/design-system";
import { SellsukiLogo } from "../components/SellsukiLogo";
import { AppCard } from "../components/custom/AppCard";
import akitaLogo   from "../assets/logo-akita.png";
import patonaLogo  from "../assets/logo-patona.png";
import oc2plusLogo from "../assets/logo-oc2plus.png";
import bgLeft  from "../assets/app-selector-bg-left.png";
import bgRight from "../assets/app-selector-bg-right.png";

const FONT      = "DB HeaventRounded, sans-serif";
const CLR_PAGE  = "var(--bg-secondary, #f9fafb)";
const CLR_H     = "var(--text-primary, #1f2937)";
const CLR_BRAND = "#32a9ff";

const LogoutIcon = () => (
  <svg fill="currentColor" height={24} viewBox="0 0 24 24" width={24}>
    <path clipRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9a.75.75 0 01-1.5 0V5.25A1.5 1.5 0 0013.5 3.75h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" fillRule="evenodd" />
  </svg>
);

const PlusIcon = () => (
  <svg fill="none" height={24} stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" width={24}>
    <path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const APPS = [
  { id: "akita",   name: "Akita",   logo: akitaLogo,   url: null,                                      available: true },
  { id: "patona",  name: "Patona",  logo: patonaLogo,  url: "https://sellercenter.patona.online",      available: true },
  { id: "oc2plus", name: "Oc2plus", logo: oc2plusLogo, url: null,                                      available: true },
];

export default function AppSelectorPage() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const state    = location.state as { email?: string; name?: string } | null;
  const email    = state?.email ?? "";
  const name     = state?.name  ?? "";
  const username = name || (email.includes("@") ? email.split("@")[0] : email) || "Username";

  const handleLogout = () => {
    navigate("/ams-ds3", { state: { toast: "ออกจากระบบแล้ว", toastType: "info" } });
  };

  const handleAddApp = () => {
    // TODO: implement add-application flow
  };

  return (
    <div style={{
      alignItems: "center",
      background: CLR_PAGE,
      display: "flex",
      fontFamily: FONT,
      justifyContent: "center",
      minHeight: "100vh",
      position: "relative",
    }}>

      {/* Background mascots — fixed bottom corners */}
      <img
        alt=""
        src={bgLeft}
        style={{ bottom: 0, left: 0, maxHeight: 600, pointerEvents: "none", position: "fixed", width: 600 }}
      />
      <img
        alt=""
        src={bgRight}
        style={{ bottom: 0, maxHeight: 600, pointerEvents: "none", position: "fixed", right: 0, width: 600 }}
      />

      {/* Center card */}
      <div style={{
        background: "#ffffff",
        borderRadius: 12,
        boxShadow: "0px 1px 3px rgba(10,13,18,0.1), 0px 1px 1.5px rgba(10,13,18,0.06)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        padding: "32px 40px",
        position: "relative",
        zIndex: 1,
      }}>

        {/* Header: logo + greeting */}
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: 16 }}>
          <SellsukiLogo size={55} />
          <div style={{ alignItems: "baseline", display: "flex", fontSize: 36, fontWeight: 700, gap: 8, lineHeight: 1 }}>
            <span style={{ color: CLR_H }}>สวัสดี!,</span>
            <span style={{ color: CLR_BRAND }}>{username}</span>
          </div>
        </div>

        {/* App selector */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ color: CLR_H, fontSize: 24, fontWeight: 500, lineHeight: 1 }}>
            กรุณาเลือกระบบที่ต้องการเข้าใช้งาน
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {APPS.map((app) => (
              <AppCard
                key={app.id}
                logo={
                  <img
                    alt={app.name}
                    src={app.logo}
                    style={{ height: 72, objectFit: "contain", width: 72 }}
                  />
                }
                name={app.name}
                disabled={!app.available}
                onClick={() => app.url ? (window.location.href = app.url) : undefined}
              />
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ flex: 1 }}>
            <DSButton fullWidth size="md" variant="outline" onClick={handleLogout}>
              <span style={{ alignItems: "center", display: "flex", gap: 8, justifyContent: "center" }}>
                <LogoutIcon />
                ออกจากระบบ
              </span>
            </DSButton>
          </div>
          <div style={{ flex: 1 }}>
            <DSButton fullWidth size="md" variant="primary" onClick={handleAddApp}>
              <span style={{ alignItems: "center", display: "flex", gap: 8, justifyContent: "center" }}>
                <PlusIcon />
                เพิ่มแอปพลิเคชัน
              </span>
            </DSButton>
          </div>
        </div>

      </div>
    </div>
  );
}

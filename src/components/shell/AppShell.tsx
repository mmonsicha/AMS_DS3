/**
 * AppShell — Shared layout for Akita, Patona, Oc2plus
 * Figma: CRM-Posh-2025 node 498:1044
 * DS3: Divider (sidebar separator)
 * Custom: Header, Sidebar, ChocbarMenu, AccountMenuDropdown (DS3 Gap #2–#5)
 */
import { useState } from "react";
import { useNavigate } from "react-router";
import { Divider } from "@uxuissk/design-system";
import { SellsukiLogo } from "../SellsukiLogo";
import { ChocbarMenu } from "../custom/ChocbarMenu";
import { AccountMenuDropdown } from "../custom/AccountMenuDropdown";

// ─── Types ───────────────────────────────────────────────────────────────────

export type NavItem = {
  label: string;
  icon: React.ReactNode;
  badge?: number;
  active?: boolean;
  onClick?: () => void;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
  defaultExpanded?: boolean;
};

export type AppShellProps = {
  systemName: string;
  navGroups: NavGroup[];
  bottomNavItems?: NavItem[];
  children: React.ReactNode;
  username?: string;
  userInitials?: string;
  userEmail?: string;
  companyName?: string;
  branchName?: string;
};

// ─── Constants ───────────────────────────────────────────────────────────────

const FONT = "DB HeaventRounded, sans-serif";
const HEADER_H = 72;
const SIDEBAR_W = 256;

const CLR = {
  bg: "#ffffff",
  bgPage: "#f9fafb",
  bgBrand: "#f0f9ff",
  bgBrandBtn: "#d9f2ff",
  border: "#e5e7eb",
  borderBrand: "#d9f2ff",
  text: "#1f2937",
  textMuted: "#6b7280",
  textBrand: "#32a9ff",
  brand: "#32a9ff",
};

// ─── Icons (inline SVG — DS3 has no icon package, Gap #2) ────────────────────

const Path = ({ d, size = 24, stroke = CLR.text, fill = "none" }: {
  d: string; size?: number; stroke?: string; fill?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const PATHS = {
  hamburger: "M3.75 6.75h16.5M3.75 12h10.5m-10.5 5.25h16.5",
  bell:      "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
  search:    "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  chevDown:  "M19.5 8.25l-7.5 7.5-7.5-7.5",
  chevUp:    "M4.5 15.75l7.5-7.5 7.5 7.5",
  back:      "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75",
};

function GridDotsIcon({ color = CLR.brand }: { color?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
      {[5, 12, 19].flatMap(x => [5, 12, 19].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={2} />
      )))}
    </svg>
  );
}

function IconBtn({
  children, onClick, bg, title, active,
}: {
  children: React.ReactNode; onClick?: () => void; bg?: string;
  title?: string; active?: boolean;
}) {
  return (
    <button
      title={title}
      onClick={onClick}
      style={{
        alignItems: "center",
        background: bg ?? (active ? CLR.bgBrandBtn : "transparent"),
        border: "none",
        borderRadius: 8,
        cursor: "pointer",
        display: "flex",
        padding: 8,
        transition: "background 0.15s",
      }}
    >
      {children}
    </button>
  );
}

// ─── AppShell ─────────────────────────────────────────────────────────────────

export function AppShell({
  systemName,
  navGroups,
  bottomNavItems = [],
  children,
  username = "Username",
  userInitials = "WW",
  userEmail = "",
  companyName = "Sellsuki",
  branchName = "สาขาหลัก",
}: AppShellProps) {
  const navigate = useNavigate();
  const [chocbarOpen, setChocbarOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<number, boolean>>(
    Object.fromEntries(navGroups.map((g, i) => [i, g.defaultExpanded !== false]))
  );

  const closeAll = () => { setChocbarOpen(false); setAccountOpen(false); };

  const toggleGroup = (i: number) =>
    setExpandedGroups(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <div style={{ fontFamily: FONT, minHeight: "100vh" }}>

      {/* ── TOP HEADER ─────────────────────────────────────────────── */}
      <header style={{
        alignItems: "center",
        background: CLR.bg,
        borderBottom: `1px solid ${CLR.border}`,
        boxSizing: "border-box",
        display: "flex",
        height: HEADER_H,
        justifyContent: "space-between",
        left: 0,
        padding: "0 16px 0 12px",
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 30,
      }}>
        {/* Left: hamburger + Sellsuki logo + system name */}
        <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
          <IconBtn title="Menu">
            <Path d={PATHS.hamburger} />
          </IconBtn>
          <div style={{ alignItems: "center", display: "flex", gap: 8, padding: "2px 8px 0" }}>
            <SellsukiLogo size={30} />
            <span style={{ color: CLR.text, fontSize: 24, lineHeight: 1 }}>{systemName}</span>
          </div>
        </div>

        {/* Right: search + bell + grid + avatar */}
        <div style={{ alignItems: "center", display: "flex", gap: 16 }}>
          {/* Search field */}
          <div style={{
            alignItems: "center",
            background: CLR.bg,
            border: `1px solid ${CLR.border}`,
            borderRadius: 8,
            display: "flex",
            gap: 8,
            height: 40,
            padding: "0 16px",
            width: 300,
          }}>
            <Path d={PATHS.search} stroke={CLR.textMuted} size={20} />
            <span style={{ color: CLR.textMuted, fontSize: 18 }}>Placeholder</span>
          </div>

          <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
            {/* Notification bell */}
            <IconBtn title="Notifications">
              <Path d={PATHS.bell} />
            </IconBtn>

            {/* App Switcher — 9-dot grid (DS3 Gap #3) */}
            <IconBtn
              title="Switch App"
              active={chocbarOpen}
              onClick={() => { setChocbarOpen(p => !p); setAccountOpen(false); }}
            >
              <GridDotsIcon />
            </IconBtn>

            {/* Avatar (DS3 Gap #4) */}
            <button
              title={username}
              onClick={() => { setAccountOpen(p => !p); setChocbarOpen(false); }}
              style={{
                alignItems: "center",
                background: CLR.brand,
                border: "none",
                borderRadius: "50%",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                fontFamily: FONT,
                fontSize: 16,
                fontWeight: 600,
                height: 40,
                justifyContent: "center",
                width: 40,
              }}
            >
              {userInitials}
            </button>
          </div>
        </div>
      </header>

      {/* ── SIDEBAR (DS3 Gap #2) ────────────────────────────────────── */}
      <aside style={{
        background: CLR.bg,
        borderRight: `1px solid ${CLR.border}`,
        boxShadow: "0 9px 1.5px rgba(17,24,39,0),0 6px 1px rgba(17,24,39,0),0 3px 1px rgba(17,24,39,0.04),0 1px 0.5px rgba(17,24,39,0.08),0 0px 0.5px rgba(17,24,39,0.09)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        height: `calc(100vh - ${HEADER_H}px)`,
        justifyContent: "space-between",
        left: 0,
        overflowY: "auto",
        padding: 16,
        position: "fixed",
        top: HEADER_H,
        width: SIDEBAR_W,
        zIndex: 20,
      }}>
        {/* Top: branch card + nav groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Branch / company selector card */}
          <div style={{
            background: CLR.bgBrand,
            border: `1px solid ${CLR.borderBrand}`,
            borderRadius: 8,
            cursor: "pointer",
            padding: "8px 16px",
          }}>
            <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
              <div style={{
                alignItems: "center",
                background: CLR.brand,
                borderRadius: "50%",
                color: "#fff",
                display: "flex",
                flexShrink: 0,
                fontSize: 14,
                fontWeight: 700,
                height: 40,
                justifyContent: "center",
                width: 40,
              }}>
                {companyName.charAt(0).toUpperCase()}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: CLR.text, fontSize: 20, lineHeight: 1.3 }}>{companyName}</div>
                <div style={{ alignItems: "center", color: CLR.textBrand, display: "flex", fontSize: 20, gap: 2 }}>
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {branchName}
                  </span>
                  <Path d={PATHS.chevDown} size={16} stroke={CLR.textBrand} />
                </div>
              </div>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group, gi) => (
            <div key={gi}>
              {/* Group header — collapsible */}
              <button
                onClick={() => toggleGroup(gi)}
                style={{
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  width: "100%",
                }}
              >
                <span style={{ color: CLR.textMuted, fontSize: 18 }}>{group.title}</span>
                <Path
                  d={expandedGroups[gi] ? PATHS.chevUp : PATHS.chevDown}
                  size={16}
                  stroke={CLR.textMuted}
                />
              </button>

              {/* Group items */}
              {expandedGroups[gi] && group.items.map((item, ii) => (
                <button
                  key={ii}
                  onClick={item.onClick}
                  style={{
                    alignItems: "center",
                    background: item.active ? CLR.bgBrand : "transparent",
                    border: item.active ? `1px solid ${CLR.borderBrand}` : "1px solid transparent",
                    borderRadius: 8,
                    cursor: item.onClick ? "pointer" : "default",
                    display: "flex",
                    gap: 8,
                    justifyContent: "space-between",
                    minHeight: 44,
                    padding: "8px 16px",
                    width: "100%",
                  }}
                >
                  <div style={{ alignItems: "center", display: "flex", flex: 1, gap: 8, minWidth: 0 }}>
                    <span style={{ color: item.active ? CLR.brand : CLR.textMuted, flexShrink: 0, lineHeight: 0 }}>
                      {item.icon}
                    </span>
                    <span style={{
                      color: item.active ? CLR.textBrand : CLR.text,
                      flex: 1,
                      fontSize: item.active ? 18 : 20,
                      overflow: "hidden",
                      textAlign: "left",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}>
                      {item.label}
                    </span>
                  </div>
                  {item.badge !== undefined && (
                    <div style={{
                      alignItems: "center",
                      background: CLR.brand,
                      borderRadius: 8,
                      color: "#fff",
                      display: "flex",
                      fontSize: 18,
                      justifyContent: "center",
                      minHeight: 20,
                      minWidth: 20,
                      padding: "0 8px",
                    }}>
                      {item.badge}
                    </div>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom: divider + bottom items + back */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Divider />
          {bottomNavItems.map((item, i) => (
            <button
              key={i}
              onClick={item.onClick}
              style={{
                alignItems: "center",
                background: "none",
                border: "none",
                borderRadius: 8,
                color: CLR.text,
                cursor: "pointer",
                display: "flex",
                fontSize: 18,
                gap: 8,
                padding: "10px 16px",
                width: "100%",
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate("/app-selector")}
            style={{
              alignItems: "center",
              background: "none",
              border: "none",
              borderRadius: 8,
              color: CLR.textMuted,
              cursor: "pointer",
              display: "flex",
              fontSize: 18,
              gap: 8,
              padding: "10px 16px",
              width: "100%",
            }}
          >
            <Path d={PATHS.back} stroke={CLR.textMuted} size={18} />
            กลับหน้าเลือกระบบ
          </button>
        </div>
      </aside>

      {/* ── MAIN CONTENT ───────────────────────────────────────────── */}
      <main style={{
        background: CLR.bgPage,
        boxSizing: "border-box",
        marginLeft: SIDEBAR_W,
        marginTop: HEADER_H,
        minHeight: `calc(100vh - ${HEADER_H}px)`,
        padding: 32,
      }}>
        {children}
      </main>

      {/* ── DROPDOWNS ──────────────────────────────────────────────── */}
      {/* Backdrop — click anywhere to close */}
      {(chocbarOpen || accountOpen) && (
        <div
          style={{ bottom: 0, left: 0, position: "fixed", right: 0, top: 0, zIndex: 49 }}
          onClick={closeAll}
        />
      )}

      {chocbarOpen && <ChocbarMenu onClose={closeAll} />}

      {accountOpen && (
        <AccountMenuDropdown
          username={username}
          userEmail={userEmail}
          userInitials={userInitials}
          onClose={closeAll}
          onLogout={() => {
            closeAll();
            navigate("/ams-ds3", { state: { toast: "ออกจากระบบแล้ว", toastType: "info" } });
          }}
        />
      )}
    </div>
  );
}

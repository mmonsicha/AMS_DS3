/**
 * AppShell — Shared layout for Akita, Patona, Oc2plus
 * Figma: CRM-Posh-2025 node 498:1044
 * DS3: TopNavbar (header), Sidebar (nav groups), Divider (footer separator)
 * Custom: BranchCard, SidebarFooter, ChocbarMenu, AccountMenuDropdown
 */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { TopNavbar, Sidebar, Divider } from "@uxuissk/design-system";
import type { SidebarItem } from "@uxuissk/design-system";
import { SellsukiLogo } from "../SellsukiLogo";
import { ChocbarMenu } from "../custom/ChocbarMenu";
import { AccountMenuDropdown } from "../custom/AccountMenuDropdown";

// ─── Brand Themes ─────────────────────────────────────────────────────────────
// primaryHover confirmed from DS3 bundle (e.g. Sky-600, Emerald-600, Orange-700)

export type Brand = "akita" | "patona" | "oc2plus";

export type BrandTheme = {
  primary:      string;
  light:        string;
  border:       string;
  primaryHover: string;
};

export const BRAND_THEMES: Record<Brand, BrandTheme> = {
  akita: {
    // ccs3 / Sellsuki — Sky palette
    primary:      "#32a9ff",
    light:        "#f0f9ff",
    border:       "#d9f2ff",
    primaryHover: "#1b8bf5",
  },
  patona: {
    // DS3 Patona — Aerospace Orange palette
    primary:      "#ec5e2a",
    light:        "#fef3ee",
    border:       "#fddccc",
    primaryHover: "#d4501f",
  },
  oc2plus: {
    // DS3 Oc2plus — Emerald palette
    primary:      "#10b981",
    light:        "#ecfdf5",
    border:       "#d1fae5",
    primaryHover: "#059669",
  },
};

// ─── Types ───────────────────────────────────────────────────────────────────

export type NavItem = {
  label:    string;
  icon:     React.ReactNode;
  badge?:   number;
  active?:  boolean;
  onClick?: () => void;
};

export type NavGroup = {
  title:            string;
  items:            NavItem[];
  defaultExpanded?: boolean;
};

export type AppShellProps = {
  systemName:               string;
  navGroups:                NavGroup[];
  bottomNavItems?:          NavItem[];
  children:                 React.ReactNode;
  brand?:                   Brand;
  username?:                string;
  userInitials?:            string;     // override; auto-computed from username if omitted
  userEmail?:               string;
  avatarUrl?:               string;
  companyName?:             string;
  branchName?:              string;
  // TopNavbar search + notification
  showSearch?:              boolean;
  searchPlaceholder?:       string;
  onSearchClick?:           () => void;
  notificationCount?:       number;
  onNotificationClick?:     () => void;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function hexRgb(hex: string): string {
  const h = hex.replace("#", "");
  return `${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)}`;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const FONT                = "DB HeaventRounded, sans-serif";
const HEADER_H            = 72;
const SIDEBAR_W           = 256;
const SIDEBAR_W_COLLAPSED = 72;

// ─── Icons ───────────────────────────────────────────────────────────────────

const Path = ({ d, size = 24, stroke = "#1f2937", fill = "none" }: {
  d: string; size?: number; stroke?: string; fill?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
    strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const PATHS = {
  chevDown: "M19.5 8.25l-7.5 7.5-7.5-7.5",
  back:     "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75",
};

function GridDotsIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
      {[5, 12, 19].flatMap(x => [5, 12, 19].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={2} />
      )))}
    </svg>
  );
}

// ─── AppShell ─────────────────────────────────────────────────────────────────

export function AppShell({
  systemName,
  navGroups,
  bottomNavItems        = [],
  children,
  brand                 = "akita",
  username              = "Username",
  userInitials,
  userEmail             = "",
  avatarUrl,
  companyName           = "Sellsuki",
  branchName            = "สาขาหลัก",
  showSearch            = true,
  searchPlaceholder     = "ค้นหา...",
  onSearchClick,
  notificationCount     = 0,
  onNotificationClick,
}: AppShellProps) {
  const navigate = useNavigate();
  const [chocbarOpen,      setChocbarOpen]      = useState(false);
  const [accountOpen,      setAccountOpen]      = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode,         setDarkMode]         = useState(false);

  const theme    = BRAND_THEMES[brand];
  const initials = userInitials ?? getInitials(username);
  const closeAll = () => { setChocbarOpen(false); setAccountOpen(false); };

  // Inject brand CSS vars directly on <html> so DS3 Tailwind (reads :root/html) picks them up.
  // Also manages the .dark class for DS3 dark mode.
  useEffect(() => {
    const root = document.documentElement;
    const vars: [string, string][] = [
      ["--primary",                                    theme.primary],
      ["--ring",                                       theme.primary],
      ["--sidebar-ring",                               theme.primary],
      ["--Colors--Background--bg-brand-primary",       theme.light],
      ["--Colors--Background--bg-brand-secondary",     theme.border],
      ["--Colors--Background--bg-brand-solid",         theme.primary],
      ["--Colors--Background--bg-brand-solid-hover",   theme.primaryHover],
      ["--Colors--Text--text-brand-primary",           theme.primary],
      ["--Base_Color--Sky--500",                       theme.primary],
      ["--Base_Color--Sky--50",                        theme.light],
      ["--Base_Color--Sky--100",                       theme.border],
      ["--Base_Color--Sky--600",                       theme.primaryHover],
    ];
    vars.forEach(([k, v]) => root.style.setProperty(k, v));
    if (darkMode) root.classList.add("dark");
    else          root.classList.remove("dark");
    return () => {
      vars.forEach(([k]) => root.style.removeProperty(k));
      root.classList.remove("dark");
    };
  }, [theme.primary, theme.light, theme.border, theme.primaryHover, darkMode]);

  // Dark-mode colour overrides for custom (non-DS3) elements
  const dm = {
    bg:     darkMode ? "#111827" : "#ffffff",
    bgPage: darkMode ? "#1f2937" : "#f9fafb",
    text:   darkMode ? "#f9fafb" : "#1f2937",
    muted:  darkMode ? "#9ca3af" : "#6b7280",
    border: darkMode ? "#374151" : "#e5e7eb",
  };

  // Branch card adapts in dark mode using brand colour tint
  const branchCardBg  = darkMode ? `rgba(${hexRgb(theme.primary)},0.12)` : theme.light;
  const branchCardBdr = darkMode ? `rgba(${hexRgb(theme.primary)},0.28)` : theme.border;

  // Map NavGroup[] → DS3 SidebarGroup[]
  const sidebarGroups = navGroups.map(g => ({
    label: g.title,
    items: g.items.map(item => ({
      id:    item.label,
      label: item.label,
      icon:  item.icon,
      badge: item.badge?.toString(),
    })),
  }));

  const activeItemId = navGroups.flatMap(g => g.items).find(i => i.active)?.label;

  const handleNavigate = (item: SidebarItem) => {
    navGroups.flatMap(g => g.items).find(i => i.label === item.id)?.onClick?.();
  };

  const sidebarW = sidebarCollapsed ? SIDEBAR_W_COLLAPSED : SIDEBAR_W;

  return (
    <div style={{ fontFamily: FONT, minHeight: "100vh" }}>

      {/* ── TOP HEADER — DS3 TopNavbar ──────────────────────────────── */}
      <header style={{ left: 0, position: "fixed", right: 0, top: 0, zIndex: 30 }}>
        <TopNavbar
          brand={{ name: systemName, logo: <SellsukiLogo size={30} /> }}
          showSearch={showSearch}
          searchPlaceholder={searchPlaceholder}
          onSearchClick={onSearchClick}
          notificationCount={notificationCount}
          onNotificationClick={onNotificationClick}
          onMobileMenuClick={() => setSidebarCollapsed(c => !c)}
          onUserClick={() => { setAccountOpen(p => !p); setChocbarOpen(false); }}
          actions={
            <div style={{ alignItems: "center", display: "flex", gap: 4 }}>
              {/* App switcher — 9-dot grid */}
              <button
                title="Switch App"
                onClick={() => { setChocbarOpen(p => !p); setAccountOpen(false); }}
                style={{
                  alignItems:   "center",
                  background:   chocbarOpen ? theme.light : "transparent",
                  border:       "none",
                  borderRadius: 8,
                  cursor:       "pointer",
                  display:      "flex",
                  padding:      8,
                  transition:   "background 0.15s",
                }}
              >
                <GridDotsIcon color={theme.primary} />
              </button>

              {/* Custom avatar — image or computed initials */}
              <button
                title={username}
                onClick={() => { setAccountOpen(p => !p); setChocbarOpen(false); }}
                style={{
                  alignItems:     "center",
                  background:     avatarUrl ? "transparent" : theme.primary,
                  border:         "none",
                  borderRadius:   "50%",
                  color:          "#fff",
                  cursor:         "pointer",
                  display:        "flex",
                  fontFamily:     FONT,
                  fontSize:       15,
                  fontWeight:     600,
                  height:         36,
                  justifyContent: "center",
                  overflow:       "hidden",
                  padding:        0,
                  width:          36,
                }}
              >
                {avatarUrl
                  ? <img src={avatarUrl} alt={username} style={{ height: "100%", objectFit: "cover", width: "100%" }} />
                  : initials
                }
              </button>
            </div>
          }
        />
      </header>

      {/* ── SIDEBAR WRAPPER ─────────────────────────────────────────── */}
      <aside style={{
        background:    dm.bg,
        borderRight:   `1px solid ${dm.border}`,
        boxSizing:     "border-box",
        display:       "flex",
        flexDirection: "column",
        height:        `calc(100vh - ${HEADER_H}px)`,
        left:          0,
        overflow:      "hidden",
        position:      "fixed",
        top:           HEADER_H,
        transition:    "width 0.2s",
        width:         sidebarW,
        zIndex:        20,
      }}>

        {/* Branch / company selector card */}
        {!sidebarCollapsed && (
          <div style={{
            background:   branchCardBg,
            border:       `1px solid ${branchCardBdr}`,
            borderRadius: 8,
            cursor:       "pointer",
            flexShrink:   0,
            margin:       "16px 16px 0",
            padding:      "8px 16px",
          }}>
            <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
              <div style={{
                alignItems:     "center",
                background:     theme.primary,
                borderRadius:   "50%",
                color:          "#fff",
                display:        "flex",
                flexShrink:     0,
                fontSize:       14,
                fontWeight:     700,
                height:         40,
                justifyContent: "center",
                width:          40,
              }}>
                {companyName.charAt(0).toUpperCase()}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: dm.text, fontSize: 20, lineHeight: 1.3 }}>{companyName}</div>
                <div style={{ alignItems: "center", color: theme.primary, display: "flex", fontSize: 20, gap: 2 }}>
                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {branchName}
                  </span>
                  <Path d={PATHS.chevDown} size={16} stroke={theme.primary} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DS3 Sidebar — nav groups + overall collapse */}
        <div style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
          <Sidebar
            groups={sidebarGroups}
            activeItem={activeItemId}
            onNavigate={handleNavigate}
            collapsed={sidebarCollapsed}
            onCollapsedChange={setSidebarCollapsed}
            width={`${SIDEBAR_W}px`}
          />
        </div>

        {/* Custom footer */}
        {!sidebarCollapsed && (
          <div style={{ flexShrink: 0, padding: "0 16px 16px" }}>
            <Divider />
            {bottomNavItems.map((item, i) => (
              <button
                key={i}
                onClick={item.onClick}
                style={{
                  alignItems:   "center",
                  background:   "none",
                  border:       "none",
                  borderRadius: 8,
                  color:        dm.text,
                  cursor:       "pointer",
                  display:      "flex",
                  fontFamily:   FONT,
                  fontSize:     18,
                  gap:          8,
                  padding:      "10px 0",
                  width:        "100%",
                }}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate("/app-selector")}
              style={{
                alignItems:   "center",
                background:   "none",
                border:       "none",
                borderRadius: 8,
                color:        dm.muted,
                cursor:       "pointer",
                display:      "flex",
                fontFamily:   FONT,
                fontSize:     18,
                gap:          8,
                padding:      "10px 0",
                width:        "100%",
              }}
            >
              <Path d={PATHS.back} stroke={dm.muted} size={18} />
              กลับหน้าเลือกระบบ
            </button>
          </div>
        )}
      </aside>

      {/* ── MAIN CONTENT ────────────────────────────────────────────── */}
      <main style={{
        background:  dm.bgPage,
        boxSizing:   "border-box",
        marginLeft:  sidebarW,
        marginTop:   HEADER_H,
        minHeight:   `calc(100vh - ${HEADER_H}px)`,
        padding:     32,
        transition:  "margin-left 0.2s",
      }}>
        {children}
      </main>

      {/* ── DROPDOWNS ───────────────────────────────────────────────── */}
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
          userInitials={initials}
          avatarUrl={avatarUrl}
          brandTheme={theme}
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode(d => !d)}
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

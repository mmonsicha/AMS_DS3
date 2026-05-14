/**
 * AccountMenuDropdown — User Account Menu (Level 3)
 * Figma: CRM-Posh-2025 node 476:30766
 * DS3 Gap #4 — no equivalent in @uxuissk/design-system
 */
import type { BrandTheme } from "../shell/AppShell";

const FONT   = "DB HeaventRounded, sans-serif";
const SHADOW = [
  "0px 0px 0px rgba(17,24,39,0.09)",
  "0px 1px 1px rgba(17,24,39,0.07)",
  "0px 3px 1.5px rgba(17,24,39,0.05)",
  "0px 7px 2px rgba(17,24,39,0.03)",
  "0px 12px 2.5px rgba(17,24,39,0.01)",
  "0px 19px 2.5px rgba(17,24,39,0)",
].join(", ");

// Converts #rrggbb → "r,g,b" for rgba()
function hexRgb(hex: string): string {
  const h = hex.replace("#", "");
  return `${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)}`;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function CogIcon({ color }: { color: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function GlobeIcon({ color }: { color: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.96 8.96 0 01.284-2.253m0 0A11.952 11.952 0 0112 13.5c2.998 0 5.74-1.1 7.843-2.918" />
    </svg>
  );
}

function MoonIcon({ color }: { color: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  );
}

function HelpIcon({ color }: { color: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  );
}

function LogoutIcon({ color }: { color: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
  );
}

function ChevronRightIcon({ color }: { color: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function ArrowRightIcon({ color }: { color: string }) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  );
}

// DS3-style toggle (functional)
function Toggle({ on, onToggle, brand }: { on: boolean; onToggle: () => void; brand: string }) {
  return (
    <button
      onClick={onToggle}
      style={{
        background:   on ? brand : "#d1d5db",
        border:       "none",
        borderRadius: 12,
        cursor:       "pointer",
        flexShrink:   0,
        height:       22,
        padding:      2,
        position:     "relative",
        transition:   "background 0.2s",
        width:        40,
      }}
    >
      <div style={{
        background:  "#fff",
        borderRadius:"50%",
        height:      18,
        left:        on ? 18 : 2,
        position:    "absolute",
        top:         2,
        transition:  "left 0.2s",
        width:       18,
      }} />
    </button>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type Props = {
  username:         string;
  userEmail:        string;
  userInitials:     string;
  avatarUrl?:       string;
  brandTheme:       BrandTheme;
  darkMode:         boolean;
  onDarkModeToggle: () => void;
  onClose:          () => void;
  onLogout:         () => void;
};

// ─── Component ───────────────────────────────────────────────────────────────

export function AccountMenuDropdown({
  username, userEmail, userInitials, avatarUrl,
  brandTheme, darkMode, onDarkModeToggle,
  onClose, onLogout,
}: Props) {
  // Color scheme
  const bg      = darkMode ? "#111827" : "#ffffff";
  const bgCard  = darkMode
    ? `rgba(${hexRgb(brandTheme.primary)},0.12)`
    : brandTheme.light;
  const bdCard  = darkMode
    ? `rgba(${hexRgb(brandTheme.primary)},0.28)`
    : brandTheme.border;
  const text    = darkMode ? "#f9fafb" : "#1f2937";
  const muted   = darkMode ? "#9ca3af" : "#6b7280";
  const border  = darkMode ? "#374151" : "#e5e7eb";
  const hover   = darkMode ? "#374151" : "#f9fafb";
  const iconClr = darkMode ? "#9ca3af" : "#6b7280";

  const menuBtn = (
    icon: React.ReactNode,
    label: string,
    right?: React.ReactNode,
    onClick?: () => void,
  ) => (
    <button
      onClick={onClick ?? onClose}
      style={{
        alignItems:   "center",
        background:   "none",
        border:       "none",
        borderRadius: 8,
        cursor:       "pointer",
        display:      "flex",
        gap:          8,
        padding:      "8px 16px",
        transition:   "background 0.15s",
        width:        "100%",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = hover)}
      onMouseLeave={e => (e.currentTarget.style.background = "none")}
    >
      <span style={{ flexShrink: 0, lineHeight: 0 }}>{icon}</span>
      <span style={{ color: text, flex: 1, fontFamily: FONT, fontSize: 24, lineHeight: 1, textAlign: "left" }}>
        {label}
      </span>
      {right}
    </button>
  );

  return (
    <div style={{
      background:   bg,
      border:       `1px solid ${border}`,
      borderRadius: 8,
      boxShadow:    SHADOW,
      boxSizing:    "border-box",
      fontFamily:   FONT,
      minWidth:     300,
      paddingTop:   16,
      position:     "fixed",
      right:        16,
      top:          80,
      width:        300,
      zIndex:       50,
    }}>

      {/* ── Account section ───────────────────────────────────────── */}
      <div style={{ paddingBottom: 8 }}>
        <div style={{ padding: "0 16px 4px" }}>
          <span style={{ color: muted, fontFamily: FONT, fontSize: 20, lineHeight: 1 }}>Account</span>
        </div>

        <div style={{ padding: "0 16px 8px" }}>
          <div style={{
            alignItems:   "center",
            background:   bgCard,
            border:       `1px solid ${bdCard}`,
            borderRadius: 8,
            cursor:       "pointer",
            display:      "flex",
            gap:          16,
            padding:      8,
          }}
            onClick={onClose}
          >
            {/* Avatar */}
            <div style={{
              alignItems:     "center",
              background:     avatarUrl ? "transparent" : brandTheme.primary,
              borderRadius:   "50%",
              color:          "#fff",
              display:        "flex",
              flexShrink:     0,
              fontSize:       15,
              fontWeight:     600,
              height:         40,
              justifyContent: "center",
              overflow:       "hidden",
              width:          40,
            }}>
              {avatarUrl
                ? <img src={avatarUrl} alt={username} style={{ height: "100%", objectFit: "cover", width: "100%" }} />
                : <span style={{ fontFamily: FONT }}>{userInitials}</span>
              }
            </div>

            {/* Name + email */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                color:        text,
                fontFamily:   FONT,
                fontSize:     20,
                fontWeight:   500,
                lineHeight:   1.3,
                overflow:     "hidden",
                textOverflow: "ellipsis",
                whiteSpace:   "nowrap",
              }}>
                {username}
              </div>
              {userEmail && (
                <div style={{
                  color:        muted,
                  fontFamily:   FONT,
                  fontSize:     20,
                  lineHeight:   1.3,
                  overflow:     "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace:   "nowrap",
                }}>
                  {userEmail}
                </div>
              )}
            </div>

            <ArrowRightIcon color={muted} />
          </div>
        </div>
      </div>

      {/* ── Setting section ───────────────────────────────────────── */}
      <div>
        <div style={{ padding: "0 16px 4px" }}>
          <span style={{ color: muted, fontFamily: FONT, fontSize: 20, lineHeight: 1 }}>Setting</span>
        </div>

        {menuBtn(
          <CogIcon color={iconClr} />,
          "Account Setting",
          <ChevronRightIcon color={iconClr} />,
        )}
        {menuBtn(
          <GlobeIcon color={iconClr} />,
          "Language : ENG",
          <ChevronRightIcon color={iconClr} />,
        )}
        {/* Dark Mode row — functional toggle */}
        <div style={{
          alignItems:   "center",
          display:      "flex",
          gap:          8,
          padding:      "8px 16px",
        }}>
          <span style={{ flexShrink: 0, lineHeight: 0 }}><MoonIcon color={iconClr} /></span>
          <span style={{ color: text, flex: 1, fontFamily: FONT, fontSize: 24, lineHeight: 1 }}>
            Dark Mode
          </span>
          <Toggle on={darkMode} onToggle={onDarkModeToggle} brand={brandTheme.primary} />
        </div>
        {menuBtn(
          <HelpIcon color={iconClr} />,
          "Help",
        )}
      </div>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div style={{ borderTop: `1px solid ${border}`, margin: "8px 0" }} />

      {/* ── Logout ────────────────────────────────────────────────── */}
      {menuBtn(
        <LogoutIcon color={text} />,
        "Logout",
        undefined,
        onLogout,
      )}

      <div style={{ height: 8 }} />
    </div>
  );
}

/**
 * AccountMenuDropdown — User Account Menu (Level 3)
 * Figma: CRM-Posh-2025 node 476:30766
 * DS3 Gap #4 — no equivalent in @uxuissk/design-system
 * GitHub Issue: DS3 Gap #4 AccountMenuDropdown
 */

const FONT = "DB HeaventRounded, sans-serif";

const CLR = {
  bg:          "#ffffff",
  bgAccent:    "#fff7ed",
  bgAccentBdr: "#fed7aa",
  border:      "#e5e7eb",
  text:        "#1f2937",
  textMuted:   "#6b7280",
  brand:       "#f97316",
  brandLight:  "#fdba74",
  hoverBg:     "#f9fafb",
  danger:      "#ef4444",
};

function ChevronRightIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={CLR.textMuted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={CLR.danger} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={CLR.textMuted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={CLR.textMuted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.96 8.96 0 01.284-2.253m0 0A11.952 11.952 0 0112 13.5c2.998 0 5.74-1.1 7.843-2.918" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={CLR.textMuted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={CLR.textMuted} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

// Simple toggle — dark mode is UI-only placeholder (no actual theming)
function Toggle({ on }: { on: boolean }) {
  return (
    <div style={{
      background:   on ? CLR.brand : CLR.border,
      borderRadius: 12,
      cursor:       "default",
      height:       22,
      padding:      2,
      position:     "relative",
      transition:   "background 0.2s",
      width:        40,
    }}>
      <div style={{
        background:   "#fff",
        borderRadius: "50%",
        height:       18,
        left:         on ? 18 : 2,
        position:     "absolute",
        top:          2,
        transition:   "left 0.2s",
        width:        18,
      }} />
    </div>
  );
}

type Props = {
  username:     string;
  userEmail:    string;
  userInitials: string;
  onClose:      () => void;
  onLogout:     () => void;
};

export function AccountMenuDropdown({ username, userEmail, userInitials, onClose, onLogout }: Props) {
  const menuRow = (icon: React.ReactNode, label: string, right?: React.ReactNode, onClick?: () => void) => (
    <button
      onClick={onClick ?? onClose}
      style={{
        alignItems:   "center",
        background:   "none",
        border:       "none",
        borderRadius: 8,
        cursor:       "pointer",
        display:      "flex",
        gap:          10,
        padding:      "9px 12px",
        transition:   "background 0.15s",
        width:        "100%",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = CLR.hoverBg)}
      onMouseLeave={e => (e.currentTarget.style.background = "none")}
    >
      <span style={{ color: CLR.textMuted, flexShrink: 0, lineHeight: 0 }}>{icon}</span>
      <span style={{ color: CLR.text, flex: 1, fontSize: 16, fontFamily: FONT, textAlign: "left" }}>{label}</span>
      {right}
    </button>
  );

  return (
    <div
      style={{
        background:   CLR.bg,
        border:       `1px solid ${CLR.border}`,
        borderRadius: 12,
        boxShadow:    "0px 8px 24px rgba(17,24,39,0.12), 0px 2px 8px rgba(17,24,39,0.08)",
        boxSizing:    "border-box",
        fontFamily:   FONT,
        padding:      12,
        position:     "fixed",
        right:        16,
        top:          80,
        width:        300,
        zIndex:       50,
      }}
    >
      {/* Account card */}
      <div style={{
        alignItems:   "center",
        background:   CLR.bgAccent,
        border:       `1px solid ${CLR.bgAccentBdr}`,
        borderRadius: 10,
        display:      "flex",
        gap:          12,
        marginBottom: 8,
        padding:      "10px 12px",
      }}>
        {/* Avatar */}
        <div style={{
          alignItems:     "center",
          background:     CLR.brand,
          borderRadius:   "50%",
          color:          "#fff",
          display:        "flex",
          flexShrink:     0,
          fontSize:       16,
          fontWeight:     600,
          height:         40,
          justifyContent: "center",
          width:          40,
        }}>
          {userInitials}
        </div>
        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: CLR.text, fontSize: 16, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {username}
          </div>
          {userEmail && (
            <div style={{ color: CLR.textMuted, fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {userEmail}
            </div>
          )}
        </div>
        <ChevronRightIcon />
      </div>

      {/* Settings section */}
      <div style={{ marginBottom: 4 }}>
        <span style={{ color: "#9ca3af", display: "block", fontSize: 13, fontWeight: 500, marginBottom: 2, paddingLeft: 12 }}>
          Settings
        </span>
        {menuRow(<UserIcon />, "Account Setting", <ChevronRightIcon />)}
        {menuRow(<GlobeIcon />, "Language", <span style={{ color: CLR.textMuted, fontSize: 14 }}>ENG</span>)}
        {menuRow(<MoonIcon />, "Dark Mode", <Toggle on={false} />)}
        {menuRow(<HelpIcon />, "Help", <ChevronRightIcon />)}
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${CLR.border}`, margin: "8px 0" }} />

      {/* Logout */}
      <button
        onClick={onLogout}
        style={{
          alignItems:   "center",
          background:   "none",
          border:       "none",
          borderRadius: 8,
          cursor:       "pointer",
          display:      "flex",
          gap:          10,
          padding:      "9px 12px",
          transition:   "background 0.15s",
          width:        "100%",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#fff5f5")}
        onMouseLeave={e => (e.currentTarget.style.background = "none")}
      >
        <LogoutIcon />
        <span style={{ color: CLR.danger, fontFamily: FONT, fontSize: 16 }}>ออกจากระบบ</span>
      </button>
    </div>
  );
}

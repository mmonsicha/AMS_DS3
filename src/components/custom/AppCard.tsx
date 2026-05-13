/**
 * Custom component — DS3 Gap filed at GitHub Issue #1
 * AppCard / BranchCard: 168×166px clickable app tile
 */
import { useState } from "react";
import type { ReactNode } from "react";

const FONT = "DB HeaventRounded, sans-serif";
const CLR_BORDER = "#e5e7eb";
const CLR_BORDER_HOVER = "#32a9ff";
const SHADOW = [
  "0px 0px 0px rgba(17,24,39,0.09)",
  "0px 0px 0.5px rgba(17,24,39,0.09)",
  "0px 1px 0.5px rgba(17,24,39,0.08)",
  "0px 3px 1px rgba(17,24,39,0.04)",
].join(",");

interface AppCardProps {
  logo: ReactNode;
  name: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function AppCard({ logo, name, onClick, disabled = false }: AppCardProps) {
  const [hovered, setHovered] = useState(false);
  const active = hovered && !disabled;

  return (
    <div
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        alignItems: "center",
        background: "#ffffff",
        border: `1px solid ${active ? CLR_BORDER_HOVER : CLR_BORDER}`,
        borderRadius: 8,
        boxShadow: SHADOW,
        boxSizing: "border-box",
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minHeight: 166,
        opacity: disabled ? 0.5 : 1,
        padding: "24px 24px 32px",
        transform: active ? "translateY(-2px)" : "none",
        transition: "border-color 0.15s ease, transform 0.15s ease",
        width: 168,
      }}
    >
      <div style={{
        alignItems: "center",
        display: "flex",
        height: 72,
        justifyContent: "center",
        position: "relative",
        width: 72,
      }}>
        {logo}
      </div>
      <div style={{
        color: "#1f2937",
        fontFamily: FONT,
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 1,
        textAlign: "center",
        width: "100%",
      }}>
        {name}
      </div>
    </div>
  );
}

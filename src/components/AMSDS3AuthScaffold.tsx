/**
 * AMSDS3AuthScaffold
 * อัปเดตเป็น DS3 tokens จาก MCP (2026-05-05)
 *
 * Typography tokens (MCP DS3):
 *   --text-h1   48px / 400  → Page title
 *   --text-h3   28px / 400  → Subtitle / body heading
 *   --text-p    20px / 400  → Body / helper
 *
 * Color tokens (MCP DS3):
 *   text-primary       → var(--text-primary)
 *   text-secondary     → var(--text-secondary)
 *   text-brand-primary → var(--text-brand-primary)  [เปลี่ยนจาก --fg-brand-primary]
 *   bg-secondary       → var(--bg-secondary)         [เปลี่ยนจาก --bg-disabled]
 *
 * Components (DS3 latest):
 *   Card, CardBody  → import { Card, CardBody } from "@uxuissk/design-system"
 *
 * Gap ที่ยังแก้ไม่ได้:
 *   - SellsukiLogo ยังใช้ custom component (ไม่มี React export ตรงจาก DS package)
 *   - background images ยังเป็น asset เดิมจาก Figma bundle
 */

import type { ReactNode } from "react";
import { Card, CardBody, FormHelperText } from "@uxuissk/design-system";
import { SellsukiLogo } from "./SellsukiLogo";
import bgLeft from "../../assets/1419c16c978bd71ca944442ea8b3e61b517a5ce2.png";
import bgRight from "../../assets/96c4a042eb96bdba14eaccbb00815526b9856ac7.png";

// ─── Typography constants (DS3 MCP token values) ────────────────────────────
const FONT_FAMILY = "DB HeaventRounded, sans-serif"; // DS3: Thai-first — ห้ามใช้ Inter

const FS_H1 = "var(--text-h1)"; // 48px — Page titles
const FS_H3 = "var(--text-h3)"; // 28px — Subtitles
const FS_P  = "var(--text-p)";  // 20px — Body / helper

// ─── Email icon ──────────────────────────────────────────────────────────────
export function AMSDS3EmailIcon() {
  return (
    <div style={{ alignItems: "center", display: "flex", height: "120px", justifyContent: "center", width: "120px" }}>
      <svg width="105" height="83" viewBox="0 0 105 82.5" fill="none">
        <path d="M0 24.5955V67.5C0 75.7843 6.71573 82.5 15 82.5H90C98.2843 82.5 105 75.7843 105 67.5V24.5955L60.3615 52.0654C55.5404 55.0322 49.4596 55.0322 44.6385 52.0654L0 24.5955Z" fill="#EAB308" />
        <path d="M105 15.7891V15C105 6.71573 98.2843 0 90 0H15C6.71573 0 0 6.71573 0 15V15.7891L48.5693 45.6779C50.9798 47.1613 54.0202 47.1613 56.4307 45.6779L105 15.7891Z" fill="#EAB308" />
      </svg>
    </div>
  );
}

// ─── Text primitives ─────────────────────────────────────────────────────────

/** --text-h1 (48px / 400) — Page titles */
export function AMSDS3Title({ children }: { children: ReactNode }) {
  return (
    <h1
      style={{
        color: "var(--text-primary)",
        fontFamily: FONT_FAMILY,
        fontSize: FS_H1,
        fontWeight: 400,
        lineHeight: 1.1,
        margin: 0,
        textAlign: "center",
      }}
    >
      {children}
    </h1>
  );
}

/** --text-h3 (28px / 400) — Subtitles / descriptions */
export function AMSDS3Subtitle({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        color: "var(--text-secondary)",
        fontFamily: FONT_FAMILY,
        fontSize: FS_H3,
        fontWeight: 400,
        lineHeight: 1.3,
        margin: 0,
        textAlign: "center",
        whiteSpace: "pre-line",
      }}
    >
      {children}
    </p>
  );
}

/** Brand accent inline span — --text-h3 (28px) */
export function AMSDS3AccentText({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        color: "var(--text-brand-primary)", // DS3: Sky-500
        fontFamily: FONT_FAMILY,
        fontSize: FS_H3,
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

/** Link-style button — --text-p (20px) by default */
export function AMSDS3LinkButton({
  children,
  onClick,
  size,
}: {
  children: ReactNode;
  onClick: () => void;
  size?: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        border: 0,
        color: "var(--text-brand-primary)", // DS3: Sky-500
        cursor: "pointer",
        fontFamily: FONT_FAMILY,
        fontSize: size ?? FS_P,
        fontWeight: 500,
        padding: 0,
        textDecoration: "underline",
        textUnderlineOffset: "2px",
      }}
      type="button"
    >
      {children}
    </button>
  );
}

// ─── Page scaffold ────────────────────────────────────────────────────────────
export function AMSDS3AuthScaffold({
  children,
  footer,
  header,
}: {
  children: ReactNode;
  footer?: ReactNode;
  header: ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--bg-secondary)", // DS3: Gray-100 (#f3f4f6)
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ bottom: 0, height: "400px", left: 0, pointerEvents: "none", position: "absolute", width: "400px" }}>
        <img alt="" src={bgLeft} style={{ height: "100%", objectFit: "contain", objectPosition: "bottom left", width: "100%" }} />
      </div>
      <div style={{ bottom: 0, height: "400px", pointerEvents: "none", position: "absolute", right: 0, width: "400px" }}>
        <img alt="" src={bgRight} style={{ height: "100%", objectFit: "contain", objectPosition: "bottom right", width: "100%" }} />
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-32)",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "var(--space-48) var(--space-16)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Card className="w-full max-w-[440px]">
          <CardBody style={{ padding: "var(--space-40)" }}>
            <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "var(--space-32)", width: "100%" }}>
              <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "var(--space-8)", width: "100%" }}>
                {header}
              </div>
              {children}
            </div>
          </CardBody>
        </Card>

        {footer && <div style={{ maxWidth: "440px", width: "100%" }}>{footer}</div>}
      </div>
    </div>
  );
}

// ─── Logo header ──────────────────────────────────────────────────────────────
export function AMSDS3LogoHeader({ title, subtitle }: { subtitle?: ReactNode; title: ReactNode }) {
  return (
    <>
      <SellsukiLogo size={120} />
      <AMSDS3Title>{title}</AMSDS3Title>
      {subtitle ? <AMSDS3Subtitle>{subtitle}</AMSDS3Subtitle> : null}
    </>
  );
}

// ─── Legal footer ─────────────────────────────────────────────────────────────
export function AMSDS3LegalFooter({ children }: { children: ReactNode }) {
  return (
    <FormHelperText
      style={{
        fontFamily: FONT_FAMILY,
        fontSize: FS_P,
        lineHeight: 1.5,
        textAlign: "center",
      }}
    >
      {children}
    </FormHelperText>
  );
}

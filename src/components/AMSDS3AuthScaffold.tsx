/**
 * AMSDS3AuthScaffold — DS3 MCP Compliant (อัปเดต 2026-05-06)
 *
 * DS3 Components ที่ใช้ในไฟล์นี้:
 *   Card, CardBody          → layout card
 *   FormHelperText          → legal footer text
 *   ToastContainer          → toast notifications (วางไว้ root scaffold เพื่อให้ทุกหน้าใช้ได้)
 *   DSButton variant="link" → แทน custom AMSDS3LinkButton
 *
 * Typography ใช้ DS3 token ทั้งหมด:
 *   --text-h1  (48px) → AMSDS3Title
 *   --text-h3  (28px) → AMSDS3Subtitle, AMSDS3AccentText
 *   --text-p   (20px) → AMSDS3LegalFooter, AMSDS3LinkButton
 *   --text-h4  (24px) → password label ใน sign-in step
 *
 * Known Gap ที่ยังคงอยู่:
 *   - SellsukiLogo: ไม่มีใน DS3 catalog (63 components) → ยังใช้ custom component
 *   - background decorative images: Figma asset → ไม่เกี่ยวกับ DS
 */

import type { ReactNode } from "react";
import { Card, CardBody, DSButton, FormHelperText, ToastContainer } from "@uxuissk/design-system";
import { SellsukiLogo } from "./SellsukiLogo";
import bgLeft from "../../assets/1419c16c978bd71ca944442ea8b3e61b517a5ce2.png";
import bgRight from "../../assets/96c4a042eb96bdba14eaccbb00815526b9856ac7.png";

// ─── DS3 Typography constants ────────────────────────────────────────────────
const FONT = "DB HeaventRounded, sans-serif"; // DS3: Thai-first — ห้ามใช้ Inter

// ─── Email icon (SVG asset — ไม่มีใน DS3 catalog) ───────────────────────────
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

// ─── Text primitives (DS3 token-based) ───────────────────────────────────────
// DS3 ไม่มี Heading/Text React component — ใช้ semantic HTML + DS3 token แทน

/** --text-h1 (48px / 400) */
export function AMSDS3Title({ children }: { children: ReactNode }) {
  return (
    <h1 style={{ color: "var(--text-primary)", fontFamily: FONT, fontSize: "var(--text-h1)", fontWeight: 400, lineHeight: 1.1, margin: 0, textAlign: "center" }}>
      {children}
    </h1>
  );
}

/** --text-h3 (28px / 400) */
export function AMSDS3Subtitle({ children }: { children: ReactNode }) {
  return (
    <p style={{ color: "var(--text-secondary)", fontFamily: FONT, fontSize: "var(--text-h3)", fontWeight: 400, lineHeight: 1.3, margin: 0, textAlign: "center", whiteSpace: "pre-line" }}>
      {children}
    </p>
  );
}

/** Brand accent inline span — --text-h3 (28px / 500) */
export function AMSDS3AccentText({ children }: { children: ReactNode }) {
  return (
    <span style={{ color: "var(--text-brand-primary)", fontFamily: FONT, fontSize: "var(--text-h3)", fontWeight: 500 }}>
      {children}
    </span>
  );
}

/**
 * DS3 DSButton variant="link" — แทน custom button ก่อนหน้า
 * size prop ยังรับได้เพื่อ backward compat แต่ DSButton จัดการ font size เอง
 */
export function AMSDS3LinkButton({
  children,
  onClick,
  size: _size,
}: {
  children: ReactNode;
  onClick: () => void;
  size?: string; // รับไว้เพื่อ backward compat — ไม่ส่งต่อ DSButton (ใช้ DS3 default)
}) {
  return (
    <DSButton variant="link" size="md" onClick={onClick} style={{ padding: 0, height: "auto", minHeight: 0 }}>
      {children}
    </DSButton>
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
    <div style={{ background: "var(--bg-secondary)", minHeight: "100vh", overflow: "hidden", position: "relative" }}>
      {/* DS3 ToastContainer — วางไว้ root เพื่อให้ toast ทุกหน้าแสดงได้ */}
      <ToastContainer position="top-right" />

      {/* Decorative background images (Figma asset) */}
      <div style={{ bottom: 0, height: "400px", left: 0, pointerEvents: "none", position: "absolute", width: "400px" }}>
        <img alt="" src={bgLeft} style={{ height: "100%", objectFit: "contain", objectPosition: "bottom left", width: "100%" }} />
      </div>
      <div style={{ bottom: 0, height: "400px", pointerEvents: "none", position: "absolute", right: 0, width: "400px" }}>
        <img alt="" src={bgRight} style={{ height: "100%", objectFit: "contain", objectPosition: "bottom right", width: "100%" }} />
      </div>

      {/* Content */}
      <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "var(--space-32)", justifyContent: "center", minHeight: "100vh", padding: "var(--space-48) var(--space-16)", position: "relative", zIndex: 1 }}>
        <Card className="w-full max-w-[440px]" elevation="sm">
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
      {/* SellsukiLogo: ไม่มีใน DS3 catalog — ใช้ custom component จาก project */}
      <SellsukiLogo size={120} />
      <AMSDS3Title>{title}</AMSDS3Title>
      {subtitle ? <AMSDS3Subtitle>{subtitle}</AMSDS3Subtitle> : null}
    </>
  );
}

// ─── Legal footer ─────────────────────────────────────────────────────────────
/** DS3 FormHelperText + DS3 --text-p token */
export function AMSDS3LegalFooter({ children }: { children: ReactNode }) {
  return (
    <FormHelperText style={{ fontFamily: FONT, fontSize: "var(--text-p)", lineHeight: 1.5, textAlign: "center" }}>
      {children}
    </FormHelperText>
  );
}

/**
 * AMSDS3AuthScaffold — DS3 MCP 100% Compliant
 * อ้างอิง: https://ds3-mcp.vercel.app/api/mcp | package v0.8.16 (72 exports)
 * Figma: rf4iHkS4ndjkHPv8mex4aH node 6245-26592
 *
 * DS3 Components:
 *   Card (elevation="sm", className for width)
 *   CardBody (children only — ไม่รับ style prop → ใช้ inner div)
 *   DSButton (variant="link" สำหรับ link buttons)
 *   FormHelperText (className only — ไม่รับ style prop)
 *   ToastContainer (ไม่รับ props ใดๆ)
 *
 * DS3 Tokens ที่ใช้ (ค่า fallback px เพราะ --space-* ไม่ resolve ใน Vite+TW4):
 *   Typography: --text-h1(48px), --text-h3(28px), --text-p(20px), --text-label(18px)
 *   Colors: --text-primary(#1f2937), --text-secondary(#6b7280), --text-brand-primary(#32a9ff)
 *   Background: bg-secondary = #F3F4F6
 *
 * Known DS3 Gaps (filed as GitHub Issues):
 *   - Logo: ไม่มีใน catalog → custom SVG placeholder
 *   - Background decorative images: Figma asset → import จาก assets
 *   - CardBody/FormHelperText: ไม่รับ style prop → wrapper div / className
 *   - ToastContainer: ไม่รับ position prop
 */
import type { ReactNode } from "react";
import { Card, CardBody, DSButton, FormHelperText, ToastContainer } from "@uxuissk/design-system";
import { SellsukiLogo } from "./SellsukiLogo";
import bgLeft from "../assets/bg-left.png";
import bgRight from "../assets/bg-right.png";

// ─── Typography (DS3 tokens + px fallback) ────────────────────────────────────
const FONT = "DB HeaventRounded, sans-serif"; // DS3: Thai-first, ห้ามใช้ Inter
const CLR_PRIMARY   = "var(--text-primary, #1f2937)";
const CLR_SECONDARY = "var(--text-secondary, #6b7280)";
const CLR_BRAND     = "var(--text-brand-primary, #32a9ff)";

// ─── Figma design dimensions ──────────────────────────────────────────────────
const CARD_WIDTH    = 440;   // px — จาก Figma frame
const CARD_PADDING  = 40;    // px — inner padding
const GAP_SECTION   = 32;    // px — ระหว่าง header/form/footer sections
const GAP_HEADER    = 8;     // px — ระหว่าง logo, title, subtitle
const GAP_FORM      = 16;    // px — ระหว่าง form fields (DS3 semantic: card-gap)
const GAP_ACTIONS   = 16;    // px — ระหว่าง action buttons (Figma: spacing-3xl)
const BG_COLOR      = "var(--bg-secondary, #F3F4F6)";

// ─── Email icon ───────────────────────────────────────────────────────────────
export function AMSDS3EmailIcon() {
  return (
    <div style={{ alignItems: "center", display: "flex", height: 96, justifyContent: "center", width: 96 }}>
      <svg width="84" height="66" viewBox="0 0 105 82.5" fill="none">
        <path d="M0 24.5955V67.5C0 75.7843 6.71573 82.5 15 82.5H90C98.2843 82.5 105 75.7843 105 67.5V24.5955L60.3615 52.0654C55.5404 55.0322 49.4596 55.0322 44.6385 52.0654L0 24.5955Z" fill="#EAB308" />
        <path d="M105 15.7891V15C105 6.71573 98.2843 0 90 0H15C6.71573 0 0 6.71573 0 15V15.7891L48.5693 45.6779C50.9798 47.1613 54.0202 47.1613 56.4307 45.6779L105 15.7891Z" fill="#EAB308" />
      </svg>
    </div>
  );
}

// ─── Text primitives (semantic HTML + DS3 token) ──────────────────────────────
/** H3 - 3XL/44px Bold — Page title (Figma: node 6142:412911) */
export function AMSDS3Title({ children }: { children: ReactNode }) {
  return (
    <h1 style={{ color: CLR_PRIMARY, fontFamily: FONT, fontSize: 44, fontWeight: 700, lineHeight: 1, margin: 0, textAlign: "center" }}>
      {children}
    </h1>
  );
}

/** H5 - XL/28px Regular — Subtitle / description (Figma: node 6142:412911) */
export function AMSDS3Subtitle({ children }: { children: ReactNode }) {
  return (
    <p style={{ color: CLR_SECONDARY, fontFamily: FONT, fontSize: 28, fontWeight: 400, lineHeight: 1, margin: 0, textAlign: "center", whiteSpace: "pre-line" }}>
      {children}
    </p>
  );
}

/** Brand accent inline text — --text-p (20px) */
export function AMSDS3AccentText({ children }: { children: ReactNode }) {
  return (
    <span style={{ color: CLR_BRAND, fontFamily: FONT, fontSize: "var(--text-p, 20px)", fontWeight: 600 }}>
      {children}
    </span>
  );
}

/** DS3 DSButton variant="link" */
export function AMSDS3LinkButton({ children, onClick, size: _s }: { children: ReactNode; onClick: () => void; size?: string }) {
  return (
    <DSButton variant="link" size="md" onClick={onClick} style={{ display: "inline", height: "auto", minHeight: 0, padding: 0, verticalAlign: "baseline" }}>
      {children}
    </DSButton>
  );
}

// ─── Page scaffold ─────────────────────────────────────────────────────────────
export function AMSDS3AuthScaffold({ children, footer, header }: { children: ReactNode; footer?: ReactNode; header: ReactNode }) {
  return (
    <div style={{ background: BG_COLOR, minHeight: "100vh", overflow: "hidden", position: "relative", width: "100%" }}>
      {/* DS3 ToastContainer — ไม่รับ props */}
      <ToastContainer />

      {/* Figma bg mascots — bottom corners, 600x600px (node 6142:412918) */}
      <div style={{ bottom: 0, left: 0, pointerEvents: "none", position: "fixed", width: 600, zIndex: 0 }}>
        <img alt="" src={bgLeft} style={{ display: "block", height: "auto", maxHeight: 600, objectFit: "contain", objectPosition: "bottom left", width: "100%" }} />
      </div>
      <div style={{ bottom: 0, pointerEvents: "none", position: "fixed", right: 0, width: 600, zIndex: 0 }}>
        <img alt="" src={bgRight} style={{ display: "block", height: "auto", maxHeight: 600, objectFit: "contain", objectPosition: "bottom right", width: "100%" }} />
      </div>

      {/* Center column */}
      <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: GAP_SECTION, justifyContent: "center", minHeight: "100vh", padding: "48px 16px", position: "relative", width: "100%", zIndex: 1 }}>
        {/* Card — max 440px, DS3 Card elevation="sm" */}
        <div style={{ boxSizing: "border-box", maxWidth: CARD_WIDTH, width: "100%" }}>
          <Card elevation="sm">
            <CardBody>
              {/* inner padding wrapper — CardBody ไม่รับ style prop (DS3 API limitation) */}
              <div style={{ alignItems: "center", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: GAP_SECTION, padding: CARD_PADDING, width: "100%" }}>
                {/* Header */}
                <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: GAP_HEADER, width: "100%" }}>
                  {header}
                </div>
                {/* Content */}
                {children}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Footer outside card */}
        {footer && (
          <div style={{ boxSizing: "border-box", maxWidth: CARD_WIDTH, width: "100%" }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Logo header ───────────────────────────────────────────────────────────────
export function AMSDS3LogoHeader({ title, subtitle }: { subtitle?: ReactNode; title: ReactNode }) {
  return (
    <>
      <SellsukiLogo size={120} />
      <AMSDS3Title>{title}</AMSDS3Title>
      {subtitle ? <AMSDS3Subtitle>{subtitle}</AMSDS3Subtitle> : null}
    </>
  );
}

// ─── Legal footer ──────────────────────────────────────────────────────────────
/** DS3 FormHelperText — ไม่รับ style prop ใช้ className แทน */
export function AMSDS3LegalFooter({ children }: { children: ReactNode }) {
  return (
    <FormHelperText className="ams-legal-footer">
      {children}
    </FormHelperText>
  );
}

// ─── Form section wrappers (spacing constants) ─────────────────────────────────
export { GAP_FORM, GAP_ACTIONS, GAP_SECTION };

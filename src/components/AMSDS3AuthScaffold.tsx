/**
 * AMSDS3AuthScaffold — DS3 MCP Compliant
 * Layout ใช้ inline style ล้วน (ไม่พึ่ง Tailwind) เพื่อความแน่นอนใน Vite build
 */
import type { CSSProperties, ReactNode } from "react";
import { Card, CardBody, DSButton, FormHelperText, ToastContainer } from "@uxuissk/design-system";
import { SellsukiLogo } from "./SellsukiLogo";
import bgLeft from "../assets/1419c16c978bd71ca944442ea8b3e61b517a5ce2.png";
import bgRight from "../assets/96c4a042eb96bdba14eaccbb00815526b9856ac7.png";

const FONT = "DB HeaventRounded, sans-serif";

// ─── Shared styles ────────────────────────────────────────────────────────────
const centeredText: CSSProperties = { fontFamily: FONT, margin: 0, textAlign: "center" };

// ─── Icons ───────────────────────────────────────────────────────────────────
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

// ─── Text primitives ──────────────────────────────────────────────────────────
export function AMSDS3Title({ children }: { children: ReactNode }) {
  return (
    <h1 style={{ ...centeredText, color: "var(--text-primary, #111827)", fontSize: "44px", fontWeight: 700, lineHeight: 1.15 }}>
      {children}
    </h1>
  );
}

export function AMSDS3Subtitle({ children }: { children: ReactNode }) {
  return (
    <p style={{ ...centeredText, color: "var(--text-secondary, #6B7280)", fontSize: "20px", fontWeight: 400, lineHeight: 1.4, whiteSpace: "pre-line" }}>
      {children}
    </p>
  );
}

export function AMSDS3AccentText({ children }: { children: ReactNode }) {
  return (
    <span style={{ color: "var(--text-brand-primary, #0ea5e9)", fontFamily: FONT, fontSize: "20px", fontWeight: 600 }}>
      {children}
    </span>
  );
}

export function AMSDS3LinkButton({
  children,
  onClick,
  size: _size,
}: {
  children: ReactNode;
  onClick: () => void;
  size?: string;
}) {
  return (
    <DSButton
      variant="link"
      size="md"
      onClick={onClick}
      style={{ display: "inline", fontFamily: FONT, fontSize: "18px", height: "auto", minHeight: 0, padding: 0, verticalAlign: "baseline" }}
    >
      {children}
    </DSButton>
  );
}

// ─── Page scaffold ─────────────────────────────────────────────────────────────
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
    <div style={{
      background: "#F3F4F6",
      minHeight: "100vh",
      overflow: "hidden",
      position: "relative",
      width: "100%",
    }}>
      {/* DS3 ToastContainer */}
      <ToastContainer />

      {/* Bg left */}
      <div style={{
        bottom: 0, height: "400px", left: 0,
        pointerEvents: "none", position: "absolute", width: "400px", zIndex: 0,
      }}>
        <img alt="" src={bgLeft} style={{ height: "100%", objectFit: "cover", objectPosition: "bottom left", width: "100%" }} />
      </div>

      {/* Bg right */}
      <div style={{
        bottom: 0, height: "400px",
        pointerEvents: "none", position: "absolute", right: 0, width: "400px", zIndex: 0,
      }}>
        <img alt="" src={bgRight} style={{ height: "100%", objectFit: "cover", objectPosition: "bottom right", width: "100%" }} />
      </div>

      {/* Center container */}
      <div style={{
        alignItems: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "48px 16px",
        position: "relative",
        width: "100%",
        zIndex: 1,
      }}>
        {/* Card — fixed 440px width */}
        <div style={{ boxSizing: "border-box", maxWidth: "440px", width: "100%" }}>
          <Card elevation="sm">
            <CardBody>
              {/* inner padding wrapper — CardBody ไม่รับ style prop */}
              <div style={{ padding: "40px" }}>
                <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
                  {/* Header section */}
                  <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                    {header}
                  </div>
                  {/* Content */}
                  {children}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Footer */}
        {footer && (
          <div style={{ boxSizing: "border-box", maxWidth: "440px", width: "100%" }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Logo header ──────────────────────────────────────────────────────────────
export function AMSDS3LogoHeader({ title, subtitle }: { subtitle?: ReactNode; title: ReactNode }) {
  return (
    <>
      <SellsukiLogo size={96} />
      <AMSDS3Title>{title}</AMSDS3Title>
      {subtitle ? <AMSDS3Subtitle>{subtitle}</AMSDS3Subtitle> : null}
    </>
  );
}

// ─── Legal footer ─────────────────────────────────────────────────────────────
export function AMSDS3LegalFooter({ children }: { children: ReactNode }) {
  return (
    <FormHelperText className="ams-legal-footer">
      {children}
    </FormHelperText>
  );
}

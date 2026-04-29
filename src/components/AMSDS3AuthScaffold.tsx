import type { ReactNode } from "react";
import { Card, FormHelperText } from "@uxuissk/design-system";
import { SellsukiLogo } from "./SellsukiLogo";
import bgLeft from "../../assets/1419c16c978bd71ca944442ea8b3e61b517a5ce2.png";
import bgRight from "../../assets/96c4a042eb96bdba14eaccbb00815526b9856ac7.png";

function headerTextStyle(fontFamily: string, fontSize: string, color: string, lineHeight = 1) {
  return {
    color,
    fontFamily,
    fontSize,
    lineHeight,
    margin: 0,
    textAlign: "center" as const,
  };
}

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

export function AMSDS3Title({ children }: { children: ReactNode }) {
  return <h1 style={headerTextStyle("DB_HeaventRounded:Bold, sans-serif", "44px", "var(--text-primary)")}>{children}</h1>;
}

export function AMSDS3Subtitle({ children }: { children: ReactNode }) {
  return <p style={headerTextStyle("DB_HeaventRounded:Regular, sans-serif", "28px", "var(--text-secondary)", 1.2)}>{children}</p>;
}

export function AMSDS3AccentText({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        color: "var(--fg-brand-primary)",
        fontFamily: "DB_HeaventRounded:Med, sans-serif",
        fontSize: "28px",
      }}
    >
      {children}
    </span>
  );
}

export function AMSDS3LinkButton({
  children,
  onClick,
  size = "20px",
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
        color: "var(--fg-brand-primary)",
        cursor: "pointer",
        fontFamily: "DB_HeaventRounded:Med, sans-serif",
        fontSize: size,
        padding: 0,
      }}
      type="button"
    >
      {children}
    </button>
  );
}

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
        background: "var(--bg-disabled)",
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
          gap: "32px",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "48px 16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Card className="w-full max-w-[440px] p-[40px]">
          <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
            <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>{header}</div>
            {children}
          </div>
        </Card>

        {footer && <div style={{ maxWidth: "440px", width: "100%" }}>{footer}</div>}
      </div>
    </div>
  );
}

export function AMSDS3LogoHeader({ title, subtitle }: { subtitle?: ReactNode; title: ReactNode }) {
  return (
    <>
      <SellsukiLogo size={120} />
      <AMSDS3Title>{title}</AMSDS3Title>
      {subtitle ? <AMSDS3Subtitle>{subtitle}</AMSDS3Subtitle> : null}
    </>
  );
}

export function AMSDS3LegalFooter({ children }: { children: ReactNode }) {
  return <FormHelperText className="text-center text-[20px] leading-snug">{children}</FormHelperText>;
}

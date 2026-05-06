/**
 * AMS_DS3_LinkExpired
 * DS3: DSButton
 */
import { useNavigate } from "react-router";
import { DSButton } from "@uxuissk/design-system";
import { AMSDS3AuthScaffold, AMSDS3Subtitle, AMSDS3Title } from "../components/AMSDS3AuthScaffold";

function ExpiredIcon() {
  return (
    <div style={{ alignItems: "center", display: "flex", height: "120px", justifyContent: "center", width: "120px" }}>
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#e11d48" strokeWidth="1.5" />
        <path d="M12 8v4m0 4h.01" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function AMS_DS3_LinkExpired() {
  const navigate = useNavigate();
  return (
    <AMSDS3AuthScaffold
      header={
        <>
          <ExpiredIcon />
          <AMSDS3Title>ลิงก์หมดอายุแล้ว</AMSDS3Title>
          <AMSDS3Subtitle>ลิงก์รีเซ็ตรหัสผ่านของคุณหมดอายุแล้ว กรุณาขอลิงก์ใหม่</AMSDS3Subtitle>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)", width: "100%" }}>
        <DSButton fullWidth size="lg" onClick={() => navigate("/ams-ds3/forgot-password")}>ขอลิงก์ใหม่</DSButton>
        <DSButton fullWidth size="lg" variant="ghost" onClick={() => navigate("/ams-ds3")}>กลับไปเข้าสู่ระบบ</DSButton>
      </div>
    </AMSDS3AuthScaffold>
  );
}

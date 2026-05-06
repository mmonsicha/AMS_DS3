/**
 * AMS_DS3_ForgotPasswordCheckEmail
 * DS3: DSButton
 */
import { useLocation, useNavigate } from "react-router";
import { DSButton } from "@uxuissk/design-system";
import { AMSDS3AuthScaffold, AMSDS3EmailIcon, AMSDS3Subtitle, AMSDS3Title } from "../components/AMSDS3AuthScaffold";

export default function AMS_DS3_ForgotPasswordCheckEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string } | null;
  const email = state?.email || "your@email.com";

  return (
    <AMSDS3AuthScaffold
      header={
        <>
          <AMSDS3EmailIcon />
          <AMSDS3Title>โปรดตรวจสอบอีเมลของคุณ</AMSDS3Title>
          <AMSDS3Subtitle>{`หากพบอีเมลของคุณในระบบ เราจะส่งอีเมลพร้อมลิงก์\nเพื่อรีเซ็ตรหัสผ่านให้ กรุณาตรวจสอบโฟลเดอร์อีเมลขยะของคุณ`}</AMSDS3Subtitle>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)", width: "100%" }}>
        <DSButton fullWidth size="lg" onClick={() => navigate("/ams-ds3/forgot-password/create-password", { state: { email } })}>
          จำลอง: คลิกลิงก์ในอีเมล
        </DSButton>
        <DSButton fullWidth size="lg" variant="secondary" onClick={() => navigate("/ams-ds3/forgot-password/link-expired")}>
          จำลอง: ลิงก์หมดอายุ
        </DSButton>
        <DSButton fullWidth size="lg" variant="ghost" onClick={() => navigate("/ams-ds3")}>
          กลับไปเข้าสู่ระบบ
        </DSButton>
      </div>
    </AMSDS3AuthScaffold>
  );
}

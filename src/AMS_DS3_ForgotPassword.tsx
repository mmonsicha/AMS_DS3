/**
 * AMS_DS3_ForgotPassword
 * DS3: DSButton, DSInput
 */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DSButton, DSInput } from "@uxuissk/design-system";
import { AMSDS3AuthScaffold, AMSDS3LogoHeader } from "../components/AMSDS3AuthScaffold";

export default function AMS_DS3_ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string } | null;

  const [email, setEmail] = useState(state?.email || "");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async () => {
    if (!email.trim()) { setEmailError("กรุณาระบุอีเมล"); return; }
    if (!isValidEmail(email)) { setEmailError("รูปแบบอีเมลไม่ถูกต้อง"); return; }
    setEmailError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    navigate("/ams-ds3/forgot-password/check-email", { state: { email } });
  };

  return (
    <AMSDS3AuthScaffold
      header={<AMSDS3LogoHeader title="ลืมรหัสผ่าน" subtitle="กรอกอีเมลเพื่อรับลิงก์รีเซ็ตรหัสผ่าน" />}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
        <DSInput
          fullWidth label="อีเมล" placeholder="ระบุอีเมล" type="email" inputSize="lg"
          state={emailError ? "error" : "default"} errorMessage={emailError}
          value={email}
          onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
        />
        <DSButton fullWidth size="lg" loading={loading} onClick={handleSubmit} disabled={!email.trim()}>
          ส่งลิงก์รีเซ็ตรหัสผ่าน
        </DSButton>
        <DSButton fullWidth size="lg" variant="ghost" onClick={() => navigate("/ams-ds3")}>
          กลับไปเข้าสู่ระบบ
        </DSButton>
      </div>
    </AMSDS3AuthScaffold>
  );
}

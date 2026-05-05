/**
 * AMS_DS3_SetPassword
 * DS3: DSButton, DSInput
 * Gap: ยังไม่มี DS password-strength component ใน React package
 */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DSButton, DSInput } from "@uxuissk/design-system";
import {
  AMSDS3AccentText,
  AMSDS3AuthScaffold,
  AMSDS3LegalFooter,
  AMSDS3LinkButton,
  AMSDS3LogoHeader,
} from "../components/AMSDS3AuthScaffold";

export default function AMS_DS3_SetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string } | null;
  const email = state?.email || "hello@sellsuki.com";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const canProceed = password.trim().length >= 6 && confirmPassword.trim().length > 0;
  const passwordsMatch = confirmPassword && password && confirmPassword === password;

  const handleSubmit = async () => {
    let valid = true;
    if (!password.trim()) { setPasswordError("กรุณาระบุรหัสผ่าน"); valid = false; }
    else if (password.length < 6) { setPasswordError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"); valid = false; }
    if (!confirmPassword.trim()) { setConfirmPasswordError("กรุณายืนยันรหัสผ่าน"); valid = false; }
    else if (password !== confirmPassword) { setConfirmPasswordError("รหัสผ่านไม่ตรงกัน"); valid = false; }
    if (!valid) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    navigate("/ams-ds3/signup/verify-email", { state: { email } });
  };

  return (
    <AMSDS3AuthScaffold
      header={
        <>
          <AMSDS3LogoHeader title="สมัครสมาชิก Sellsuki" />
          <AMSDS3AccentText>{email}</AMSDS3AccentText>
          <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")}>
            สมัครด้วยอีเมลอื่น
          </AMSDS3LinkButton>
        </>
      }
      footer={
        <AMSDS3LegalFooter>
          ยังไม่มี password strength meter จาก DS — React package ปัจจุบันไม่มี component ตรงเทียบ MCP catalog
        </AMSDS3LegalFooter>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
        <DSInput
          fullWidth
          label="ตั้งรหัสผ่าน"
          placeholder="ระบุรหัสผ่าน"
          showPasswordToggle
          type="password"
          inputSize="lg"
          state={passwordError ? "error" : "default"}
          errorMessage={passwordError}
          helperText="ใช้ DS Input ตรง ๆ และคง logic validation จาก flow เดิม"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setPasswordError(""); }}
        />

        <DSInput
          fullWidth
          label="ยืนยันรหัสผ่าน"
          placeholder="ยืนยันรหัสผ่าน"
          showPasswordToggle
          type="password"
          inputSize="lg"
          state={confirmPasswordError ? "error" : passwordsMatch ? "success" : "default"}
          errorMessage={confirmPasswordError}
          successMessage={passwordsMatch ? "รหัสผ่านตรงกัน ✓" : undefined}
          value={confirmPassword}
          onChange={(e) => { setConfirmPassword(e.target.value); setConfirmPasswordError(""); }}
        />

        <DSButton fullWidth size="lg" loading={loading} onClick={handleSubmit} disabled={!canProceed}>
          ต่อไป
        </DSButton>
      </div>
    </AMSDS3AuthScaffold>
  );
}

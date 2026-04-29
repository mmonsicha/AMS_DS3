import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, FormField, Input } from "@uxuissk/design-system";
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

    if (!password.trim()) {
      setPasswordError("กรุณาระบุรหัสผ่าน");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      valid = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("กรุณายืนยันรหัสผ่าน");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("รหัสผ่านไม่ตรงกัน");
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    navigate("/ams-ds3/signup/verify-email", { state: { email } });
  };

  return (
    <AMSDS3AuthScaffold
      header={
        <>
          <AMSDS3LogoHeader title="สมัครสมาชิก Sellsuki" />
          <AMSDS3AccentText>{email}</AMSDS3AccentText>
          <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")} size="24px">
            สมัครด้วยอีเมลอื่น
          </AMSDS3LinkButton>
        </>
      }
      footer={
        <AMSDS3LegalFooter>
          ยังไม่สามารถใช้ password strength meter จาก DS ได้โดยตรง เพราะ React package ปัจจุบันไม่มี component ตรงเทียบ MCP catalog
        </AMSDS3LegalFooter>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
        <FormField
          name="password"
          label="ตั้งรหัสผ่าน"
          error={passwordError}
          helperText="ใช้ DS Input ตรง ๆ และคง logic validation จาก flow เดิม"
        >
          <Input
            fullWidth
            placeholder="ระบุรหัสผ่าน"
            showPasswordToggle
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setPasswordError("");
            }}
          />
        </FormField>

        <FormField
          name="confirmPassword"
          label="ยืนยันรหัสผ่าน"
          error={confirmPasswordError}
          successMessage={passwordsMatch ? "รหัสผ่านตรงกัน ✓" : undefined}
        >
          <Input
            fullWidth
            placeholder="ยืนยันรหัสผ่าน"
            showPasswordToggle
            type="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              setConfirmPasswordError("");
            }}
          />
        </FormField>

        <Button fullWidth size="lg" loading={loading} onClick={handleSubmit} disabled={!canProceed}>
          ต่อไป
        </Button>
      </div>
    </AMSDS3AuthScaffold>
  );
}

/**
 * AMS_DS3_CreatePassword
 * DS3: DSButton, DSInput
 * Gap: ยังไม่มี DS password-strength component
 */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DSButton, DSInput, toast } from "@uxuissk/design-system";
import {
  AMSDS3AuthScaffold,
  AMSDS3LogoHeader,
} from "../components/AMSDS3AuthScaffold";

export default function AMS_DS3_CreatePassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string } | null;
  const email = state?.email || "hello@sellsuki.com";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newError, setNewError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmit = newPassword.trim() && confirmPassword.trim();

  const passwordStrength = (() => {
    if (!newPassword) return 0;
    let score = 0;
    if (newPassword.length >= 8) score++;
    if (/[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword)) score++;
    if (/[0-9]/.test(newPassword) && /[^A-Za-z0-9]/.test(newPassword)) score++;
    return score;
  })();

  const handleSubmit = async () => {
    let valid = true;
    if (!newPassword.trim()) { setNewError("กรุณาระบุรหัสผ่านใหม่"); valid = false; }
    else if (passwordStrength < 2) { setNewError("รหัสผ่านอ่อนแอเกินไป กรุณาใช้รหัสผ่านที่แข็งแกร่งกว่า"); valid = false; }
    if (!confirmPassword.trim()) { setConfirmError("กรุณายืนยันรหัสผ่าน"); valid = false; }
    else if (newPassword !== confirmPassword) { setConfirmError("รหัสผ่านไม่ตรงกัน"); valid = false; }
    if (!valid) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success(`เปลี่ยนรหัสผ่านสำเร็จแล้วสำหรับ ${email}`);
    navigate("/ams-ds3", { state: { toast: `เปลี่ยนรหัสผ่านสำเร็จแล้วสำหรับ ${email}`, toastType: "success" } });
  };

  const passwordsMatch = confirmPassword && newPassword && confirmPassword === newPassword;

  return (
    <AMSDS3AuthScaffold
      header={<AMSDS3LogoHeader title="ตั้งรหัสผ่านใหม่ของคุณ" />}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
        <DSInput
          fullWidth
          label="ตั้งรหัสผ่านใหม่"
          placeholder="ระบุรหัสผ่านใหม่"
          showPasswordToggle
          type="password"
          inputSize="lg"
          state={newError ? "error" : "default"}
          errorMessage={newError}
          helperText="ยังไม่มี DS password-strength component แบบตรงจาก React package จึงคงเฉพาะ validation logic"
          value={newPassword}
          onChange={(e) => { setNewPassword(e.target.value); setNewError(""); }}
        />

        <DSInput
          fullWidth
          label="ยืนยันรหัสผ่าน"
          placeholder="ยืนยันรหัสผ่านใหม่"
          showPasswordToggle
          type="password"
          inputSize="lg"
          state={confirmError ? "error" : passwordsMatch ? "success" : "default"}
          errorMessage={confirmError}
          successMessage={passwordsMatch ? "รหัสผ่านตรงกัน ✓" : undefined}
          value={confirmPassword}
          onChange={(e) => { setConfirmPassword(e.target.value); setConfirmError(""); }}
        />

        <DSButton fullWidth size="lg" loading={loading} onClick={handleSubmit} disabled={!canSubmit}>
          เปลี่ยนรหัสผ่าน
        </DSButton>
      </div>
    </AMSDS3AuthScaffold>
  );
}

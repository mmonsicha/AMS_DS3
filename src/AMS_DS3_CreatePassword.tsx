import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, FormField, Input } from "@uxuissk/design-system";
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

    if (!newPassword.trim()) {
      setNewError("กรุณาระบุรหัสผ่านใหม่");
      valid = false;
    } else if (passwordStrength < 2) {
      setNewError("รหัสผ่านอ่อนแอเกินไป กรุณาใช้รหัสผ่านที่แข็งแกร่งกว่า");
      valid = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmError("กรุณายืนยันรหัสผ่าน");
      valid = false;
    } else if (newPassword !== confirmPassword) {
      setConfirmError("รหัสผ่านไม่ตรงกัน");
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    navigate("/ams-ds3", {
      state: {
        toast: `เปลี่ยนรหัสผ่านสำเร็จแล้วสำหรับ ${email}`,
        toastType: "success",
      },
    });
  };

  return (
    <AMSDS3AuthScaffold
      header={<AMSDS3LogoHeader title="ตั้งรหัสผ่านใหม่ของคุณ" />}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
        <FormField
          name="newPassword"
          label="ตั้งรหัสผ่านใหม่"
          error={newError}
          helperText="ยังไม่มี DS password-strength component แบบตรงจาก React package จึงคงเฉพาะ validation logic"
        >
          <Input
            fullWidth
            placeholder="ระบุรหัสผ่านใหม่"
            showPasswordToggle
            type="password"
            value={newPassword}
            onChange={(event) => {
              setNewPassword(event.target.value);
              setNewError("");
            }}
          />
        </FormField>

        <FormField
          name="confirmPassword"
          label="ยืนยันรหัสผ่าน"
          error={confirmError}
          successMessage={confirmPassword && newPassword && confirmPassword === newPassword ? "รหัสผ่านตรงกัน ✓" : undefined}
        >
          <Input
            fullWidth
            placeholder="ยืนยันรหัสผ่านใหม่"
            showPasswordToggle
            type="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              setConfirmError("");
            }}
          />
        </FormField>

        <Button fullWidth size="lg" loading={loading} onClick={handleSubmit} disabled={!canSubmit}>
          เปลี่ยนรหัสผ่าน
        </Button>
      </div>
    </AMSDS3AuthScaffold>
  );
}

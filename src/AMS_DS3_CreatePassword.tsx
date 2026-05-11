/**
 * AMS_DS3_CreatePassword
 * DS3: DSButton, DSInput, ProgressBar (Gap #2 — password strength)
 */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DSButton, DSInput, ProgressBar, toast } from "@uxuissk/design-system";
import { AMSDS3AuthScaffold, AMSDS3LogoHeader } from "../components/AMSDS3AuthScaffold";

function getPasswordStrength(pw: string): { score: number; label: string; color: string } {
  if (!pw) return { score: 0, label: "", color: "var(--color-neutral-300)" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const map: Record<number, { label: string; color: string }> = {
    1: { label: "อ่อนแอ", color: "#e11d48" },
    2: { label: "พอใช้", color: "#f59e0b" },
    3: { label: "แข็งแกร่ง", color: "#22c55e" },
    4: { label: "แข็งแกร่งมาก", color: "#16a34a" },
  };
  return { score, ...(map[score] ?? { label: "อ่อนแอ", color: "#e11d48" }) };
}

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

  const strength = getPasswordStrength(newPassword);
  const canSubmit = newPassword.trim() && confirmPassword.trim();
  const passwordsMatch = confirmPassword && newPassword && confirmPassword === newPassword;

  const handleSubmit = async () => {
    let valid = true;
    if (!newPassword.trim()) { setNewError("กรุณาระบุรหัสผ่านใหม่"); valid = false; }
    else if (strength.score < 2) { setNewError("รหัสผ่านอ่อนแอเกินไป กรุณาใช้รหัสผ่านที่แข็งแกร่งกว่า"); valid = false; }
    if (!confirmPassword.trim()) { setConfirmError("กรุณายืนยันรหัสผ่าน"); valid = false; }
    else if (newPassword !== confirmPassword) { setConfirmError("รหัสผ่านไม่ตรงกัน"); valid = false; }
    if (!valid) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    toast.success(`เปลี่ยนรหัสผ่านสำเร็จแล้วสำหรับ ${email}`);
    navigate("/ams-ds3", { state: { toast: `เปลี่ยนรหัสผ่านสำเร็จแล้วสำหรับ ${email}`, toastType: "success" } });
  };

  return (
    <AMSDS3AuthScaffold header={<AMSDS3LogoHeader title="ตั้งรหัสผ่านใหม่ของคุณ" />}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
        <DSInput
          fullWidth label="ตั้งรหัสผ่านใหม่" placeholder="ระบุรหัสผ่านใหม่"
          showPasswordToggle type="password" inputSize="lg"
          state={newError ? "error" : "default"} errorMessage={newError}
          value={newPassword}
          onChange={(e) => { setNewPassword(e.target.value); setNewError(""); }}
        />

        {/* Gap #2: ProgressBar แทน PasswordStrength */}
        {newPassword && (
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <ProgressBar value={strength.score * 25} size="sm" color={strength.color} />
            <span style={{ color: strength.color, fontFamily: "DB HeaventRounded, sans-serif", fontSize: "var(--text-label)" }}>
              ความแข็งแกร่งรหัสผ่าน: {strength.label}
            </span>
          </div>
        )}

        <DSInput
          fullWidth label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่านใหม่"
          showPasswordToggle type="password" inputSize="lg"
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

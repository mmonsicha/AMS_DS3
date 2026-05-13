/**
 * AMS_DS3_SetPassword
 * DS3: DSButton, DSInput, ProgressBar (Gap #2 — ใช้แทน password strength custom)
 *
 * Gap #2: DS3 ไม่มี PasswordStrength component โดยตรง
 *   → ใช้ ProgressBar + validation logic แทน
 *   → เขียน GitHub Issue แนบไว้
 */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DSButton, DSInput, ProgressBar } from "@uxuissk/design-system";
import {
  AMSDS3AccentText,
  AMSDS3AuthScaffold,
  AMSDS3LinkButton,
  AMSDS3LogoHeader,
} from "./components/AMSDS3AuthScaffold";

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

export default function AMS_DS3_SetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string; firstName?: string; lastName?: string } | null;
  const email     = state?.email     || "hello@sellsuki.com";
  const firstName = state?.firstName || "";
  const lastName  = state?.lastName  || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const strength = getPasswordStrength(password);
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
    navigate("/ams-ds3/signup/verify-email", { state: { email, firstName, lastName } });
  };

  return (
    <AMSDS3AuthScaffold
      header={
        <>
          <AMSDS3LogoHeader title="สมัครสมาชิก Sellsuki" />
          <AMSDS3AccentText>{email}</AMSDS3AccentText>
          <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")}>สมัครด้วยอีเมลอื่น</AMSDS3LinkButton>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
        <DSInput
          fullWidth label="ตั้งรหัสผ่าน" placeholder="ระบุรหัสผ่าน"
          showPasswordToggle type="password" inputSize="lg"
          state={passwordError ? "error" : "default"} errorMessage={passwordError}
          value={password}
          onChange={(e) => { setPassword(e.target.value); setPasswordError(""); }}
        />

        {/* Gap #2: ใช้ ProgressBar แทน DS3 PasswordStrength ที่ยังไม่มี */}
        {password && (
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <ProgressBar value={strength.score * 25} size="sm" color={strength.color} />
            <span style={{ color: strength.color, fontFamily: "DB HeaventRounded, sans-serif", fontSize: "var(--text-label)" }}>
              ความแข็งแกร่งรหัสผ่าน: {strength.label}
            </span>
          </div>
        )}

        <DSInput
          fullWidth label="ยืนยันรหัสผ่าน" placeholder="ยืนยันรหัสผ่าน"
          showPasswordToggle type="password" inputSize="lg"
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

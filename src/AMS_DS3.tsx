/**
 * AMS_DS3 — Sign In
 * DS3 components: DSButton, DSInput, FormField, Divider, ToastContainer/toast
 * DS3 tokens: font-family, --text-p, --text-h3, --text-primary, --text-brand-primary
 */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DSButton, DSInput, Divider, toast } from "@uxuissk/design-system";
import {
  AMSDS3AuthScaffold,
  AMSDS3LegalFooter,
  AMSDS3LinkButton,
  AMSDS3LogoHeader,
} from "../components/AMSDS3AuthScaffold";

const FONT_FAMILY = "DB HeaventRounded, sans-serif";

export default function AMS_DS3() {
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState<"email" | "password">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const state = location.state as { toast?: string; toastType?: string } | null;
    if (!state?.toast) return;
    if (state.toastType === "success") toast.success(state.toast);
    else toast.info(state.toast);
    window.history.replaceState({}, "");
  }, [location.state]);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailNext = () => {
    if (!email.trim()) { setEmailError("กรุณาระบุอีเมล"); return; }
    if (!isValidEmail(email)) { setEmailError("รูปแบบอีเมลไม่ถูกต้อง"); return; }
    setEmailError("");
    setStep("password");
  };

  const handleLogin = async () => {
    if (!password.trim()) { setPasswordError("กรุณาระบุรหัสผ่าน"); return; }
    setPasswordError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    navigate("/dashboard");
  };

  const handleSocialLogin = (provider: "Google" | "Facebook" | "LINE") => {
    toast.info(`ยังไม่มี DS component สำหรับ social auth button ของ ${provider} ใน React package ปัจจุบัน`);
  };

  return (
    <AMSDS3AuthScaffold
      header={
        <AMSDS3LogoHeader
          title="ยินดีต้อนรับสู่ Sellsuki"
          subtitle={step === "email" ? "กรุณาล็อกอินเข้าสู่ระบบ" : email}
        />
      }
      footer={
        <AMSDS3LegalFooter>
          การคลิก "เข้าสู่ระบบ" ข้างต้น แสดงว่าคุณได้อ่านและเข้าใจ และยินยอมตาม
          <br />
          นโยบายความเป็นส่วนตัว และ คุ้มครองข้อมูลส่วนบุคคล
        </AMSDS3LegalFooter>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)", width: "100%" }}>
        {step === "email" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
            {/* DS3: DSInput handles label + error internally */}
            <DSInput
              fullWidth
              label="อีเมล"
              placeholder="ระบุอีเมล"
              type="email"
              inputSize="lg"
              state={emailError ? "error" : "default"}
              errorMessage={emailError}
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
              <DSButton fullWidth size="lg" onClick={handleEmailNext} disabled={!email.trim()}>
                ต่อไป
              </DSButton>

              <p style={{ fontFamily: "DB HeaventRounded, sans-serif", fontSize: "var(--text-p)", margin: 0, textAlign: "center", color: "var(--text-secondary)" }}>
                ยังไม่มีบัญชีเข้าใช้งาน?{" "}
                <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")}>สมัครบัญชีผู้ใช้ใหม่ที่นี่</AMSDS3LinkButton>
              </p>
            </div>

            <Divider label="หรือ" />

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
              <DSButton fullWidth size="lg" variant="outline" onClick={() => handleSocialLogin("Google")}>เข้าใช้งานด้วยบัญชี Google</DSButton>
              <DSButton fullWidth size="lg" variant="outline" onClick={() => handleSocialLogin("Facebook")}>เข้าใช้งานด้วยบัญชี Facebook</DSButton>
              <DSButton fullWidth size="lg" variant="outline" onClick={() => handleSocialLogin("LINE")}>เข้าใช้งานด้วยบัญชี LINE</DSButton>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
            <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", marginBottom: "var(--space-4)" }}>
              <span style={{ color: "var(--text-primary)", fontFamily: FONT_FAMILY, fontSize: "var(--text-h4)", lineHeight: 1 }}>
                รหัสผ่าน
              </span>
              <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/forgot-password", { state: { email } })}>
                ลืมรหัสผ่าน?
              </AMSDS3LinkButton>
            </div>

            <DSInput
              fullWidth
              placeholder="ระบุรหัสผ่าน"
              showPasswordToggle
              type="password"
              inputSize="lg"
              state={passwordError ? "error" : "default"}
              errorMessage={passwordError}
              value={password}
              onChange={(e) => { setPassword(e.target.value); setPasswordError(""); }}
            />

            <DSButton fullWidth size="lg" loading={loading} onClick={handleLogin} disabled={!password.trim()}>
              เข้าสู่ระบบ
            </DSButton>

            <DSButton
              fullWidth
              size="lg"
              variant="ghost"
              onClick={() => { setStep("email"); setPassword(""); setPasswordError(""); }}
            >
              กลับ
            </DSButton>
          </div>
        )}
      </div>
    </AMSDS3AuthScaffold>
  );
}

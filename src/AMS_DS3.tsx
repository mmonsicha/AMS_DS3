import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, Divider, FormField, FormHelperText, Input } from "@uxuissk/design-system";
import { toast } from "../components/ToastProvider";
import {
  AMSDS3AuthScaffold,
  AMSDS3LegalFooter,
  AMSDS3LinkButton,
  AMSDS3LogoHeader,
} from "../components/AMSDS3AuthScaffold";

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
    if (!email.trim()) {
      setEmailError("กรุณาระบุอีเมล");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }

    setEmailError("");
    setStep("password");
  };

  const handleLogin = async () => {
    if (!password.trim()) {
      setPasswordError("กรุณาระบุรหัสผ่าน");
      return;
    }

    setPasswordError("");
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
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
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
        {step === "email" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <FormField name="email" label="อีเมล" error={emailError}>
              <Input
                fullWidth
                placeholder="ระบุอีเมล"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError("");
                }}
              />
            </FormField>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <Button fullWidth size="lg" onClick={handleEmailNext} disabled={!email.trim()}>
                ต่อไป
              </Button>

              <FormHelperText className="text-center text-[20px]">
                ยังไม่มีบัญชีเข้าใช้งาน?{" "}
                <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")}>สมัครบัญชีผู้ใช้ใหม่ที่นี่</AMSDS3LinkButton>
              </FormHelperText>
            </div>

            <Divider label="หรือ" />

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
              <Button fullWidth size="lg" variant="outline" onClick={() => handleSocialLogin("Google")}>
                เข้าใช้งานด้วยบัญชี Google
              </Button>
              <Button fullWidth size="lg" variant="outline" onClick={() => handleSocialLogin("Facebook")}>
                เข้าใช้งานด้วยบัญชี Facebook
              </Button>
              <Button fullWidth size="lg" variant="outline" onClick={() => handleSocialLogin("LINE")}>
                เข้าใช้งานด้วยบัญชี LINE
              </Button>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "DB_HeaventRounded:Regular, sans-serif",
                  fontSize: "24px",
                  lineHeight: 1,
                }}
              >
                รหัสผ่าน
              </span>
              <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/forgot-password", { state: { email } })}>
                ลืมรหัสผ่าน?
              </AMSDS3LinkButton>
            </div>

            <FormField name="password" error={passwordError}>
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

            <Button fullWidth size="lg" loading={loading} onClick={handleLogin} disabled={!password.trim()}>
              เข้าสู่ระบบ
            </Button>

            <Button
              fullWidth
              size="lg"
              variant="ghost"
              onClick={() => {
                setStep("email");
                setPassword("");
                setPasswordError("");
              }}
            >
              กลับ
            </Button>
          </div>
        )}
      </div>
    </AMSDS3AuthScaffold>
  );
}

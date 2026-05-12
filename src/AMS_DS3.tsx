/**
 * AMS_DS3 — Sign In
 * Figma: rf4iHkS4ndjkHPv8mex4aH node 6245-26592
 * DS3: DSButton, DSInput, Divider, toast, ToastContainer (in scaffold)
 */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DSButton, DSInput, Divider, toast } from "@uxuissk/design-system";
import {
  AMSDS3AuthScaffold, AMSDS3LegalFooter, AMSDS3LinkButton, AMSDS3LogoHeader, GAP_ACTIONS, GAP_FORM,
} from "./components/AMSDS3AuthScaffold";
import { FacebookIcon, GoogleIcon, LineIcon } from "./components/SocialIcons";

const FONT = "DB HeaventRounded, sans-serif";
const CLR_PRIMARY = "var(--text-primary, #1f2937)";
const CLR_SECONDARY = "var(--text-secondary, #6b7280)";

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
    const s = location.state as { toast?: string; toastType?: string } | null;
    if (!s?.toast) return;
    s.toastType === "success" ? toast.success(s.toast) : toast.info(s.toast);
    window.history.replaceState({}, "");
  }, [location.state]);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleEmailNext = () => {
    if (!email.trim()) { setEmailError("กรุณาระบุอีเมล"); return; }
    if (!isValidEmail(email)) { setEmailError("รูปแบบอีเมลไม่ถูกต้อง"); return; }
    setEmailError(""); setStep("password");
  };

  const handleLogin = async () => {
    if (!password.trim()) { setPasswordError("กรุณาระบุรหัสผ่าน"); return; }
    setPasswordError(""); setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false); navigate("/dashboard");
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
          <br />นโยบายความเป็นส่วนตัว และ คุ้มครองข้อมูลส่วนบุคคล
        </AMSDS3LegalFooter>
      }
    >
      {step === "email" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: GAP_FORM, width: "100%" }}>
          <DSInput
            fullWidth label="อีเมล" placeholder="ระบุอีเมล" type="email" inputSize="lg"
            state={emailError ? "error" : "default"} errorMessage={emailError}
            value={email} onChange={e => { setEmail(e.target.value); setEmailError(""); }}
          />
          <DSButton fullWidth size="lg" onClick={handleEmailNext} disabled={!email.trim()}>ต่อไป</DSButton>
          <p style={{ color: CLR_SECONDARY, fontFamily: FONT, fontSize: 16, margin: 0, textAlign: "center" }}>
            ยังไม่มีบัญชีเข้าใช้งาน?{" "}
            <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")}>สมัครบัญชีผู้ใช้ใหม่ที่นี่</AMSDS3LinkButton>
          </p>
          <Divider label="หรือ" />
          <div style={{ display: "flex", flexDirection: "column", gap: GAP_ACTIONS, width: "100%" }}>
            <DSButton fullWidth size="lg" variant="outline" onClick={() => toast.info("Google login — coming soon")}>
              <span className="ams-social-btn"><GoogleIcon />เข้าใช้งานด้วยบัญชี Google</span>
            </DSButton>
            <DSButton fullWidth size="lg" variant="outline" onClick={() => toast.info("Facebook login — coming soon")}>
              <span className="ams-social-btn"><FacebookIcon />เข้าใช้งานด้วยบัญชี Facebook</span>
            </DSButton>
            <DSButton fullWidth size="lg" variant="outline" onClick={() => toast.info("LINE login — coming soon")}>
              <span className="ams-social-btn"><LineIcon />เข้าใช้งานด้วยบัญชี LINE</span>
            </DSButton>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: GAP_FORM, width: "100%" }}>
          <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: CLR_PRIMARY, fontFamily: FONT, fontSize: 20, fontWeight: 600 }}>รหัสผ่าน</span>
            <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/forgot-password", { state: { email } })}>ลืมรหัสผ่าน?</AMSDS3LinkButton>
          </div>
          <DSInput
            fullWidth placeholder="ระบุรหัสผ่าน" showPasswordToggle type="password" inputSize="lg"
            state={passwordError ? "error" : "default"} errorMessage={passwordError}
            value={password} onChange={e => { setPassword(e.target.value); setPasswordError(""); }}
          />
          <DSButton fullWidth size="lg" loading={loading} onClick={handleLogin} disabled={!password.trim()}>เข้าสู่ระบบ</DSButton>
          <DSButton fullWidth size="lg" variant="ghost" onClick={() => { setStep("email"); setPassword(""); setPasswordError(""); }}>กลับ</DSButton>
        </div>
      )}
    </AMSDS3AuthScaffold>
  );
}

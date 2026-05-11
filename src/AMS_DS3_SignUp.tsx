import { useState } from "react";
import { useNavigate } from "react-router";
import { DSButton, DSCheckbox, DSInput, Divider, toast } from "@uxuissk/design-system";
import { AMSDS3AuthScaffold, AMSDS3LegalFooter, AMSDS3LinkButton, AMSDS3LogoHeader, GAP_ACTIONS, GAP_FORM } from "../components/AMSDS3AuthScaffold";
import { FacebookIcon, GoogleIcon, LineIcon } from "../components/SocialIcons";

const CLR_SECONDARY = "var(--text-secondary, #6b7280)";
const FONT = "DB HeaventRounded, sans-serif";

export default function AMS_DS3_SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const canProceed = email.trim() && termsAccepted;
  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleNext = () => {
    if (!email.trim()) { setEmailError("กรุณาระบุอีเมล"); return; }
    if (!isValidEmail(email)) { setEmailError("รูปแบบอีเมลไม่ถูกต้อง"); return; }
    setEmailError(""); navigate("/ams-ds3/signup/register", { state: { email } });
  };

  return (
    <AMSDS3AuthScaffold
      header={<AMSDS3LogoHeader title="สมัครสมาชิก Sellsuki" subtitle="สมัครสมาชิกเพื่อเข้าใช้งาน" />}
      footer={<AMSDS3LegalFooter>การคลิก "ดำเนินการต่อ" ข้างต้น แสดงว่าคุณได้อ่านและเข้าใจ และยินยอมตาม<br />เงื่อนไขข้อตกลงในการให้บริการ และ นโยบายความเป็นส่วนตัว</AMSDS3LegalFooter>}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: GAP_FORM, width: "100%" }}>
        <DSInput
          fullWidth label="อีเมล" placeholder="ระบุอีเมล" type="email" inputSize="lg"
          state={emailError ? "error" : "default"} errorMessage={emailError}
          value={email} onChange={e => { setEmail(e.target.value); setEmailError(""); }}
        />
        <DSCheckbox checked={termsAccepted} onChange={setTermsAccepted} size="md"
          label="ยอมรับเงื่อนไขข้อตกลงและนโยบายความเป็นส่วนตัว" />
        <DSButton fullWidth size="lg" onClick={handleNext} disabled={!canProceed}>ต่อไป</DSButton>
        <p style={{ color: CLR_SECONDARY, fontFamily: FONT, fontSize: 16, margin: 0, textAlign: "center" }}>
          คุณมีบัญชีผู้ใช้งานแล้ว?{" "}
          <AMSDS3LinkButton onClick={() => navigate("/ams-ds3")}>เข้าสู่ระบบเลย</AMSDS3LinkButton>
        </p>
        <Divider label="หรือ" />
        <div style={{ display: "flex", flexDirection: "column", gap: GAP_ACTIONS, width: "100%" }}>
          <DSButton fullWidth size="lg" variant="outline" onClick={() => toast.info("Google signup — coming soon")}>
            <span className="ams-social-btn"><GoogleIcon />สมัครสมาชิกด้วยบัญชี Google</span>
          </DSButton>
          <DSButton fullWidth size="lg" variant="outline" onClick={() => toast.info("Facebook signup — coming soon")}>
            <span className="ams-social-btn"><FacebookIcon />สมัครสมาชิกด้วยบัญชี Facebook</span>
          </DSButton>
          <DSButton fullWidth size="lg" variant="outline" onClick={() => toast.info("LINE signup — coming soon")}>
            <span className="ams-social-btn"><LineIcon />สมัครสมาชิกด้วยบัญชี LINE</span>
          </DSButton>
        </div>
      </div>
    </AMSDS3AuthScaffold>
  );
}

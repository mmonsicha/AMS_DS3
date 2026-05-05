/**
 * AMS_DS3_SignUp
 * DS3: DSButton, DSInput, DSCheckbox, Divider, toast
 */
import { useState } from "react";
import { useNavigate } from "react-router";
import { DSButton, DSCheckbox, DSInput, Divider, toast } from "@uxuissk/design-system";
import {
  AMSDS3AuthScaffold,
  AMSDS3LegalFooter,
  AMSDS3LinkButton,
  AMSDS3LogoHeader,
} from "../components/AMSDS3AuthScaffold";

export default function AMS_DS3_SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const canProceed = email.trim() && termsAccepted;

  const handleNext = () => {
    if (!email.trim()) { setEmailError("กรุณาระบุอีเมล"); return; }
    if (!isValidEmail(email)) { setEmailError("รูปแบบอีเมลไม่ถูกต้อง"); return; }
    setEmailError("");
    navigate("/ams-ds3/signup/register", { state: { email } });
  };

  const handleSocialSignup = (provider: "Google" | "Facebook" | "LINE") => {
    toast.info(`ยังไม่มี DS component สำหรับ social auth button ของ ${provider} ใน React package ปัจจุบัน`);
  };

  return (
    <AMSDS3AuthScaffold
      header={<AMSDS3LogoHeader title="สมัครสมาชิก Sellsuki" subtitle="สมัครสมาชิกเพื่อเข้าใช้งาน" />}
      footer={
        <AMSDS3LegalFooter>
          การคลิก "ดำเนินการต่อ" ข้างต้น แสดงว่าคุณได้อ่านและเข้าใจ และยินยอมตาม
          <br />
          เงื่อนไขข้อตกลงในการให้บริการ และ นโยบายความเป็นส่วนตัว
        </AMSDS3LegalFooter>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-24)", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
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

          <DSCheckbox
            checked={termsAccepted}
            onChange={setTermsAccepted}
            label="ยอมรับเงื่อนไขข้อตกลงและนโยบายความเป็นส่วนตัว"
            size="md"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
            <DSButton fullWidth size="lg" onClick={handleNext} disabled={!canProceed}>ต่อไป</DSButton>
            <p style={{ fontFamily: "DB HeaventRounded, sans-serif", fontSize: "var(--text-p)", margin: 0, textAlign: "center", color: "var(--text-secondary)" }}>
              คุณมีบัญชีผู้ใช้งานแล้ว?{" "}
              <AMSDS3LinkButton onClick={() => navigate("/ams-ds3")}>เข้าสู่ระบบเลย</AMSDS3LinkButton>
            </p>
          </div>
        </div>

        <Divider label="หรือ" />

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", width: "100%" }}>
          <DSButton fullWidth size="lg" variant="outline" onClick={() => handleSocialSignup("Google")}>สมัครสมาชิกด้วยบัญชี Google</DSButton>
          <DSButton fullWidth size="lg" variant="outline" onClick={() => handleSocialSignup("Facebook")}>สมัครสมาชิกด้วยบัญชี Facebook</DSButton>
          <DSButton fullWidth size="lg" variant="outline" onClick={() => handleSocialSignup("LINE")}>สมัครสมาชิกด้วยบัญชี LINE</DSButton>
        </div>
      </div>
    </AMSDS3AuthScaffold>
  );
}

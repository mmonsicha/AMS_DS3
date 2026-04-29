import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Checkbox, Divider, FormField, FormHelperText, Input } from "@uxuissk/design-system";
import { toast } from "../components/ToastProvider";
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

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const canProceed = email.trim() && termsAccepted;

  const handleNext = () => {
    if (!email.trim()) {
      setEmailError("กรุณาระบุอีเมล");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }

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
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
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

          <Checkbox
            checked={termsAccepted}
            onChange={setTermsAccepted}
            label="ยอมรับเงื่อนไขข้อตกลงและนโยบายความเป็นส่วนตัว"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
            <Button fullWidth size="lg" onClick={handleNext} disabled={!canProceed}>
              ต่อไป
            </Button>

            <FormHelperText className="text-center text-[20px]">
              คุณมีบัญชีผู้ใช้งานแล้ว? <AMSDS3LinkButton onClick={() => navigate("/ams-ds3")}>เข้าสู่ระบบเลย</AMSDS3LinkButton>
            </FormHelperText>
          </div>
        </div>

        <Divider label="หรือ" />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
          <Button fullWidth size="lg" variant="outline" onClick={() => handleSocialSignup("Google")}>
            สมัครสมาชิกด้วยบัญชี Google
          </Button>
          <Button fullWidth size="lg" variant="outline" onClick={() => handleSocialSignup("Facebook")}>
            สมัครสมาชิกด้วยบัญชี Facebook
          </Button>
          <Button fullWidth size="lg" variant="outline" onClick={() => handleSocialSignup("LINE")}>
            สมัครสมาชิกด้วยบัญชี LINE
          </Button>
        </div>
      </div>
    </AMSDS3AuthScaffold>
  );
}

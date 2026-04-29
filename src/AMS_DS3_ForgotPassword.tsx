import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, FormField, Input } from "@uxuissk/design-system";
import {
  AMSDS3AuthScaffold,
  AMSDS3LogoHeader,
} from "../components/AMSDS3AuthScaffold";

export default function AMS_DS3_ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string } | null;

  const [email, setEmail] = useState(state?.email || "");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async () => {
    if (!email.trim()) {
      setEmailError("กรุณาระบุอีเมล");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }

    setEmailError("");
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    navigate("/ams-ds3/forgot-password/check-email", { state: { email } });
  };

  return (
    <AMSDS3AuthScaffold
      header={
        <AMSDS3LogoHeader
          title="ลืมรหัสผ่าน"
          subtitle="กรอกอีเมลเพื่อรับลิงก์รีเซ็ตรหัสผ่าน"
        />
      }
    >
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

        <Button fullWidth size="lg" loading={loading} onClick={handleSubmit} disabled={!email.trim()}>
          ส่งลิงก์รีเซ็ตรหัสผ่าน
        </Button>

        <Button fullWidth size="lg" variant="ghost" onClick={() => navigate("/ams-ds3")}>
          กลับไปเข้าสู่ระบบ
        </Button>
      </div>
    </AMSDS3AuthScaffold>
  );
}

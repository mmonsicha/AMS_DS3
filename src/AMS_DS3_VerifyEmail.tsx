/**
 * AMS_DS3_VerifyEmail
 * DS3: DSButton, toast (ToastContainer อยู่ใน scaffold แล้ว)
 */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DSButton, toast } from "@uxuissk/design-system";
import { AMSDS3AccentText, AMSDS3AuthScaffold, AMSDS3EmailIcon, AMSDS3Subtitle, AMSDS3Title } from "./components/AMSDS3AuthScaffold";

export default function AMS_DS3_VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string } | null;
  const email = state?.email || "hello@sellsuki.com";

  const [countdown, setCountdown] = useState(60);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResend = async () => {
    if (countdown > 0) return;
    setResending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setResending(false);
    setCountdown(60);
    toast.success("ส่งอีเมลยืนยันแล้ว กรุณาตรวจสอบกล่องจดหมายของคุณ");
  };

  return (
    <AMSDS3AuthScaffold
      header={
        <>
          <AMSDS3EmailIcon />
          <AMSDS3Title>กรุณายืนยันอีเมล</AMSDS3Title>
          <AMSDS3Subtitle>
            ตรวจสอบอีเมลที่ถูกส่งไปที่{"\n"}
            <AMSDS3AccentText>{email}</AMSDS3AccentText>{" "}
            เพื่อยืนยันบัญชีของคุณและเริ่มต้นใช้งาน
          </AMSDS3Subtitle>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
        <DSButton
          fullWidth size="lg" loading={resending}
          onClick={handleResend} disabled={countdown > 0}
          variant={countdown === 0 && !resending ? "primary" : "secondary"}
        >
          {countdown > 0 ? `ส่งอีกครั้ง (${countdown}s)` : "ส่งอีกครั้ง"}
        </DSButton>

        <DSButton fullWidth size="lg" variant="ghost"
          onClick={() => navigate("/ams-ds3/signup/verify-email/success", { state: { email } })}
        >
          จำลอง: ยืนยันอีเมลสำเร็จ
        </DSButton>
      </div>
    </AMSDS3AuthScaffold>
  );
}

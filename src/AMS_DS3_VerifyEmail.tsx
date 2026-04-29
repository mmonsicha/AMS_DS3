import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@uxuissk/design-system";
import { toast } from "../components/ToastProvider";
import {
  AMSDS3AccentText,
  AMSDS3AuthScaffold,
  AMSDS3EmailIcon,
  AMSDS3Title,
} from "../components/AMSDS3AuthScaffold";

export default function AMS_DS3_VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string } | null;
  const email = state?.email || "hello@sellsuki.com";

  const [countdown, setCountdown] = useState(60);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((current) => current - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResend = async () => {
    if (countdown > 0) return;
    setResending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
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
          <div
            style={{
              fontFamily: "DB_HeaventRounded:Regular, sans-serif",
              fontSize: "28px",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            <p style={{ color: "var(--text-secondary)", margin: 0 }}>ตรวจสอบอีเมลที่ถูกส่งไปที่</p>
            <p style={{ margin: 0 }}>
              <AMSDS3AccentText>{email}</AMSDS3AccentText>{" "}
              <span style={{ color: "var(--text-secondary)" }}>เพื่อยืนยันบัญชีของคุณและเริ่มต้นใช้งาน</span>
            </p>
          </div>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
        <Button
          fullWidth
          size="lg"
          loading={resending}
          onClick={handleResend}
          disabled={countdown > 0}
          variant={countdown === 0 && !resending ? "primary" : "secondary"}
        >
          {countdown > 0 ? `ส่งอีกครั้ง (${countdown}s)` : "ส่งอีกครั้ง"}
        </Button>

        <Button fullWidth size="lg" variant="ghost" onClick={() => navigate("/ams-ds3/signup/verify-email/success", { state: { email } })}>
          จำลอง: ยืนยันอีเมลสำเร็จ
        </Button>
      </div>
    </AMSDS3AuthScaffold>
  );
}

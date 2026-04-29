import { useLocation, useNavigate } from "react-router";
import { Button } from "@uxuissk/design-system";
import {
  AMSDS3AccentText,
  AMSDS3AuthScaffold,
  AMSDS3LogoHeader,
} from "../components/AMSDS3AuthScaffold";

export default function AMS_DS3_VerifyEmailSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string } | null;
  const email = state?.email || "hello@sellsuki.com";

  return (
    <AMSDS3AuthScaffold
      header={
        <>
          <AMSDS3LogoHeader title="ยินดีด้วย อีเมลของคุณได้รับการยืนยันแล้ว" />
          <p
            style={{
              color: "var(--text-secondary)",
              fontFamily: "DB_HeaventRounded:Regular, sans-serif",
              fontSize: "28px",
              lineHeight: 1.2,
              margin: 0,
              textAlign: "center",
            }}
          >
            อีเมล <AMSDS3AccentText>{email}</AMSDS3AccentText> ของคุณได้รับการยืนยันแล้ว
          </p>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
        <Button
          fullWidth
          size="lg"
          onClick={() =>
            navigate("/ams-ds3", {
              state: { toast: "สมัครสมาชิกและยืนยันอีเมลสำเร็จแล้ว", toastType: "success" },
            })
          }
        >
          กลับไปหน้า Sign in AMS_DS3
        </Button>
      </div>
    </AMSDS3AuthScaffold>
  );
}

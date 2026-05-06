/**
 * AMS_DS3_VerifyEmailSuccess
 * DS3: DSButton
 */
import { useLocation, useNavigate } from "react-router";
import { DSButton } from "@uxuissk/design-system";
import { AMSDS3AccentText, AMSDS3AuthScaffold, AMSDS3LogoHeader, AMSDS3Subtitle } from "../components/AMSDS3AuthScaffold";

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
          <AMSDS3Subtitle>
            อีเมล <AMSDS3AccentText>{email}</AMSDS3AccentText> ของคุณได้รับการยืนยันแล้ว
          </AMSDS3Subtitle>
        </>
      }
    >
      <DSButton fullWidth size="lg"
        onClick={() => navigate("/ams-ds3", { state: { toast: "สมัครสมาชิกและยืนยันอีเมลสำเร็จแล้ว", toastType: "success" } })}
      >
        กลับไปหน้า Sign in AMS_DS3
      </DSButton>
    </AMSDS3AuthScaffold>
  );
}

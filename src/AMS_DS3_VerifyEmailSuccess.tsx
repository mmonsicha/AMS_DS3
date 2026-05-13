/**
 * AMS_DS3_VerifyEmailSuccess
 * DS3: DSButton
 */
import { useLocation, useNavigate } from "react-router";
import { DSButton } from "@uxuissk/design-system";
import { AMSDS3AccentText, AMSDS3AuthScaffold, AMSDS3LogoHeader, AMSDS3Subtitle } from "./components/AMSDS3AuthScaffold";

export default function AMS_DS3_VerifyEmailSuccess() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const state     = location.state as { email?: string; firstName?: string; lastName?: string } | null;
  const email     = state?.email     || "hello@sellsuki.com";
  const firstName = state?.firstName || "";
  const lastName  = state?.lastName  || "";
  const displayName = firstName ? `${firstName}${lastName ? " " + lastName : ""}`.trim() : "";

  // Persist name for future logins on this device
  if (displayName) localStorage.setItem("ams_display_name", displayName);

  const handleEnter = () => {
    navigate("/app-selector", { state: { email, name: displayName } });
  };

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
      <DSButton fullWidth size="lg" onClick={handleEnter}>
        เข้าสู่ระบบ
      </DSButton>
    </AMSDS3AuthScaffold>
  );
}

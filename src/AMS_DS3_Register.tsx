/**
 * AMS_DS3_Register
 * DS3: DSButton, DSInput
 */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DSButton, DSInput } from "@uxuissk/design-system";
import {
  AMSDS3AccentText,
  AMSDS3AuthScaffold,
  AMSDS3LinkButton,
  AMSDS3LogoHeader,
} from "../components/AMSDS3AuthScaffold";

export default function AMS_DS3_Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { email?: string } | null;
  const email = state?.email || "hello@sellsuki.com";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [loading, setLoading] = useState(false);

  const canProceed = firstName.trim() && lastName.trim();

  const handleRegister = async () => {
    let valid = true;
    if (!firstName.trim()) { setFirstNameError("กรุณาระบุชื่อ"); valid = false; }
    if (!lastName.trim()) { setLastNameError("กรุณาระบุนามสกุล"); valid = false; }
    if (!valid) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    navigate("/ams-ds3/signup/set-password", {
      state: { email, firstName: firstName.trim(), lastName: lastName.trim() },
    });
  };

  return (
    <AMSDS3AuthScaffold
      header={
        <>
          <AMSDS3LogoHeader title="สมัครสมาชิก Sellsuki" />
          <AMSDS3AccentText>{email}</AMSDS3AccentText>
          <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")}>
            สมัครด้วยอีเมลอื่น
          </AMSDS3LinkButton>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
        <DSInput
          fullWidth label="ชื่อ" placeholder="ระบุชื่อ" inputSize="lg"
          state={firstNameError ? "error" : "default"} errorMessage={firstNameError}
          value={firstName}
          onChange={(e) => { setFirstName(e.target.value); setFirstNameError(""); }}
        />
        <DSInput
          fullWidth label="นามสกุล" placeholder="ระบุนามสกุล" inputSize="lg"
          state={lastNameError ? "error" : "default"} errorMessage={lastNameError}
          value={lastName}
          onChange={(e) => { setLastName(e.target.value); setLastNameError(""); }}
        />
        <DSButton fullWidth size="lg" loading={loading} onClick={handleRegister} disabled={!canProceed}>
          ต่อไป
        </DSButton>
        <div style={{ textAlign: "center" }}>
          <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")}>← กลับ</AMSDS3LinkButton>
        </div>
      </div>
    </AMSDS3AuthScaffold>
  );
}

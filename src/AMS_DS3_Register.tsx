import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, FormField, FormHelperText, Input } from "@uxuissk/design-system";
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

    if (!firstName.trim()) {
      setFirstNameError("กรุณาระบุชื่อ");
      valid = false;
    }

    if (!lastName.trim()) {
      setLastNameError("กรุณาระบุนามสกุล");
      valid = false;
    }

    if (!valid) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
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
          <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")} size="24px">
            สมัครด้วยอีเมลอื่น
          </AMSDS3LinkButton>
        </>
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
        <FormField name="firstName" label="ชื่อ" error={firstNameError}>
          <Input
            fullWidth
            placeholder="ระบุชื่อ"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              setFirstNameError("");
            }}
          />
        </FormField>

        <FormField name="lastName" label="นามสกุล" error={lastNameError}>
          <Input
            fullWidth
            placeholder="ระบุนามสกุล"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
              setLastNameError("");
            }}
          />
        </FormField>

        <Button fullWidth size="lg" loading={loading} onClick={handleRegister} disabled={!canProceed}>
          ต่อไป
        </Button>

        <FormHelperText className="text-center text-[20px]">
          <AMSDS3LinkButton onClick={() => navigate("/ams-ds3/signup")}>← กลับ</AMSDS3LinkButton>
        </FormHelperText>
      </div>
    </AMSDS3AuthScaffold>
  );
}

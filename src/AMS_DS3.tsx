import { useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Divider,
  FormField,
  Input,
  PageHeader,
  Sidebar,
  Tabs,
  TopNavbar,
  toast,
} from "@uxuissk/design-system";

type ViewMode = "signin" | "signup" | "recovery";

const pageTokens = {
  gapLg: "16px",
  gapXl: "24px",
  pagePadding: "24px",
  radius: "8px",
};

const sidebarGroups = [
  {
    label: "Authentication",
    items: [
      { id: "signin", label: "Sign in" },
      { id: "signup", label: "Sign up" },
      { id: "recovery", label: "Password recovery" },
    ],
  },
  {
    label: "Delivery",
    items: [{ id: "report", label: "DS3 status report" }],
  },
];

export default function AMS_DS3() {
  const [collapsed, setCollapsed] = useState(false);
  const [mode, setMode] = useState<ViewMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const isSignIn = mode === "signin";
  const isSignUp = mode === "signup";
  const isRecovery = mode === "recovery";

  const submitLabel = isSignIn ? "เข้าสู่ระบบ" : isSignUp ? "สร้างบัญชี" : "ส่งลิงก์รีเซ็ตรหัสผ่าน";
  const pageTitle = isSignIn ? "AMS DS3 Sign in" : isSignUp ? "AMS DS3 Sign up" : "AMS DS3 Password recovery";
  const pageSubtitle =
    isSignIn
      ? "เวอร์ชันนี้ใช้เฉพาะ component ที่ React package เรียกได้จริงจาก DS package ปัจจุบัน"
      : isSignUp
        ? "ฟอร์มชุดนี้จงใจใช้ DS package ตรง ๆ เพื่อแยกออกจาก Figma-exported UI เดิม"
        : "ถ้าบางองค์ประกอบยังไม่ถูกแทนที่ 100% จะถูกรายงานว่าเกิดจากช่องว่างระหว่าง MCP กับ React package";

  const handleSubmit = () => {
    toast.success(`AMS_DS3: ${submitLabel}`);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-disabled)" }}>
      <TopNavbar
        brand={{ name: "AMS_DS3" }}
        title={pageTitle}
        user={{ name: "Design System" }}
        notificationCount={3}
        onSidebarToggle={() => setCollapsed((value) => !value)}
      />

      <div style={{ display: "flex", paddingTop: "72px", minHeight: "100vh" }}>
        <Sidebar
          brand={{ name: "AMS_DS3" }}
          groups={sidebarGroups}
          activeItem={mode}
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          onNavigate={(item) => {
            if (item.id === "signin" || item.id === "signup" || item.id === "recovery") {
              setMode(item.id);
              return;
            }

            toast.info("รายงาน DS3 ถูกบันทึกไว้ใน docs/reports/sellsuki-dss แล้ว");
          }}
          showCollapseToggle={false}
          version="MCP 3.1.2 / pkg 0.7.2"
          versionDate="2026-04-29"
        />

        <main style={{ flex: 1, padding: pageTokens.pagePadding }}>
          <PageHeader
            title={pageTitle}
            subtitle={pageSubtitle}
            breadcrumb={<Breadcrumb items={[{ label: "AMS" }, { label: "DS3" }, { label: mode }]} />}
            actions={
              <Button variant="secondary" onClick={() => toast.info("ยังไม่มี React binding สำหรับ ssk-logo / ssk-heading / ssk-app-shell")}>
                ดู DS gap
              </Button>
            }
            tabs={
              <Tabs
                activeTab={mode}
                onChange={(id) => setMode(id as ViewMode)}
                tabs={[
                  { id: "signin", label: "Sign in" },
                  { id: "signup", label: "Sign up" },
                  { id: "recovery", label: "Recovery" },
                ]}
                fullWidth
                variant="underline"
              />
            }
          />

          <div style={{ display: "grid", gap: pageTokens.gapXl, gridTemplateColumns: "minmax(0, 2fr) minmax(320px, 1fr)", alignItems: "start" }}>
            <Card>
              <CardHeader>
                {isSignIn ? "Authentication form" : isSignUp ? "Registration form" : "Recovery form"}
              </CardHeader>
              <CardBody>
                <div style={{ display: "grid", gap: pageTokens.gapLg }}>
                  <FormField
                    name="email"
                    label="อีเมล"
                    helperText={isRecovery ? "เราจะส่งลิงก์รีเซ็ตไปยังอีเมลนี้" : "ใช้ DS Input โดยตรงจาก package"}
                  >
                    <Input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="hello@sellsuki.com"
                      fullWidth
                    />
                  </FormField>

                  {isSignUp && (
                    <>
                      <FormField name="firstName" label="ชื่อ">
                        <Input value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="ชื่อ" fullWidth />
                      </FormField>
                      <FormField name="lastName" label="นามสกุล">
                        <Input value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="นามสกุล" fullWidth />
                      </FormField>
                    </>
                  )}

                  {!isRecovery && (
                    <FormField
                      name="password"
                      label="รหัสผ่าน"
                      helperText="ใช้ความสามารถ showPasswordToggle ของ DS Input แทน custom input เดิม"
                    >
                      <Input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="ระบุรหัสผ่าน"
                        showPasswordToggle
                        fullWidth
                      />
                    </FormField>
                  )}

                  {isSignUp && (
                    <>
                      <FormField name="confirmPassword" label="ยืนยันรหัสผ่าน">
                        <Input
                          type="password"
                          value={confirmPassword}
                          onChange={(event) => setConfirmPassword(event.target.value)}
                          placeholder="ยืนยันรหัสผ่าน"
                          showPasswordToggle
                          fullWidth
                        />
                      </FormField>
                      <Checkbox
                        checked={acceptedTerms}
                        onChange={setAcceptedTerms}
                        label="ยอมรับเงื่อนไขการใช้งานและนโยบายความเป็นส่วนตัว"
                      />
                    </>
                  )}

                  <Divider />

                  <Button onClick={handleSubmit} size="lg" fullWidth>
                    {submitLabel}
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div style={{ display: "grid", gap: pageTokens.gapXl }}>
              <Alert variant="warning" title="DS gap ที่ยังค้าง">
                MCP มี `ssk-logo`, `ssk-heading`, `ssk-text_2`, `ssk-app-shell` แต่ React package ที่ติดตั้งอยู่ยังไม่มี named export ที่ใช้แทนตรง ๆ
              </Alert>

              <Card>
                <CardHeader>สิ่งที่หน้า AMS_DS3 ใช้อยู่จริง</CardHeader>
                <CardBody>
                  <div style={{ display: "grid", gap: pageTokens.gapLg }}>
                    <Alert variant="success" title="Component">
                      TopNavbar, Sidebar, PageHeader, Breadcrumb, Tabs, Card, FormField, Input, Checkbox, Divider, Button, Alert, Toast
                    </Alert>
                    <Alert variant="info" title="Token">
                      ใช้ semantic token โดยตรงที่พื้นหลังหน้า `var(--bg-disabled)` และใช้ spacing/radius ตามค่า MCP 16px, 24px, 8px
                    </Alert>
                    <Alert variant="error" title="สิ่งที่ไม่ดึงมาใช้เอง">
                      ไม่สร้าง logo, heading system, app shell, social auth button, password strength meter ใหม่ เพราะ MCP/package ไม่ให้ binding ที่ชัดเจนใน React app นี้
                    </Alert>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

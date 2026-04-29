# รายงานการใช้งาน Sellsuki Design System

## สรุปงาน
- งาน: ตรวจสอบการเชื่อม MCP กับ DS3, ดันการใช้ DS component ในระบบ authentication ให้มากที่สุดโดยไม่สร้าง pattern ใหม่, และวิเคราะห์ gap ระหว่าง MCP, package React, และโค้ดปัจจุบัน
- วันที่: 2026-04-29 12:15
- พื้นที่ทำงานหรือรีโป: `C:\Users\uSeR\Desktop\Sellsuki\AMS\Amsauthentication-main\Amsauthentication-main`

## เวอร์ชัน Sellsuki Design System
- สถานะเวอร์ชัน: `explicit`
- เวอร์ชันที่ใช้จาก MCP: `3.1.2`
- เวอร์ชัน package React ที่ติดตั้งในโปรเจกต์: `@uxuissk/design-system@0.7.2`
- หลักฐานจาก MCP:
  - `mcp__sellsuki_design_system__list_components` คืนค่า `version: 3.1.2`, `total: 91`
  - `mcp__sellsuki_design_system__get_design_tokens(category=semantic|spacing|radius)` คืนค่า `version: 3.1.2`

## Components ที่เรียกใช้งาน
- จาก DS package ที่ใช้งานอยู่จริงในโค้ด:
  - `ToastContainer`, `toast`
  - `TopNavbar`
  - `Sidebar`
  - `ConfirmDialog`
  - `DSButton`
  - `DSInput`
  - `DSCheckbox`
  - `Divider`
  - `FormField`
  - `FormHelperText`
  - `FormError`
  - `FormSuccess`
  - `Card`
- จาก MCP catalog ที่ตรวจสอบว่ามีอยู่ใน DS3:
  - `ssk-button`
  - `ssk-input`
  - `ssk-checkbox`
  - `ssk-divider`
  - `ssk-card`
  - `ssk-sidebar`
  - `ssk-top-navbar`
  - `ssk-toast-provider`
  - `ssk-heading`
  - `ssk-text_2`
  - `ssk-logo`
  - `ssk-app-shell`

## Tokens ที่เรียกใช้งาน
- หมวดหมู่: `semantic`
- รายการ token:
  - `--text-primary`
  - `--text-secondary`
  - `--bg-primary`
  - `--bg-primary-hover`
  - `--bg-disabled`
  - `--stroke-primary`
  - `--stroke-secondary`
  - `--fg-brand-primary`
- หมวดหมู่: `spacing`
- รายการ token:
  - `xs = 4px`
  - `sm = 8px`
  - `md = 12px`
  - `lg = 16px`
  - `xl = 24px`
- หมวดหมู่: `radius`
- รายการ token:
  - `sm = 4px`
  - `md = 6px`
  - `lg = 8px`
  - `xl = 10px`
- หมวดหมู่: `typography`
- รายการ token:
  - ใช้งานผ่าน stylesheet และ font asset ของ DS package
  - ยังไม่มี explicit token reference ในโค้ดแอป เช่น CSS variable ของ typography

## สิ่งที่ปรับในรอบนี้
- เปลี่ยน wrapper ใน `src/app/components/DesignSystemSsk.tsx` ให้ลงบน DS package จริงมากขึ้น
  - `SskCheckbox` ใช้ `DSCheckbox`
  - `SskFormField` ใช้ `FormField`
  - `SskHelperText` ใช้ `FormHelperText`
  - `SskErrorText` ใช้ `FormError`
  - `SskSuccessText` ใช้ `FormSuccess`
  - `SskCard` ใช้ `Card`
- เปลี่ยน `src/app/pages/CreatePasswordPage.tsx` จาก input/button ที่เขียนเอง ให้กลับมาใช้ wrapper ที่อิง DS
- เปลี่ยน `src/app/pages/LinkExpiredPage.tsx` ให้ใช้ `SskButton`, `SskLink`, `SskPageTitle`, `SskSubTitle`
- ตรวจสอบ build หลังแก้ไขแล้วผ่านด้วย `npm run build`

## เปรียบเทียบกับ Storybook / React package
- MCP catalog ระบุ DS3 `3.1.2` และมี component ทั้งหมด `91` ตัว
- React package ที่ติดตั้งอยู่ในโปรเจกต์ export แบบ named export ได้ `74` รายการจาก `dist/types/index.d.ts`
- package มี script `storybook` และ `build-storybook` ใน `package.json`
- แต่ package ที่ถูกติดตั้งใน `node_modules` ไม่มีไฟล์ `.stories.*` ติดมาด้วย จึงไม่สามารถเทียบกับ story implementation จริงจาก workspace นี้ได้
- สรุปเชิงปฏิบัติ:
  - เทียบ MCP กับ React package ได้
  - เทียบกับ Storybook source จริงไม่ได้ใน repo นี้ เพราะ artifact ของ story ไม่ถูก publish มาด้วย

## วิเคราะห์ว่าใช้ component เหล่านี้ไม่ได้เพราะอะไร
- ใช้ไม่ได้เพราะ package React ไม่ expose component ตาม MCP ครบ
  - ตัวอย่างจาก MCP ที่พบ แต่ไม่เห็น React export ตรงใน package ที่ติดตั้ง: `ssk-logo`, `ssk-heading`, `ssk-text_2`, `ssk-app-shell`
  - ผลคือหน้าหลายหน้าในแอปยังต้องใช้ `SellsukiLogo`, typography custom, และ layout custom
- ใช้ไม่ได้เพราะโค้ดปัจจุบันถูก generate มาจาก Figma bundle และมี hardcode ฝังอยู่
  - `src/app/components/DesignSystemSsk.tsx` ยังมีสี, spacing, radius, social button, password strength, link style และ typography style ที่เขียนเอง
  - `src/app/components/AuthLayout.tsx` ยังใช้ background image, ขนาด card, spacing และ layout แบบ custom
  - `src/app/pages/DashboardPage.tsx` ยังมี dropdown account menu และ icon set ที่เขียนเอง
  - `src/app/pages/VerifyEmailPage.tsx`, `ForgotPasswordCheckEmailPage.tsx`, `VerifyEmailSuccessPage.tsx` ยังมี icon/typography แบบ custom
- ใช้ไม่ได้เพราะ MCP เป็นคนละ abstraction กับ React package
  - MCP list เป็น DS3 web component catalog (`ssk-*`)
  - แอปนี้ใช้ React package (`@uxuissk/design-system`)
  - ไม่มี mapping contract ที่บอกชัดว่า `ssk-heading` เท่ากับ React export อะไร หรือ `ssk-logo` ใช้งานใน React อย่างไร

## เกิดจากจุดไหน
- จุดที่ 1: Design system distribution layer
  - catalog ใน MCP กับ React package คนละ surface area และ versioning คนละรูปแบบ
- จุดที่ 2: Frontend architecture ของโปรเจกต์นี้
  - แอปถูกต่อยอดจาก Figma-exported bundle ไม่ได้เริ่มจาก DS primitives โดยตรง
- จุดที่ 3: Documentation / Storybook publishing
  - มี signal ว่ามี Storybook แต่ artifact ที่ติดตั้งมาไม่พอให้ทีมโค้ดอ้างอิง story implementation จริง

## ต้องแก้ไขยังไง
- ฝั่ง Coding
  - แยก audit ว่า component ใดควรใช้ DS ตรง ๆ และลบ wrapper/custom ที่ซ้ำกับ DS ออกทีละตัว
  - เริ่มจาก auth flow ทั้งหมด: form fields, helper/error/success, cards, modals, dropdown/menu, icon button
  - ย้าย raw color / spacing / radius ที่ยังเหลือให้เป็น DS token usage หรือปล่อยให้ DS component จัดการเอง
  - เพิ่ม type-level verification หรือ visual regression เพื่อกันไม่ให้ custom UI กลับมาอีก
- ฝั่ง Design System / Design Ops
  - publish mapping ชัดเจนระหว่าง MCP `ssk-*` กับ React package export
  - ถ้า `ssk-logo`, `ssk-heading`, `ssk-text_2`, `ssk-app-shell` เป็น component มาตรฐานจริง ควรมี React binding และ docs ที่ใช้งานได้ใน package เดียวกัน
  - publish Storybook references หรือ docs page ที่ทีมโค้ดเข้าถึงได้จาก artifact ที่ใช้งานจริง

## ควรส่ง issue ถึงฝั่ง design ไหม
- ควรส่ง `ใช่`
- เหตุผล:
  - version signal ระหว่าง MCP (`3.1.2`) กับ React package (`0.7.2`) ทำให้ทีมโค้ดสับสนได้ง่าย
  - component catalog ใน MCP ไม่ map ตรงกับสิ่งที่เรียกใช้ได้จริงใน React package
  - ไม่มี story/source reference ที่ใช้ยืนยันการใช้งาน component จาก artifact ที่ติดตั้งจริง
- หัวข้อ issue ที่แนะนำ:
  - ขอ component mapping ระหว่าง DS3 MCP catalog กับ React package
  - ขอ React export สำหรับ `logo`, `heading`, `text`, `app-shell`
  - ขอเผยแพร่ Storybook/docs artifact ที่ตรงกับ package release

## Coding ควรส่ง report ขึ้น GitHub ไหม
- ควรส่ง `ใช่`
- รูปแบบที่แนะนำ:
  - ถ้ามี repo จริงและ remote ใช้งานได้: เปิด issue ใหม่พร้อมแนบรายงานฉบับนี้
  - ถ้ามี PR ที่กำลัง refactor DS อยู่: วางเป็น PR comment เพิ่ม
  - ถ้ายังไม่พร้อมคุยข้ามทีม: commit รายงานนี้ไว้ใน `docs/reports/sellsuki-dss/`

## สถานะการส่งขึ้น GitHub
- วิธีที่ใช้: `markdown-commit (fallback target only)`
- เป้าหมาย: `docs/reports/sellsuki-dss/2026-04-29-1215-ams-auth-ds3-audit.md`
- ผลลัพธ์: `ไม่สำเร็จใน GitHub`
  - สาเหตุ: workspace ปัจจุบันไม่ใช่ git repository (`git rev-parse --show-toplevel` และ `git remote -v` ใช้งานไม่ได้)
  - สิ่งที่ทำแทน: บันทึกรายงานลงไฟล์ markdown ใน workspace แล้ว

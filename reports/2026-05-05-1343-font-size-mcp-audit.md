# รายงานตรวจสอบ Font Size ของ AMS DS3

## สรุปงาน
- งาน: ตรวจสอบว่า font size ใน flow `AMS_DS3` ดึง rule มาจาก Sellsuki MCP หรือไม่
- วันที่: 2026-05-05 13:43
- พื้นที่ทำงาน: `C:\Users\uSeR\Desktop\Sellsuki\AMS\Amsauthentication-main\Amsauthentication-main`

## เวอร์ชัน Sellsuki Design System
- สถานะเวอร์ชัน: `explicit แต่ข้อมูล MCP ขัดกันบางส่วน`
- หลักฐานจาก MCP:
  - `get_design_tokens(category=fontSize)` คืน `version: 3.1.2`
  - `get_token_value(--ssk-font-size-md)` คืนค่า `20px`
  - `list_components(category="Form & Input")` คืน `version: 3.2.0`
  - `get_quick_start(react)` ระบุว่าควรมี `ssk-theme-provider` ครอบ root และใช้ DS flow ผ่าน MCP/web components
- สรุป: ใช้ MCP เป็น source of truth ได้ในระดับ rule แต่ endpoint เรื่อง version ยังไม่สอดคล้องกัน 100% ระหว่าง token กับ component catalog

## ข้อสรุปหลัก
- ผลตรวจ: `font size ใน AMS_DS3 ไม่ได้ดึงมาจาก MCP token โดยตรง`
- สิ่งที่มีอยู่จริงตอนนี้:
  - มีการ import stylesheet ของ DS ที่ [src/main.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/main.tsx:5)
  - แต่ typography ในหน้า DS3 ใช้ `text-[...]` และ inline `fontSize: "...px"` เป็นหลัก
  - ไม่พบ `ssk-theme-provider` ใน `src`

## หลักฐานในโค้ด
- local CSS ถูก import ก่อน DS stylesheet ที่ [src/main.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/main.tsx:4) และ [src/main.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/main.tsx:5)
- typography ถูก hardcode ไว้ใน component wrapper:
  - [src/app/components/DesignSystemSsk.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/components/DesignSystemSsk.tsx:57) ใช้ `text-[44px]`
  - [src/app/components/DesignSystemSsk.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/components/DesignSystemSsk.tsx:71) ใช้ `text-[28px]`
  - [src/app/components/DesignSystemSsk.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/components/DesignSystemSsk.tsx:86) ใช้ `text-[24px]`
  - [src/app/components/DesignSystemSsk.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/components/DesignSystemSsk.tsx:97) ใช้ `text-[20px]`
  - [src/app/components/DesignSystemSsk.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/components/DesignSystemSsk.tsx:438) ใช้ `text-[18px]`
- scaffold ของ DS3 ใช้ inline `fontSize`:
  - [src/app/components/AMSDS3AuthScaffold.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/components/AMSDS3AuthScaffold.tsx:30) ใช้ `44px`
  - [src/app/components/AMSDS3AuthScaffold.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/components/AMSDS3AuthScaffold.tsx:34) ใช้ `28px`
  - [src/app/components/AMSDS3AuthScaffold.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/components/AMSDS3AuthScaffold.tsx:44) ใช้ `28px`
  - [src/app/components/AMSDS3AuthScaffold.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/components/AMSDS3AuthScaffold.tsx:52) default link size เป็น `20px`
- ยังมีหน้าอื่นที่ hardcode ต่อเนื่อง เช่น:
  - [src/app/pages/VerifyEmailSuccessPage.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/pages/VerifyEmailSuccessPage.tsx:21) ใช้ `text-[44px]`
  - [src/app/pages/VerifyEmailPage.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/pages/VerifyEmailPage.tsx:54) ใช้ `text-[28px]`
  - [src/app/pages/DashboardPage.tsx](C:/Users/uSeR/Desktop/Sellsuki/AMS/Amsauthentication-main/Amsauthentication-main/src/app/pages/DashboardPage.tsx:118) ใช้ `text-[60px]`

## เทียบกับ rule จาก MCP
- MCP font-size token ที่ยืนยันได้ตอนนี้:
  - `xs = 16px`
  - `sm = 18px`
  - `md = 20px`
  - `lg = 24px`
  - `xl = 28px`
- token API ยืนยัน `--ssk-font-size-md = 20px`
- แต่ token API ไม่รู้จัก `--text-h3`
- แปลว่า typography semantic ที่อยู่ใน package CSS ไม่ได้ถูกเปิดผ่าน MCP token endpoint ชุดเดียวกัน

## สิ่งที่พบใน package จริง
- stylesheet ของ package ที่ `node_modules/@uxuissk/design-system/dist/sellsuki-ds.css` มี semantic typography variables ในบรรทัด 43 เดียวกัน เช่น:
  - `--text-h1: 48px`
  - `--text-h2: 40px`
  - `--text-h3: 28px`
  - `--text-h4: 24px`
  - `--text-p: 20px`
  - `--text-label: 18px`
  - `--text-button: 18px`
- แต่โค้ดแอปไม่ได้อ้าง token เหล่านี้ตรง ๆ และ MCP `get_token_value` ก็หา `--text-h3` ไม่เจอ

## ทำไมถึงไม่ดึง rule จาก MCP ตรง ๆ
- สาเหตุที่ 1: implementation ปัจจุบันสืบทอดมาจาก Figma-exported bundle จึงคง pixel size เดิมไว้ใน JSX/Tailwind
- สาเหตุที่ 2: app นี้ใช้ React package `@uxuissk/design-system@0.7.2` ไม่ได้ใช้ flow ตาม MCP quick start ที่อิง `ssk-*` + `ssk-theme-provider`
- สาเหตุที่ 3: typography semantic ของ package กับ token surface ที่ MCP เปิดให้ยังไม่ map กันชัดเจน
- สาเหตุที่ 4: มีค่าอย่าง `44px`, `36px`, `60px` ในโค้ด ซึ่งไม่อยู่ใน MCP font-size token set `16/18/20/24/28`

## ติดอะไรอยู่
- ยังไม่มี source กลางที่บอกแบบชัดเจนว่า React package ควรใช้ typography token ตัวไหนแทน `44px` หรือ `60px`
- version signal ของ MCP ยังไม่สอดคล้องกันระหว่าง token endpoint (`3.1.2`) และ component catalog (`3.2.0`)
- quick start บอกให้ใช้ `ssk-theme-provider` แต่โปรเจกต์นี้ยังไม่ได้ใช้ pattern นั้น

## ข้อเสนอแนะ
- ถ้าต้องการให้ “ดึงจาก MCP” จริง:
  - เปลี่ยน typography layer ให้ใช้ token/semantic variable จาก DS โดยตรง แทน `text-[...]` และ inline `fontSize`
  - จัด import order ให้ DS stylesheet มาก่อน local styles
  - ตัดสินใจว่าจะย้ายไปใช้ `ssk-theme-provider` ตาม quick start หรือจะยึด React package surface เป็นหลัก
  - ขอ mapping อย่างเป็นทางการระหว่าง MCP typography token กับ React package typography API
- ถ้าต้องการทางแก้ระยะสั้น:
  - รวม font size ทั้งหมดไว้ใน utility/token layer ภายในแอปก่อน
  - แทนค่าที่ซ้ำบ่อย `18/20/24/28` ด้วย DS token ก่อน
  - mark ค่าที่ยังเป็น gap เช่น `44px`, `36px`, `60px`

## Components และ tokens ที่เกี่ยวข้องกับงานนี้
- Components: `DSButton`, `DSInput`, `DSCheckbox`, `DSFormField`, `FormHelperText`, `FormError`, `FormSuccess`, `Card`
- Tokens/semantic vars ที่พบว่าใช้งานหรือเกี่ยวข้อง: `--bg-disabled`, `--text-primary`, `--text-secondary`, `--fg-brand-primary`, `--ssk-font-size-md`

## สถานะการส่งขึ้น GitHub
- วิธีที่ใช้: `markdown-commit`
- เป้าหมาย: `mmonsicha/AMS_DS3`
- path: `reports/2026-05-05-1343-font-size-mcp-audit.md`
- ผลลัพธ์: `สำเร็จ`

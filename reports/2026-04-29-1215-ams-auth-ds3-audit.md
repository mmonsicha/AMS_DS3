# รายงานการใช้งาน Sellsuki Design System

## สรุปงาน
- งาน: clone ดีไซน์เดิมจาก `Amsauthentication-main` มาเป็น flow ใหม่ชื่อ `AMS_DS3` โดยใช้ DS package/MCP เท่าที่ React bridge ปัจจุบันรองรับ และไม่ออกแบบหน้าใหม่แทนเอง
- วันที่: 2026-04-29 12:15
- พื้นที่ทำงานหรือรีโป: `C:\Users\uSeR\Desktop\Sellsuki\AMS\Amsauthentication-main\Amsauthentication-main`

## เวอร์ชัน Sellsuki Design System
- สถานะเวอร์ชัน: `explicit`
- เวอร์ชันที่ใช้จาก MCP: `3.1.2`
- เวอร์ชัน package React ที่ติดตั้งในโปรเจกต์: `@uxuissk/design-system@0.7.2`
- หลักฐานจาก MCP:
  - `mcp__sellsuki_design_system__list_components` คืนค่า `version: 3.1.2`, `total: 91`
  - `mcp__sellsuki_design_system__get_design_tokens(category=all)` คืนค่า token set ของ `3.1.2`

## สิ่งที่แก้ความเข้าใจจากรอบก่อน
- รอบก่อนตีความผิดเป็น “สร้างหน้าใหม่ด้วย DS”
- รอบนี้แก้เป็น “clone ดีไซน์เดิมของ auth screens” แล้วค่อยแทน element ที่ใช้ได้ด้วย DS package จริง
- ดังนั้น `AMS_DS3` ตอนนี้เป็น clone flow ของดีไซน์เดิม ไม่ใช่ DS showcase page

## Components ที่เรียกใช้งาน
- จาก DS package ที่ใช้งานจริงใน flow `AMS_DS3`
  - `Card`
  - `Button`
  - `Input`
  - `FormField`
  - `FormHelperText`
  - `Checkbox`
  - `Divider`
  - `toast`
- จาก MCP catalog ที่ยืนยันว่ามีใน DS3
  - `ssk-button`
  - `ssk-input`
  - `ssk-checkbox`
  - `ssk-divider`
  - `ssk-card`
  - `ssk-heading`
  - `ssk-text_2`
  - `ssk-logo`
  - `ssk-app-shell`

## Tokens ที่เรียกใช้งาน
- หมวดหมู่: `semantic`
- รายการ token:
  - `--bg-disabled`
  - `--text-primary`
  - `--text-secondary`
  - `--fg-brand-primary`
- หมวดหมู่: `spacing`
- รายการ token:
  - `sm = 8px`
  - `lg = 16px`
  - `xl = 24px`
- หมวดหมู่: `radius`
- รายการ token:
  - `lg = 8px`
- หมวดหมู่: `typography`
- รายการ token:
  - ใช้ font asset จาก DS package
  - ยังต้องอ้างอิง typography style เดิมบางส่วน เพราะไม่มี React binding ตรงสำหรับ `ssk-heading` / `ssk-text_2`

## Flow `AMS_DS3` ที่ทำเสร็จแล้ว
- `/ams-ds3` sign in
- `/ams-ds3/signup`
- `/ams-ds3/signup/register`
- `/ams-ds3/signup/set-password`
- `/ams-ds3/signup/verify-email`
- `/ams-ds3/signup/verify-email/success`
- หน้าสุดท้ายส่งกลับ sign in ที่ `/ams-ds3`

## ผลการตรวจ preview
- `http://127.0.0.1:4174/ams-ds3` ตอบ `200`
- `http://127.0.0.1:4174/ams-ds3/signup` ตอบ `200`
- `http://127.0.0.1:4174/ams-ds3/signup/register` ตอบ `200`
- `http://127.0.0.1:4174/ams-ds3/signup/set-password` ตอบ `200`
- `http://127.0.0.1:4174/ams-ds3/signup/verify-email` ตอบ `200`
- `http://127.0.0.1:4174/ams-ds3/signup/verify-email/success` ตอบ `200`
- `http://127.0.0.1:4174/` ใช้งานแล้วไป flow ใหม่แทน
- `http://127.0.0.1:4174/signup` ใช้งานแล้วไป flow ใหม่แทน
- `http://127.0.0.1:4174/signup/register` ใช้งานแล้วไป flow ใหม่แทน
- `npm run build` ผ่าน

## สิ่งที่ปรับในรอบนี้
- เพิ่ม scaffold กลางสำหรับ clone auth layout เดิมที่ `src/app/components/AMSDS3AuthScaffold.tsx`
- ปรับ `src/app/pages/AMS_DS3.tsx` ให้เป็น sign-in clone ของดีไซน์เดิม ไม่ใช่หน้าออกแบบใหม่
- เพิ่มหน้าชุด signup flow ใหม่:
  - `src/app/pages/AMS_DS3_SignUp.tsx`
  - `src/app/pages/AMS_DS3_Register.tsx`
  - `src/app/pages/AMS_DS3_SetPassword.tsx`
  - `src/app/pages/AMS_DS3_VerifyEmail.tsx`
  - `src/app/pages/AMS_DS3_VerifyEmailSuccess.tsx`
- เพิ่ม route ใหม่ใน `src/app/routes.tsx`
- redirect route auth เดิม (`/`, `/signup`, `/signup/register`, `/signup/set-password`, `/signup/verify-email`, `/signup/verify-email/success`) ให้เข้า `AMS_DS3` flow เพื่อกันการเด้งกลับหน้าเก่า

## สิ่งที่ยังดึงจาก MCP/DS มาใช้ตรง ๆ ไม่ได้
- `ssk-logo`
  - React package ปัจจุบันไม่มี named export ที่ใช้แทนได้ตรง ๆ
  - จึงยังต้องใช้ `SellsukiLogo.tsx` จากโค้ดเดิม
- `ssk-heading`
  - MCP มี แต่ React package ไม่มี React component ที่ map ตรง
  - จึงยังต้องใช้ heading style เดิมบางส่วนใน scaffold
- `ssk-text_2`
  - MCP มี แต่ package ไม่มี export ตรงสำหรับ text primitive เดียวกัน
  - จึงยังต้องคง subtitle/body style เดิมบางส่วน
- `ssk-app-shell`
  - MCP มี แต่ package React ที่ใช้จริงยังไม่มี export ตรง
  - จึงยังต้องใช้ auth scaffold แบบเขียนโครงด้วย React/CSS เดิมร่วมกับ DS `Card`
- social auth button
  - package ปัจจุบันไม่มี component เฉพาะสำหรับปุ่ม social ตามดีไซน์เดิม
  - รอบนี้ใช้ `Button variant="outline"` เป็น fallback ที่ใกล้ที่สุดและรายงานไว้ชัดเจน
- password strength meter
  - ยังไม่พบ DS React component ตรงจาก package ปัจจุบัน
  - รอบนี้จึงไม่สร้าง meter ใหม่ใน flow `AMS_DS3_SetPassword`

## เปรียบเทียบกับ Storybook / React package
- MCP catalog ระบุ DS3 `3.1.2` และมี component ทั้งหมด `91` ตัว
- React package ที่ติดตั้งอยู่ในโปรเจกต์ export แบบ named export ได้ `74` รายการจาก `dist/types/index.d.ts`
- package มี script `storybook` และ `build-storybook`
- แต่ artifact ที่ติดตั้งมาใน `node_modules` ไม่มีไฟล์ `.stories.*`
- สรุป:
  - เทียบ MCP กับ React package ได้
  - เทียบกับ story source จริงจาก package release ใน repo นี้ไม่ได้

## วิเคราะห์สาเหตุของ gap
- สาเหตุที่ 1: MCP catalog กับ React package เป็นคนละ distribution surface
  - MCP แสดงรายการแบบ `ssk-*`
  - แอปนี้ใช้งานผ่าน React package `@uxuissk/design-system`
- สาเหตุที่ 2: version naming ไม่ตรงกัน
  - MCP ใช้ `3.1.2`
  - package React ใช้ `0.7.2`
- สาเหตุที่ 3: original app มาจาก Figma-exported bundle
  - หลายจุดของหน้าตาเดิมจึงเป็น custom implementation ตั้งต้น ไม่ได้เริ่มจาก DS primitives

## ต้องแก้ไขยังไง
- ฝั่ง Coding
  - clone flow ที่เหลือด้วยแนวทางเดียวกัน: ยึดหน้าตาเดิมก่อน แล้วแทนที่ด้วย DS package เฉพาะจุดที่ bridge รองรับจริง
  - ลด hardcoded typography/layout ลงเมื่อ React binding ของ DS พร้อม
  - ถ้าจะให้ 100% DS จริง ต้องรอ package รองรับ primitive ที่ MCP ระบุ
- ฝั่ง Design System / Design Ops
  - publish mapping ชัดเจนระหว่าง MCP `ssk-*` กับ React export
  - เพิ่ม React bindings สำหรับ `logo`, `heading`, `text`, `app-shell`
  - publish docs/story artifact ที่สอดคล้องกับ package release

## ควรส่ง issue ถึงฝั่ง design ไหม
- ควรส่ง `ใช่`
- เหตุผล:
  - เพื่อขอ mapping ระหว่าง MCP catalog กับ React package
  - เพื่อขอ React bindings ของ primitive สำคัญที่ทำให้ clone ดีไซน์เดิมได้ไม่ครบ
  - เพื่อให้ทีมโค้ดไม่ต้องเดาว่า element ไหนเป็น DS จริงและ element ไหนยังไม่มี bridge

## Coding ควรส่ง report ขึ้น GitHub ไหม
- ควรส่ง `ใช่`
- รอบนี้ทำแล้ว

## สถานะการส่งขึ้น GitHub
- วิธีที่ใช้: `git commit + push`
- เป้าหมาย: `https://github.com/mmonsicha/AMS_DS3.git`
- ผลลัพธ์: `สำเร็จ`
- หมายเหตุ:
  - repo ปลายทางถูก clone มาไว้ที่ `C:\tmp\AMS_DS3_repo`
  - มีการ push เวอร์ชันก่อนหน้าแล้ว และต้อง sync รอบล่าสุดอีกครั้งหลังเพิ่ม signup flow และแก้ความเข้าใจเรื่อง clone design

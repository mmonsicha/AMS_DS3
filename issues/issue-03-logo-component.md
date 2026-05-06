---
title: "[DS3 Gap #3] ขาด Logo / Brand component — ยังใช้ custom SellsukiLogo.tsx"
labels: ds3-gap, enhancement, design-system, brand
---

## 🔍 ปัญหา

ทุกหน้าใน flow `AMS_DS3` แสดง Sellsuki Logo ขนาด 120px ที่ header
แต่ DS3 catalog (63 components) ไม่มี `Logo` หรือ `BrandLogo` component

## 📍 ไฟล์ที่ได้รับผล

- `src/components/AMSDS3AuthScaffold.tsx` — `AMSDS3LogoHeader` ใช้ `SellsukiLogo`
- ทุกหน้าที่ใช้ `AMSDS3LogoHeader`

## 🩹 Workaround ปัจจุบัน

ใช้ custom component `SellsukiLogo.tsx` ที่สืบทอดมาจาก codebase เดิม (Figma export):

```tsx
import { SellsukiLogo } from "./SellsukiLogo";
<SellsukiLogo size={120} />
```

ปัญหาของ workaround นี้:
- ทุก project ต้องมีไฟล์ `SellsukiLogo.tsx` แยก
- ถ้า brand อัปเดต logo ต้องแก้ทุก repo แยกกัน
- ไม่มี dark/light mode variant ที่สม่ำเสมอ

## ✅ สิ่งที่ต้องการจาก DS3

Export `SellsukiLogo` หรือ `BrandLogo` ผ่าน DS package:

```tsx
import { SellsukiLogo } from "@uxuissk/design-system";
<SellsukiLogo size={120} variant="color" /> // variant: color | white | dark
```

## 🎯 Priority

สูง — Logo เป็น brand asset หลัก การ centralize ไว้ใน DS package ช่วยให้ brand consistency ทั่วทุกโปรเจกต์

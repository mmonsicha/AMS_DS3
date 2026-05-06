---
title: "[DS3 Gap] ขาด Logo / Brand component — ทุก project ต้องมีไฟล์ logo แยก"
labels: ["gap", "component-request", "brand"]
---

## 📋 ที่มา

พบระหว่างพัฒนา `AMS_DS3` auth flow  
repo อ้างอิง: `mmonsicha/AMS_DS3` (branch: `deploy`)

## 🔍 ปัญหา

ทุกหน้าใน auth flow แสดง Sellsuki Logo ที่ header  
แต่ DS3 catalog (63 components) **ไม่มี** `Logo` หรือ `BrandLogo` component

## 🩹 Workaround ปัจจุบัน

ทีม Frontend สร้าง custom `SellsukiLogo.tsx` ขึ้นเอง ซึ่งเป็น S-lettermark SVG placeholder:

```tsx
// SellsukiLogo.tsx (custom — ไม่ใช่ DS3)
export function SellsukiLogo({ size = 120 }: { size?: number }) {
  return <svg>...</svg>; // placeholder
}
```

**ปัญหาของ workaround:**
- ทุก repo ต้องมีไฟล์ logo SVG แยก
- ถ้า brand อัปเดต logo → ต้องแก้ทุก repo แยกกัน
- ไม่รองรับ dark mode / white variant
- Logo ที่ใช้อยู่เป็น **placeholder** ไม่ใช่ logo จริง

## ✅ สิ่งที่ต้องการจาก DS3

```tsx
import { SellsukiLogo } from "@uxuissk/design-system";

<SellsukiLogo size={96} variant="color" />  // variant: color | white | mono
```

## 🎯 Priority: สูง — Logo เป็น brand asset หลัก

---
title: "[DS3 Gap] ขาด Text / Heading React primitives — ต้องใช้ semantic HTML + inline token"
labels: ["gap", "component-request", "typography"]
---

## 📋 ที่มา

พบระหว่างพัฒนา `AMS_DS3` auth scaffold  
repo อ้างอิง: `mmonsicha/AMS_DS3` (branch: `deploy`)

## 🔍 ปัญหา

DS3 มี typography token ครบ 8 ระดับ (`--text-h1` ถึง `--text-caption`)  
แต่ **ไม่มี React component** สำหรับ render text/heading → ต้องใช้ semantic HTML + inline style ทุกครั้ง

## 🩹 Workaround ปัจจุบัน

```tsx
// ต้องสร้าง wrapper ทุก project
export function AMSDS3Title({ children }: { children: ReactNode }) {
  return (
    <h1 style={{
      fontFamily: "DB HeaventRounded, sans-serif",
      fontSize: "44px",   // ← hardcode แทน token เพราะ --text-h1 ไม่ resolve ใน Vite บางกรณี
      fontWeight: 700,
      color: "#111827",
    }}>
      {children}
    </h1>
  );
}
```

**ปัญหาของ workaround:**
- ทุก project ต้องสร้าง typography wrapper เอง
- `--text-h1` token ไม่ resolve เป็น `48px` ใน Vite Tailwind v4 environment บางกรณี
- เสี่ยงใช้ font-family ผิด (Inter แทน DB HeaventRounded)
- ไม่มี type safety สำหรับ scale level

## ✅ สิ่งที่ต้องการจาก DS3

```tsx
import { Heading, Text } from "@uxuissk/design-system";

<Heading level="h1">ยินดีต้อนรับสู่ Sellsuki</Heading>
<Text size="p" color="secondary">กรุณาล็อกอินเข้าสู่ระบบ</Text>
<Text size="label" color="brand">อีเมลของคุณ</Text>
```

## 🎯 Priority: กลาง

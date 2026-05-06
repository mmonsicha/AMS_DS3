---
title: "[DS3 Gap #4] ขาด Text / Heading React primitives — ต้องใช้ semantic HTML + inline token"
labels: ds3-gap, enhancement, design-system, typography
---

## 🔍 ปัญหา

DS3 มี typography token ที่ดีครบ 8 ระดับ (`--text-h1` ถึง `--text-caption`) แต่ไม่มี React component
สำหรับ render text/heading — ต้องใช้ semantic HTML element + inline style token ทุกครั้ง

## 📍 ไฟล์ที่ได้รับผล

- `src/components/AMSDS3AuthScaffold.tsx` — `AMSDS3Title`, `AMSDS3Subtitle`, `AMSDS3AccentText`
- ทุกหน้าที่แสดง heading หรือ paragraph text

## 🩹 Workaround ปัจจุบัน

สร้าง wrapper component ใน scaffold เพื่อ centralize style:

```tsx
// custom wrapper — ต้องดูแลเอง
export function AMSDS3Title({ children }: { children: ReactNode }) {
  return (
    <h1 style={{
      fontFamily: "DB HeaventRounded, sans-serif",
      fontSize: "var(--text-h1)",
      fontWeight: 400,
      color: "var(--text-primary)",
    }}>
      {children}
    </h1>
  );
}
```

ปัญหาของ workaround นี้:
- ทุก project ต้องสร้าง typography wrapper เอง
- ไม่มี type safety สำหรับ token name
- เสี่ยงต่อการใช้ font-family ผิด (เช่น Inter แทน DB HeaventRounded)

## ✅ สิ่งที่ต้องการจาก DS3

React component สำหรับ typography scale:

```tsx
// รูปแบบที่ต้องการ
import { Heading, Text } from "@uxuissk/design-system";

<Heading level="h1">ยินดีต้อนรับสู่ Sellsuki</Heading>
<Text size="p" color="secondary">กรุณาล็อกอินเข้าสู่ระบบ</Text>
<Text size="label" color="brand">อีเมลของคุณ</Text>
```

## 🎯 Priority

กลาง — มี workaround ผ่าน token ได้ แต่การมี React primitive ช่วยลด boilerplate และป้องกัน font ผิดพลาด

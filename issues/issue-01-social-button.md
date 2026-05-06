---
title: "[DS3 Gap] ขาด SocialButton component — Google / Facebook / LINE"
labels: ["gap", "component-request", "auth"]
assignees: []
---

## 📋 ที่มา

ทีม Frontend พบปัญหานี้ระหว่างพัฒนา `AMS_DS3` auth flow  
repo อ้างอิง: `mmonsicha/AMS_DS3` (branch: `deploy`)

## 🔍 ปัญหา

ใน auth flow มีปุ่ม Social Login 3 ตัว (Google, Facebook, LINE)  
แต่ DS3 catalog (63 components) **ไม่มี** `SocialButton` หรือ component รองรับ social provider

## 🩹 Workaround ปัจจุบัน

ใช้ `DSButton variant="outline"` + SVG icon แบบ inline:

```tsx
<DSButton fullWidth size="lg" variant="outline">
  <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <GoogleIcon />
    เข้าใช้งานด้วยบัญชี Google
  </span>
</DSButton>
```

**ปัญหาของ workaround:**
- ต้องสร้าง provider icon SVG เอง ทุก project
- ไม่มี brand color standard สำหรับแต่ละ provider
- ไม่ consistent ข้ามทีม

## ✅ สิ่งที่ต้องการจาก DS3

```tsx
<SocialButton provider="google" fullWidth size="lg" onClick={handleGoogleLogin}>
  เข้าใช้งานด้วยบัญชี Google
</SocialButton>
```

Props ที่ต้องการ:
- `provider`: `"google" | "facebook" | "line" | "apple"`
- `fullWidth`, `size`, `loading`, `disabled` — เหมือน DSButton
- icon และ brand color จัดการอัตโนมัติตาม provider

## 🎯 Priority: สูง

Social auth เป็น feature หลักใน auth flow ของทุก Sellsuki product

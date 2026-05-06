---
title: "[DS3 Gap #1] ขาด SocialButton component สำหรับ Google / Facebook / LINE"
labels: ds3-gap, enhancement, design-system
---

## 🔍 ปัญหา

Flow `AMS_DS3` มีปุ่ม Sign in / Sign up ผ่าน Social provider 3 ตัวคือ Google, Facebook และ LINE
แต่ใน DS3 catalog (63 components) ไม่มี `SocialButton` หรือ component ที่รองรับ social provider โดยตรง

## 📍 ไฟล์ที่ได้รับผล

- `src/AMS_DS3.tsx` — Sign in ด้วย Google/Facebook/LINE
- `src/AMS_DS3_SignUp.tsx` — Sign up ด้วย Google/Facebook/LINE

## 🩹 Workaround ปัจจุบัน

ใช้ `DSButton variant="outline"` เป็น fallback โดยไม่มี provider icon:

```tsx
<DSButton fullWidth size="lg" variant="outline" onClick={() => handleSocialLogin("Google")}>
  เข้าใช้งานด้วยบัญชี Google
</DSButton>
```

## ✅ สิ่งที่ต้องการจาก DS3

Component `SocialButton` หรือ `DSButton` ที่รองรับ `provider` prop:

```tsx
// รูปแบบที่ต้องการ
<SocialButton provider="google" fullWidth size="lg" onClick={handleGoogleLogin}>
  เข้าใช้งานด้วยบัญชี Google
</SocialButton>
```

หรืออย่างน้อย icon assets ของแต่ละ provider ผ่าน DS package เพื่อให้ทีม frontend ประกอบเองได้

## 🎯 Priority

สูง — ปุ่ม Social login อยู่ใน auth flow หลัก และ UX ปัจจุบันขาด visual identity ของแต่ละ provider

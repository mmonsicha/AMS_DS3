---
title: "[DS3 Gap] ขาด PasswordStrength component — ใช้ ProgressBar เป็น fallback"
labels: ["gap", "component-request", "form"]
---

## 📋 ที่มา

พบระหว่างพัฒนา `AMS_DS3` — หน้า SetPassword และ CreatePassword  
repo อ้างอิง: `mmonsicha/AMS_DS3` (branch: `deploy`)

## 🔍 ปัญหา

หน้า Set/Create Password ต้องการแสดง password strength meter  
แต่ DS3 catalog **ไม่มี** `PasswordStrength` หรือ component ที่ bind กับ password input

## 🩹 Workaround ปัจจุบัน

ใช้ `ProgressBar` + custom logic คำนวณ score 4 ระดับ:

```tsx
function getPasswordStrength(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score; // 0–4
}

<ProgressBar value={score * 25} size="sm" color={strengthColor} />
```

**ปัญหาของ workaround:**
- ต้องเขียน scoring logic ซ้ำทุก project
- color hardcode ไม่ใช่ DS3 token
- ไม่มี label/text feedback ที่ standard

## ✅ สิ่งที่ต้องการจาก DS3

```tsx
// Option A: standalone component
<PasswordStrength value={password} />

// Option B: prop ของ DSInput
<DSInput
  type="password"
  showPasswordToggle
  showStrengthMeter          // ← เพิ่ม prop นี้
  value={password}
/>
```

## 🎯 Priority: กลาง

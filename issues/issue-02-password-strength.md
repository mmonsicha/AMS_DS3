---
title: "[DS3 Gap #2] ขาด PasswordStrength component — ใช้ ProgressBar แทนชั่วคราว"
labels: ds3-gap, enhancement, design-system
---

## 🔍 ปัญหา

หน้า Set Password และ Create Password ต้องการแสดง password strength indicator
แต่ DS3 catalog (63 components) ไม่มี `PasswordStrength` หรือ component ที่ bind กับ password input โดยตรง

## 📍 ไฟล์ที่ได้รับผล

- `src/AMS_DS3_SetPassword.tsx`
- `src/AMS_DS3_CreatePassword.tsx`

## 🩹 Workaround ปัจจุบัน

ใช้ `ProgressBar` + custom logic คำนวณ score 4 ระดับ:

```tsx
const strength = getPasswordStrength(password); // custom logic
<ProgressBar value={strength.score * 25} size="sm" color={strength.color} />
<span style={{ color: strength.color }}>ความแข็งแกร่งรหัสผ่าน: {strength.label}</span>
```

ปัญหาของ workaround นี้:
- ต้องเขียน logic ซ้ำทุก project
- ไม่มี DS3 visual style ที่สม่ำเสมอ
- color ที่ใช้เป็น hardcode ไม่ใช่ DS3 token

## ✅ สิ่งที่ต้องการจาก DS3

Component `PasswordStrength` ที่ทำงานคู่กับ `DSInput`:

```tsx
// รูปแบบที่ต้องการ
<DSInput type="password" value={password} showPasswordToggle />
<PasswordStrength value={password} />
```

หรือเป็น prop ของ DSInput เลย:
```tsx
<DSInput type="password" showPasswordToggle showStrengthMeter value={password} />
```

## 🎯 Priority

กลาง — มี workaround ใช้งานได้ แต่ไม่สม่ำเสมอข้ามโปรเจกต์

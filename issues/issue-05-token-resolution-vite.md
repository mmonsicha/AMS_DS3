---
title: "[DS3 Bug] CSS token --space-* และ --bg-secondary ไม่ resolve ใน Vite + Tailwind v4 environment"
labels: ["bug", "token", "css", "compatibility"]
---

## 📋 ที่มา

พบระหว่างพัฒนา `AMS_DS3` และ deploy บน Vercel  
repo อ้างอิง: `mmonsicha/AMS_DS3` (branch: `deploy`)

## 🔍 ปัญหา

DS3 CSS token บางตัว **ไม่ resolve** เป็นค่าจริงเมื่อใช้ใน Vite + Tailwind v4 environment

**Token ที่พบปัญหา:**

| Token | Expected | Actual (getComputedStyle) |
|-------|----------|--------------------------|
| `--space-16` | `16px` | `""` (empty) |
| `--space-24` | `24px` | `""` (empty) |
| `--space-40` | `40px` | `""` (empty) |
| `--bg-secondary` | `#F3F4F6` | `""` (empty) |
| `--text-h1` | `48px` | `48px` ✅ |
| `--text-p` | `20px` | `20px` ✅ |

**Typography token ทำงานปกติ แต่ spacing และ color token บางตัวไม่ทำงาน**

## 🔬 วิธีตรวจสอบ

```javascript
// ใน DevTools Console ของ deployed app
getComputedStyle(document.documentElement).getPropertyValue('--space-16')
// → "" (ควรเป็น "16px")

getComputedStyle(document.documentElement).getPropertyValue('--bg-secondary')
// → "" (ควรเป็น "#F3F4F6")
```

## 🌍 Environment

- Vite `8.0.10`
- React `19`
- `@tailwindcss/vite` `4.2.4` (Tailwind v4)
- `@uxuissk/design-system@latest`
- Deploy: Vercel (Node.js 22)
- import order: `@uxuissk/design-system/styles.css` → `tailwind.css` → `index.css`

## 🩹 Workaround ปัจจุบัน

เปลี่ยนทุก `var(--space-*)` เป็น hardcode px ใน JSX:

```tsx
// แทนที่
gap: "var(--space-16)"
// ด้วย
gap: "16px"
```

## 🎯 Priority: สูง — กระทบ consistency ของ spacing ทั่วทั้ง app

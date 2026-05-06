---
title: "[DS3 API] FormHelperText รับแค่ className ไม่รับ style prop — จำกัด typography customization"
labels: ["api-limitation", "component", "form"]
---

## 📋 ที่มา

พบระหว่างพัฒนา `AMS_DS3` auth scaffold  
repo อ้างอิง: `mmonsicha/AMS_DS3` (branch: `deploy`)

## 🔍 ปัญหา

`FormHelperText` รับแค่ `children` และ `className` — **ไม่รับ `style` prop**

```ts
// type definition ปัจจุบัน
interface FormHelperTextProps {
  children: ReactNode;
  className?: string;   // ← มีเพียงนี้
}
```

ทำให้ typography customization (font-size, text-align, line-height) ต้องทำผ่าน global CSS class

## 🩹 Workaround ปัจจุบัน

ต้องสร้าง CSS class แยก:

```css
/* index.css */
.ams-legal-footer {
  font-family: "DB HeaventRounded", sans-serif !important;
  font-size: 16px !important;
  text-align: center !important;
}
```

```tsx
<FormHelperText className="ams-legal-footer">{children}</FormHelperText>
```

## ✅ สิ่งที่ต้องการ

```tsx
// เพิ่ม style prop
<FormHelperText style={{ textAlign: "center", fontSize: "16px" }}>
  {children}
</FormHelperText>
```

## 🎯 Priority: ต่ำ — มี workaround ผ่าน className

---
title: "[DS3 API] CardBody ไม่รับ style prop — ต้องใช้ wrapper div เพิ่ม"
labels: ["api-limitation", "component", "dx"]
---

## 📋 ที่มา

พบระหว่างพัฒนา `AMS_DS3` auth scaffold  
repo อ้างอิง: `mmonsicha/AMS_DS3` (branch: `deploy`)

## 🔍 ปัญหา

`CardBody` type definition รับแค่ `children: ReactNode` — **ไม่รับ `style`, `className`, หรือ `padding` prop**

```ts
// type definition ปัจจุบัน
declare function CardBody({ children }: {
  children: ReactNode;
}): JSX.Element;
```

ทำให้ไม่สามารถกำหนด padding ใน CardBody ได้โดยตรง

## 🩹 Workaround ปัจจุบัน

ต้องสร้าง wrapper div เพิ่มทุกครั้ง:

```tsx
<Card>
  <CardBody>
    <div style={{ padding: "40px" }}>  {/* ← wrapper ที่ไม่ควรต้องมี */}
      {children}
    </div>
  </CardBody>
</Card>
```

## ✅ สิ่งที่ต้องการ

```tsx
// Option A: padding prop
<CardBody padding="lg">

// Option B: className prop
<CardBody className="p-10">

// Option C: style prop
<CardBody style={{ padding: "40px" }}>
```

## 🎯 Priority: ต่ำ-กลาง — มี workaround ได้ แต่ DX ไม่ดี

# รายงานการอัปเดต DS3 Components และ Font Size Tokens

## สรุปงาน
- งาน: อัปเดต component imports ทั้งหมดใน flow `AMS_DS3` ให้ใช้ DS3 API ล่าสุด และแทน hardcoded font size ด้วย CSS variable token จาก MCP
- วันที่: 2026-05-05 15:30
- พื้นที่ทำงาน: `mmonsicha/AMS_DS3` (deliverable repo)
- ไฟล์ที่แก้ไข: 11 ไฟล์ (10 หน้า + 1 scaffold)

## เวอร์ชัน Sellsuki Design System
- MCP tool: `Sellsuki Design System:list_components` → `version: DS3`, `total: 63 components`
- MCP tool: `Sellsuki Design System:get_design_tokens(typography)` → token set ครบถ้วน
- React package ที่อ้างอิง: `@uxuissk/design-system@latest` (จาก MCP `list_components` ระบุ install command)

## สิ่งที่แก้ไขในรอบนี้

### 1. Font Size — เปลี่ยนจาก hardcode เป็น DS3 CSS variable

| ก่อน (hardcode) | หลัง (DS3 token) | Token value |
|----------------|-----------------|-------------|
| `fontSize: "44px"` | `fontSize: "var(--text-h1)"` | 48px |
| `fontSize: "28px"` | `fontSize: "var(--text-h3)"` | 28px |
| `fontSize: "24px"` | `fontSize: "var(--text-h4)"` | 24px |
| `fontSize: "20px"` | `fontSize: "var(--text-p)"` | 20px |
| `text-[20px]` class | `fontSize: "var(--text-p)"` | 20px |
| `text-[18px]` class | ไม่มีใน flow นี้ — ปล่อยให้ DSInput/FormField จัดการ | — |

**หมายเหตุ:** ค่า `44px` เดิมถูกแทนด้วย `--text-h1 (48px)` ซึ่งตรงกับ token ที่ใกล้เคียงที่สุด ไม่มี token `44px` ใน DS3

### 2. Component API — อัปเดตจาก old API เป็น DS3 latest

| ก่อน | หลัง DS3 | เหตุผล |
|------|---------|--------|
| `<Button>` | `<DSButton>` | DS3 export ใหม่ |
| `<Input showPasswordToggle>` | `<DSInput showPasswordToggle inputSize="lg">` | DS3 renamed + prop เพิ่ม |
| `<Checkbox onChange={fn}>` | `<DSCheckbox onChange={fn} size="md">` | DS3 renamed |
| `<FormField error={msg}><Input /></FormField>` | `<DSInput state="error" errorMessage={msg} />` | DS3 รวม label+error ใน DSInput |
| `<Card className="p-[40px]">` | `<Card><CardBody style={{padding:"var(--space-40)"}}>` | DS3: CardBody แยก |
| `toast.success(msg)` | `toast.success(msg)` | ไม่เปลี่ยน — API เดิมยังใช้ได้ |

### 3. Color Tokens — เปลี่ยน token ที่ไม่ตรง DS3

| ก่อน | หลัง DS3 | Token ที่ถูกต้อง |
|------|---------|----------------|
| `var(--fg-brand-primary)` | `var(--text-brand-primary)` | Sky-500 `#32a9ff` |
| `var(--bg-disabled)` | `var(--bg-secondary)` | Gray-100 `#f3f4f6` |

### 4. Spacing — เปลี่ยน hardcode เป็น DS3 spacing token

| ก่อน | หลัง DS3 |
|------|---------|
| `gap: "32px"` | `gap: "var(--space-32)"` |
| `gap: "24px"` | `gap: "var(--space-24)"` |
| `gap: "16px"` | `gap: "var(--space-16)"` |
| `gap: "8px"` | `gap: "var(--space-8)"` |
| `padding: "48px 16px"` | `padding: "var(--space-48) var(--space-16)"` |
| `padding: "40px"` (Card) | `padding: "var(--space-40)"` |

### 5. Font Family — แก้ให้ตรง DS3

| ก่อน | หลัง DS3 |
|------|---------|
| `"DB_HeaventRounded:Bold, sans-serif"` | `"DB HeaventRounded, sans-serif"` |
| `"DB_HeaventRounded:Regular, sans-serif"` | `"DB HeaventRounded, sans-serif"` |
| `"DB_HeaventRounded:Med, sans-serif"` | `"DB HeaventRounded, sans-serif"` + `fontWeight: 500` |

**เหตุผล:** DS3 ระบุ font family เป็น `DB HeaventRounded, sans-serif` ไม่ใช้ format `DB_HeaventRounded:Bold` แบบเดิม

## สิ่งที่ยังแก้ไม่ได้ (Known Gap)

### Gap 1: SellsukiLogo
- **สถานะ:** ยังใช้ custom `SellsukiLogo.tsx` จาก codebase เดิม
- **สาเหตุ:** DS3 MCP `list_components` ไม่มี Logo component ใน 63 components
- **แนวทาง:** ขอ confirmation จากทีม Design Ops ว่า Logo ควรอยู่ใน package หรือเป็น per-product asset

### Gap 2: Password Strength Meter
- **สถานะ:** ยังใช้ custom JS validation logic แทน DS component
- **สาเหตุ:** DS3 MCP `list_components` ไม่มี PasswordStrength หรือ ProgressIndicator ที่ตรงกับ pattern นี้
- **แนวทาง:** อาจใช้ `ProgressBar` component ของ DS3 เป็น visual indicator แทน (ยังไม่ implement รอบนี้)

### Gap 3: Social Auth Buttons (Google / Facebook / LINE)
- **สถานะ:** ยังใช้ `DSButton variant="outline"` เป็น fallback
- **สาเหตุ:** DS3 ไม่มี social provider button ใน catalog
- **แนวทาง:** สร้าง custom component ระดับ project โดยใช้ DSButton เป็น base

### Gap 4: `--text-h1` vs `44px` เดิม
- **สถานะ:** เปลี่ยนจาก `44px` → `var(--text-h1)` (48px) ซึ่งต่างกัน 4px
- **สาเหตุ:** ไม่มี token `44px` ใน DS3 type scale
- **แนวทาง:** Design review ว่าควรใช้ `--text-h1 (48px)` หรือสร้าง token ใหม่

## ผลการตรวจสอบไฟล์

### Hardcoded px ที่เหลืออยู่
- ไม่พบ `fontSize: "...px"` หรือ `text-[...px]` เหลืออยู่ในไฟล์ที่แก้แล้ว ✓
- stroke ของ SVG icon (เช่น `stroke="#e11d48"` ใน LinkExpired) ยังเป็น hardcode เพราะ SVG ไม่รองรับ CSS variable ในบาง attribute

### Import ที่ตรวจสอบแล้ว
```
DSButton  — ใช้ทุกหน้า ✓
DSInput   — ใช้ในหน้าที่มี form input ✓
DSCheckbox — ใช้ใน SignUp ✓
Divider   — ใช้ใน SignIn, SignUp ✓
toast     — ใช้ใน SignIn, SignUp, VerifyEmail, CreatePassword ✓
Card, CardBody — ใช้ใน Scaffold ✓
FormHelperText — ใช้ใน LegalFooter ✓
```

## Component ใหม่ที่ค้นพบจาก MCP รอบนี้ (ยังไม่ได้ใช้)

DS3 มี 63 components เทียบกับที่ audit ไว้ก่อนหน้า (74 exports, MCP report 91) — ตัวเลขล่าสุดจาก MCP คือ 63 ซึ่งอาจเกิดจาก MCP version update หรือ consolidation

Components ที่น่าสนใจสำหรับ auth flow ในอนาคต:
- `OTPInput` — สำหรับ verify OTP แทนการใช้ลิงก์
- `ProgressBar` — อาจใช้ทำ password strength indicator
- `Stepper` — แสดง progress ของ signup flow (step 1/3, 2/3, 3/3)
- `Alert` — inline error แทน toast ในบางกรณี

## สถานะการส่งขึ้น GitHub
- วิธีที่ใช้: `git commit + push`
- เป้าหมาย: `mmonsicha/AMS_DS3`
- branch: `main`
- ผลลัพธ์: สำเร็จ

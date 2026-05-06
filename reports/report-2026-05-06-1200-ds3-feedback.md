# รายงาน DS3 Feedback — AMS Auth Flow

## สรุปงาน
- งาน: รวบรวม feedback จากการพัฒนา `AMS_DS3` auth flow ด้วย Sellsuki Design System 3
- วันที่: 2026-05-06
- ทีมที่รายงาน: Frontend / AMS team
- repo ที่ใช้งาน: `mmonsicha/AMS_DS3` (branch: `deploy`)
- DS3 version ที่อ้างอิง: MCP `3.1.2` / React package `@uxuissk/design-system@latest`

---

## ภาพรวม: สิ่งที่ทำงานได้ดี ✅

| Component | การใช้งาน | สถานะ |
|-----------|-----------|-------|
| `DSButton` (6 variants) | ทุกหน้า | ✅ ทำงานสมบูรณ์ |
| `DSInput` (error/success state) | ทุกหน้าที่มี form | ✅ ทำงานสมบูรณ์ |
| `DSCheckbox` | SignUp | ✅ ทำงานสมบูรณ์ |
| `Divider` (label) | SignIn, SignUp | ✅ ทำงานสมบูรณ์ |
| `Card` + `CardBody` | ทุกหน้า (scaffold) | ✅ ทำงาน (มี API limitation) |
| `toast` + `ToastContainer` | ทุกหน้า | ✅ ทำงานสมบูรณ์ |
| `ProgressBar` | SetPassword, CreatePassword | ✅ ใช้เป็น fallback |

---

## ปัญหาที่พบ — แบ่งตามประเภท

### 🔴 Component ที่ขาด (Missing Components)

#### Issue #1: ไม่มี SocialButton
- **ผลกระทบ:** Social login (Google/Facebook/LINE) ทุก flow ต้องสร้าง icon + styling เอง
- **Workaround:** `DSButton variant="outline"` + SVG icon inline
- **GitHub Issue:** `issue-01-social-button.md`

#### Issue #2: ไม่มี PasswordStrength
- **ผลกระทบ:** หน้า SetPassword, CreatePassword ขาด visual strength indicator ที่ standard
- **Workaround:** `ProgressBar` + custom scoring logic
- **GitHub Issue:** `issue-02-password-strength.md`

#### Issue #3: ไม่มี Logo / Brand component
- **ผลกระทบ:** ทุก project ต้องมีไฟล์ logo แยก ไม่ consistent และ deploy ใช้ placeholder ไม่ใช่ logo จริง
- **Workaround:** Custom `SellsukiLogo.tsx` (S-lettermark SVG placeholder)
- **GitHub Issue:** `issue-03-logo-component.md`

#### Issue #4: ไม่มี Text / Heading primitives
- **ผลกระทบ:** ทุก project ต้องสร้าง typography wrapper เอง เสี่ยงใช้ font/size ผิด
- **Workaround:** Custom wrapper components + inline style
- **GitHub Issue:** `issue-04-text-heading-primitives.md`

---

### 🟡 Bug ที่พบ (Bugs Found)

#### Issue #5: CSS Token ไม่ resolve ใน Vite + Tailwind v4
- **Token ที่กระทบ:** `--space-*`, `--bg-secondary`
- **ผลกระทบ:** spacing และ background ไม่ถูกต้อง ต้อง hardcode px แทน
- **Environment:** Vite 8, React 19, @tailwindcss/vite 4.2.4, Vercel
- **GitHub Issue:** `issue-05-token-resolution-vite.md`

---

### 🟢 API Limitation (ไม่ใช่ bug แต่ควรปรับปรุง)

#### Issue #6: CardBody ไม่รับ style prop
- **ผลกระทบ:** ต้องใช้ wrapper div เพิ่มเพื่อกำหนด padding
- **GitHub Issue:** `issue-06-cardbody-no-style-prop.md`

#### Issue #7: FormHelperText ไม่รับ style prop
- **ผลกระทบ:** ต้อง override ผ่าน CSS class แทน inline style
- **GitHub Issue:** `issue-07-formhelpertext-no-style.md`

---

## ข้อเสนอแนะเพิ่มเติมสำหรับทีม Design System

1. **เพิ่ม `SocialButton`** — priority สูงสุด ใช้ใน auth flow ทุก product
2. **publish `SellsukiLogo`** ใน DS package — ป้องกัน brand inconsistency
3. **ตรวจสอบ `--space-*` token** กับ Vite + Tailwind v4 compatibility
4. **เพิ่ม `style` prop** ให้ `CardBody` และ `FormHelperText`
5. **เพิ่ม `Heading` / `Text` primitives** เพื่อ enforce font family และ scale

---

## สถานะการ Deploy
- Live URL: `https://ams-ds3-git-deploy-mmonsicham-5098s-projects.vercel.app/ams-ds3`
- Branch: `deploy` (mmonsicha/AMS_DS3)
- Build: ✅ Vite 1755 modules

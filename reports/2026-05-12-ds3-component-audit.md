# DS3 Component Audit Report
**Date:** 2026-05-12  
**Project:** AMS_DS3 (ams-ssk-ds3)  
**Package:** `@uxuissk/design-system@0.8.16` (latest)  
**MCP Reference:** https://ds3-mcp.vercel.app/api/mcp  
**Repo:** https://github.com/mmonsicha/AMS_DS3  
**Production:** https://ams-ds3-nxop0ntoo-mmonsicham-5098s-projects.vercel.app  

---

## 1. Version Status

| Item | Value | Status |
|------|-------|--------|
| Installed version | `0.8.16` | ✅ Latest |
| npm latest | `0.8.16` | ✅ Match |
| CSS import | `@uxuissk/design-system/styles.css` | ✅ Present in `main.tsx` |

---

## 2. DS3 Components Used (10 / 63)

| Component | Used In | Notes |
|-----------|---------|-------|
| `DSButton` | All pages | ✅ variant, size, loading, fullWidth, disabled ใช้ครบ |
| `DSInput` | SignIn, SignUp, Register, ForgotPassword, CreatePassword, SetPassword | ✅ |
| `DSCheckbox` | SignUp | ✅ terms acceptance |
| `Card` | AMSDS3AuthScaffold | ✅ elevation="sm" |
| `CardBody` | AMSDS3AuthScaffold | ⚠️ ไม่รับ `style` prop → ใช้ inner `<div>` wrapper |
| `Divider` | SignIn, SignUp | ✅ "หรือ" separator |
| `ProgressBar` | CreatePassword, SetPassword | ✅ password strength fallback |
| `FormHelperText` | AMSDS3AuthScaffold | ⚠️ ไม่รับ `style` prop → ใช้ `className` แทน |
| `ToastContainer` | AMSDS3AuthScaffold | ⚠️ ไม่รับ `position` prop |
| `toast` | SignIn, SignUp, VerifyEmail, CreatePassword, SetPassword | ✅ `.success()`, `.error()` |

---

## 3. DS3 Components Available แต่ยังไม่ได้ใช้ (53 / 63)

### ที่เกี่ยวข้องกับ auth flow และควรพิจารณาใช้

| Component | Use Case | Priority |
|-----------|----------|----------|
| `OTPInput` | VerifyEmail — แทน countdown + DSButton ปัจจุบัน | 🔴 High |
| `Spinner` | Loading state ใน async actions | 🟡 Medium |
| `Alert` | Inline error/success messages แทน toast บางกรณี | 🟡 Medium |
| `Tooltip` | Password requirement hints | 🟡 Medium |
| `Switch` | ไม่เกี่ยวข้อง | ⬜ N/A |

### รายการเต็ม (ไม่ได้ใช้)

**Form Controls:** DSRadio, Switch, DatePicker, SearchField, Dropdown, TagInput, ColorPicker, Rating, FileUpload, FormField, NumberInput, OTPInput, DateRangePicker, TimePicker, DateTimePicker, ChoiceCard, RadioCard, RepeatableFieldList, RichTextEditor

**Layout:** TransferList, PageHeader, FilterBar, Accordion, FeaturePageScaffold, AppShellProvider

**Data Display:** DSTable, Badge, Tag, Avatar, Statistic, Timeline, Tree, Skeleton, ImagePreview, AdvancedDataTable, LineChart, AreaChart, BarChart, DonutChart, MiniSparkline, ImageGallery, ThumbnailCell

**Feedback:** EmptyState, Alert, Modal, Notification, Spinner, Tooltip, Popover, Drawer

**Navigation:** Tabs, Pagination, Breadcrumb, Sidebar, TopNavbar, Menu, Stepper

---

## 4. Known DS3 Gaps (ยังขาดใน DS3 63 components)

| Gap | Current Workaround | GitHub Issue |
|-----|-------------------|-------------|
| `SellsukiLogo` component | Custom SVG (`src/components/SellsukiLogo.tsx`) | Issue #3 |
| Social auth buttons (Google, Facebook, LINE) | Custom SVG icons (`src/components/SocialIcons.tsx`) + DSButton outline | Issue #1 |
| PasswordStrength component | `ProgressBar` + custom `getPasswordStrength()` logic | Issue #2 |
| Text/Heading primitives | Custom `AMSDS3Title`, `AMSDS3Subtitle` ด้วย inline style + DS3 token | Issue #4 |
| `--space-*` token bug | Hardcoded `px` fallback ทุกที่ (`var(--space-*, 16px)`) | Issue #5 |
| `CardBody` style prop | Inner `<div>` wrapper พร้อม inline style | Issue #6 |
| `FormHelperText` style prop | `className="ams-legal-footer"` | Issue #7 |
| `ToastContainer` position prop | Default position (ไม่สามารถกำหนดได้) | - |

---

## 5. Custom Components (นอก DS3)

| File | Purpose |
|------|---------|
| `src/components/SellsukiLogo.tsx` | SVG logo — รอ DS3 export Logo component |
| `src/components/SocialIcons.tsx` | Google, Facebook, LINE SVG icons |
| `src/components/AMSDS3AuthScaffold.tsx` | Page scaffold + typography primitives |
| `src/components/ToastProvider.tsx` | Re-export toast API |

---

## 6. Pages Summary

| Page | Route | DS3 Components |
|------|-------|---------------|
| SignIn | `/ams-ds3` | DSButton, DSInput, Divider, toast |
| SignUp | `/ams-ds3/signup` | DSButton, DSInput, DSCheckbox, Divider, toast |
| Register | `/ams-ds3/register` | DSButton, DSInput |
| ForgotPassword | `/ams-ds3/forgot-password` | DSButton, DSInput |
| ForgotPassword CheckEmail | `/ams-ds3/forgot-password/check-email` | DSButton |
| VerifyEmail | `/ams-ds3/signup/verify-email` | DSButton, toast |
| VerifyEmailSuccess | `/ams-ds3/signup/verify-email/success` | DSButton |
| CreatePassword | `/ams-ds3/create-password` | DSButton, DSInput, ProgressBar, toast |
| SetPassword | `/ams-ds3/set-password` | DSButton, DSInput, ProgressBar |
| LinkExpired | `/ams-ds3/link-expired` | DSButton |

---

## 7. Recommendations

1. **OTPInput** — ใช้แทน VerifyEmail page ปัจจุบัน (countdown + button) เพื่อ UX ที่ดีขึ้น
2. **Alert** — ใช้สำหรับ inline validation errors แทน toast ในบางกรณี
3. **Spinner** — เพิ่มใน loading state แทน DSButton loading prop เดี่ยวๆ
4. รอ DS3 team แก้ไข Known Gaps ตาม Issues #1–#7 ที่ filed ไว้แล้ว

---

*Audited by Claude Code | DS3 MCP v0.8.16 | 2026-05-12*

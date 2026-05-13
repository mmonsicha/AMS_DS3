# Architecture & Roadmap Plan
**Date:** 2026-05-13  
**Project:** AMS_DS3 + Patona Seller Center  
**Author:** mmonsicha  

---

## 1. System Architecture

```
AMS_DS3 (Login / Auth / App Selector)    ← repo: mmonsicha/AMS_DS3
    │   package: @uxuissk/design-system 0.8.16   (React components)
    │   package: @uxuissk/design-system-core 3.2.0 (ssk-* Web Components)
    │
    ├── /ams-ds3            Sign In (step: email → password)
    ├── /ams-ds3/signup     Sign Up flow
    ├── /ams-ds3/forgot-*   Forgot Password flow
    └── /app-selector  ←── Phase 0 (ใหม่) — เลือก App หลัง login

Patona Seller Center                     ← repo: แยกใหม่ (Phase 1+)
    │   package: @uxuissk/design-system-core 3.2.0
    │   framework: React (ใช้ ssk-* Web Components)
    │
    ├── /              Home Page
    ├── /product       Product List
    ├── /sales         Create Order (POS)
    ├── /order         Order List (Tabs)
    └── /customers     Customer List
```

---

## 2. Design System Versions

| | AMS Auth Pages | App Selector | Patona Seller Center |
|---|---|---|---|
| Package | `@uxuissk/design-system` | `@uxuissk/design-system-core` | `@uxuissk/design-system-core` |
| Version | `0.8.16` | `3.2.0` | `3.2.0` |
| Components | `DSButton`, `DSInput`... | `ssk-*` Web Components | `ssk-*` Web Components |
| Total components | 63 | 91 | 91 |
| Framework | React | React + Web Components | React + Web Components |

---

## 3. Phase Roadmap

### Phase 0 — App Selector ✅ In Progress
**Repo:** AMS_DS3 (ต่อเนื่อง)  
**Route:** `/app-selector`  
**Redirect:** หลัง login สำเร็จ → `/app-selector`

**Layout:**
- Header: AMS Logo + ชื่อหน้า + User Avatar + Logout
- Body: Grid 3×2 = 6 App Cards
- Footer: version text

**6 Apps:**
| # | App | Status | URL |
|---|---|---|---|
| 1 | Patona Seller Center | ✅ Available | https://sellercenter.patona.online |
| 2–6 | TBD | 🔒 Coming Soon | — |

**DS3 Components ที่ใช้:**
- `ssk-theme-provider` (brand="ccs3")
- `ssk-avatar` (user header)
- `ssk-button` (logout, enter app)
- `ssk-tooltip` (coming soon hint)
- `ssk-logo`
- `ssk-badge` (Coming Soon tag)

---

### Phase 1 — Patona Project Setup
**Repo:** ใหม่ (แยกจาก AMS_DS3)  
**Stack:** React + Vite + TypeScript + `@uxuissk/design-system-core`

งาน:
- สร้างโปรเจกต์ใหม่
- ติดตั้ง `@uxuissk/design-system-core`
- Config `ssk-theme-provider brand="patona"`
- Setup design tokens (Patona brand colors, typography)
- Config routing

---

### Phase 2 — App Shell Layout
**Components:**
- `ssk-top-navbar` — fixed top 72px
- `ssk-sidebar` — fixed left 256px
- `ssk-sidebar-group` + `ssk-sidebar-items`
- `ssk-app-shell` / `ssk-app-shell-provider`

**Sidebar Menu:**
```
หน้าหลัก
  └── หน้าแรก          /

คลังสินค้า
  ├── สินค้าของฉัน     /product
  └── เพิ่มสินค้า      /product/add

คำสั่งซื้อ
  ├── สร้างคำสั่งซื้อ  /sales
  └── คำสั่งซื้อของฉัน /order

จัดการลูกค้า
  └── สมุดรายชื่อ      /customers

── [bottom fixed] ──
  ├── ช่วยเหลือ        (LINE)
  └── ตั้งค่า          /settings
```

---

### Phase 3 — Home Page (`/`)
- Welcome header + Hero Banner
- Quick Action Grid 3×N:
  - Available: สร้างคำสั่งซื้อ, รายการคำสั่งซื้อ, สินค้าของฉัน, เพิ่มสินค้า
  - Coming Soon (locked): คลังสินค้า, บริหารหน้าร้าน, สมุดรายชื่อ, รายงาน, ปฏิทินสินค้า

---

### Phase 4 — Product List (`/product`)
- `ssk-page-header` — title + CTA "+ เพิ่มสินค้า"
- `ssk-filter-bar` — dropdown category + search
- `ssk-table` / `ssk-advanced-data-table`
- `ssk-pagination`

---

### Phase 5 — Order Pages (`/sales`, `/order`)
**Create Order (POS):** 2-panel layout — Product list (left) + Cart (right)  
**Order List:** `ssk-tabs` (ทั้งหมด | กำลังดำเนินการ | สำเร็จ | ยกเลิก) + Table + Filter

---

### Phase 6 — Customer & Settings (`/customers`, `/settings`)
- Customer: Search + Sortable Table + CTA
- Settings: `ssk-tabs` + `ssk-toggle` + Card

---

## 4. Key Technical Decisions

| Decision | Choice | Reason |
|---|---|---|
| App Selector location | AMS_DS3 repo | User flow ต่อเนื่องจาก login โดยตรง |
| Patona Seller Center | Repo ใหม่ | แยก concern ชัดเจน, deploy แยก |
| Framework | React (ทั้งสองโปรเจกต์) | ssk-* Web Components ใช้ใน React ได้ผ่าน custom elements |
| DS Version AMS auth | `@uxuissk/design-system` 0.8.16 | ไม่ migrate — auth pages stable แล้ว |
| DS Version App Selector+ | `@uxuissk/design-system-core` 3.2.0 | 91 components, ครบกว่า |
| ssk-theme-provider brand | `"ccs3"` (AMS), `"patona"` (Seller Center) | brand token แยกกัน |

---

## 5. DS3 v3.2.0 Component Coverage (91 components)

**Foundation:** ssk-theme-provider, ssk-icon, ssk-logo, ssk-misc-icon, ssk-wave-icon, ssk-country-icon, ssk-i18n-provider, ssk-translate, ssk-toast-provider  
**Form & Input:** ssk-button, ssk-input, ssk-checkbox, ssk-radio, ssk-toggle, ssk-dropdown, ssk-date-picker, ssk-textarea, ssk-pin-code, ssk-inputtag, ssk-calendar, ssk-time, ssk-range-date-picker, ssk-input-range, ssk-download-file, ssk-image-cropper, ssk-card-group, ssk-card-select, ssk-dropdown-button, ssk-dropdown-option, ssk-dropdown-preview, ssk-addon-phone-country, ssk-input-addon, ssk-radio-group  
**Data Display:** ssk-table, ssk-table-row, ssk-table-cell, ssk-header-cell, ssk-advanced-data-table, ssk-dynamic-table, ssk-avatar, ssk-badge, ssk-tag, ssk-card, ssk-expandable-card, ssk-timeline, ssk-pagination, ssk-date-display, ssk-image_2, ssk-code-block  
**Layout:** ssk-app-shell, ssk-app-shell-provider, ssk-container, ssk-divider, ssk-feature-page-scaffold, ssk-page-header, ssk-widget-grid, ssk-widget-matric, ssk-widget-table, ssk-widget-title, ssk-widget-example, ssk-widget-user-detail  
**Navigation:** ssk-sidebar, ssk-sidebar-group, ssk-sidebar-header, ssk-sidebar-list, ssk-sidebar-items, ssk-sidebar-account-switcher, ssk-top-navbar, ssk-tabs, ssk-tab-header, ssk-tab-button, ssk-filter-bar, ssk-menu-group, ssk-menu-items, ssk-stepper, ssk-accordion, ssk-accordion-item  
**Feedback:** ssk-alert, ssk-tooltip, ssk-progress-bar, ssk-skeleton, ssk-spinner  
**Overlay:** ssk-modal, ssk-drawer, ssk-drawer-header  
**Charts:** ssk-bar-chart, ssk-line-chart, ssk-donut-chart  
**Typography:** ssk-heading, ssk-text_2, ssk-template  

---

*Plan by Claude Code | DS3 MCP v3.2.0 | 2026-05-13*

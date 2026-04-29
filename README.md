# AMS_DS3

This repository contains the DS3-based clone deliverables extracted from the AMS authentication frontend.

## Included files

- `src/AMS_DS3.tsx`
  - AMS_DS3 sign-in page cloned from the original auth design.
- `src/AMS_DS3_SignUp.tsx`
- `src/AMS_DS3_Register.tsx`
- `src/AMS_DS3_SetPassword.tsx`
- `src/AMS_DS3_VerifyEmail.tsx`
- `src/AMS_DS3_VerifyEmailSuccess.tsx`
  - Additional cloned pages for the signup flow.
- `src/AMS_DS3_ForgotPassword.tsx`
- `src/AMS_DS3_ForgotPasswordCheckEmail.tsx`
- `src/AMS_DS3_CreatePassword.tsx`
- `src/AMS_DS3_LinkExpired.tsx`
  - Additional cloned pages for the forgot-password flow.
- `src/components/AMSDS3AuthScaffold.tsx`
  - Shared auth scaffold used to keep the cloned layout consistent.
- `src/routes.reference.tsx`
  - Route reference showing where the full `AMS_DS3` flow was added in the source app.
- `reports/2026-04-29-1215-ams-auth-ds3-audit.md`
  - Thai audit report covering MCP availability, DS package coverage, current gaps, and recommendations.

## Important constraint

The MCP catalog reports DS3 version `3.1.2`, while the React package installed in the source project is `@uxuissk/design-system@0.7.2`.

## Deployment note

This repo includes `vercel.json` with a rewrite to `index.html` so direct route access like `/ams-ds3` works correctly on Vercel for this Vite SPA.

Because of that mismatch, some MCP-listed items could not be pulled into the React pages as-is, especially:

- `ssk-logo`
- `ssk-heading`
- `ssk-text_2`
- `ssk-app-shell`

Those gaps are documented in the report instead of being recreated as custom UI elements.

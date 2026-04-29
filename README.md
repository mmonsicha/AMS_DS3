# AMS_DS3

This repository contains the DS3-first deliverables extracted from the AMS authentication frontend.

## Included files

- `src/AMS_DS3.tsx`
  - A new DS3-driven page that uses the installed `@uxuissk/design-system` package directly.
- `src/routes.reference.tsx`
  - Route reference showing where `AMS_DS3` was added in the source app.
- `reports/2026-04-29-1215-ams-auth-ds3-audit.md`
  - Thai audit report covering MCP availability, DS package coverage, current gaps, and recommendations.

## Important constraint

The MCP catalog reports DS3 version `3.1.2`, while the React package installed in the source project is `@uxuissk/design-system@0.7.2`.

Because of that mismatch, some MCP-listed items could not be pulled into the React page as-is, especially:

- `ssk-logo`
- `ssk-heading`
- `ssk-text_2`
- `ssk-app-shell`

Those gaps are documented in the report instead of being recreated as custom UI elements.

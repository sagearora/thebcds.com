# BCDS design language

## Direction

Warm, assured, and community-minded. The 125th-anniversary emblem anchors the identity: deep plum, champagne gold, warm ivory, fine orbital lines, and generous space. Combine contemporary sans-serif typography with occasional italic serif phrases. Use clear, welcoming copy and concrete invitations to learn, connect, and participate.

This document defines the current design. `design.json` is a historical reference to the previous visual direction and should not guide new work.

## Palette

| Role            | Color     | Usage                                                          |
| --------------- | --------- | -------------------------------------------------------------- |
| Plum            | `#27163D` | Primary text, buttons, event date panels, interior heroes      |
| Deep plum       | `#1B102A` | Footer                                                         |
| Champagne       | `#EAD3A4` | Text and primary actions on dark surfaces; anniversary artwork |
| Ivory           | `#FAF7F0` | Main page background                                           |
| Card ivory      | `#FFFDF8` | Cards and raised surfaces                                      |
| Warm neutral    | `#EEE8E3` | Alternate sections                                             |
| Muted text      | `#716A77` | Secondary text on light backgrounds                            |
| Bronze          | `#82623F` | Serif emphasis and small labels on ivory                       |
| Light secondary | `#D5CDDD` | Supporting copy on plum                                        |

Gold is an accent, not small body text on ivory. Use plum text on gold buttons. Prefer subtle borders (`#27163D1C`) to heavy shadows. Existing `--c-*` tokens are mapped inside `.site-page` for older content blocks; new components should use the shared semantic classes and homepage palette. Do not reintroduce neon yellow, bright pink, or multicolor gradients.

## Typography

- Inter: body, navigation, labels, and headings. Heading weight approximately 500 with slightly negative tracking.
- Georgia italic: short expressive phrases within headings using `<em>`.
- Anton: reserve for the anniversary numeral. Do not use condensed uppercase display type for new page headings.
- Hero headings: fluid 38–72px on interior pages; retain readable line breaks on phones.
- Section headings: fluid 34–52px. Body: generally 14–16px with 1.8 line height.
- Uppercase labels: short, 9–12px, with restrained tracking. Keep body copy in sentence case.

## Layout

Use `.home-shell` for a centered, maximum 1280px content area with responsive 24–64px gutters. Sections use approximately 60px vertical padding on phones and 85–100px on desktop. Interior heroes clear the fixed 72px header. Anchor targets use a 90px scroll margin.

Alternate ivory content with warm neutral sections and purposeful plum introductions or closing invitations. Use borders and whitespace to establish hierarchy. Cards have modest 5–8px corners; buttons are pill-shaped. Avoid making every section a large rounded card.

Event cards pair a plum date panel with ivory content, clear time/location/credit metadata, and registration and detail links. Past events use a quieter date panel and omit registration actions in listings. Executive profiles use generous portraits with readable roles and email links; grids reduce from three to two to one column.

## Shared components

- `SitePage`: interior page shell, shared header/footer, main landmark, palette, and entrance motion.
- `PageHero`: label, one H1, optional serif emphasis, description, optional actions, and decorative orbit. Event pages can include a back-to-events link.
- `EventCard`: reusable calendar and upcoming-event card, including optional speaker and venue imagery.
- `HomeMotion`: one-time viewport entrance effects for `.home-reveal` elements present when mounted. Keep content visible by default; dynamically inserted cards should not depend on this observer.
- `useCurrentTime`: hydration-safe browser clock refreshed every minute for event selection.
- `AnniversaryBanner` and `src/data/anniversary.ts`: shared 125-year milestone (1901–2026). Review dated anniversary messaging after 2026; do not silently infer future anniversary claims.

Use `.home-button` for plum primary actions, `.home-button-gold` on dark backgrounds, and `.home-text-link` for secondary actions. Use `SitePage` on new interior routes rather than duplicating page chrome. The landing page has its own composition with the same design vocabulary.

## Motion and interaction

Motion should suggest connection and progress, without distracting from reading. Use short entrance transitions, a 3–6px card/button hover lift, gentle image scale, and finite orbit/shimmer animation. No perpetual decorative motion, flashing, or scroll hijacking. Honor `prefers-reduced-motion`; content remains available without animations or JavaScript-driven reveals.

Use native `<details>`/`<summary>` for expandable benefits. Keep real links for navigation and buttons for actions. External registration and newsletter links retain `noopener noreferrer` when opening a new tab.

## Accessibility and content

Every page has one H1 and a main landmark. Decorative artwork is hidden from assistive technology. Images have meaningful alt text, links have descriptive names, keyboard focus remains visible, and long email addresses can wrap. Ensure layouts work at 390px and narrower without horizontal scrolling. Do not hide essential information behind hover.

Preserve factual event dates, credit values, prices, locations, speaker details, registration destinations, and downloadable resources. Calendar-specific figures and general membership claims are separate content; verify with the organization before reconciling discrepancies.

## Validation

Run `npm run build`, lint changed TypeScript/TSX files, and `git diff --check`. Visually review representative desktop and mobile pages, including an event with media, the executive directory, the PLP course, and the 404 page. Check calendar anchors, registration/detail destinations, native disclosures, and the mobile menu. Both `/e/[slug]` and `/events/[slug]` must resolve to consistent event content; the PLP aliases use the complete course page.

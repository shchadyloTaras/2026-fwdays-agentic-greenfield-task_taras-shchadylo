# app-shell Specification

## Purpose

The app-shell capability defines the persistent single-page application frame for
the Надворі weather product: top bar, responsive main content region, empty-state
hero, footer attribution, centralised UI strings, theme persistence, extension
slots for downstream capabilities, and privacy-safe defaults.

## Requirements

### Requirement: Single-page application shell

The application SHALL render as a single-page experience with a persistent top
bar (brand logo and theme indicator) and a main content region below it
(FR-SHELL-01, TC-STACK-01).

#### Scenario: Top bar on first load

- **WHEN** a visitor opens `/` with no query parameters
- **THEN** the page shows a top bar with the Надворі wordmark and a theme
  indicator control
- **AND** the main content area is visible below the top bar

#### Scenario: Theme indicator is accessible

- **WHEN** the theme indicator receives keyboard focus
- **THEN** it shows a visible focus ring (NFR-A11Y-01)
- **AND** it has an accessible name describing the current theme action

### Requirement: Responsive layout breakpoints

The shell layout SHALL adapt at **768 px** and **1280 px** viewport widths
(FR-SHELL-02).

#### Scenario: Mobile single-column layout

- **WHEN** the viewport width is below 768 px
- **THEN** the main content uses a single-column stack

#### Scenario: Tablet two-column layout

- **WHEN** the viewport width is at least 768 px and below 1280 px
- **THEN** the main content grid exposes two columns for future forecast and
  map slots

#### Scenario: Desktop three-column layout

- **WHEN** the viewport width is at least 1280 px
- **THEN** the main content grid exposes three columns (sidebar/search rail,
  primary content, secondary column)

### Requirement: Empty-state hero on first load

On first load with no active location, the shell SHALL show a centered hero
with Ukrainian copy and a prominently placed city-search placeholder
(FR-SHELL-03).

#### Scenario: No default city

- **WHEN** the URL has no `lat`, `lon`, or `name` query parameters
- **THEN** the hero displays Ukrainian headline and supporting copy
- **AND** a search input placeholder is centered in the hero
- **AND** no forecast or map content is shown

#### Scenario: Search placeholder is inert

- **WHEN** the visitor interacts with the search placeholder before the
  `city-search` capability ships
- **THEN** the control is visually present but does not fetch geocoding data
  or change the URL

### Requirement: Footer attribution credits

The shell footer SHALL credit Open-Meteo and OpenStreetMap with hyperlinks to
their official sites (BC-BRAND-02).

#### Scenario: Footer links visible

- **WHEN** any shell view is rendered
- **THEN** the footer contains linked text for Open-Meteo and OpenStreetMap
- **AND** each link opens the provider's official site in a new browsing context
  with `rel="noopener noreferrer"`

### Requirement: Centralised UI strings

All user-visible shell strings SHALL be sourced from typed modules at
`lib/i18n/uk.ts` (primary) and `lib/i18n/en.ts` (fallback labels). The MVP
SHALL NOT introduce a runtime i18n library (NFR-I18N-01).

#### Scenario: Ukrainian default copy

- **WHEN** the page renders with `lang="uk"` on `<html>`
- **THEN** hero, footer, and theme indicator labels come from `lib/i18n/uk.ts`

#### Scenario: English fallback available

- **WHEN** a component requests a string key defined in both locale modules
- **THEN** the lookup helper returns the Ukrainian string by default
- **AND** the English module provides the same key set for future locale switching

### Requirement: Theme persistence on document root

The theme indicator SHALL toggle light and dark modes by setting
`data-theme` on `<html>`, using design-system tokens already wired in
`globals.css` (BC-BRAND-01, NFR-A11Y-02).

#### Scenario: Toggle to dark theme

- **WHEN** the visitor activates the theme indicator while in light mode
- **THEN** `document.documentElement.dataset.theme` becomes `"dark"`
- **AND** surface and text colours update via existing CSS variables

#### Scenario: Toggle back to light theme

- **WHEN** the visitor activates the theme indicator while in dark mode
- **THEN** `document.documentElement.dataset.theme` becomes `"light"`

### Requirement: Extension slots for downstream capabilities

The shell SHALL expose stable layout regions for later capabilities without
rendering mock forecast or map data (BC-DEMO-01).

#### Scenario: Header extension rail

- **WHEN** the shell renders
- **THEN** the top bar includes a reserved region for the `top-clock` capability
  (may render empty until implemented)

#### Scenario: Main grid placeholders

- **WHEN** no location is active
- **THEN** forecast and map grid columns are empty placeholders, not populated
  with demo numbers or tiles

### Requirement: Privacy-safe shell defaults

The shell SHALL NOT request geolocation, set application cookies, or load
analytics on page load (BC-PRIVACY-01, BC-PRIVACY-02, BC-PRIVACY-03).

#### Scenario: No geolocation on load

- **WHEN** the homepage loads
- **THEN** the browser geolocation API is not invoked

#### Scenario: No application cookies

- **WHEN** the homepage loads
- **THEN** the application code does not write cookies

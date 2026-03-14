# Icon Assets

This directory is the source of truth for shared icon assets.
The files committed here are vendored from `@phosphor-icons/core/assets/regular`.

## Source

- Upstream library: Phosphor Icons
- Raw asset package: `@phosphor-icons/core`

## Naming

- Use lowercase kebab-case file names for stored SVG assets.
- Match exported component names across platforms.
- Prefer semantic names only when the upstream icon name is ambiguous.

## Platform Strategy

- Web: wrap icons in `packages/icons`
- React Native: add a platform-specific wrapper package when needed
- Flutter: either ship selected SVG assets or map to `@phosphor-icons/flutter`

## Initial Recommended Set

- `caret-down`
- `check-circle`
- `eye`
- `eye-slash`
- `info`
- `magnifying-glass`
- `warning-circle`
- `x`
- `x-circle`

## Sync Notes

- Keep web, React Native, and Flutter exports aligned to this folder.
- Prefer the `regular` weight as the cross-platform default.
- When adding a new icon:
  1. Copy the SVG from `@phosphor-icons/core/assets/regular`
  2. Add matching exports in `packages/icons`
  3. Add matching exports in `packages/icons-native`
  4. Add the corresponding mapping in `flutter/lib/hi_design/icons/hi_icons.dart`

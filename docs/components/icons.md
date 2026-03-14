# Icon Usage

HI Design System uses Phosphor as the icon source and keeps a small curated set of raw SVG assets in [`assets/icons`](../../assets/icons/README.md).

## Source Of Truth

- Raw SVG assets: `assets/icons/*.svg`
- Web package: `@hi-design/icons`
- React Native package: `@hi-design/icons-native`
- Flutter mapping: `HiIcons` and `HiIcon`

The committed SVG files are vendored from `@phosphor-icons/core/assets/regular` and represent the default cross-platform weight.

## Available Icons

- `caret-down`
- `check-circle`
- `eye`
- `eye-slash`
- `info`
- `magnifying-glass`
- `warning-circle`
- `x`
- `x-circle`

## React

```tsx
import {
  CloseIcon,
  EyeIcon,
  MagnifyingGlassIcon,
} from '@hi-design/icons';

export function SearchTrigger() {
  return (
    <button type="button">
      <MagnifyingGlassIcon size={16} weight="regular" />
      Search
      <CloseIcon size={16} weight="regular" />
      <EyeIcon size={16} weight="regular" />
    </button>
  );
}
```

## React Native

```tsx
import {
  CloseIcon,
  Eye,
  MagnifyingGlass,
} from '@hi-design/icons-native';

export function SearchTrigger() {
  return (
    <>
      <MagnifyingGlass size={16} weight="regular" />
      <CloseIcon size={16} weight="regular" />
      <Eye size={16} weight="regular" />
    </>
  );
}
```

## Flutter

```dart
import 'package:hi_design/hi_design.dart';

class SearchTrigger extends StatelessWidget {
  const SearchTrigger({super.key});

  @override
  Widget build(BuildContext context) {
    return const Row(
      children: [
        HiIcon(icon: HiIcons.magnifyingGlass, size: 16),
        SizedBox(width: 8),
        HiIcon(icon: HiIcons.close, size: 16),
        SizedBox(width: 8),
        HiIcon(icon: HiIcons.eye, size: 16),
      ],
    );
  }
}
```

## Guidelines

- Prefer the curated exports over importing directly from upstream icon packages.
- Keep the same icon name across platforms.
- Default to `regular` weight unless a component deliberately needs a stronger visual emphasis.
- Add the raw SVG asset before adding a new platform export.

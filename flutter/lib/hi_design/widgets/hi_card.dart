/// HI Design System - Card Widget
///
/// A container component with elevation and padding options
library;

import 'package:flutter/material.dart';
import '../tokens/colors.dart';
import '../tokens/spacing.dart';

enum HiCardElevation { none, sm, md, lg, xl }
enum HiCardPadding { none, sm, md, lg }
enum HiCardRadius { none, sm, md, lg, xl }

class HiCard extends StatelessWidget {
  final Widget child;
  final HiCardElevation elevation;
  final HiCardPadding padding;
  final HiCardRadius radius;
  final bool pressable;
  final VoidCallback? onPress;

  const HiCard({
    super.key,
    required this.child,
    this.elevation = HiCardElevation.md,
    this.padding = HiCardPadding.md,
    this.radius = HiCardRadius.md,
    this.pressable = false,
    this.onPress,
  });

  @override
  Widget build(BuildContext context) {
    final card = Material(
      elevation: _getElevation(),
      borderRadius: _getBorderRadius(),
      color: Colors.white,
      child: InkWell(
        onTap: pressable ? onPress : null,
        borderRadius: _getBorderRadius(),
        child: Container(
          padding: _getPadding(),
          decoration: _getDecoration(),
          child: child,
        ),
      ),
    );

    if (pressable) {
      return Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onPress,
          borderRadius: _getBorderRadius(),
          child: card,
        ),
      );
    }

    return card;
  }

  double _getElevation() {
    switch (elevation) {
      case HiCardElevation.none:
        return 0;
      case HiCardElevation.sm:
        return 1;
      case HiCardElevation.md:
        return 4;
      case HiCardElevation.lg:
        return 8;
      case HiCardElevation.xl:
        return 12;
    }
  }

  BorderRadius _getBorderRadius() {
    switch (radius) {
      case HiCardRadius.none:
        return BorderRadius.zero;
      case HiCardRadius.sm:
        return BorderRadius.circular(HiSpacing.radiusSm);
      case HiCardRadius.md:
        return BorderRadius.circular(HiSpacing.radiusMd);
      case HiCardRadius.lg:
        return BorderRadius.circular(HiSpacing.radiusLg);
      case HiCardRadius.xl:
        return BorderRadius.circular(HiSpacing.radiusXl);
    }
  }

  EdgeInsets _getPadding() {
    switch (padding) {
      case HiCardPadding.none:
        return EdgeInsets.zero;
      case HiCardPadding.sm:
        return const EdgeInsets.all(HiSpacing.s4);
      case HiCardPadding.md:
        return const EdgeInsets.all(HiSpacing.s6);
      case HiCardPadding.lg:
        return const EdgeInsets.all(HiSpacing.s8);
    }
  }

  BoxDecoration _getDecoration() {
    return BoxDecoration(
      color: Colors.white,
      borderRadius: _getBorderRadius(),
      border: elevation == HiCardElevation.none
          ? Border.all(color: const Color(HiColors.neutral200))
          : null,
    );
  }
}

/// HI Design System - Spacing Tokens
///
/// Consistent spacing scale based on 4px base unit
library;

import 'package:flutter/material.dart';

class HiSpacing {
  HiSpacing._();

  // Spacing scale
  static const double s0 = 0.0;
  static const double s1 = 4.0;
  static const double s2 = 8.0;
  static const double s3 = 12.0;
  static const double s4 = 16.0;
  static const double s5 = 20.0;
  static const double s6 = 24.0;
  static const double s7 = 28.0;
  static const double s8 = 32.0;
  static const double s10 = 40.0;
  static const double s12 = 48.0;
  static const double s16 = 64.0;
  static const double s20 = 80.0;
  static const double s24 = 96.0;

  // Common presets
  static const double xs = s1;
  static const double sm = s2;
  static const double md = s4;
  static const double lg = s6;
  static const double xl = s8;
  static const double xxl = s12;
  static const double xxxl = s16;

  // Border radius
  static const double radiusNone = 0.0;
  static const double radiusSm = 4.0;
  static const double radiusMd = 8.0;
  static const double radiusLg = 12.0;
  static const double radiusXl = 16.0;
  static const double radiusXxl = 24.0;
  static const double radiusFull = 9999.0;

  // Border radius as BorderRadius objects
  static const BorderRadius borderRadiusSm = BorderRadius.all(Radius.circular(radiusSm));
  static const BorderRadius borderRadiusMd = BorderRadius.all(Radius.circular(radiusMd));
  static const BorderRadius borderRadiusLg = BorderRadius.all(Radius.circular(radiusLg));
  static const BorderRadius borderRadiusXl = BorderRadius.all(Radius.circular(radiusXl));
  static const BorderRadius borderRadiusXxl = BorderRadius.all(Radius.circular(radiusXxl));

  // Edge insets
  static const EdgeInsets allXs = EdgeInsets.all(xs);
  static const EdgeInsets allSm = EdgeInsets.all(sm);
  static const EdgeInsets allMd = EdgeInsets.all(md);
  static const EdgeInsets allLg = EdgeInsets.all(lg);
  static const EdgeInsets allXl = EdgeInsets.all(xl);

  static const EdgeInsets horizontalMd = EdgeInsets.symmetric(horizontal: md);
  static const EdgeInsets horizontalLg = EdgeInsets.symmetric(horizontal: lg);

  static const EdgeInsets verticalMd = EdgeInsets.symmetric(vertical: md);
  static const EdgeInsets verticalLg = EdgeInsets.symmetric(vertical: lg);
}

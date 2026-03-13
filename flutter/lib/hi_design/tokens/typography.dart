/// HI Design System - Typography Tokens
///
/// Font sizes, weights, and text styles
library;

import 'package:flutter/material.dart';

class HiTypography {
  HiTypography._();

  // Font sizes
  static const double fontSizeXs = 12.0;
  static const double fontSizeSm = 14.0;
  static const double fontSizeBase = 16.0;
  static const double fontSizeLg = 18.0;
  static const double fontSizeXl = 20.0;
  static const double fontSize2xl = 24.0;
  static const double fontSize3xl = 30.0;
  static const double fontSize4xl = 36.0;
  static const double fontSize5xl = 48.0;
  static const double fontSize6xl = 60.0;

  // Font weights
  static const FontWeight fontWeightLight = FontWeight.w300;
  static const FontWeight fontWeightRegular = FontWeight.w400;
  static const FontWeight fontWeightMedium = FontWeight.w500;
  static const FontWeight fontWeightSemibold = FontWeight.w600;
  static const FontWeight fontWeightBold = FontWeight.w700;
  static const FontWeight fontWeightExtrabold = FontWeight.w800;

  // Line heights
  static const double lineHeightTight = 1.25;
  static const double lineHeightSnug = 1.375;
  static const double lineHeightNormal = 1.5;
  static const double lineHeightRelaxed = 1.625;
  static const double lineHeightLoose = 2.0;

  // Text styles
  static const TextStyle h1 = TextStyle(
    fontSize: fontSize6xl,
    fontWeight: fontWeightBold,
    height: lineHeightTight,
    letterSpacing: -3.0,
  );

  static const TextStyle h2 = TextStyle(
    fontSize: fontSize5xl,
    fontWeight: fontWeightBold,
    height: lineHeightTight,
    letterSpacing: -2.4,
  );

  static const TextStyle h3 = TextStyle(
    fontSize: fontSize4xl,
    fontWeight: fontWeightSemibold,
    height: lineHeightTight,
    letterSpacing: -0.9,
  );

  static const TextStyle h4 = TextStyle(
    fontSize: fontSize3xl,
    fontWeight: fontWeightSemibold,
    height: lineHeightSnug,
  );

  static const TextStyle h5 = TextStyle(
    fontSize: fontSize2xl,
    fontWeight: fontWeightSemibold,
    height: lineHeightSnug,
  );

  static const TextStyle h6 = TextStyle(
    fontSize: fontSizeXl,
    fontWeight: fontWeightMedium,
    height: lineHeightNormal,
  );

  static const TextStyle body1 = TextStyle(
    fontSize: fontSizeBase,
    fontWeight: fontWeightRegular,
    height: lineHeightNormal,
  );

  static const TextStyle body2 = TextStyle(
    fontSize: fontSizeSm,
    fontWeight: fontWeightRegular,
    height: lineHeightNormal,
  );

  static const TextStyle button = TextStyle(
    fontSize: fontSizeBase,
    fontWeight: fontWeightSemibold,
    height: lineHeightNormal,
  );

  static const TextStyle caption = TextStyle(
    fontSize: fontSizeXs,
    fontWeight: fontWeightRegular,
    height: lineHeightNormal,
  );

  static const TextStyle overline = TextStyle(
    fontSize: fontSizeXs,
    fontWeight: fontWeightMedium,
    height: lineHeightNormal,
    letterSpacing: 1.2,
  );
}

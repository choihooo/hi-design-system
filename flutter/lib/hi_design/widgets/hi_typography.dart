/// HI Design System - Typography Widget
///
/// Text component with predefined style variants
library;

import 'package:flutter/material.dart';
import '../tokens/colors.dart';
import '../tokens/typography.dart';

enum HiTypographyVariant {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body1,
  body2,
  button,
  caption,
  overline,
}

class HiTypography extends StatelessWidget {
  final String text;
  final HiTypographyVariant variant;
  final FontWeight? weight;
  final Color? color;
  final TextAlign align;
  final bool noWrap;
  final int? maxLines;
  final TextOverflow? overflow;

  const HiTypography(
    this.text, {
    super.key,
    this.variant = HiTypographyVariant.body1,
    this.weight,
    this.color,
    this.align = TextAlign.left,
    this.noWrap = false,
    this.maxLines,
    this.overflow,
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: _getTextStyle(),
      textAlign: align,
      overflow: overflow,
      maxLines: noWrap ? 1 : maxLines,
      softWrap: !noWrap,
    );
  }

  TextStyle _getTextStyle() {
    final baseStyle = _getBaseStyle();
    final effectiveWeight = weight ?? baseStyle.fontWeight;
    final effectiveColor = color ?? const Color(HiColors.neutral900);

    return baseStyle.copyWith(
      fontWeight: effectiveWeight,
      color: effectiveColor,
    );
  }

  TextStyle _getBaseStyle() {
    switch (variant) {
      case HiTypographyVariant.h1:
        return HiTypography.h1;
      case HiTypographyVariant.h2:
        return HiTypography.h2;
      case HiTypographyVariant.h3:
        return HiTypography.h3;
      case HiTypographyVariant.h4:
        return HiTypography.h4;
      case HiTypographyVariant.h5:
        return HiTypography.h5;
      case HiTypographyVariant.h6:
        return HiTypography.h6;
      case HiTypographyVariant.body1:
        return HiTypography.body1;
      case HiTypographyVariant.body2:
        return HiTypography.body2;
      case HiTypographyVariant.button:
        return HiTypography.button;
      case HiTypographyVariant.caption:
        return HiTypography.caption;
      case HiTypographyVariant.overline:
        return HiTypography.overline;
    }
  }

  // Static methods for convenience
  static Widget h1(String text, {Color? color, Key? key}) => HiTypography(
        text,
        variant: HiTypographyVariant.h1,
        color: color,
        key: key,
      );

  static Widget h2(String text, {Color? color, Key? key}) => HiTypography(
        text,
        variant: HiTypographyVariant.h2,
        color: color,
        key: key,
      );

  static Widget h3(String text, {Color? color, Key? key}) => HiTypography(
        text,
        variant: HiTypographyVariant.h3,
        color: color,
        key: key,
      );

  static Widget body(String text, {Color? color, Key? key}) => HiTypography(
        text,
        variant: HiTypographyVariant.body1,
        color: color,
        key: key,
      );

  static Widget caption(String text, {Color? color, Key? key}) => HiTypography(
        text,
        variant: HiTypographyVariant.caption,
        color: color,
        key: key,
      );
}

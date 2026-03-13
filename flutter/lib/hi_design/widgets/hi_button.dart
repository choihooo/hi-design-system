/// HI Design System - Button Widget
///
/// A customizable button component with multiple variants and sizes
library;

import 'package:flutter/material.dart';
import '../tokens/colors.dart';
import '../tokens/spacing.dart';
import '../tokens/typography.dart';

enum HiButtonVariant { primary, secondary, ghost, outline }
enum HiButtonSize { sm, md, lg }
enum HiButtonColor { primary, secondary, success, error, warning }

class HiButton extends StatelessWidget {
  final String text;
  final HiButtonVariant variant;
  final HiButtonSize size;
  final HiButtonColor color;
  final bool disabled;
  final bool loading;
  final bool fullWidth;
  final VoidCallback? onPressed;

  const HiButton({
    super.key,
    required this.text,
    this.variant = HiButtonVariant.primary,
    this.size = HiButtonSize.md,
    this.color = HiButtonColor.primary,
    this.disabled = false,
    this.loading = false,
    this.fullWidth = false,
    this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: fullWidth ? double.infinity : null,
      child: _buildButton(context),
    );
  }

  Widget _buildButton(BuildContext context) {
    final backgroundColor = _getBackgroundColor();
    final foregroundColor = _getForegroundColor();
    final borderColor = _getBorderColor();

    return ElevatedButton(
      onPressed: (disabled || loading) ? null : onPressed,
      style: ElevatedButton.styleFrom(
        backgroundColor: backgroundColor,
        foregroundColor: foregroundColor,
        disabledBackgroundColor: backgroundColor.withOpacity(0.5),
        disabledForegroundColor: foregroundColor.withOpacity(0.5),
        elevation: variant == HiButtonVariant.ghost ? 0 : 2,
        shadowColor: Colors.black26,
        padding: _getPadding(),
        minimumSize: _getMinSize(),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(HiSpacing.radiusMd),
          side: borderColor != null
              ? BorderSide(color: borderColor, width: 2)
              : BorderSide.none,
        ),
        textStyle: _getTextStyle(),
      ),
      child: loading
          ? SizedBox(
              width: _getLoadingSize(),
              height: _getLoadingSize(),
              child: CircularProgressIndicator(
                strokeWidth: 2,
                valueColor: AlwaysStoppedAnimation<Color>(foregroundColor),
              ),
            )
          : Text(text),
    );
  }

  Color _getBackgroundColor() {
    switch (color) {
      case HiButtonColor.primary:
        return variant == HiButtonVariant.primary
            ? const Color(HiColors.primary500)
            : variant == HiButtonVariant.secondary
                ? const Color(HiColors.secondary500)
                : Colors.transparent;
      case HiButtonColor.secondary:
        return variant == HiButtonVariant.primary
            ? const Color(HiColors.secondary500)
            : Colors.transparent;
      case HiButtonColor.success:
        return variant == HiButtonVariant.primary
            ? const Color(HiColors.successMain)
            : Colors.transparent;
      case HiButtonColor.error:
        return variant == HiButtonVariant.primary
            ? const Color(HiColors.errorMain)
            : Colors.transparent;
      case HiButtonColor.warning:
        return variant == HiButtonVariant.primary
            ? const Color(HiColors.warningMain)
            : Colors.transparent;
    }
  }

  Color _getForegroundColor() {
    if (variant == HiButtonVariant.ghost || variant == HiButtonVariant.outline) {
      switch (color) {
        case HiButtonColor.primary:
          return const Color(HiColors.primary500);
        case HiButtonColor.secondary:
          return const Color(HiColors.secondary500);
        case HiButtonColor.success:
          return const Color(HiColors.successMain);
        case HiButtonColor.error:
          return const Color(HiColors.errorMain);
        case HiButtonColor.warning:
          return const Color(HiColors.warningMain);
      }
    }
    return Colors.white;
  }

  Color? _getBorderColor() {
    if (variant == HiButtonVariant.outline) {
      return _getForegroundColor();
    }
    return null;
  }

  EdgeInsets _getPadding() {
    switch (size) {
      case HiButtonSize.sm:
        return const EdgeInsets.symmetric(
          horizontal: HiSpacing.s4,
          vertical: HiSpacing.s2,
        );
      case HiButtonSize.md:
        return const EdgeInsets.symmetric(
          horizontal: HiSpacing.s5,
          vertical: HiSpacing.s3,
        );
      case HiButtonSize.lg:
        return const EdgeInsets.symmetric(
          horizontal: HiSpacing.s6,
          vertical: HiSpacing.s4,
        );
    }
  }

  Size _getMinSize() {
    switch (size) {
      case HiButtonSize.sm:
        return const Size(88, 36);
      case HiButtonSize.md:
        return const Size(100, 44);
      case HiButtonSize.lg:
        return const Size(112, 52);
    }
  }

  double _getLoadingSize() {
    return size == HiButtonSize.sm ? 16.0 : 24.0;
  }

  TextStyle _getTextStyle() {
    return HiTypography.button.copyWith(
      fontSize: size == HiButtonSize.sm ? HiTypography.fontSizeSm : HiTypography.fontSizeBase,
    );
  }
}

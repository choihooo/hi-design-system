/// HI Design System - Toast Widget
///
/// A toast notification component with auto-dismiss and variant styles
library;

import 'package:flutter/material.dart';
import '../icons/hi_icons.dart';
import '../tokens/colors.dart';
import '../tokens/spacing.dart';
import '../tokens/typography.dart';

enum HiToastVariant { success, error, warning, info }
enum HiToastPosition { top, bottom, center }

class HiToast {
  /// Display a toast notification
  static void show(
    BuildContext context, {
    required String message,
    HiToastVariant variant = HiToastVariant.info,
    Duration duration = const Duration(seconds: 3),
    SnackBarAction? action,
  }) {
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    final backgroundColor = _getBackgroundColor(variant);
    final icon = _getIcon(variant);

    scaffoldMessenger.showSnackBar(
      SnackBar(
        content: Row(
          children: [
            Container(
              width: 20,
              height: 20,
              alignment: Alignment.center,
              child: HiIcon(
                icon,
                size: 18,
                color: Colors.white,
              ),
            ),
            const SizedBox(width: HiSpacing.s3),
            Expanded(
              child: Text(
                message,
                style: HiTypography.bodyMedium.copyWith(
                  color: Colors.white,
                ),
              ),
            ),
          ],
        ),
        backgroundColor: backgroundColor,
        duration: duration,
        action: action,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(HiSpacing.radiusMd),
        ),
        margin: const EdgeInsets.all(HiSpacing.s4),
      ),
    );
  }

  /// Display success toast
  static void success(
    BuildContext context,
    String message, {
    Duration duration = const Duration(seconds: 3),
    SnackBarAction? action,
  }) {
    show(
      context,
      message: message,
      variant: HiToastVariant.success,
      duration: duration,
      action: action,
    );
  }

  /// Display error toast
  static void error(
    BuildContext context,
    String message, {
    Duration duration = const Duration(seconds: 3),
    SnackBarAction? action,
  }) {
    show(
      context,
      message: message,
      variant: HiToastVariant.error,
      duration: duration,
      action: action,
    );
  }

  /// Display warning toast
  static void warning(
    BuildContext context,
    String message, {
    Duration duration = const Duration(seconds: 3),
    SnackBarAction? action,
  }) {
    show(
      context,
      message: message,
      variant: HiToastVariant.warning,
      duration: duration,
      action: action,
    );
  }

  /// Display info toast
  static void info(
    BuildContext context,
    String message, {
    Duration duration = const Duration(seconds: 3),
    SnackBarAction? action,
  }) {
    show(
      context,
      message: message,
      variant: HiToastVariant.info,
      duration: duration,
      action: action,
    );
  }

  static Color _getBackgroundColor(HiToastVariant variant) {
    switch (variant) {
      case HiToastVariant.success:
        return const Color(HiColors.successMain);
      case HiToastVariant.error:
        return const Color(HiColors.errorMain);
      case HiToastVariant.warning:
        return const Color(HiColors.warningMain);
      case HiToastVariant.info:
      default:
        return const Color(HiColors.primary500);
    }
  }

  static IconData _getIcon(HiToastVariant variant) {
    switch (variant) {
      case HiToastVariant.success:
        return HiIcons.checkCircle;
      case HiToastVariant.error:
        return HiIcons.errorCircle;
      case HiToastVariant.warning:
        return HiIcons.warningCircle;
      case HiToastVariant.info:
      default:
        return HiIcons.info;
    }
  }
}

/// Convenience widget for displaying toasts with a builder pattern
class HiToastWidget extends StatelessWidget {
  final String message;
  final HiToastVariant variant;
  final Duration duration;
  final SnackBarAction? action;

  const HiToastWidget({
    super.key,
    required this.message,
    this.variant = HiToastVariant.info,
    this.duration = const Duration(seconds: 3),
    this.action,
  });

  @override
  Widget build(BuildContext context) {
    HiToast.show(
      context,
      message: message,
      variant: variant,
      duration: duration,
      action: action,
    );
    return const SizedBox.shrink();
  }
}

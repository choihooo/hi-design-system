/// HI Design System - Modal Widget
///
/// A modal dialog component with size variants and animations
library;

import 'package:flutter/material.dart';
import '../tokens/colors.dart';
import '../tokens/spacing.dart';
import '../tokens/typography.dart';

enum HiModalSize { sm, md, lg }

class HiModal extends StatelessWidget {
  final String? title;
  final Widget? content;
  final List<Widget>? actions;
  final HiModalSize size;
  final bool barrierDismissible;
  final VoidCallback? onDismiss;

  const HiModal({
    super.key,
    this.title,
    this.content,
    this.actions,
    this.size = HiModalSize.md,
    this.barrierDismissible = true,
    this.onDismiss,
  });

  /// Display the modal dialog
  static Future<T?> show<T>({
    required BuildContext context,
    String? title,
    Widget? content,
    List<Widget>? actions,
    HiModalSize size = HiModalSize.md,
    bool barrierDismissible = true,
  }) {
    return showDialog<T>(
      context: context,
      barrierDismissible: barrierDismissible,
      builder: (BuildContext context) {
        return HiModal(
          title: title,
          content: content,
          actions: actions,
          size: size,
          barrierDismissible: barrierDismissible,
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    final maxWidth = _getMaxWidth(screenSize.width);

    return Dialog(
      backgroundColor: const Color(HiColors.white),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(HiSpacing.radiusLg),
      ),
      insetPadding: const EdgeInsets.all(HiSpacing.s5),
      child: ConstrainedBox(
        constraints: BoxConstraints(
          maxWidth: maxWidth,
          maxHeight: screenSize.height * 0.9,
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            if (title != null) _buildHeader(),
            if (content != null) _buildContent(),
            if (actions != null && actions!.isNotEmpty) _buildActions(),
          ],
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: HiSpacing.s5,
        vertical: HiSpacing.s4,
      ),
      decoration: const BoxDecoration(
        border: Border(
          bottom: BorderSide(
            color: Color(HiColors.neutral200),
            width: 1,
          ),
        ),
      ),
      child: Row(
        children: [
          Expanded(
            child: Text(
              title!,
              style: HiTypography.h6.copyWith(
                color: const Color(HiColors.neutral900),
              ),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.of(context).pop(),
            padding: EdgeInsets.zero,
            constraints: const BoxConstraints(),
            splashRadius: HiSpacing.s3,
          ),
        ],
      ),
    );
  }

  Widget _buildContent() {
    return Flexible(
      child: Container(
        padding: const EdgeInsets.all(HiSpacing.s5),
        child: content,
      ),
    );
  }

  Widget _buildActions() {
    return Container(
      padding: const EdgeInsets.symmetric(
        horizontal: HiSpacing.s5,
        vertical: HiSpacing.s4,
      ),
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(
            color: Color(HiColors.neutral200),
            width: 1,
          ),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: actions!
            .map((action) => Padding(
                  padding: const EdgeInsets.only(left: HiSpacing.s2),
                  child: action,
                ))
            .toList(),
      ),
    );
  }

  double _getMaxWidth(double screenWidth) {
    switch (size) {
      case HiModalSize.sm:
        return 400;
      case HiModalSize.lg:
        return 800;
      case HiModalSize.md:
      default:
        return 544;
    }
  }
}

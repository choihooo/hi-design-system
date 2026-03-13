/// HI Design System - Input Widget
///
/// A text input component with label, helper text, and error states
library;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../tokens/colors.dart';
import '../tokens/spacing.dart';
import '../tokens/typography.dart';

enum HiInputVariant { outline, filled }
enum HiInputSize { sm, md, lg }
enum HiInputState { default_, error, success }

class HiInput extends StatefulWidget {
  final String? value;
  final String? placeholder;
  final HiInputVariant variant;
  final HiInputSize size;
  final HiInputState state;
  final bool disabled;
  final bool fullWidth;
  final bool readOnly;
  final String? label;
  final String? helperText;
  final String? errorText;
  final ValueChanged<String>? onChanged;
  final VoidCallback? onFocus;
  final VoidCallback? onBlur;
  final VoidCallback? onSubmit;

  const HiInput({
    super.key,
    this.value,
    this.placeholder,
    this.variant = HiInputVariant.outline,
    this.size = HiInputSize.md,
    this.state = HiInputState.default_,
    this.disabled = false,
    this.fullWidth = false,
    this.readOnly = false,
    this.label,
    this.helperText,
    this.errorText,
    this.onChanged,
    this.onFocus,
    this.onBlur,
    this.onSubmit,
  });

  @override
  State<HiInput> createState() => _HiInputState();
}

class _HiInputState extends State<HiInput> {
  late TextEditingController _controller;
  bool _isFocused = false;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController(text: widget.value);
    _controller.addListener(_onTextChanged);
  }

  @override
  void dispose() {
    _controller.removeListener(_onTextChanged);
    _controller.dispose();
    super.dispose();
  }

  void _onTextChanged() {
    widget.onChanged?.call(_controller.text);
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: widget.fullWidth ? double.infinity : null,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          if (widget.label != null) ...[
            Text(
              widget.label!,
              style: HiTypography.body2.copyWith(
                fontWeight: HiTypography.fontWeightMedium,
                color: const Color(HiColors.neutral800),
              ),
            ),
            const SizedBox(height: HiSpacing.s1),
          ],
          TextField(
            controller: _controller,
            enabled: !widget.disabled && !widget.readOnly,
            decoration: _getDecoration(),
            style: _getTextStyle(),
            maxLines: 1,
            textInputAction: TextInputAction.done,
            onSubmitted: (_) => widget.onSubmit?.call(),
            onTap: () {
              setState(() => _isFocused = true);
              widget.onFocus?.call();
            },
          ),
          if (widget.helperText != null || widget.errorText != null) ...[
            const SizedBox(height: HiSpacing.s1),
            Text(
              widget.state == HiInputState.error && widget.errorText != null
                  ? widget.errorText!
                  : widget.helperText ?? '',
              style: HiTypography.caption.copyWith(
                color: widget.state == HiInputState.error
                    ? const Color(HiColors.errorMain)
                    : const Color(HiColors.neutral500),
              ),
            ),
          ],
        ],
      ),
    );
  }

  InputDecoration _getDecoration() {
    final borderColor = _getBorderColor();
    final fillColor = widget.variant == HiInputVariant.filled
        ? const Color(HiColors.neutral50)
        : Colors.white;

    return InputDecoration(
      hintText: widget.placeholder,
      hintStyle: HiTypography.body1.copyWith(
        color: const Color(HiColors.neutral400),
      ),
      filled: widget.variant == HiInputVariant.filled,
      fillColor: fillColor,
      contentPadding: _getContentPadding(),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(HiSpacing.radiusMd),
        borderSide: BorderSide(color: borderColor, width: 2),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(HiSpacing.radiusMd),
        borderSide: BorderSide(color: borderColor, width: 2),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(HiSpacing.radiusMd),
        borderSide: const BorderSide(color: Color(HiColors.primary500), width: 2),
      ),
      errorBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(HiSpacing.radiusMd),
        borderSide: const BorderSide(color: Color(HiColors.errorMain), width: 2),
      ),
      focusedErrorBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(HiSpacing.radiusMd),
        borderSide: const BorderSide(color: Color(HiColors.errorMain), width: 2),
      ),
      disabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(HiSpacing.radiusMd),
        borderSide: BorderSide(color: borderColor, width: 2),
      ),
    );
  }

  Color _getBorderColor() {
    switch (widget.state) {
      case HiInputState.error:
        return const Color(HiColors.errorMain);
      case HiInputState.success:
        return const Color(HiColors.successMain);
      case HiInputState.default_:
        return const Color(HiColors.neutral200);
    }
  }

  TextStyle _getTextStyle() {
    return HiTypography.body1.copyWith(
      fontSize: _getFontSize(),
    );
  }

  double _getFontSize() {
    switch (widget.size) {
      case HiInputSize.sm:
        return HiTypography.fontSizeSm;
      case HiInputSize.md:
        return HiTypography.fontSizeBase;
      case HiInputSize.lg:
        return HiTypography.fontSizeBase;
    }
  }

  EdgeInsets _getContentPadding() {
    switch (widget.size) {
      case HiInputSize.sm:
        return const EdgeInsets.symmetric(
          horizontal: HiSpacing.s3,
          vertical: HiSpacing.s2,
        );
      case HiInputSize.md:
        return const EdgeInsets.symmetric(
          horizontal: HiSpacing.s4,
          vertical: HiSpacing.s3,
        );
      case HiInputSize.lg:
        return const EdgeInsets.symmetric(
          horizontal: HiSpacing.s5,
          vertical: HiSpacing.s4,
        );
    }
  }
}

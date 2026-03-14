/// HI Design System - Icon Mappings
library;

import 'package:flutter/material.dart';
import 'package:phosphor_flutter/phosphor_flutter.dart';

class HiIcons {
  const HiIcons._();

  static IconData get caretDown => PhosphorIcons.regular.caretDown;
  static IconData get checkCircle => PhosphorIcons.regular.checkCircle;
  static IconData get close => PhosphorIcons.regular.x;
  static IconData get errorCircle => PhosphorIcons.regular.xCircle;
  static IconData get eye => PhosphorIcons.regular.eye;
  static IconData get eyeSlash => PhosphorIcons.regular.eyeSlash;
  static IconData get info => PhosphorIcons.regular.info;
  static IconData get magnifyingGlass => PhosphorIcons.regular.magnifyingGlass;
  static IconData get warningCircle => PhosphorIcons.regular.warningCircle;
}

class HiIcon extends StatelessWidget {
  final IconData icon;
  final double? size;
  final Color? color;
  final String? semanticLabel;

  const HiIcon({
    super.key,
    required this.icon,
    this.size,
    this.color,
    this.semanticLabel,
  });

  @override
  Widget build(BuildContext context) {
    return PhosphorIcon(
      icon,
      size: size,
      color: color,
      semanticLabel: semanticLabel,
    );
  }
}

import 'package:flutter/material.dart';
import 'package:hi_design/hi_design.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'HI Design System Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('HI Design System Demo'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Center(
              child: Column(
                children: [
                  HiTypography(
                    text: 'HI Design System',
                    variant: HiTypographyVariant.h1,
                  ),
                  HiTypography(
                    text: 'Flutter Demo',
                    variant: HiTypographyVariant.body2,
                    color: Color(0xFF6B7280),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 32),

            // Buttons Section
            const HiTypography(
              text: 'Buttons',
              variant: HiTypographyVariant.h3,
            ),
            const SizedBox(height: 16),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: [
                HiButton(text: 'Primary', size: HiButtonSize.sm),
                HiButton(text: 'Primary', size: HiButtonSize.md),
                HiButton(text: 'Primary', size: HiButtonSize.lg),
                HiButton(
                  text: 'Secondary',
                  variant: HiButtonVariant.secondary,
                  size: HiButtonSize.md,
                ),
                HiButton(
                  text: 'Ghost',
                  variant: HiButtonVariant.ghost,
                  size: HiButtonSize.md,
                ),
                HiButton(
                  text: 'Outline',
                  variant: HiButtonVariant.outline,
                  size: HiButtonSize.md,
                ),
              ],
            ),
            const SizedBox(height: 32),

            // Modals Section
            const HiTypography(
              text: 'Modals',
              variant: HiTypographyVariant.h3,
            ),
            const SizedBox(height: 16),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: [
                HiButton(
                  text: 'Small Modal',
                  size: HiButtonSize.md,
                  onPressed: () {
                    HiModal.show(
                      context: context,
                      title: 'Small Modal',
                      size: HiModalSize.sm,
                      content: const Padding(
                        padding: EdgeInsets.all(16),
                        child: Text('This is a small modal dialog.'),
                      ),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text('Close'),
                        ),
                      ],
                    );
                  },
                ),
                HiButton(
                  text: 'Medium Modal',
                  size: HiButtonSize.md,
                  onPressed: () {
                    HiModal.show(
                      context: context,
                      title: 'Medium Modal',
                      size: HiModalSize.md,
                      content: const Padding(
                        padding: EdgeInsets.all(16),
                        child: Text('This is a medium modal dialog with more content.'),
                      ),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text('Cancel'),
                        ),
                        ElevatedButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text('Confirm'),
                        ),
                      ],
                    );
                  },
                ),
                HiButton(
                  text: 'Large Modal',
                  size: HiButtonSize.md,
                  onPressed: () {
                    HiModal.show(
                      context: context,
                      title: 'Large Modal',
                      size: HiModalSize.lg,
                      content: const Padding(
                        padding: EdgeInsets.all(16),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Text('This is a large modal dialog.'),
                            SizedBox(height: 8),
                            Text('It can accommodate more content and complex layouts.'),
                          ],
                        ),
                      ),
                      actions: [
                        TextButton(
                          onPressed: () => Navigator.pop(context),
                          child: const Text('Close'),
                        ),
                      ],
                    );
                  },
                ),
              ],
            ),
            const SizedBox(height: 32),

            // Toasts Section
            const HiTypography(
              text: 'Toasts',
              variant: HiTypographyVariant.h3,
            ),
            const SizedBox(height: 16),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: [
                HiButton(
                  text: 'Success',
                  color: HiButtonColor.success,
                  size: HiButtonSize.md,
                  onPressed: () {
                    HiToast.success(
                      context,
                      'Success! Operation completed.',
                    );
                  },
                ),
                HiButton(
                  text: 'Error',
                  color: HiButtonColor.error,
                  size: HiButtonSize.md,
                  onPressed: () {
                    HiToast.error(
                      context,
                      'Error! Something went wrong.',
                    );
                  },
                ),
                HiButton(
                  text: 'Warning',
                  color: HiButtonColor.warning,
                  size: HiButtonSize.md,
                  onPressed: () {
                    HiToast.warning(
                      context,
                      'Warning! Please review.',
                    );
                  },
                ),
                HiButton(
                  text: 'Info',
                  color: HiButtonColor.secondary,
                  size: HiButtonSize.md,
                  onPressed: () {
                    HiToast.info(
                      context,
                      'Info! Here is a notification.',
                    );
                  },
                ),
              ],
            ),
            const SizedBox(height: 32),

            // Typography Section
            const HiTypography(
              text: 'Typography',
              variant: HiTypographyVariant.h3,
            ),
            const SizedBox(height: 16),
            const HiCard(
              padding: HiCardPadding.lg,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  HiTypography(text: 'Heading 1', variant: HiTypographyVariant.h1),
                  HiTypography(text: 'Heading 2', variant: HiTypographyVariant.h2),
                  HiTypography(text: 'Heading 3', variant: HiTypographyVariant.h3),
                  HiTypography(text: 'Heading 4', variant: HiTypographyVariant.h4),
                  HiTypography(text: 'Heading 5', variant: HiTypographyVariant.h5),
                  HiTypography(text: 'Heading 6', variant: HiTypographyVariant.h6),
                  HiTypography(text: 'Body 1 - Regular paragraph text', variant: HiTypographyVariant.body1),
                  HiTypography(text: 'Body 2 - Smaller paragraph text', variant: HiTypographyVariant.body2),
                  HiTypography(text: 'Caption text for labels', variant: HiTypographyVariant.caption),
                  HiTypography(text: 'OVERLINE TEXT', variant: HiTypographyVariant.overline),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

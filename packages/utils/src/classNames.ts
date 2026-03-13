/**
 * classNames Utility Function
 * @description Combines class names conditionally (replacement for clsx)
 */
export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

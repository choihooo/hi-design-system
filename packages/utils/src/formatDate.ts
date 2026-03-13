/**
 * formatDate Utility Function
 * @description Formats dates with locale support
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  locale: string = 'en-US',
): string {
  const dateObj = typeof date === 'number' ? new Date(date) : new Date(date)

  if (Number.isNaN(dateObj.getTime())) {
    return 'Invalid Date'
  }

  return new Intl.DateTimeFormat(locale, options).format(dateObj)
}

export function formatRelativeTime(date: Date | string | number, locale: string = 'en-US'): string {
  const dateObj = new Date(date)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, 'second')
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return rtf.format(-minutes, 'minute')
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return rtf.format(-hours, 'hour')
  } else {
    const days = Math.floor(diffInSeconds / 86400)
    return rtf.format(-days, 'day')
  }
}

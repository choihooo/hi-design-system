import { useEffect } from 'react'

interface AnalyticsProviderProps {
  children: React.ReactNode
  trackingId?: string
  enabled?: boolean
}

/**
 * Analytics Provider Component
 * Wraps the app to provide analytics functionality
 * Analytics are loaded after hydration to prevent blocking
 */
export function AnalyticsProvider({
  children,
  trackingId,
  enabled = false,
}: AnalyticsProviderProps) {
  useEffect(() => {
    if (!enabled || !trackingId) return

    // Defer analytics loading until after hydration
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        // Initialize analytics dynamically
        import('../utils/analytics').then(({ initAnalytics }) => {
          initAnalytics({
            trackingId,
            debug: import.meta.env.DEV,
          })
        })
      }
    }, 2000) // Wait 2 seconds after initial render

    return () => clearTimeout(timer)
  }, [enabled, trackingId])

  return <>{children}</>
}

/**
 * Hook to track events
 */
export function useAnalytics() {
  return {
    trackEvent: async (eventName: string, parameters?: Record<string, any>) => {
      if (typeof window === 'undefined') return

      const { trackEvent: track } = await import('../utils/analytics')
      track(eventName, parameters)
    },
    trackPageView: async (page?: string) => {
      if (typeof window === 'undefined') return

      const { trackPageView: track } = await import('../utils/analytics')
      track(page)
    },
  }
}

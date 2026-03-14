import { useEffect } from 'react'

/**
 * Analytics utility with deferred loading
 * Loads analytics only after hydration to prevent blocking
 */

interface AnalyticsConfig {
  trackingId: string
  debug?: boolean
}

type AnalyticsValue = string | number | boolean | null | undefined
export type AnalyticsParameters = Record<string, AnalyticsValue>
type GtagArgs = [command: string, ...args: unknown[]]

let isInitialized = false

/**
 * Initialize analytics (deferred until after hydration)
 * Call this after component mount or user interaction
 */
export async function initAnalytics(config: AnalyticsConfig) {
  if (isInitialized) return

  // Only initialize in browser
  if (typeof window === 'undefined') return

  // Wait for hydration to complete
  await new Promise((resolve) => setTimeout(resolve, 0))

  // Load analytics script dynamically
  try {
    // Example: Google Analytics 4
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.trackingId}`
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: GtagArgs) {
      window.dataLayer.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', config.trackingId, {
      debug_mode: config.debug || false,
    })

    isInitialized = true

    if (config.debug) {
    }
  } catch (_error) {}
}

/**
 * Track page view
 */
export function trackPageView(page?: string) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: page || window.location.pathname,
  })
}

/**
 * Track custom event
 */
export function trackEvent(eventName: string, parameters?: AnalyticsParameters) {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('event', eventName, parameters)
}

/**
 * Hook to initialize analytics after hydration
 */
export function useAnalytics(config: AnalyticsConfig) {
  useEffect(() => {
    // Defer analytics initialization until after hydration
    const timer = setTimeout(() => {
      initAnalytics(config)
    }, 1000) // Wait 1 second after hydration

    return () => clearTimeout(timer)
  }, [config])
}

// Extend window interface for TypeScript
declare global {
  interface Window {
    dataLayer: GtagArgs[]
    gtag: (...args: GtagArgs) => void
  }
}

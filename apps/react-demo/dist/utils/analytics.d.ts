/**
 * Analytics utility with deferred loading
 * Loads analytics only after hydration to prevent blocking
 */
interface AnalyticsConfig {
  trackingId: string
  debug?: boolean
}
/**
 * Initialize analytics (deferred until after hydration)
 * Call this after component mount or user interaction
 */
export declare function initAnalytics(config: AnalyticsConfig): Promise<void>
/**
 * Track page view
 */
export declare function trackPageView(page?: string): void
/**
 * Track custom event
 */
export declare function trackEvent(eventName: string, parameters?: Record<string, any>): void
/**
 * Hook to initialize analytics after hydration
 */
export declare function useAnalytics(config: AnalyticsConfig): void
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
//# sourceMappingURL=analytics.d.ts.map

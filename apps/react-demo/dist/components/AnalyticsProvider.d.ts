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
export declare function AnalyticsProvider({
  children,
  trackingId,
  enabled,
}: AnalyticsProviderProps): import('react/jsx-runtime').JSX.Element
/**
 * Hook to track events
 */
export declare function useAnalytics(): {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => Promise<void>
  trackPageView: (page?: string) => Promise<void>
}
//# sourceMappingURL=AnalyticsProvider.d.ts.map

import { injectCSSVars } from '@hi-design/tokens'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 앱 시작 시 CSS 변수 주입 (가장 먼저 실행됨)
injectCSSVars('light')

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

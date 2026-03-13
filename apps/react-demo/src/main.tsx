import { injectCSSVars } from '@hi-design/tokens'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 앱 시작 시 CSS 변수 주입 (가장 먼저 실행됨)
injectCSSVars('light')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

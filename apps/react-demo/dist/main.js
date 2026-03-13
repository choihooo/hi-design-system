import { injectCSSVars } from '@hi-design/tokens'
import React from 'react'
import { jsx as _jsx } from 'react/jsx-runtime'
import ReactDOM from 'react-dom/client'
import App from './App'

// 앱 시작 시 CSS 변수 주입 (가장 먼저 실행됨)
injectCSSVars('light')
ReactDOM.createRoot(document.getElementById('root')).render(
  _jsx(React.StrictMode, { children: _jsx(App, {}) }),
)
//# sourceMappingURL=main.js.map

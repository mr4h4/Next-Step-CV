import './i18n'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Styles
import './styles/index.css'

import App from './Pages/App/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

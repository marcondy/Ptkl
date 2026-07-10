import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrivacyApp from './PrivacyApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrivacyApp />
  </StrictMode>,
)

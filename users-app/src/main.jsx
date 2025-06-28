import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserApp } from './UserApp'
import './styles.css'
import { LoginPage } from './auth/pages/LoginPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
)

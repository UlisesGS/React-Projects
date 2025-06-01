import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserApp } from './UserApp'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserApp />
  </StrictMode>,
)

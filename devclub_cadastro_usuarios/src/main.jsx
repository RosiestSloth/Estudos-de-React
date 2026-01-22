import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreateUser from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateUser />
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreateUser from './pages/Home'
import Users from './Components/Home/Users'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateUser />
    <Users />
  </StrictMode>
)

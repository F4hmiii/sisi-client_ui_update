import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './context/themeContext'
import { AuthContextProvider } from './context/authContext'
import { NotifContextProvider } from './context/notifContext'
import { DarkModeContextProvider } from './context/darkModeContext'

createRoot(document.getElementById('main')).render(
  <StrictMode>
    <AuthContextProvider>
      <NotifContextProvider>
        <ThemeContextProvider>
          <DarkModeContextProvider>
            <App />
          </DarkModeContextProvider>
        </ThemeContextProvider>
      </NotifContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)

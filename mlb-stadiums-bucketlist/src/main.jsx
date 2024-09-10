import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import NavigationBar from "./components/navigationBar/NavigationBar";
import App from './App.jsx'
import './index.css'
import './components/stadiumCards/HandleStadiumCards.jsx'
import './components/stadiumCards/stadiumCard.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavigationBar />
    <App />
    </BrowserRouter>
  </StrictMode>,
)

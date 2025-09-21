import React from 'react'; 
import Router from './routes/index'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

export function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context/context'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AuthContextProvider>
        <Router>
          <App style={{ background: 'red' }} />
        </Router>
      </AuthContextProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

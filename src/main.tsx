import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // points to App.tsx in same folder
import './index.css'    // points to index.css in same folder

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

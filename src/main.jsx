import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// main.jsx — entry point of the React app
// ReactDOM.createRoot finds the <div id="root"> in index.html
// and renders the App component inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

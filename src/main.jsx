import React from 'react'
import ReactDOM from 'react-dom/client'
import Photo from './Photo'
import App from './App'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Photo/>
    <App />
    <Footer />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/global.css'
import './pages/Home/style.css'


import { Home } from './pages/Home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

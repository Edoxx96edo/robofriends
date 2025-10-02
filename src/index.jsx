import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'tachyons'
import React from 'react'
import CardList from './Components/cardList'
import App from './Containers/app'
import "./index.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>,
)

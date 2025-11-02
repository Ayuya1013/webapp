import './index.css'   // ← これが必須
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'   // ← ここで App を使う

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />   {/* ← ここで呼び出す */}
  </React.StrictMode>,
)

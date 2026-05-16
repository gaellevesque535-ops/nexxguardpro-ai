import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div
      style={{
        background: '#0f172a',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
        fontFamily: 'Arial',
      }}
    >
      NexxGuard Pro AI 🚀
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
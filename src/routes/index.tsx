import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #07111f, #0f172a, #111827)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '60px 24px',
      }}
    >
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: '80px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '8px 18px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '999px',
            color: '#facc15',
            marginBottom: '28px',
            fontSize: '15px',
          }}
        >
          Lancement bientôt — accès gratuit de base
        </div>

        <h1
          style={{
            fontSize: 'clamp(48px, 8vw, 86px)',
            margin: '0 0 24px',
            fontWeight: 800,
            letterSpacing: '-2px',
          }}
        >
          NexxGuard Pro AI 🚀
        </h1>

        <p
          style={{
            fontSize: 'clamp(20px, 3vw, 30px)',
            maxWidth: '900px',
            margin: '0 auto 40px',
            lineHeight: 1.35,
            color: '#e5e7eb',
          }}
        >
          Moteur IA intelligent pour l’organisation, la productivité, les horaires
          dynamiques, la priorisation SMART et l’assistance en temps réel.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            marginTop: '60px',
          }}
        >
          {[
            'SMART Engine',
            'Horaires dynamiques',
            'Priorisation IA',
            'Assistant temps réel',
          ].map((item) => (
            <div
              key={item}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '22px',
                padding: '28px',
                fontSize: '22px',
                fontWeight: 700,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: '70px',
            color: '#facc15',
            fontSize: '22px',
            fontWeight: 700,
          }}
        >
          Gratuit de base. Premium en préparation.
        </p>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
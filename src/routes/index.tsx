import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f7fbff 0%, #eaf4ff 45%, #ffffff 100%)',
        color: '#061b3a',
        fontFamily: 'Arial, sans-serif',
        padding: '48px 56px',
      }}
    >
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '56px', color: '#0b45a0', margin: 0 }}>
            NexxGuard Pro™ 🚀
          </h1>
          <p style={{ fontSize: '24px', color: '#51657f' }}>
            Optimisez votre quotidien. Naturellement.
          </p>
        </div>

        <div
          style={{
            background: 'white',
            padding: '24px 34px',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(20,80,160,0.14)',
          }}
        >
          <p style={{ margin: 0, color: '#53657d', fontSize: '18px' }}>SMART SCORE</p>
          <strong style={{ fontSize: '38px', color: '#d7a928' }}>92%</strong>
        </div>
      </header>

      <section style={{ textAlign: 'center', marginTop: '190px' }}>
        <h2 style={{ fontSize: '76px', lineHeight: 1.05, margin: 0, color: '#020b1f' }}>
          Nouvelle génération
          <br />
          d’organisation intelligente
        </h2>

        <p
          style={{
            fontSize: '30px',
            color: '#3f5570',
            maxWidth: '1050px',
            margin: '40px auto',
            lineHeight: 1.45,
          }}
        >
          Une plateforme évolutive conçue pour améliorer votre concentration,
          simplifier votre gestion quotidienne et optimiser naturellement vos priorités.
        </p>

        <button
          style={{
            marginTop: '25px',
            padding: '26px 58px',
            border: 'none',
            borderRadius: '24px',
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'white',
            background: 'linear-gradient(135deg, #2e63dc, #071b46)',
            boxShadow: '0 25px 70px rgba(46,99,220,0.35)',
            cursor: 'pointer',
          }}
        >
          Découvrir l’expérience
        </button>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
          marginTop: '130px',
        }}
      >
        {[
          ['01', 'Profil personnalisé', 'Comprendre vos besoins et votre rythme.'],
          ['02', 'Priorités claires', 'Classer ce qui compte vraiment.'],
          ['03', 'Horaire dynamique', 'Structurer vos journées avec fluidité.'],
          ['04', 'Évolution continue', 'Améliorer votre organisation étape par étape.'],
        ].map(([num, title, text]) => (
          <div
            key={num}
            style={{
              background: 'rgba(255,255,255,0.85)',
              padding: '34px',
              borderRadius: '30px',
              boxShadow: '0 20px 70px rgba(30,80,160,0.12)',
              border: '1px solid rgba(255,255,255,0.9)',
            }}
          >
            <strong style={{ fontSize: '22px', color: '#d7a928' }}>{num}</strong>
            <h3 style={{ fontSize: '28px', color: '#0b45a0' }}>{title}</h3>
            <p style={{ fontSize: '20px', color: '#52657b', lineHeight: 1.4 }}>{text}</p>
          </div>
        ))}
      </section>

      <section
        style={{
          marginTop: '90px',
          background: '#071b46',
          color: 'white',
          borderRadius: '38px',
          padding: '55px',
          boxShadow: '0 30px 90px rgba(7,27,70,0.25)',
        }}
      >
        <h2 style={{ fontSize: '44px', marginTop: 0 }}>
          Tableau de bord évolutif
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '35px',
          }}
        >
          {[
            ['Focus actif', 'Organisation en cours'],
            ['Temps optimisé', '+3h estimées'],
            ['Progression', 'Phase visuelle active'],
          ].map(([title, value]) => (
            <div
              key={title}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '26px',
                padding: '30px',
              }}
            >
              <p style={{ fontSize: '20px', color: '#c9d8ff' }}>{title}</p>
              <strong style={{ fontSize: '34px', color: '#ffffff' }}>{value}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [profile, setProfile] = useState('Étudiant')
  const [goal, setGoal] = useState('Organisation')
  const [energy, setEnergy] = useState(70)
  const [focus, setFocus] = useState(75)

  const getRecommendation = () => {
    if (profile === 'Étudiant') {
      return '2 blocs de 45 minutes + révision active.'
    }

    if (profile === 'Entrepreneur') {
      return 'Prioriser les tâches à impact élevé et automatiser.'
    }

    if (profile === 'Employé') {
      return 'Créer des blocs focus sans interruption.'
    }

    return 'Optimisation quotidienne intelligente.'
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #f5f9ff 0%, #e7f1ff 50%, #ffffff 100%)',
        color: '#071b3a',
        fontFamily: 'Arial, sans-serif',
        paddingBottom: '120px',
      }}
    >
      {/* HEADER */}

      <section
        style={{
          padding: '50px 70px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '72px',
              margin: 0,
              fontWeight: 900,
              color: '#1242a2',
            }}
          >
            NexxGuard Pro™
          </h1>

          <p
            style={{
              fontSize: '26px',
              color: '#51698f',
              marginTop: '20px',
            }}
          >
            Optimisez votre quotidien. Naturellement.
          </p>
        </div>

        <div
          style={{
            background: 'white',
            borderRadius: '30px',
            padding: '30px',
            width: '240px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
          }}
        >
          <div
            style={{
              color: '#5f7194',
              fontSize: '18px',
              marginBottom: '15px',
            }}
          >
            SMART SCORE
          </div>

          <div
            style={{
              color: '#d1a318',
              fontSize: '64px',
              fontWeight: 900,
            }}
          >
            92%
          </div>
        </div>
      </section>

      {/* HERO */}

      <section
        style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '0 40px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '14px 28px',
            background: 'white',
            borderRadius: '999px',
            color: '#1653c7',
            fontWeight: 700,
            marginBottom: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
          }}
        >
          Système évolutif actif
        </div>

        <h2
          style={{
            fontSize: '92px',
            lineHeight: 1,
            maxWidth: '1500px',
            margin: '0 auto',
            fontWeight: 900,
          }}
        >
          Nouvelle génération
          <br />
          d’organisation intelligente
        </h2>

        <p
          style={{
            maxWidth: '1200px',
            margin: '50px auto',
            fontSize: '34px',
            lineHeight: 1.5,
            color: '#425d86',
          }}
        >
          Une plateforme évolutive conçue pour améliorer votre concentration,
          simplifier votre gestion quotidienne et optimiser naturellement vos
          priorités.
        </p>

        <button
          style={{
            padding: '30px 80px',
            borderRadius: '30px',
            border: 'none',
            fontSize: '36px',
            fontWeight: 800,
            color: 'white',
            cursor: 'pointer',
            background:
              'linear-gradient(90deg,#2762ff 0%, #132d6b 100%)',
            boxShadow: '0 20px 60px rgba(39,98,255,0.35)',
          }}
        >
          Découvrir l’expérience
        </button>
      </section>

      {/* DASHBOARD */}

      <section
        style={{
          marginTop: '120px',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: '30px',
        }}
      >
        {/* PROFIL */}

        <div
          style={{
            background: 'white',
            borderRadius: '35px',
            padding: '40px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
          }}
        >
          <h3 style={{ fontSize: '26px' }}>Profil utilisateur</h3>

          <select
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            style={{
              width: '100%',
              padding: '20px',
              fontSize: '22px',
              borderRadius: '20px',
              marginTop: '20px',
            }}
          >
            <option>Étudiant</option>
            <option>Entrepreneur</option>
            <option>Employé</option>
            <option>Créateur</option>
          </select>
        </div>

        {/* OBJECTIF */}

        <div
          style={{
            background: 'white',
            borderRadius: '35px',
            padding: '40px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
          }}
        >
          <h3 style={{ fontSize: '26px' }}>Objectif principal</h3>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            style={{
              width: '100%',
              padding: '20px',
              fontSize: '22px',
              borderRadius: '20px',
              marginTop: '20px',
            }}
          >
            <option>Organisation</option>
            <option>Concentration</option>
            <option>Performance</option>
            <option>Productivité</option>
          </select>
        </div>

        {/* ENERGIE */}

        <div
          style={{
            background: 'white',
            borderRadius: '35px',
            padding: '40px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
          }}
        >
          <h3 style={{ fontSize: '26px' }}>
            Énergie : {energy}%
          </h3>

          <input
            type="range"
            min="0"
            max="100"
            value={energy}
            onChange={(e) => setEnergy(Number(e.target.value))}
            style={{
              width: '100%',
              marginTop: '30px',
            }}
          />
        </div>

        {/* FOCUS */}

        <div
          style={{
            background: 'white',
            borderRadius: '35px',
            padding: '40px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
          }}
        >
          <h3 style={{ fontSize: '26px' }}>
            Focus : {focus}%
          </h3>

          <input
            type="range"
            min="0"
            max="100"
            value={focus}
            onChange={(e) => setFocus(Number(e.target.value))}
            style={{
              width: '100%',
              marginTop: '30px',
            }}
          />
        </div>
      </section>

      {/* ANALYSE */}

      <section
        style={{
          marginTop: '80px',
          padding: '0 40px',
        }}
      >
        <div
          style={{
            background:
              'linear-gradient(135deg,#1952b1 0%, #0f2f70 100%)',
            color: 'white',
            borderRadius: '40px',
            padding: '60px',
            boxShadow: '0 25px 80px rgba(0,0,0,0.15)',
          }}
        >
          <h2
            style={{
              fontSize: '56px',
              marginBottom: '40px',
            }}
          >
            Analyse personnalisée
          </h2>

          <p style={{ fontSize: '30px' }}>
            <strong>Profil :</strong> {profile}
          </p>

          <p style={{ fontSize: '30px' }}>
            <strong>Objectif :</strong> {goal}
          </p>

          <p style={{ fontSize: '30px' }}>
            <strong>Recommandation :</strong>{' '}
            {getRecommendation()}
          </p>

          <p style={{ fontSize: '30px' }}>
            <strong>État actuel :</strong>{' '}
            {energy > 70
              ? 'Performance élevée'
              : 'Optimisation recommandée'}
          </p>
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
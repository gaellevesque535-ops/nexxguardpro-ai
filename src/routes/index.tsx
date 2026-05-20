import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [profile, setProfile] = useState('Étudiant')
  const [goal, setGoal] = useState('Organisation')
  const [energy, setEnergy] = useState(72)
  const [focus, setFocus] = useState(81)

  const recommendation = () => {
    if (profile === 'Étudiant') {
      return 'Plan conseillé : 2 blocs de 45 min + révision active.'
    }

    if (profile === 'Commerçant') {
      return 'Plan conseillé : priorisation clients + optimisation horaire.'
    }

    if (profile === 'Employé') {
      return 'Plan conseillé : gestion focus + réduction surcharge mentale.'
    }

    return 'Optimisation personnalisée active.'
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg,#f5f9ff 0%,#e9f1ff 40%,#ffffff 100%)',
        color: '#061b3a',
        fontFamily: 'Arial, sans-serif',
        padding: '40px'
      }}
    >
      {/* HEADER */}

      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px'
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '64px',
              margin: 0,
              color: '#0b46a9'
            }}
          >
            NexxGuard Pro™
          </h1>

          <p
            style={{
              fontSize: '24px',
              opacity: 0.75
            }}
          >
            Optimisez votre quotidien. Naturellement.
          </p>
        </div>

        <div
          style={{
            background: 'white',
            padding: '25px',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
          }}
        >
          <div
            style={{
              fontSize: '20px',
              marginBottom: '10px'
            }}
          >
            SMART SCORE
          </div>

          <div
            style={{
              fontSize: '58px',
              fontWeight: 'bold',
              color: '#d4a514'
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
          marginBottom: '70px'
        }}
      >
        <div
          style={{
            display: 'inline-block',
            background: 'white',
            padding: '12px 28px',
            borderRadius: '999px',
            marginBottom: '25px',
            color: '#0b46a9',
            fontWeight: 'bold',
            boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
          }}
        >
          Expérience dynamique active
        </div>

        <h2
          style={{
            fontSize: '92px',
            lineHeight: 1,
            marginBottom: '30px'
          }}
        >
          Nouvelle génération
          <br />
          d’organisation intelligente
        </h2>

        <p
          style={{
            fontSize: '30px',
            maxWidth: '1200px',
            margin: 'auto',
            lineHeight: 1.5,
            opacity: 0.8
          }}
        >
          Une plateforme évolutive conçue pour améliorer votre concentration,
          simplifier votre gestion quotidienne et optimiser naturellement vos
          priorités.
        </p>
      </section>

      {/* USER ANALYTICS */}

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '25px',
          marginBottom: '50px'
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '28px'
          }}
        >
          <h3>Profil utilisateur</h3>

          <select
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '18px',
              fontSize: '18px'
            }}
          >
            <option>Étudiant</option>
            <option>Commerçant</option>
            <option>Employé</option>
          </select>
        </div>

        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '28px'
          }}
        >
          <h3>Objectif principal</h3>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '18px',
              fontSize: '18px'
            }}
          >
            <option>Organisation</option>
            <option>Concentration</option>
            <option>Productivité</option>
            <option>Routine</option>
          </select>
        </div>

        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '28px'
          }}
        >
          <h3>Énergie : {energy}%</h3>

          <input
            type="range"
            min="0"
            max="100"
            value={energy}
            onChange={(e) => setEnergy(Number(e.target.value))}
            style={{
              width: '100%'
            }}
          />
        </div>

        <div
          style={{
            background: 'white',
            padding: '30px',
            borderRadius: '28px'
          }}
        >
          <h3>Focus : {focus}%</h3>

          <input
            type="range"
            min="0"
            max="100"
            value={focus}
            onChange={(e) => setFocus(Number(e.target.value))}
            style={{
              width: '100%'
            }}
          />
        </div>
      </section>

      {/* ANALYSE */}

      <section
        style={{
          background:
            'linear-gradient(135deg,#0b46a9 0%,#123d91 50%,#0a214d 100%)',
          color: 'white',
          padding: '50px',
          borderRadius: '35px',
          marginBottom: '50px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
        }}
      >
        <h2
          style={{
            fontSize: '52px',
            marginBottom: '25px'
          }}
        >
          Analyse personnalisée
        </h2>

        <p style={{ fontSize: '28px' }}>
          <strong>Profil :</strong> {profile}
        </p>

        <p style={{ fontSize: '28px' }}>
          <strong>Objectif :</strong> {goal}
        </p>

        <p style={{ fontSize: '28px' }}>
          <strong>Énergie :</strong> {energy}%
        </p>

        <p style={{ fontSize: '28px' }}>
          <strong>Focus :</strong> {focus}%
        </p>

        <p
          style={{
            marginTop: '35px',
            fontSize: '30px',
            color: '#ffd54a'
          }}
        >
          {recommendation()}
        </p>
      </section>

      {/* CARDS */}

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '25px'
        }}
      >
        {[
          ['SMART Score', '92%'],
          ['Focus actif', 'En cours'],
          ['Temps gagné', '+3h'],
          ['Assistant', 'Actif']
        ].map(([title, value]) => (
          <div
            key={title}
            style={{
              background: 'white',
              padding: '35px',
              borderRadius: '28px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.06)'
            }}
          >
            <h3
              style={{
                fontSize: '26px',
                marginBottom: '30px'
              }}
            >
              {title}
            </h3>

            <div
              style={{
                fontSize: '58px',
                fontWeight: 'bold',
                color: '#3561ff'
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
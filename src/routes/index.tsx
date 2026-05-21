import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [profil, setProfil] = useState('Étudiant')
  const [objectif, setObjectif] = useState('Organisation')
  const [energie, setEnergie] = useState(70)
  const [focus, setFocus] = useState(75)
  const [interet, setInteret] = useState('Réussir mes tâches importantes')

  const score = useMemo(() => {
    return Math.round((energie + focus) / 2)
  }, [energie, focus])

  const recommandation = useMemo(() => {
    if (profil === 'Étudiant') {
      return 'Plan conseillé : 2 blocs de 45 minutes, révision active et pause courte.'
    }
    if (profil === 'Commerçant') {
      return 'Plan conseillé : prioriser clients, ventes, inventaire et suivi quotidien.'
    }
    if (profil === 'Employé') {
      return 'Plan conseillé : organiser les tâches urgentes, limiter les distractions et suivre les objectifs.'
    }
    return 'Plan conseillé : clarifier les priorités et avancer par étapes simples.'
  }, [profil])

  const missions = [
    'Choisir votre profil',
    'Définir votre objectif',
    'Évaluer votre énergie',
    'Optimiser votre horaire',
    'Recevoir une recommandation personnalisée'
  ]

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f7fbff 0%, #eaf4ff 45%, #ffffff 100%)',
        color: '#061b3a',
        fontFamily: 'Arial, sans-serif',
        padding: '42px'
      }}
    >
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '56px', color: '#0b469e', margin: 0 }}>
            NexxGuard Pro™
          </h1>
          <p style={{ fontSize: '24px', color: '#536b89' }}>
            Optimisez votre quotidien. Naturellement.
          </p>
        </div>

        <div
          style={{
            background: 'white',
            padding: '28px 42px',
            borderRadius: '28px',
            boxShadow: '0 30px 80px rgba(21, 92, 180, 0.18)'
          }}
        >
          <div style={{ fontSize: '20px', color: '#536b89' }}>SMART SCORE</div>
          <strong style={{ fontSize: '44px', color: '#d5a619' }}>{score}%</strong>
        </div>
      </header>

      <section style={{ textAlign: 'center', marginTop: '110px' }}>
        <div
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#0b469e',
            padding: '16px 44px',
            borderRadius: '999px',
            fontWeight: 'bold',
            fontSize: '22px',
            boxShadow: '0 20px 70px rgba(21, 92, 180, 0.16)'
          }}
        >
          Dashboard intelligent actif
        </div>

        <h2 style={{ fontSize: '76px', lineHeight: 1.05, marginTop: '70px' }}>
          Nouvelle génération <br />
          d’organisation intelligente
        </h2>

        <p style={{ fontSize: '26px', color: '#405878' }}>
          Analyse personnalisée, priorisation, questions de profil et recommandations dynamiques.
        </p>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '34px',
          marginTop: '90px'
        }}
      >
        <Card title="Profil utilisateur">
          <select value={profil} onChange={(e) => setProfil(e.target.value)} style={inputStyle}>
            <option>Étudiant</option>
            <option>Commerçant</option>
            <option>Employé</option>
            <option>Freelance</option>
          </select>
        </Card>

        <Card title="Objectif principal">
          <select value={objectif} onChange={(e) => setObjectif(e.target.value)} style={inputStyle}>
            <option>Organisation</option>
            <option>Productivité</option>
            <option>Études</option>
            <option>Travail</option>
            <option>Gestion client</option>
          </select>
        </Card>

        <Card title={`Énergie : ${energie}%`}>
          <input
            type="range"
            min="0"
            max="100"
            value={energie}
            onChange={(e) => setEnergie(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </Card>

        <Card title={`Focus : ${focus}%`}>
          <input
            type="range"
            min="0"
            max="100"
            value={focus}
            onChange={(e) => setFocus(Number(e.target.value))}
            style={{ width: '100%' }}
          />
        </Card>
      </section>

      <section
        style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '34px'
        }}
      >
        <div
          style={{
            background: '#0f4fa8',
            color: 'white',
            padding: '50px',
            borderRadius: '34px'
          }}
        >
          <h2 style={{ fontSize: '42px' }}>Analyse personnalisée</h2>
          <p style={{ fontSize: '26px' }}><strong>Profil :</strong> {profil}</p>
          <p style={{ fontSize: '26px' }}><strong>Objectif :</strong> {objectif}</p>
          <p style={{ fontSize: '26px' }}><strong>Intérêt :</strong> {interet}</p>
          <p style={{ fontSize: '26px' }}><strong>Recommandation :</strong> {recommandation}</p>
        </div>

        <div
          style={{
            background: 'white',
            padding: '50px',
            borderRadius: '34px',
            boxShadow: '0 30px 80px rgba(21, 92, 180, 0.14)'
          }}
        >
          <h2 style={{ fontSize: '38px', color: '#0b469e' }}>Questions de profil</h2>

          <label style={labelStyle}>Quel est votre intérêt principal ?</label>
          <input
            value={interet}
            onChange={(e) => setInteret(e.target.value)}
            style={inputStyle}
          />

          <div style={{ marginTop: '34px' }}>
            <h3 style={{ fontSize: '28px' }}>Missions dynamiques</h3>
            {missions.map((mission, index) => (
              <div
                key={mission}
                style={{
                  padding: '16px 0',
                  borderBottom: '1px solid #dce8f8',
                  fontSize: '22px'
                }}
              >
                ✅ Étape {index + 1} — {mission}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, #123c88, #2563eb)',
          color: 'white',
          padding: '46px',
          borderRadius: '34px'
        }}
      >
        <h2 style={{ fontSize: '40px' }}>Processus d’accès aux informations pertinentes</h2>
        <p style={{ fontSize: '24px' }}>
          Le tableau de bord collecte les choix du profil, l’objectif, l’énergie, le focus et les intérêts.
          Ensuite, il génère une lecture personnalisée pour guider l’organisation, les priorités et les prochaines actions.
        </p>
      </section>
    </main>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'white',
        padding: '42px',
        borderRadius: '34px',
        minHeight: '180px',
        boxShadow: '0 30px 80px rgba(21, 92, 180, 0.12)'
      }}
    >
      <h3 style={{ fontSize: '26px', marginBottom: '28px' }}>{title}</h3>
      {children}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '20px',
  borderRadius: '18px',
  border: '1px solid #c9d7ea',
  fontSize: '22px'
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '22px',
  marginBottom: '14px',
  fontWeight: 'bold'
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
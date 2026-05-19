import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [profil, setProfil] = useState('Étudiant')
  const [objectif, setObjectif] = useState('Organisation')
  const [energie, setEnergie] = useState(70)
  const [focus, setFocus] = useState(75)

  const score = useMemo(() => {
    return Math.min(99, Math.round((energie + focus + 90) / 3))
  }, [energie, focus])

  const conseil = useMemo(() => {
    if (profil === 'Étudiant') return 'Plan conseillé : 2 blocs de 45 minutes + révision active.'
    if (profil === 'Commerçant') return 'Plan conseillé : clients, ventes, suivis, puis administration.'
    if (profil === 'Employé') return 'Plan conseillé : priorités claires + bloc focus sans distraction.'
    return 'Plan conseillé : objectifs simples, actions courtes et progression quotidienne.'
  }, [profil])

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.logo}>NexxGuard Pro™</h1>
          <p style={styles.tagline}>Optimisez votre quotidien. Naturellement.</p>
        </div>

        <div style={styles.scoreBox}>
          <span>SMART SCORE</span>
          <strong>{score}%</strong>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.badge}>Dashboard intelligent actif</div>
        <h2 style={styles.title}>Organisation évolutive personnalisée</h2>
        <p style={styles.subtitle}>
          Profilage, recommandations, missions dynamiques et priorisation en temps réel.
        </p>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <h3>Profil utilisateur</h3>
          <select style={styles.input} value={profil} onChange={(e) => setProfil(e.target.value)}>
            <option>Étudiant</option>
            <option>Commerçant</option>
            <option>Employé</option>
            <option>Entrepreneur</option>
          </select>
        </div>

        <div style={styles.card}>
          <h3>Objectif principal</h3>
          <select style={styles.input} value={objectif} onChange={(e) => setObjectif(e.target.value)}>
            <option>Organisation</option>
            <option>Concentration</option>
            <option>Gestion du temps</option>
            <option>Productivité</option>
            <option>Ventes</option>
          </select>
        </div>

        <div style={styles.card}>
          <h3>Énergie : {energie}%</h3>
          <input type="range" min="0" max="100" value={energie} onChange={(e) => setEnergie(Number(e.target.value))} />
        </div>

        <div style={styles.card}>
          <h3>Focus : {focus}%</h3>
          <input type="range" min="0" max="100" value={focus} onChange={(e) => setFocus(Number(e.target.value))} />
        </div>
      </section>

      <section style={styles.analysis}>
        <h2>Analyse personnalisée</h2>
        <p><strong>Profil :</strong> {profil}</p>
        <p><strong>Objectif :</strong> {objectif}</p>
        <p><strong>Recommandation :</strong> {conseil}</p>
      </section>

      <section style={styles.grid}>
        {['Définir 3 priorités', 'Créer un bloc focus', 'Réduire un chronophage', 'Faire un suivi'].map((m, i) => (
          <div style={styles.mission} key={m}>
            <span>Mission {i + 1}</span>
            <strong>{m}</strong>
          </div>
        ))}
      </section>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    padding: '48px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg,#f7fbff,#eaf4ff,#ffffff)',
    color: '#061b3a',
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  logo: { fontSize: 56, color: '#0b4aa2', margin: 0 },
  tagline: { fontSize: 24, color: '#526b8c' },
  scoreBox: {
    background: 'white',
    padding: '28px 38px',
    borderRadius: 28,
    boxShadow: '0 25px 60px rgba(20,80,160,.16)',
    color: '#526b8c',
  },
  hero: { textAlign: 'center', padding: '80px 20px 50px' },
  badge: {
    display: 'inline-block',
    background: 'white',
    color: '#0b4aa2',
    padding: '14px 34px',
    borderRadius: 999,
    fontWeight: 800,
  },
  title: { fontSize: 70, lineHeight: 1.05 },
  subtitle: { fontSize: 28, color: '#405a7a' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
    gap: 28,
    marginTop: 38,
  },
  card: {
    background: 'white',
    borderRadius: 28,
    padding: 30,
    boxShadow: '0 25px 60px rgba(20,80,160,.12)',
  },
  input: {
    width: '100%',
    padding: 16,
    borderRadius: 14,
    border: '1px solid #cfe1f6',
    fontSize: 18,
  },
  analysis: {
    marginTop: 40,
    padding: 36,
    borderRadius: 30,
    background: '#0b4aa2',
    color: 'white',
    fontSize: 20,
  },
  mission: {
    background: 'white',
    borderRadius: 24,
    padding: 26,
    boxShadow: '0 20px 50px rgba(20,80,160,.12)',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
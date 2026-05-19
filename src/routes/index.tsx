import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'

type Profile = 'Étudiant' | 'Employé' | 'Commerçant' | 'Entrepreneur' | 'Créatif'

function App() {
  const [profile, setProfile] = useState<Profile>('Étudiant')
  const [goal, setGoal] = useState('Mieux organiser mes journées')
  const [energy, setEnergy] = useState(70)
  const [time, setTime] = useState(2)
  const [interest, setInterest] = useState('Productivité')
  const [focus, setFocus] = useState(75)

  const smartScore = useMemo(() => {
    return Math.min(99, Math.round((energy + focus + time * 10) / 3))
  }, [energy, focus, time])

  const recommendation = useMemo(() => {
    if (profile === 'Étudiant') return 'Priorise 2 blocs de 45 minutes avec une pause active.'
    if (profile === 'Employé') return 'Classe tes tâches par urgence et garde 1 bloc focus sans distraction.'
    if (profile === 'Commerçant') return 'Commence par clients, ventes, suivis, puis administration.'
    if (profile === 'Entrepreneur') return 'Travaille en 3 phases : acquisition, livraison, amélioration.'
    return 'Transforme tes idées en petites missions rapides et mesurables.'
  }, [profile])

  const missions = [
    'Définir 3 priorités du jour',
    'Créer un bloc horaire focus',
    'Éliminer 1 chronophage',
    'Faire une mini-révision de progression',
  ]

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.logo}>NexxGuard Pro™</h1>
          <p style={styles.tagline}>Optimisez votre quotidien. Naturellement.</p>
        </div>

        <div style={styles.scoreBox}>
          <span style={styles.small}>SMART SCORE</span>
          <strong style={styles.gold}>{smartScore}%</strong>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.badge}>Phase interactive active</div>
        <h2 style={styles.title}>Dashboard intelligent d’organisation</h2>
        <p style={styles.subtitle}>
          Profilage, recommandations, missions dynamiques, priorisation et optimisation en temps réel.
        </p>
      </section>

      <section style={styles.grid}>
        <Card title="Profil" value={profile} note="Analyse personnalisée" />
        <Card title="Focus actif" value={`${focus}%`} note="Concentration estimée" />
        <Card title="Temps disponible" value={`${time}h`} note="Planification du jour" />
        <Card title="Intérêt" value={interest} note="Orientation principale" />
      </section>

      <section style={styles.panel}>
        <h3 style={styles.sectionTitle}>Questionnaire rapide</h3>

        <label style={styles.label}>Votre profil</label>
        <select style={styles.input} value={profile} onChange={(e) => setProfile(e.target.value as Profile)}>
          <option>Étudiant</option>
          <option>Employé</option>
          <option>Commerçant</option>
          <option>Entrepreneur</option>
          <option>Créatif</option>
        </select>

        <label style={styles.label}>Votre objectif principal</label>
        <input style={styles.input} value={goal} onChange={(e) => setGoal(e.target.value)} />

        <label style={styles.label}>Votre intérêt</label>
        <select style={styles.input} value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option>Productivité</option>
          <option>Études</option>
          <option>Ventes</option>
          <option>Routine</option>
          <option>Organisation</option>
          <option>Créativité</option>
        </select>

        <label style={styles.label}>Énergie : {energy}%</label>
        <input type="range" min="10" max="100" value={energy} onChange={(e) => setEnergy(Number(e.target.value))} />

        <label style={styles.label}>Focus : {focus}%</label>
        <input type="range" min="10" max="100" value={focus} onChange={(e) => setFocus(Number(e.target.value))} />

        <label style={styles.label}>Temps disponible : {time}h</label>
        <input type="range" min="1" max="8" value={time} onChange={(e) => setTime(Number(e.target.value))} />
      </section>

      <section style={styles.result}>
        <h3 style={styles.sectionTitle}>Analyse NexxGuard</h3>
        <p><strong>Objectif :</strong> {goal}</p>
        <p><strong>Recommandation :</strong> {recommendation}</p>
        <p><strong>Action immédiate :</strong> commence par une tâche courte de 20 minutes.</p>
      </section>

      <section style={styles.grid}>
        {missions.map((m, i) => (
          <div key={m} style={styles.mission}>
            <span style={styles.level}>Mission {i + 1}</span>
            <strong>{m}</strong>
          </div>
        ))}
      </section>

      <section style={styles.matrix}>
        <h3 style={styles.sectionTitle}>Matrice de priorité</h3>
        <div style={styles.matrixGrid}>
          <Box title="Important + urgent" text="À faire maintenant" />
          <Box title="Important + non urgent" text="À planifier" />
          <Box title="Urgent + moins important" text="À limiter ou déléguer" />
          <Box title="Faible priorité" text="À réduire" />
        </div>
      </section>
    </main>
  )
}

function Card({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <div style={styles.card}>
      <span style={styles.cardTitle}>{title}</span>
      <strong style={styles.cardValue}>{value}</strong>
      <p style={styles.note}>{note}</p>
    </div>
  )
}

function Box({ title, text }: { title: string; text: string }) {
  return (
    <div style={styles.box}>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    padding: '44px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #f8fbff 0%, #eaf4ff 48%, #ffffff 100%)',
    color: '#061b3a',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 24,
  },
  logo: {
    fontSize: 58,
    margin: 0,
    color: '#0b4aa2',
  },
  tagline: {
    fontSize: 24,
    color: '#526b8c',
  },
  scoreBox: {
    background: 'white',
    padding: '28px 38px',
    borderRadius: 28,
    boxShadow: '0 25px 60px rgba(20, 80, 160, .16)',
  },
  small: {
    display: 'block',
    color: '#526b8c',
    fontSize: 18,
  },
  gold: {
    color: '#d7a928',
    fontSize: 44,
  },
  hero: {
    textAlign: 'center',
    padding: '90px 20px 50px',
  },
  badge: {
    display: 'inline-block',
    background: 'white',
    color: '#0b4aa2',
    padding: '14px 34px',
    borderRadius: 999,
    fontWeight: 800,
    boxShadow: '0 18px 40px rgba(20, 80, 160, .12)',
  },
  title: {
    fontSize: 72,
    lineHeight: 1.05,
    margin: '35px auto 20px',
    maxWidth: 1100,
  },
  subtitle: {
    fontSize: 28,
    color: '#405a7a',
    maxWidth: 1100,
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 28,
    marginTop: 38,
  },
  card: {
    background: 'white',
    borderRadius: 32,
    padding: 34,
    minHeight: 170,
    boxShadow: '0 25px 65px rgba(20, 80, 160, .12)',
  },
  cardTitle: {
    color: '#0b4aa2',
    fontWeight: 800,
    fontSize: 24,
  },
  cardValue: {
    display: 'block',
    marginTop: 28,
    fontSize: 46,
    color: '#3267e8',
  },
  note: {
    color: '#6a7890',
    fontSize: 18,
  },
  panel: {
    marginTop: 48,
    background: 'white',
    padding: 36,
    borderRadius: 34,
    boxShadow: '0 25px 65px rgba(20, 80, 160, .12)',
  },
  sectionTitle: {
    color: '#0b4aa2',
    fontSize: 32,
    marginTop: 0,
  },
  label: {
    display: 'block',
    marginTop: 20,
    marginBottom: 8,
    fontWeight: 700,
    color: '#0b2d5f',
  },
  input: {
    width: '100%',
    padding: '16px 18px',
    borderRadius: 16,
    border: '1px solid #cfe1f6',
    fontSize: 18,
  },
  result: {
    marginTop: 34,
    padding: 36,
    borderRadius: 34,
    background: 'linear-gradient(135deg, #0b4aa2, #18376f)',
    color: 'white',
    fontSize: 20,
  },
  mission: {
    background: 'white',
    borderRadius: 28,
    padding: 28,
    boxShadow: '0 20px 50px rgba(20, 80, 160, .12)',
  },
  level: {
    display: 'block',
    color: '#d7a928',
    fontWeight: 800,
    marginBottom: 12,
  },
  matrix: {
    marginTop: 48,
  },
  matrixGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 24,
  },
  box: {
    background: '#ffffff',
    borderLeft: '8px solid #d7a928',
    borderRadius: 24,
    padding: 26,
    boxShadow: '0 20px 50px rgba(20, 80, 160, .1)',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
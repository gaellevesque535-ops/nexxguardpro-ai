import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [energy, setEnergy] = useState(75)
  const [focus, setFocus] = useState(68)

  const [goal, setGoal] = useState('Organisation')
  const [workStyle, setWorkStyle] = useState('Structuré')
  const [difficulty, setDifficulty] = useState('Moyenne')

  const smartScore = useMemo(() => {
    let base = 70

    if (goal === 'Performance') base += 8
    if (goal === 'Concentration') base += 5

    if (workStyle === 'Structuré') base += 6
    if (workStyle === 'Créatif') base += 3

    if (difficulty === 'Faible') base += 8
    if (difficulty === 'Élevée') base -= 5

    base += energy * 0.08
    base += focus * 0.08

    return Math.min(99, Math.round(base))
  }, [goal, workStyle, difficulty, energy, focus])

  const recommendation = useMemo(() => {
    if (focus < 50) {
      return 'Réduction des distractions recommandée.'
    }

    if (energy < 45) {
      return 'Bloc court conseillé avant une tâche importante.'
    }

    if (goal === 'Performance') {
      return 'Fenêtre optimale détectée pour une tâche prioritaire.'
    }

    if (goal === 'Concentration') {
      return 'Mode focus prolongé recommandé.'
    }

    return 'Organisation quotidienne optimisée.'
  }, [goal, focus, energy])

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.logo}>NexxGuard Pro™</h1>
          <p style={styles.slogan}>
            Optimisez votre quotidien. Naturellement.
          </p>
        </div>

        <div style={styles.scoreCard}>
          <span style={styles.scoreLabel}>SMART SCORE</span>
          <strong style={styles.score}>{smartScore}%</strong>
        </div>
      </header>

      <section style={styles.hero}>
        <span style={styles.badge}>Phase intelligente active</span>

        <h2 style={styles.title}>
          Nouvelle génération
          <br />
          d’organisation évolutive
        </h2>

        <p style={styles.subtitle}>
          Analyse comportementale, adaptation du rythme,
          optimisation dynamique des priorités et assistance active.
        </p>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <h3>Énergie actuelle</h3>
          <strong style={styles.value}>{energy}%</strong>

          <input
            type="range"
            min="0"
            max="100"
            value={energy}
            onChange={(e) => setEnergy(Number(e.target.value))}
          />
        </div>

        <div style={styles.card}>
          <h3>Concentration</h3>
          <strong style={styles.value}>{focus}%</strong>

          <input
            type="range"
            min="0"
            max="100"
            value={focus}
            onChange={(e) => setFocus(Number(e.target.value))}
          />
        </div>

        <div style={styles.card}>
          <h3>Analyse active</h3>

          <p style={styles.analysis}>
            {recommendation}
          </p>
        </div>

        <div style={styles.card}>
          <h3>Mode système</h3>

          <strong style={styles.active}>Actif</strong>

          <p style={styles.small}>
            Optimisation en temps réel.
          </p>
        </div>
      </section>

      <section style={styles.panel}>
        <div style={styles.panelHeader}>
          <h2>Profil utilisateur</h2>
          <span style={styles.live}>Analyse en direct</span>
        </div>

        <div style={styles.questionGrid}>
          <div style={styles.questionCard}>
            <label>Objectif principal</label>

            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              style={styles.select}
            >
              <option>Organisation</option>
              <option>Performance</option>
              <option>Concentration</option>
              <option>Gestion du temps</option>
            </select>
          </div>

          <div style={styles.questionCard}>
            <label>Style de travail</label>

            <select
              value={workStyle}
              onChange={(e) => setWorkStyle(e.target.value)}
              style={styles.select}
            >
              <option>Structuré</option>
              <option>Créatif</option>
              <option>Rapide</option>
              <option>Flexible</option>
            </select>
          </div>

          <div style={styles.questionCard}>
            <label>Niveau de difficulté</label>

            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              style={styles.select}
            >
              <option>Faible</option>
              <option>Moyenne</option>
              <option>Élevée</option>
            </select>
          </div>
        </div>
      </section>

      <section style={styles.bottomGrid}>
        <div style={styles.bigCard}>
          <h3>Optimisation détectée</h3>

          <p>
            Le système ajuste automatiquement les recommandations
            selon votre concentration, votre énergie et votre profil.
          </p>
        </div>

        <div style={styles.bigCard}>
          <h3>Évolution du système</h3>

          <ul style={styles.list}>
            <li>✔ Priorisation intelligente</li>
            <li>✔ Gestion dynamique du temps</li>
            <li>✔ Adaptation progressive</li>
            <li>✔ Analyse comportementale</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    padding: '50px',
    background:
      'linear-gradient(135deg,#f7fbff 0%,#e8f3ff 45%,#ffffff 100%)',
    fontFamily: 'Arial, sans-serif',
    color: '#071a3d',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  logo: {
    fontSize: '64px',
    margin: 0,
    color: '#0b46a0',
    fontWeight: 900,
  },

  slogan: {
    fontSize: '22px',
    color: '#5b7191',
  },

  scoreCard: {
    background: '#ffffff',
    borderRadius: '30px',
    padding: '28px 40px',
    boxShadow: '0 20px 60px rgba(40,90,180,0.15)',
  },

  scoreLabel: {
    display: 'block',
    color: '#5c6f8d',
    marginBottom: '10px',
  },

  score: {
    fontSize: '54px',
    color: '#d4a61f',
    fontWeight: 900,
  },

  hero: {
    textAlign: 'center',
    marginTop: '90px',
  },

  badge: {
    background: '#ffffff',
    padding: '14px 34px',
    borderRadius: '999px',
    fontWeight: 700,
    color: '#0b46a0',
    boxShadow: '0 20px 50px rgba(40,90,180,0.12)',
  },

  title: {
    fontSize: '88px',
    lineHeight: 1,
    marginBottom: '20px',
  },

  subtitle: {
    maxWidth: '1000px',
    margin: '0 auto',
    fontSize: '28px',
    color: '#4f6685',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: '25px',
    marginTop: '80px',
  },

  card: {
    background: '#ffffff',
    borderRadius: '28px',
    padding: '30px',
    boxShadow: '0 20px 60px rgba(40,90,180,0.10)',
  },

  value: {
    display: 'block',
    fontSize: '50px',
    color: '#2f66db',
    margin: '15px 0',
  },

  analysis: {
    fontSize: '22px',
    color: '#405b7d',
  },

  active: {
    color: '#2f66db',
    fontSize: '44px',
  },

  small: {
    color: '#627792',
  },

  panel: {
    marginTop: '50px',
    background: '#ffffff',
    borderRadius: '30px',
    padding: '35px',
    boxShadow: '0 20px 70px rgba(40,90,180,0.10)',
  },

  panelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  live: {
    color: '#2f66db',
    fontWeight: 700,
  },

  questionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: '20px',
    marginTop: '30px',
  },

  questionCard: {
    background: '#f5f9ff',
    borderRadius: '22px',
    padding: '24px',
  },

  select: {
    width: '100%',
    padding: '14px',
    borderRadius: '14px',
    border: '1px solid #d6e2f5',
    marginTop: '12px',
    fontSize: '16px',
  },

  bottomGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '25px',
    marginTop: '40px',
  },

  bigCard: {
    background: '#ffffff',
    borderRadius: '30px',
    padding: '35px',
    boxShadow: '0 20px 70px rgba(40,90,180,0.10)',
  },

  list: {
    lineHeight: 2,
    fontSize: '20px',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [profile, setProfile] = useState('')
  const [interest, setInterest] = useState('')
  const [energy, setEnergy] = useState('')
  const [result, setResult] = useState('')

  function generatePlan() {
    if (!profile || !interest || !energy) {
      setResult('Répondez aux 3 questions pour générer votre optimisation.')
      return
    }

    setResult(
      `Profil détecté : ${profile}. Priorité principale : ${interest}. Niveau d’énergie : ${energy}. Recommandation : commencez par une action simple de 25 minutes, classez vos tâches importantes, puis activez une mission quotidienne adaptée.`
    )
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.logo}>NexxGuard Pro™</h1>
          <p style={styles.tagline}>Optimisez votre quotidien. Naturellement.</p>
        </div>

        <div style={styles.scoreBox}>
          <span style={styles.scoreLabel}>SMART SCORE</span>
          <strong style={styles.score}>92%</strong>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.badge}>Phase intelligente active</div>
        <h2 style={styles.title}>Nouvelle génération d’organisation intelligente</h2>
        <p style={styles.subtitle}>
          Une plateforme évolutive conçue pour améliorer votre concentration,
          simplifier votre gestion quotidienne et optimiser naturellement vos priorités.
        </p>
        <button style={styles.button}>Découvrir l’expérience</button>
      </section>

      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>SMART Score</h3>
          <strong>92%</strong>
          <p>Performance quotidienne estimée</p>
        </div>

        <div style={styles.card}>
          <h3>Focus actif</h3>
          <strong>En cours</strong>
          <p>Priorités analysées en temps réel</p>
        </div>

        <div style={styles.card}>
          <h3>Temps gagné</h3>
          <strong>+3h</strong>
          <p>Optimisation hebdomadaire prévue</p>
        </div>

        <div style={styles.card}>
          <h3>Assistant</h3>
          <strong>Actif</strong>
          <p>Guidage personnalisé disponible</p>
        </div>
      </section>

      <section style={styles.interactive}>
        <h2 style={styles.sectionTitle}>Profilage personnalisé</h2>
        <p style={styles.sectionText}>
          Répondez aux questions pour recevoir une recommandation adaptée à votre profil.
        </p>

        <div style={styles.formGrid}>
          <select style={styles.input} value={profile} onChange={(e) => setProfile(e.target.value)}>
            <option value="">Vous êtes...</option>
            <option value="Étudiant">Étudiant</option>
            <option value="Commerçant">Commerçant</option>
            <option value="Employé">Employé</option>
            <option value="Entrepreneur">Entrepreneur</option>
          </select>

          <select style={styles.input} value={interest} onChange={(e) => setInterest(e.target.value)}>
            <option value="">Votre priorité...</option>
            <option value="Organisation">Organisation</option>
            <option value="Productivité">Productivité</option>
            <option value="Gestion du temps">Gestion du temps</option>
            <option value="Concentration">Concentration</option>
            <option value="Planification">Planification</option>
          </select>

          <select style={styles.input} value={energy} onChange={(e) => setEnergy(e.target.value)}>
            <option value="">Votre énergie...</option>
            <option value="Basse">Basse</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Haute">Haute</option>
          </select>
        </div>

        <button style={styles.actionButton} onClick={generatePlan}>
          Générer mon optimisation
        </button>

        {result && <div style={styles.result}>{result}</div>}
      </section>

      <section style={styles.steps}>
        <h2 style={styles.sectionTitle}>Évolution du logiciel</h2>

        <div style={styles.stepGrid}>
          <div style={styles.step}>1. Profil utilisateur</div>
          <div style={styles.step}>2. Analyse des besoins</div>
          <div style={styles.step}>3. Priorisation SMART</div>
          <div style={styles.step}>4. Horaire dynamique</div>
          <div style={styles.step}>5. Missions quotidiennes</div>
          <div style={styles.step}>6. Suivi de progression</div>
        </div>
      </section>

      <section style={styles.advantageSection}>
        <h2 style={styles.sectionTitle}>Ce qui rend NexxGuard Pro™ différent</h2>

        <div style={styles.advantageGrid}>
          <div style={styles.advantageCard}>
            <span style={styles.icon}>⚡</span>
            <h3>Adaptation en temps réel</h3>
            <p>Le dashboard évolue selon le profil, l’énergie et les priorités.</p>
          </div>

          <div style={styles.advantageCard}>
            <span style={styles.icon}>🎯</span>
            <h3>Priorisation SMART</h3>
            <p>Les objectifs deviennent des actions simples, claires et mesurables.</p>
          </div>

          <div style={styles.advantageCard}>
            <span style={styles.icon}>🗓️</span>
            <h3>Horaire dynamique</h3>
            <p>Préparation d’une feuille d’organisation adaptée aux besoins réels.</p>
          </div>

          <div style={styles.advantageCard}>
            <span style={styles.icon}>🏆</span>
            <h3>Jeu de progression</h3>
            <p>Missions, score, badges et motivation quotidienne.</p>
          </div>

          <div style={styles.advantageCard}>
            <span style={styles.icon}>💼</span>
            <h3>Multi-profils</h3>
            <p>Étudiant, commerçant, employé ou entrepreneur.</p>
          </div>

          <div style={styles.advantageCard}>
            <span style={styles.icon}>🔒</span>
            <h3>Simple et sécurisant</h3>
            <p>L’utilisateur voit une aide claire, sans complexité technique.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f7fbff 0%, #eaf4ff 45%, #ffffff 100%)',
    color: '#061b3a',
    fontFamily: 'Arial, sans-serif',
    padding: '48px 72px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  logo: {
    fontSize: '56px',
    color: '#06429b',
    margin: 0,
  },
  tagline: {
    fontSize: '24px',
    color: '#536b8a',
  },
  scoreBox: {
    background: '#fff',
    borderRadius: '24px',
    padding: '24px 38px',
    boxShadow: '0 25px 70px rgba(6, 66, 155, 0.15)',
  },
  scoreLabel: {
    display: 'block',
    color: '#536b8a',
    fontSize: '18px',
  },
  score: {
    color: '#d6a51d',
    fontSize: '44px',
  },
  hero: {
    textAlign: 'center',
    marginTop: '110px',
  },
  badge: {
    display: 'inline-block',
    background: '#fff',
    color: '#06429b',
    padding: '14px 34px',
    borderRadius: '999px',
    fontWeight: 700,
    boxShadow: '0 20px 55px rgba(6, 66, 155, 0.12)',
    marginBottom: '35px',
  },
  title: {
    fontSize: '78px',
    lineHeight: 1.05,
    margin: '0 auto',
    maxWidth: '1200px',
  },
  subtitle: {
    fontSize: '30px',
    color: '#405a7a',
    maxWidth: '1050px',
    margin: '35px auto',
    lineHeight: 1.45,
  },
  button: {
    background: 'linear-gradient(135deg, #2f67e8, #132d63)',
    color: '#fff',
    border: 0,
    borderRadius: '24px',
    padding: '22px 60px',
    fontSize: '26px',
    fontWeight: 800,
    cursor: 'pointer',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '28px',
    marginTop: '90px',
  },
  card: {
    background: '#fff',
    borderRadius: '30px',
    padding: '36px',
    minHeight: '170px',
    boxShadow: '0 25px 65px rgba(30, 93, 180, 0.12)',
  },
  interactive: {
    marginTop: '90px',
    background: '#ffffff',
    borderRadius: '34px',
    padding: '45px',
    boxShadow: '0 30px 80px rgba(6, 66, 155, 0.14)',
  },
  sectionTitle: {
    fontSize: '42px',
    color: '#06429b',
    textAlign: 'center',
  },
  sectionText: {
    textAlign: 'center',
    color: '#536b8a',
    fontSize: '22px',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '35px',
  },
  input: {
    padding: '20px',
    borderRadius: '18px',
    border: '1px solid #cfe1f7',
    fontSize: '18px',
  },
  actionButton: {
    marginTop: '28px',
    background: '#06429b',
    color: '#fff',
    border: 0,
    borderRadius: '18px',
    padding: '18px 36px',
    fontSize: '20px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  result: {
    marginTop: '28px',
    background: '#eef6ff',
    borderLeft: '6px solid #d6a51d',
    padding: '24px',
    borderRadius: '18px',
    fontSize: '20px',
    color: '#061b3a',
  },
  steps: {
    marginTop: '90px',
  },
  stepGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '22px',
  },
  step: {
    background: '#fff',
    borderRadius: '24px',
    padding: '28px',
    fontSize: '22px',
    fontWeight: 700,
    color: '#06429b',
    boxShadow: '0 20px 60px rgba(6, 66, 155, 0.11)',
  },
  advantageSection: {
    marginTop: '90px',
  },
  advantageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  advantageCard: {
    background: 'linear-gradient(180deg, #ffffff 0%, #f3f8ff 100%)',
    borderRadius: '26px',
    padding: '30px',
    boxShadow: '0 25px 65px rgba(30, 93, 180, 0.13)',
    border: '1px solid rgba(6, 66, 155, 0.08)',
  },
  icon: {
    fontSize: '34px',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
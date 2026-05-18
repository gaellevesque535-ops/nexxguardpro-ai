import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const cards = [
    { title: 'SMART Score', value: '92%', text: 'Progression quotidienne optimisée' },
    { title: 'Focus actif', value: 'En cours', text: 'Priorités organisées naturellement' },
    { title: 'Temps gagné', value: '+3h', text: 'Routine simplifiée cette semaine' },
    { title: 'Assistant', value: 'Actif', text: 'Accompagnement en temps réel' },
  ]

  const steps = [
    'Analyse des besoins',
    'Choix des priorités',
    'Planification dynamique',
    'Horaires personnalisés',
    'Suivi quotidien',
    'Évolution du profil',
  ]

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
        <div style={styles.badge}>Phase visuelle active</div>
        <h2 style={styles.title}>Nouvelle génération d’organisation intelligente</h2>
        <p style={styles.subtitle}>
          Une plateforme évolutive conçue pour améliorer votre concentration,
          simplifier votre gestion quotidienne et optimiser naturellement vos priorités.
        </p>
        <button style={styles.button}>Découvrir l’expérience</button>
      </section>

      <section style={styles.cards}>
        {cards.map((card) => (
          <article key={card.title} style={styles.card}>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <strong style={styles.cardValue}>{card.value}</strong>
            <p style={styles.cardText}>{card.text}</p>
          </article>
        ))}
      </section>

      <section style={styles.timelineSection}>
        <h2 style={styles.sectionTitle}>Évolution du logiciel</h2>
        <p style={styles.sectionText}>
          Chaque étape ajoute une nouvelle couche d’organisation, d’analyse et d’autonomie.
        </p>

        <div style={styles.steps}>
          {steps.map((step, index) => (
            <div key={step} style={styles.step}>
              <span style={styles.stepNumber}>0{index + 1}</span>
              <h3 style={styles.stepTitle}>{step}</h3>
              <p style={styles.stepText}>
                Module progressif intégré au dashboard.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.preview}>
        <div>
          <h2 style={styles.previewTitle}>Dashboard évolutif</h2>
          <p style={styles.previewText}>
            Vision claire, progression visible, outils structurés et expérience premium.
          </p>
        </div>

        <div style={styles.panel}>
          <div style={styles.panelLine}></div>
          <div style={styles.panelLineShort}></div>
          <div style={styles.panelGrid}>
            <span></span>
            <span></span>
            <span></span>
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
    padding: '48px 56px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '120px',
  },
  logo: {
    fontSize: '52px',
    color: '#0b469f',
    margin: 0,
    fontWeight: 800,
  },
  tagline: {
    fontSize: '24px',
    color: '#5a6d86',
    marginTop: '14px',
  },
  scoreBox: {
    background: 'white',
    borderRadius: '28px',
    padding: '24px 38px',
    boxShadow: '0 25px 60px rgba(40, 100, 180, 0.16)',
  },
  scoreLabel: {
    display: 'block',
    color: '#586b85',
    fontSize: '20px',
  },
  score: {
    color: '#d6a923',
    fontSize: '42px',
  },
  hero: {
    textAlign: 'center',
    maxWidth: '1180px',
    margin: '0 auto 90px',
  },
  badge: {
    display: 'inline-block',
    background: 'white',
    color: '#0b469f',
    padding: '12px 24px',
    borderRadius: '999px',
    marginBottom: '28px',
    boxShadow: '0 12px 35px rgba(13, 70, 150, 0.12)',
    fontWeight: 700,
  },
  title: {
    fontSize: '82px',
    lineHeight: 1.08,
    margin: 0,
    color: '#06152f',
    fontWeight: 900,
  },
  subtitle: {
    fontSize: '31px',
    lineHeight: 1.45,
    color: '#40536d',
    maxWidth: '1020px',
    margin: '36px auto',
  },
  button: {
    border: 'none',
    borderRadius: '24px',
    padding: '24px 54px',
    fontSize: '28px',
    fontWeight: 800,
    color: 'white',
    background: 'linear-gradient(135deg, #2f68e8, #122b61)',
    boxShadow: '0 20px 45px rgba(47, 104, 232, 0.28)',
    cursor: 'pointer',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    marginBottom: '100px',
  },
  card: {
    background: 'white',
    borderRadius: '32px',
    padding: '38px',
    minHeight: '210px',
    boxShadow: '0 25px 70px rgba(30, 90, 160, 0.12)',
  },
  cardTitle: {
    fontSize: '26px',
    color: '#0b469f',
    marginBottom: '30px',
  },
  cardValue: {
    display: 'block',
    fontSize: '44px',
    color: '#2f68e8',
    marginBottom: '20px',
  },
  cardText: {
    color: '#60728a',
    fontSize: '18px',
  },
  timelineSection: {
    background: 'white',
    borderRadius: '38px',
    padding: '56px',
    boxShadow: '0 25px 80px rgba(30, 90, 160, 0.12)',
    marginBottom: '90px',
  },
  sectionTitle: {
    fontSize: '46px',
    color: '#0b469f',
    margin: 0,
  },
  sectionText: {
    fontSize: '23px',
    color: '#52657d',
    marginBottom: '38px',
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  step: {
    border: '1px solid #dce9f8',
    borderRadius: '26px',
    padding: '28px',
    background: '#f8fbff',
  },
  stepNumber: {
    color: '#d6a923',
    fontWeight: 900,
    fontSize: '22px',
  },
  stepTitle: {
    color: '#061b3a',
    fontSize: '25px',
  },
  stepText: {
    color: '#64758c',
    fontSize: '17px',
  },
  preview: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #0b469f, #061b3a)',
    color: 'white',
    borderRadius: '42px',
    padding: '60px',
    boxShadow: '0 30px 90px rgba(6, 27, 58, 0.22)',
  },
  previewTitle: {
    fontSize: '48px',
    margin: 0,
  },
  previewText: {
    fontSize: '24px',
    color: '#dbe8ff',
    maxWidth: '700px',
  },
  panel: {
    width: '360px',
    background: 'rgba(255,255,255,0.12)',
    borderRadius: '30px',
    padding: '30px',
    border: '1px solid rgba(255,255,255,0.22)',
  },
  panelLine: {
    height: '18px',
    width: '80%',
    background: 'white',
    borderRadius: '999px',
    marginBottom: '20px',
  },
  panelLineShort: {
    height: '18px',
    width: '55%',
    background: '#d6a923',
    borderRadius: '999px',
    marginBottom: '28px',
  },
  panelGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '14px',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'

type Task = {
  id: number
  title: string
  urgency: number
  importance: number
  duration: number
}

function App() {
  const [energy, setEnergy] = useState(70)
  const [focus, setFocus] = useState(65)
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Planifier ma journée', urgency: 80, importance: 90, duration: 30 },
    { id: 2, title: 'Répondre aux messages importants', urgency: 70, importance: 60, duration: 25 },
    { id: 3, title: 'Préparer une tâche prioritaire', urgency: 55, importance: 95, duration: 45 },
  ])

  const smartScore = useMemo(() => {
    const avgPriority =
      tasks.reduce((acc, t) => acc + (t.urgency + t.importance) / 2, 0) / tasks.length

    return Math.round((avgPriority * 0.5 + energy * 0.25 + focus * 0.25))
  }, [tasks, energy, focus])

  const recommendation = useMemo(() => {
    if (energy < 40) return 'Commence par une tâche courte pour relancer ton rythme.'
    if (focus < 50) return 'Évite les tâches lourdes. Fais un bloc simple de 25 minutes.'
    if (smartScore >= 85) return 'Bonne fenêtre de concentration : attaque une tâche importante.'
    return 'Priorise une tâche claire, puis ajuste ton horaire.'
  }, [energy, focus, smartScore])

  const addTask = () => {
    const title = prompt('Nouvelle tâche :')
    if (!title) return

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        urgency: 50,
        importance: 70,
        duration: 30,
      },
    ])
  }

  const priorityLabel = (task: Task) => {
    if (task.urgency >= 70 && task.importance >= 70) return 'Important + urgent'
    if (task.urgency < 70 && task.importance >= 70) return 'Important'
    if (task.urgency >= 70 && task.importance < 70) return 'Urgent'
    return 'À placer plus tard'
  }

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div>
          <h1 style={styles.logo}>NexxGuard Pro™</h1>
          <p style={styles.tagline}>Optimisez votre quotidien. Naturellement.</p>
        </div>

        <div style={styles.scoreCard}>
          <span style={styles.label}>SMART SCORE</span>
          <strong style={styles.score}>{smartScore}%</strong>
        </div>
      </section>

      <section style={styles.center}>
        <span style={styles.badge}>Dashboard intelligent actif</span>
        <h2 style={styles.title}>Votre espace d’organisation évolutif</h2>
        <p style={styles.subtitle}>
          Analyse des priorités, rythme personnel, tâches, horaires dynamiques et recommandations en temps réel.
        </p>
      </section>

      <section style={styles.grid}>
        <div style={styles.card}>
          <h3>Énergie</h3>
          <strong>{energy}%</strong>
          <input type="range" min="0" max="100" value={energy} onChange={(e) => setEnergy(Number(e.target.value))} />
        </div>

        <div style={styles.card}>
          <h3>Concentration</h3>
          <strong>{focus}%</strong>
          <input type="range" min="0" max="100" value={focus} onChange={(e) => setFocus(Number(e.target.value))} />
        </div>

        <div style={styles.card}>
          <h3>Recommandation</h3>
          <p>{recommendation}</p>
        </div>

        <div style={styles.card}>
          <h3>Horaire optimisé</h3>
          <strong>{tasks.reduce((acc, t) => acc + t.duration, 0)} min</strong>
          <p>Temps estimé organisé automatiquement.</p>
        </div>
      </section>

      <section style={styles.panel}>
        <div style={styles.panelHeader}>
          <h2>Priorités du jour</h2>
          <button style={styles.button} onClick={addTask}>+ Ajouter une tâche</button>
        </div>

        <div style={styles.taskList}>
          {tasks.map((task) => (
            <div key={task.id} style={styles.task}>
              <div>
                <strong>{task.title}</strong>
                <p>{priorityLabel(task)} · {task.duration} min</p>
              </div>

              <div style={styles.miniScore}>
                {Math.round((task.urgency + task.importance) / 2)}%
              </div>
            </div>
          ))}
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
    padding: '56px',
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  logo: {
    fontSize: '56px',
    color: '#0b46a0',
    margin: 0,
  },
  tagline: {
    fontSize: '24px',
    color: '#56708f',
  },
  scoreCard: {
    background: 'white',
    borderRadius: '28px',
    padding: '28px 38px',
    boxShadow: '0 25px 60px rgba(35, 95, 180, 0.18)',
  },
  label: {
    color: '#52657d',
    display: 'block',
  },
  score: {
    color: '#d6a720',
    fontSize: '46px',
  },
  center: {
    textAlign: 'center',
    marginTop: '120px',
  },
  badge: {
    background: 'white',
    padding: '14px 34px',
    borderRadius: '999px',
    color: '#0b46a0',
    fontWeight: 700,
    boxShadow: '0 18px 45px rgba(35, 95, 180, 0.14)',
  },
  title: {
    fontSize: '72px',
    marginBottom: '18px',
  },
  subtitle: {
    fontSize: '25px',
    color: '#405b7d',
    maxWidth: '950px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '28px',
    marginTop: '80px',
  },
  card: {
    background: 'white',
    borderRadius: '28px',
    padding: '32px',
    minHeight: '170px',
    boxShadow: '0 25px 60px rgba(35, 95, 180, 0.12)',
  },
  panel: {
    marginTop: '36px',
    background: 'white',
    borderRadius: '32px',
    padding: '34px',
    boxShadow: '0 25px 70px rgba(35, 95, 180, 0.14)',
  },
  panelHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    border: 'none',
    borderRadius: '18px',
    padding: '16px 24px',
    background: 'linear-gradient(135deg, #2f66db, #102b66)',
    color: 'white',
    fontWeight: 700,
    cursor: 'pointer',
  },
  taskList: {
    display: 'grid',
    gap: '16px',
    marginTop: '24px',
  },
  task: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '22px',
    borderRadius: '22px',
    background: '#f4f8ff',
  },
  miniScore: {
    color: '#d6a720',
    fontSize: '28px',
    fontWeight: 800,
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
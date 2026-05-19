import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

type Profil = "Étudiant" | "Commerçant" | "Employé" | "Freelance";
type Objectif = "Organisation" | "Productivité" | "Gestion du temps" | "Priorités";

function App() {
  const [profil, setProfil] = useState<Profil>("Étudiant");
  const [objectif, setObjectif] = useState<Objectif>("Organisation");
  const [energie, setEnergie] = useState(70);
  const [focus, setFocus] = useState(75);
  const [interet, setInteret] = useState("Réussir mes tâches importantes");

  const score = useMemo(() => {
    return Math.round((energie * 0.4 + focus * 0.4 + 92 * 0.2));
  }, [energie, focus]);

  const recommandation = useMemo(() => {
    if (profil === "Étudiant") return "2 blocs de 45 minutes + révision active.";
    if (profil === "Commerçant") return "Prioriser ventes, clients et suivis quotidiens.";
    if (profil === "Employé") return "Planifier les tâches clés avant les interruptions.";
    return "Structurer projets, clients et livrables par priorité.";
  }, [profil]);

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div>
          <h1 style={styles.logo}>NexxGuard Pro™</h1>
          <p style={styles.tagline}>Optimisez votre quotidien. Naturellement.</p>
        </div>

        <div style={styles.scoreBox}>
          <span>SMART SCORE</span>
          <strong>{score}%</strong>
        </div>
      </section>

      <section style={styles.center}>
        <span style={styles.badge}>Dashboard intelligent actif</span>
        <h2 style={styles.title}>Nouvelle génération d’organisation intelligente</h2>
        <p style={styles.subtitle}>
          Une plateforme évolutive conçue pour améliorer votre concentration,
          simplifier votre gestion quotidienne et optimiser naturellement vos priorités.
        </p>
      </section>

      <section style={styles.cards}>
        <div style={styles.card}>
          <h3>Profil utilisateur</h3>
          <select style={styles.input} value={profil} onChange={(e) => setProfil(e.target.value as Profil)}>
            <option>Étudiant</option>
            <option>Commerçant</option>
            <option>Employé</option>
            <option>Freelance</option>
          </select>
        </div>

        <div style={styles.card}>
          <h3>Objectif principal</h3>
          <select style={styles.input} value={objectif} onChange={(e) => setObjectif(e.target.value as Objectif)}>
            <option>Organisation</option>
            <option>Productivité</option>
            <option>Gestion du temps</option>
            <option>Priorités</option>
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

      <section style={styles.questionBox}>
        <h2>Questions de profilage</h2>
        <p>Quel est votre intérêt principal aujourd’hui ?</p>
        <input
          style={styles.textInput}
          value={interet}
          onChange={(e) => setInteret(e.target.value)}
          placeholder="Exemple : mieux gérer mon temps"
        />
      </section>

      <section style={styles.analysis}>
        <h2>Analyse personnalisée</h2>
        <p><strong>Profil :</strong> {profil}</p>
        <p><strong>Objectif :</strong> {objectif}</p>
        <p><strong>Intérêt :</strong> {interet}</p>
        <p><strong>Recommandation :</strong> {recommandation}</p>
        <p><strong>Résultat dynamique :</strong> votre score actuel est de {score}%.</p>
      </section>

      <section style={styles.steps}>
        <h2>Processus intelligent</h2>
        <div style={styles.stepGrid}>
          <div style={styles.step}>1. Profilage utilisateur</div>
          <div style={styles.step}>2. Analyse des besoins</div>
          <div style={styles.step}>3. Priorisation</div>
          <div style={styles.step}>4. Plan conseillé</div>
          <div style={styles.step}>5. Suivi évolutif</div>
          <div style={styles.step}>6. Optimisation continue</div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f7fbff 0%, #eaf4ff 45%, #ffffff 100%)",
    color: "#061b3a",
    fontFamily: "Arial, sans-serif",
    padding: "42px",
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  logo: {
    fontSize: "56px",
    color: "#0b46a0",
    margin: 0,
  },
  tagline: {
    fontSize: "24px",
    color: "#56708f",
  },
  scoreBox: {
    background: "white",
    borderRadius: "24px",
    padding: "28px 38px",
    boxShadow: "0 24px 60px rgba(20,80,160,0.15)",
    fontSize: "20px",
  },
  center: {
    textAlign: "center",
    marginTop: "120px",
  },
  badge: {
    background: "white",
    color: "#0b46a0",
    padding: "14px 34px",
    borderRadius: "999px",
    fontWeight: 700,
    boxShadow: "0 18px 40px rgba(20,80,160,0.12)",
  },
  title: {
    fontSize: "72px",
    lineHeight: 1.05,
    marginTop: "50px",
  },
  subtitle: {
    fontSize: "28px",
    color: "#435d7c",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "28px",
    marginTop: "80px",
  },
  card: {
    background: "white",
    borderRadius: "28px",
    padding: "34px",
    boxShadow: "0 22px 55px rgba(20,80,160,0.12)",
  },
  input: {
    width: "100%",
    padding: "18px",
    fontSize: "20px",
    borderRadius: "16px",
    border: "1px solid #cbd8ea",
  },
  textInput: {
    width: "100%",
    padding: "20px",
    fontSize: "22px",
    borderRadius: "16px",
    border: "1px solid #cbd8ea",
  },
  questionBox: {
    marginTop: "50px",
    background: "white",
    borderRadius: "30px",
    padding: "38px",
  },
  analysis: {
    marginTop: "50px",
    background: "#0b4fab",
    color: "white",
    borderRadius: "30px",
    padding: "45px",
    fontSize: "24px",
  },
  steps: {
    marginTop: "50px",
  },
  stepGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "22px",
  },
  step: {
    background: "white",
    borderRadius: "22px",
    padding: "28px",
    fontSize: "22px",
    fontWeight: 700,
    boxShadow: "0 18px 45px rgba(20,80,160,0.12)",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
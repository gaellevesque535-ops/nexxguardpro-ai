import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

type Profile = "Étudiant" | "Commerçant" | "Employé" | "Freelance";
type Goal = "Organisation" | "Vente" | "Études" | "Productivité" | "Relation client";

function App() {
  const [profile, setProfile] = useState<Profile>("Étudiant");
  const [goal, setGoal] = useState<Goal>("Organisation");
  const [energy, setEnergy] = useState(70);
  const [focus, setFocus] = useState(75);
  const [interest, setInterest] = useState("améliorer mon organisation");

  const score = useMemo(() => {
    let base = Math.round((energy + focus) / 2);
    if (goal === "Vente") base += 6;
    if (profile === "Étudiant") base += 4;
    return Math.min(base, 98);
  }, [energy, focus, profile, goal]);

  const recommendation = useMemo(() => {
    if (goal === "Vente") {
      return "Utilise une approche relationnelle : écoute active, reformulation, preuve de valeur, confiance et suivi après contact.";
    }
    if (goal === "Études") {
      return "Plan conseillé : 2 blocs de 45 minutes, rappel actif, résumé APA et révision espacée.";
    }
    if (goal === "Relation client") {
      return "Priorise la satisfaction, la clarté, l’empathie, la personnalisation et la fidélisation.";
    }
    return "Plan conseillé : priorisation SMART, blocs courts, réduction des distractions et suivi quotidien.";
  }, [goal]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f7fbff 0%, #eaf4ff 55%, #ffffff 100%)",
        color: "#061b3a",
        fontFamily: "Arial, sans-serif",
        padding: "56px",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "68px", color: "#0b46a0", margin: 0 }}>
            NexxGuard Pro™
          </h1>
          <p style={{ fontSize: "28px", color: "#55708f" }}>
            Optimisez votre quotidien. Naturellement.
          </p>
        </div>

        <div style={cardSmall}>
          <p style={{ margin: 0, fontSize: "20px" }}>SMART SCORE</p>
          <strong style={{ fontSize: "48px", color: "#d5a51d" }}>{score}%</strong>
        </div>
      </header>

      <section style={{ textAlign: "center", marginTop: "120px" }}>
        <div style={pill}>Dashboard intelligent actif</div>

        <h2 style={{ fontSize: "72px", lineHeight: 1.05, marginTop: "70px" }}>
          Nouvelle génération <br /> d’organisation intelligente
        </h2>

        <p style={{ fontSize: "26px", color: "#435b78", maxWidth: "1100px", margin: "0 auto" }}>
          Analyse personnalisée, priorisation, questions de profil, recommandations dynamiques,
          stratégies psychologiques en vente et relation client.
        </p>
      </section>

      <section style={grid}>
        <Card title="Profil utilisateur">
          <select style={input} value={profile} onChange={(e) => setProfile(e.target.value as Profile)}>
            <option>Étudiant</option>
            <option>Commerçant</option>
            <option>Employé</option>
            <option>Freelance</option>
          </select>
        </Card>

        <Card title="Objectif principal">
          <select style={input} value={goal} onChange={(e) => setGoal(e.target.value as Goal)}>
            <option>Organisation</option>
            <option>Vente</option>
            <option>Études</option>
            <option>Productivité</option>
            <option>Relation client</option>
          </select>
        </Card>

        <Card title={`Énergie : ${energy}%`}>
          <input type="range" min="0" max="100" value={energy} onChange={(e) => setEnergy(Number(e.target.value))} />
        </Card>

        <Card title={`Focus : ${focus}%`}>
          <input type="range" min="0" max="100" value={focus} onChange={(e) => setFocus(Number(e.target.value))} />
        </Card>
      </section>

      <section style={bluePanel}>
        <h2 style={{ fontSize: "44px" }}>Analyse personnalisée</h2>
        <p><strong>Profil :</strong> {profile}</p>
        <p><strong>Objectif :</strong> {goal}</p>
        <p><strong>Intérêt :</strong> {interest}</p>
        <p><strong>Recommandation :</strong> {recommendation}</p>
      </section>

      <section style={grid}>
        <Card title="Question utilisateur">
          <p>Quel est votre besoin principal aujourd’hui ?</p>
          <input
            style={input}
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Ex : mieux gérer mon horaire"
          />
        </Card>

        <Card title="Processus d’accès aux données pertinentes">
          <ul>
            <li>1. Profil utilisateur</li>
            <li>2. Objectif principal</li>
            <li>3. Niveau d’énergie</li>
            <li>4. Niveau de focus</li>
            <li>5. Intérêts et contexte</li>
            <li>6. Analyse personnalisée</li>
          </ul>
        </Card>

        <Card title="Stratégies psychologiques en vente">
          <ul>
            <li>Écoute active</li>
            <li>Reformulation</li>
            <li>Preuve sociale</li>
            <li>Réciprocité</li>
            <li>Création de confiance</li>
            <li>Suivi après contact</li>
          </ul>
        </Card>

        <Card title="Relation client">
          <ul>
            <li>Satisfaction client</li>
            <li>Fidélisation</li>
            <li>Communication claire</li>
            <li>Gestion émotionnelle</li>
            <li>Service après-vente</li>
          </ul>
        </Card>
      </section>

      <section style={bluePanel}>
        <h2 style={{ fontSize: "42px" }}>APA universitaire — psychologie américaine</h2>
        <p>
          Module d’aide académique pour structurer les idées selon les normes APA 7 :
          auteur, année, citation, référence, cadre théorique et analyse psychologique.
        </p>

        <p>
          Exemple : Le comportement d’achat est influencé par les émotions,
          la perception de valeur et la confiance envers la marque (Solomon, 2020).
        </p>

        <ul>
          <li>Comportement du consommateur</li>
          <li>Motivation et émotion</li>
          <li>Influence sociale</li>
          <li>Psychologie d’achat</li>
          <li>Relation client moderne</li>
        </ul>
      </section>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={card}>
      <h3 style={{ fontSize: "28px", color: "#0b46a0" }}>{title}</h3>
      <div style={{ fontSize: "22px", lineHeight: 1.5 }}>{children}</div>
    </div>
  );
}

const card = {
  background: "white",
  borderRadius: "34px",
  padding: "36px",
  boxShadow: "0 24px 60px rgba(37, 99, 235, 0.12)",
};

const cardSmall = {
  background: "white",
  borderRadius: "32px",
  padding: "34px 58px",
  boxShadow: "0 24px 60px rgba(37, 99, 235, 0.16)",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(220px, 1fr))",
  gap: "32px",
  marginTop: "90px",
};

const input = {
  width: "100%",
  padding: "18px",
  borderRadius: "18px",
  border: "1px solid #c9d8ef",
  fontSize: "22px",
};

const pill = {
  display: "inline-block",
  background: "white",
  color: "#0b46a0",
  padding: "18px 58px",
  borderRadius: "999px",
  fontWeight: "bold",
  fontSize: "22px",
  boxShadow: "0 18px 50px rgba(37, 99, 235, 0.14)",
};

const bluePanel = {
  marginTop: "70px",
  background: "linear-gradient(135deg, #0b46a0, #1558c8)",
  color: "white",
  borderRadius: "36px",
  padding: "48px",
  fontSize: "24px",
  lineHeight: 1.6,
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
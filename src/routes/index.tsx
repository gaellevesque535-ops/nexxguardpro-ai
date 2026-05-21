import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [profil, setProfil] = useState("Étudiant");
  const [objectif, setObjectif] = useState("Organisation");
  const [energie, setEnergie] = useState(70);
  const [focus, setFocus] = useState(75);
  const [interet, setInteret] = useState("Productivité");

  const smartScore = useMemo(() => {
    let score = Math.round((energie + focus) / 2);
    if (objectif === "Vente") score += 5;
    if (interet === "Relation client") score += 5;
    return Math.min(score, 99);
  }, [energie, focus, objectif, interet]);

  const recommandation = useMemo(() => {
    if (profil === "Étudiant") {
      return "Plan conseillé : 2 blocs de 45 minutes, révision active et pauses courtes.";
    }
    if (profil === "Commerçant") {
      return "Plan conseillé : prioriser les clients chauds, relances simples et suivi relationnel.";
    }
    return "Plan conseillé : organiser les tâches urgentes, réduire les distractions et optimiser le focus.";
  }, [profil]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f7fbff 0%,#eaf4ff 45%,#ffffff 100%)",
        color: "#061b3a",
        fontFamily: "Arial, sans-serif",
        padding: "60px 70px",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h1 style={{ fontSize: "72px", color: "#0b4aa2", margin: 0 }}>
            NexxGuard Pro™
          </h1>
          <p style={{ fontSize: "28px", color: "#526b8c" }}>
            Optimisez votre quotidien. Naturellement.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "30px 45px",
            borderRadius: "28px",
            boxShadow: "0 25px 70px rgba(11,74,162,.15)",
          }}
        >
          <div style={{ fontSize: "20px", color: "#526b8c" }}>SMART SCORE</div>
          <div style={{ fontSize: "56px", fontWeight: "bold", color: "#d6a419" }}>
            {smartScore}%
          </div>
        </div>
      </header>

      <section style={{ textAlign: "center", marginTop: "120px" }}>
        <div
          style={{
            display: "inline-block",
            background: "white",
            padding: "18px 60px",
            borderRadius: "999px",
            color: "#0b4aa2",
            fontWeight: "bold",
            fontSize: "22px",
            boxShadow: "0 20px 60px rgba(11,74,162,.12)",
          }}
        >
          Dashboard intelligent actif
        </div>

        <h2 style={{ fontSize: "82px", lineHeight: 1.05, marginTop: "70px" }}>
          Nouvelle génération <br /> d’organisation intelligente
        </h2>

        <p style={{ fontSize: "26px", color: "#314866" }}>
          Analyse personnalisée, profil utilisateur, priorisation, recommandations et stimulation dynamique.
        </p>
      </section>

      <section
        style={{
          marginTop: "90px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "28px",
        }}
      >
        <Card title="Profil utilisateur">
          <select value={profil} onChange={(e) => setProfil(e.target.value)} style={inputStyle}>
            <option>Étudiant</option>
            <option>Commerçant</option>
            <option>Employé</option>
          </select>
        </Card>

        <Card title="Objectif principal">
          <select value={objectif} onChange={(e) => setObjectif(e.target.value)} style={inputStyle}>
            <option>Organisation</option>
            <option>Productivité</option>
            <option>Vente</option>
            <option>Relation client</option>
          </select>
        </Card>

        <Card title={`Énergie : ${energie}%`}>
          <input type="range" min="0" max="100" value={energie} onChange={(e) => setEnergie(Number(e.target.value))} />
        </Card>

        <Card title={`Focus : ${focus}%`}>
          <input type="range" min="0" max="100" value={focus} onChange={(e) => setFocus(Number(e.target.value))} />
        </Card>
      </section>

      <section
        style={{
          marginTop: "55px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#0b4aa2,#133b78)",
            color: "white",
            borderRadius: "34px",
            padding: "45px",
            boxShadow: "0 30px 80px rgba(11,74,162,.25)",
          }}
        >
          <h2 style={{ fontSize: "42px" }}>Analyse personnalisée</h2>
          <p style={{ fontSize: "24px" }}><strong>Profil :</strong> {profil}</p>
          <p style={{ fontSize: "24px" }}><strong>Objectif :</strong> {objectif}</p>
          <p style={{ fontSize: "24px" }}><strong>Intérêt :</strong> {interet}</p>
          <p style={{ fontSize: "24px" }}><strong>Recommandation :</strong> {recommandation}</p>
        </div>

        <Card title="Question dynamique">
          <p style={{ fontSize: "22px" }}>Quel domaine voulez-vous optimiser en priorité ?</p>
          <select value={interet} onChange={(e) => setInteret(e.target.value)} style={inputStyle}>
            <option>Productivité</option>
            <option>Études</option>
            <option>Vente</option>
            <option>Relation client</option>
            <option>Gestion du temps</option>
          </select>
        </Card>
      </section>

      <section
        style={{
          marginTop: "70px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        <Card title="Stratégies psychologiques en vente">
          {[
            "Créer la confiance avant de proposer une solution.",
            "Identifier les besoins réels avec des questions ouvertes.",
            "Valoriser le bénéfice concret pour le client.",
            "Réduire l’hésitation avec une recommandation claire.",
            "Fidéliser avec un suivi humain et professionnel.",
          ].map((item) => (
            <p key={item} style={{ fontSize: "21px" }}>✓ {item}</p>
          ))}
        </Card>

        <div
          style={{
            background: "white",
            borderRadius: "32px",
            padding: "42px",
            boxShadow: "0 25px 70px rgba(11,74,162,.12)",
          }}
        >
          <h2 style={{ fontSize: "38px", color: "#0b4aa2" }}>
            Relation client intelligente
          </h2>

          <p style={{ fontSize: "22px", color: "#314866" }}>
            Le système adapte les recommandations selon le profil, l’énergie, le focus,
            l’objectif et l’intérêt principal de l’utilisateur.
          </p>

          <div style={{ marginTop: "25px", display: "grid", gap: "15px" }}>
            {["Écoute active", "Communication claire", "Confiance", "Fidélisation", "Suivi personnalisé"].map((x) => (
              <div
                key={x}
                style={{
                  background: "#f4f8ff",
                  padding: "18px",
                  borderRadius: "18px",
                  fontWeight: "bold",
                  color: "#133b78",
                }}
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "32px",
        padding: "36px",
        boxShadow: "0 25px 70px rgba(11,74,162,.10)",
        minHeight: "190px",
      }}
    >
      <h3 style={{ fontSize: "28px", color: "#061b3a" }}>{title}</h3>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "18px",
  borderRadius: "18px",
  border: "1px solid #c8d7ef",
  fontSize: "22px",
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
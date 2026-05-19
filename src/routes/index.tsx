import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [profil, setProfil] = useState("Étudiant");
  const [objectif, setObjectif] = useState("Organisation");
  const [energie, setEnergie] = useState(70);
  const [focus, setFocus] = useState(75);
  const [interet, setInteret] = useState("Réussir mes priorités");

  const analyse = useMemo(() => {
    const score = Math.round((energie + focus) / 2);

    let recommandation = "Plan conseillé : 2 blocs de 45 minutes + révision active.";

    if (profil === "Commerçant") {
      recommandation = "Plan conseillé : prioriser ventes, suivis clients et tâches à haute valeur.";
    }

    if (profil === "Employé") {
      recommandation = "Plan conseillé : organiser les tâches urgentes, réduire les interruptions et planifier les suivis.";
    }

    if (energie < 45) {
      recommandation = "Plan conseillé : réduire la charge, commencer par une tâche simple et prévoir une pause.";
    }

    return { score, recommandation };
  }, [profil, objectif, energie, focus]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f7fbff 0%, #eaf4ff 45%, #ffffff 100%)",
        color: "#061b3a",
        fontFamily: "Arial, sans-serif",
        padding: "42px",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between", gap: "24px" }}>
        <div>
          <h1 style={{ fontSize: "58px", color: "#06439b" }}>NexxGuard Pro™</h1>
          <p style={{ fontSize: "26px", color: "#526985" }}>
            Optimisez votre quotidien. Naturellement.
          </p>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "28px 42px",
            boxShadow: "0 24px 70px rgba(0, 70, 160, 0.15)",
          }}
        >
          <p style={{ fontSize: "20px", color: "#526985" }}>SMART SCORE</p>
          <strong style={{ fontSize: "48px", color: "#d4a316" }}>{analyse.score}%</strong>
        </div>
      </header>

      <section style={{ textAlign: "center", marginTop: "120px" }}>
        <span
          style={{
            background: "white",
            color: "#06439b",
            padding: "14px 34px",
            borderRadius: "999px",
            fontWeight: "bold",
            boxShadow: "0 20px 50px rgba(0, 70, 160, 0.12)",
          }}
        >
          Dashboard intelligent actif
        </span>

        <h2 style={{ fontSize: "78px", marginTop: "55px", lineHeight: "1.05" }}>
          Nouvelle génération <br />
          d’organisation intelligente
        </h2>

        <p style={{ fontSize: "30px", maxWidth: "1100px", margin: "35px auto", color: "#405a78" }}>
          Une plateforme évolutive conçue pour améliorer votre concentration,
          simplifier votre gestion quotidienne et optimiser naturellement vos priorités.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "28px",
          marginTop: "80px",
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
            <option>Concentration</option>
            <option>Gestion du temps</option>
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
          marginTop: "42px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
        }}
      >
        <div
          style={{
            background: "#0d4fa8",
            color: "white",
            padding: "52px",
            borderRadius: "34px",
          }}
        >
          <h2 style={{ fontSize: "42px" }}>Analyse personnalisée</h2>
          <p style={{ fontSize: "28px", marginTop: "28px" }}>
            <strong>Profil :</strong> {profil}
          </p>
          <p style={{ fontSize: "28px", marginTop: "18px" }}>
            <strong>Objectif :</strong> {objectif}
          </p>
          <p style={{ fontSize: "28px", marginTop: "18px" }}>
            <strong>Recommandation :</strong> {analyse.recommandation}
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "52px",
            borderRadius: "34px",
            boxShadow: "0 24px 70px rgba(0, 70, 160, 0.12)",
          }}
        >
          <h2 style={{ fontSize: "38px", color: "#06439b" }}>Question utilisateur</h2>
          <p style={{ fontSize: "22px", marginTop: "20px", color: "#405a78" }}>
            Qu’est-ce que vous voulez améliorer en priorité ?
          </p>

          <input
            value={interet}
            onChange={(e) => setInteret(e.target.value)}
            style={{
              ...inputStyle,
              width: "100%",
              marginTop: "24px",
            }}
          />

          <p style={{ fontSize: "24px", marginTop: "30px" }}>
            Résultat proposé : créer un plan adapté autour de{" "}
            <strong style={{ color: "#d4a316" }}>{interet}</strong>.
          </p>
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
        borderRadius: "28px",
        padding: "36px",
        minHeight: "180px",
        boxShadow: "0 24px 70px rgba(0, 70, 160, 0.12)",
      }}
    >
      <h3 style={{ fontSize: "28px", color: "#06439b", marginBottom: "26px" }}>{title}</h3>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  fontSize: "24px",
  padding: "18px 22px",
  borderRadius: "18px",
  border: "1px solid #c8d7ea",
  background: "#f5f7fb",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
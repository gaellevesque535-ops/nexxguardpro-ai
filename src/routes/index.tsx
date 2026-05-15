import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const [need, setNeed] = React.useState("");
  const [goal, setGoal] = React.useState("");
  const [result, setResult] = React.useState<any>(null);

  function analyze() {
    const smartScore =
      (goal.length > 5 ? 20 : 0) +
      (/\d|fois|heure|jour|semaine|mois/i.test(goal) ? 20 : 0) +
      (goal.length > 10 ? 20 : 0) +
      (need.length > 3 ? 20 : 0) +
      (/jour|semaine|mois|date|avant|matin|soir/i.test(goal) ? 20 : 0);

    let quadrant = "À clarifier";
    if (smartScore >= 80) quadrant = "Important et urgent";
    else if (smartScore >= 60) quadrant = "Important mais non urgent";
    else if (smartScore >= 40) quadrant = "Urgent mais moins important";
    else quadrant = "À éliminer, déléguer ou reporter";

    setResult({
      score: smartScore,
      quadrant,
      plan: [
        "Clarifier le problème principal",
        "Transformer l’objectif en format SMART",
        "Classer la tâche avec la matrice Eisenhower",
        "Créer une feuille d’horaire simple",
        "Suivre la progression chaque jour",
      ],
      recent: [
        {
          client: "Étude examen",
          need: "Bloc de concentration matin et soir",
          date: "Aujourd’hui",
        },
        {
          client: "Organisation autonome",
          need: "Priorisation SMART + Eisenhower",
          date: "Cette semaine",
        },
      ],
    });
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fbff, #eef4ff)",
        color: "#06142e",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "70px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              background: "#1d5cff",
              color: "white",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: "bold",
              boxShadow: "0 15px 35px rgba(29,92,255,.25)",
            }}
          >
            N
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: "42px" }}>NexxGuard Pro</h1>
            <p style={{ margin: 0, color: "#65708a", fontSize: "18px" }}>
              Moteur IA gratuit d’organisation intelligente
            </p>
          </div>
        </div>

        <button
          style={{
            background: "#1d5cff",
            color: "white",
            border: "none",
            padding: "18px 35px",
            borderRadius: "18px",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "0 15px 35px rgba(29,92,255,.25)",
          }}
        >
          Start Free
        </button>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "45px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "white",
              padding: "14px 25px",
              borderRadius: "999px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              color: "#1d5cff",
              fontWeight: "bold",
              marginBottom: "35px",
            }}
          >
            <span style={{ color: "#f4c400" }}>●</span>
            Free Productivity Platform
          </div>

          <h2 style={{ fontSize: "64px", lineHeight: "1.1", margin: 0 }}>
            SMART Engine <br />
            + Eisenhower <br />
            + IA Dashboard
          </h2>

          <p
            style={{
              fontSize: "21px",
              color: "#5f6b82",
              maxWidth: "680px",
              marginTop: "28px",
              lineHeight: "1.6",
            }}
          >
            NexxGuard Pro transforme un problème en solution claire :
            objectif SMART, priorité intelligente, horaire autonome et suivi
            évolutif.
          </p>
        </div>

        <div
          style={{
            background: "#eaf1fb",
            padding: "35px",
            borderRadius: "42px",
            boxShadow: "0 20px 50px rgba(0,0,0,.08)",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "34px",
              padding: "35px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h2 style={{ fontSize: "44px", margin: 0 }}>Dashboard IA</h2>
                <p style={{ color: "#68738a", fontSize: "22px" }}>
                  Analyse automatique
                </p>
              </div>

              <div
                style={{
                  width: "95px",
                  height: "95px",
                  borderRadius: "50%",
                  background: "#1d5cff",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "34px",
                  fontWeight: "bold",
                }}
              >
                AI
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "22px",
                marginTop: "35px",
              }}
            >
              <Card title="Score SMART" value={result ? `${result.score}%` : "0%"} />
              <Card title="Priorité IA" value={result ? result.quadrant : "Analyse"} />
            </div>

            <div
              style={{
                background: "#f2f4f8",
                padding: "28px",
                borderRadius: "25px",
                marginTop: "28px",
              }}
            >
              <h3 style={{ fontSize: "26px", marginTop: 0 }}>
                Analyse rapide
              </h3>

              <input
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                placeholder="Quel est ton problème ou besoin ?"
                style={inputStyle}
              />

              <input
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Quel objectif veux-tu atteindre ?"
                style={inputStyle}
              />

              <button
                onClick={analyze}
                style={{
                  width: "100%",
                  background: "#1d5cff",
                  color: "white",
                  border: "none",
                  padding: "16px",
                  borderRadius: "14px",
                  fontSize: "17px",
                  fontWeight: "bold",
                  marginTop: "12px",
                  cursor: "pointer",
                }}
              >
                Générer mon plan IA
              </button>
            </div>
          </div>
        </div>
      </section>

      {result && (
        <section
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "35px",
          }}
        >
          <Panel title="Plan recommandé">
            {result.plan.map((item: string, index: number) => (
              <p key={index}>✅ {item}</p>
            ))}
          </Panel>

          <Panel title="Demandes récentes">
            {result.recent.map((item: any, index: number) => (
              <div
                key={index}
                style={{
                  background: "#eef4ff",
                  padding: "16px",
                  borderRadius: "14px",
                  marginTop: "12px",
                }}
              >
                <strong>{item.client}</strong>
                <p>{item.need}</p>
                <small>{item.date}</small>
              </div>
            ))}
          </Panel>
        </section>
      )}
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        background: "#eef4ff",
        borderRadius: "22px",
        padding: "25px",
      }}
    >
      <p style={{ color: "#67728a", fontSize: "18px", margin: 0 }}>{title}</p>
      <h3 style={{ fontSize: "34px", margin: "15px 0 0" }}>{value}</h3>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "24px",
        boxShadow: "0 15px 35px rgba(0,0,0,.08)",
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px",
  marginTop: "12px",
  borderRadius: "14px",
  border: "1px solid #d8e0ef",
  fontSize: "16px",
  boxSizing: "border-box",
};
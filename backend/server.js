import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.use(express.json());

let recentRequests = [];

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "NexxGuard AI Server actif",
    domain: "api.nexxguardpro.com",
    port: PORT,
  });
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    time: new Date().toLocaleString("fr-CA"),
  });
});

app.get("/api/recent", (req, res) => {
  res.json({
    recent: recentRequests,
  });
});

app.post("/api/generate", (req, res) => {
  const { client, need, reference } = req.body || {};

  const safeClient = client || "Client sans nom";
  const safeNeed = need || "Besoin non précisé";
  const safeReference = reference || "Aucune référence";

  const schedule = [
    {
      day: "Lundi",
      time: "09:00",
      task: `Analyse IA de ${safeClient}`,
      priority: "Haute",
    },
    {
      day: "Mardi",
      time: "13:00",
      task: `Optimisation : ${safeNeed}`,
      priority: "Moyenne",
    },
  ];

  const alerts = [
    "Vérifier les disponibilités",
    "Envoyer un rappel client",
  ];

  const recommendations = [
    "Optimiser l’horaire selon les priorités",
    "Ajouter un suivi automatique",
  ];

  const recentItem = {
    client: safeClient,
    need: safeNeed,
    reference: safeReference,
    date: new Date().toLocaleString("fr-CA"),
  };

  recentRequests.unshift(recentItem);

  recentRequests = recentRequests.slice(0, 10);

  res.json({
    success: true,
    message: "Horaire généré avec succès",
    schedule,
    alerts,
    recommendations,
    recent: recentRequests,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ NexxGuard AI Server actif sur port ${PORT}`);
});
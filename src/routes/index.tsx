import React from 'react'

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #08142b 0%, #0d1f44 50%, #12295c 100%)',
        color: 'white',
        fontFamily: 'Arial',
        padding: '30px',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '42px',
              margin: 0,
              color: '#ffffff',
            }}
          >
            NexxGuard Pro AI 🚀
          </h1>

          <p
            style={{
              color: '#9fb4ff',
              marginTop: '10px',
              fontSize: '18px',
            }}
          >
            AI Productivity Operating System
          </p>
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.08)',
            padding: '15px 25px',
            borderRadius: '18px',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <div style={{ color: '#ffd700', fontWeight: 'bold' }}>
            SMART SCORE
          </div>

          <div
            style={{
              fontSize: '28px',
              marginTop: '5px',
            }}
          >
            87%
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        {[
          {
            title: 'Productivité',
            value: '92%',
            color: '#4da3ff',
          },
          {
            title: 'Focus',
            value: 'Élevé',
            color: '#ffd700',
          },
          {
            title: 'Temps optimisé',
            value: '+3h',
            color: '#00e0ff',
          },
          {
            title: 'Priorité SMART',
            value: 'Active',
            color: '#ffffff',
          },
        ].map((card, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '22px',
              padding: '25px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 0 25px rgba(0,140,255,0.12)',
            }}
          >
            <div
              style={{
                color: '#9fb4ff',
                marginBottom: '12px',
              }}
            >
              {card.title}
            </div>

            <div
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: card.color,
              }}
            >
              {card.value}
            </div>
          </div>
        ))}
      </div>

      {/* SMART MATRIX */}
      <div
        style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '24px',
          padding: '30px',
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '40px',
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: '#ffd700',
          }}
        >
          SMART Planner Matrix
        </h2>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
          }}
        >
          <thead>
            <tr>
              {['Tâche', 'Priorité', 'Temps', 'IA'].map((item) => (
                <th
                  key={item}
                  style={{
                    textAlign: 'left',
                    padding: '15px',
                    color: '#9fb4ff',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {[
              ['Études', 'Haute', '45 min', 'Optimisé'],
              ['Travail', 'Haute', '2h', 'Focus'],
              ['Nettoyage', 'Moyenne', '1h', 'Découpé'],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((cell, index) => (
                  <td
                    key={index}
                    style={{
                      padding: '15px',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AI ASSISTANT */}
      <div
        style={{
          background:
            'linear-gradient(135deg, rgba(0,140,255,0.2), rgba(255,215,0,0.15))',
          borderRadius: '24px',
          padding: '30px',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: '#ffffff',
          }}
        >
          Assistant IA Central
        </h2>

        <p
          style={{
            fontSize: '18px',
            color: '#d6e2ff',
            lineHeight: '1.6',
          }}
        >
          Tu perds du temps sur certaines tâches secondaires.
          Le moteur SMART recommande une optimisation automatique
          de ton organisation et de tes priorités.
        </p>

        <button
          style={{
            marginTop: '20px',
            background: '#ffd700',
            color: '#08142b',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '14px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Activer l’optimisation IA
        </button>
      </div>
    </main>
  )
}
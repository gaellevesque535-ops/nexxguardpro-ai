import React from 'react'

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg,#f8fbff 0%,#edf4ff 40%,#dbeafe 100%)',
        fontFamily: 'Arial',
        color: '#08142b',
        overflow: 'hidden',
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 50px',
          backdropFilter: 'blur(14px)',
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: '34px',
              fontWeight: 800,
              color: '#0b3b8f',
            }}
          >
            NexxGuard Pro™
          </h1>

          <p
            style={{
              marginTop: '8px',
              color: '#64748b',
              fontSize: '16px',
            }}
          >
            Optimisez votre quotidien. Naturellement.
          </p>
        </div>

        <div
          style={{
            background: 'white',
            borderRadius: '18px',
            padding: '14px 24px',
            boxShadow: '0 10px 30px rgba(37,99,235,0.12)',
            border: '1px solid rgba(255,255,255,0.8)',
          }}
        >
          <div
            style={{
              fontSize: '13px',
              color: '#64748b',
            }}
          >
            SMART SCORE
          </div>

          <div
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#d4af37',
            }}
          >
            92%
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          textAlign: 'center',
          padding: '70px 25px 50px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(48px,8vw,82px)',
            marginBottom: '20px',
            lineHeight: 1,
            color: '#08142b',
          }}
        >
          Nouvelle génération
          <br />
          d’organisation intelligente
        </h2>

        <p
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            fontSize: '22px',
            color: '#475569',
            lineHeight: 1.5,
          }}
        >
          Une plateforme évolutive conçue pour améliorer votre concentration,
          simplifier votre gestion quotidienne et optimiser naturellement
          vos priorités.
        </p>

        <button
          style={{
            marginTop: '35px',
            background:
              'linear-gradient(135deg,#2563eb,#0f172a)',
            color: 'white',
            border: 'none',
            borderRadius: '18px',
            padding: '18px 34px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 12px 40px rgba(37,99,235,0.35)',
          }}
        >
          Découvrir l’expérience
        </button>
      </section>

      {/* CARDS */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit,minmax(250px,1fr))',
          gap: '24px',
          padding: '40px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {[
          {
            title: 'Focus Mode',
            value: 'Actif',
            color: '#2563eb',
          },
          {
            title: 'Temps optimisé',
            value: '+3h',
            color: '#d4af37',
          },
          {
            title: 'Organisation',
            value: 'Synchronisée',
            color: '#0f172a',
          },
          {
            title: 'Assistant central',
            value: 'Disponible',
            color: '#2563eb',
          },
        ].map((card, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255,255,255,0.75)',
              borderRadius: '28px',
              padding: '28px',
              backdropFilter: 'blur(18px)',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow:
                '0 15px 45px rgba(37,99,235,0.08)',
            }}
          >
            <div
              style={{
                color: '#64748b',
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
      </section>

      {/* SMART ENGINE */}
      <section
        style={{
          maxWidth: '1300px',
          margin: '60px auto',
          padding: '50px',
        }}
      >
        <div
          style={{
            background:
              'linear-gradient(135deg,#0f172a,#0b3b8f)',
            borderRadius: '36px',
            padding: '60px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow:
              '0 25px 60px rgba(15,23,42,0.35)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-120px',
              top: '-120px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background:
                'rgba(255,215,0,0.15)',
              filter: 'blur(20px)',
            }}
          />

          <h2
            style={{
              fontSize: '52px',
              marginTop: 0,
              marginBottom: '20px',
            }}
          >
            SMART Engine™
          </h2>

          <p
            style={{
              fontSize: '22px',
              lineHeight: 1.7,
              maxWidth: '900px',
              color: '#dbeafe',
            }}
          >
            Une technologie évolutive qui adapte votre organisation,
            vos priorités et votre rythme quotidien afin
            d’améliorer naturellement votre efficacité.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginTop: '40px',
            }}
          >
            {[
              'Analyse adaptative',
              'Organisation dynamique',
              'Priorités intelligentes',
              'Focus évolutif',
              'Performance quotidienne',
            ].map((item) => (
              <div
                key={item}
                style={{
                  background:
                    'rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '16px 22px',
                  border:
                    '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
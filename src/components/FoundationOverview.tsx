'use client'

import Image from 'next/image'

export default function FoundationOverview() {
  const divisions = [
    {
      name: 'Mobile Task Forces',
      code: 'MTF',
      description: 'Specialized units deployed to contain anomalies and respond to threats.',
      clearance: 3
    },
    {
      name: 'Research Division',
      code: 'RD',
      description: 'Scientific study and analysis of anomalous objects and phenomena.',
      clearance: 4
    },
    {
      name: 'Containment Division',
      code: 'CD',
      description: 'Development and maintenance of containment procedures.',
      clearance: 3
    },
    {
      name: 'Security Division',
      code: 'SD',
      description: 'Protection of Foundation facilities and personnel.',
      clearance: 2
    },
    {
      name: 'Intelligence Agency',
      code: 'IA',
      description: 'Information gathering and surveillance operations.',
      clearance: 4
    },
    {
      name: 'Medical Department',
      code: 'MD',
      description: 'Healthcare and medical research for personnel and anomalies.',
      clearance: 2
    }
  ]

  const objectClasses = [
    { class: 'Safe', color: 'rgb(0,200,0)', description: 'Easily contained anomalies that pose minimal threat.' },
    { class: 'Euclid', color: 'rgb(230,200,80)', description: 'Anomalies requiring more resources or unpredictable behavior.' },
    { class: 'Keter', color: 'rgb(255,50,50)', description: 'Extremely dangerous anomalies requiring extensive containment.' },
    { class: 'Thaumiel', color: 'rgb(100,100,255)', description: 'Top-secret anomalies used to contain other anomalies.' },
    { class: 'Neutralized', color: 'rgb(150,150,150)', description: 'Anomalies that no longer exhibit anomalous properties.' }
  ]

  return (
    <div className="min-h-screen bg-[rgb(17,17,17)]">
      {/* Top Security Banner */}
      <div className="bg-[rgb(230,200,80)] text-white text-center py-1 text-xs font-bold tracking-widest">
        ⚠ CLASSIFIED - LEVEL 2 CLEARANCE REQUIRED ⚠
      </div>

      {/* Header */}
      <header className="bg-[rgb(28,28,28)] border-b-4 border-[rgb(230,200,80)] shadow-[0_0_20px_rgba(230,200,80,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <Image 
                src="https://static.wikia.nocookie.net/scp-db/images/c/c9/SCP_Foundation.png/revision/latest/scale-to-width-down/1000?cb=20250512065502" 
                alt="SCP Foundation Logo" 
                width={80} 
                height={80}
                className="filter drop-shadow-[0_0_10px_rgba(230,200,80,0.5)]"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[rgb(230,200,80)] scp-header">
                  SCP FOUNDATION
                </h1>
                <p className="text-sm md:text-base text-[rgb(160,160,160)] mt-1 tracking-wide">
                  Secure. Contain. Protect.
                </p>
                <p className="text-xs text-[rgb(240,240,240)] mt-1 font-bold">
                  FOUNDATION OVERVIEW
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">CLASSIFIED</div>
              <p className="text-xs text-[rgb(160,160,160)] tracking-wider uppercase">
                Established: 1889
              </p>
              <p className="text-xs text-[rgb(230,200,80)] tracking-wider mt-1 font-bold">
                LEVEL 2 CLEARANCE REQUIRED
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mission Statement */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 pb-2 border-b-2 border-[rgb(100,100,100)]">
            OUR MISSION
          </h2>
          <div className="text-center py-8">
            <p className="text-4xl font-bold text-[rgb(230,200,80)] mb-6 tracking-wider scp-header">
              SECURE. CONTAIN. PROTECT.
            </p>
            <p className="text-[rgb(220,220,220)] text-lg leading-relaxed max-w-4xl mx-auto">
              The SCP Foundation is a clandestine organization dedicated to securing, containing, and protecting 
              humanity from anomalous threats. We operate in the shadows to ensure normalcy for the rest of the world, 
              studying and containing objects, entities, and phenomena that defy natural law.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-6 pb-2 border-b-2 border-[rgb(100,100,100)]">
            CORE PRINCIPLES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6 hover:border-[rgb(230,200,80)] transition-all">
              <h3 className="text-2xl font-bold text-[rgb(230,200,80)] mb-3 scp-header">SECURE</h3>
              <p className="text-[rgb(200,200,200)] text-sm leading-relaxed">
                We secure anomalies to prevent them from falling into the wrong hands. Through strategic operations 
                and worldwide surveillance, we identify and acquire anomalous objects before they can threaten humanity.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6 hover:border-[rgb(230,200,80)] transition-all">
              <h3 className="text-2xl font-bold text-[rgb(230,200,80)] mb-3 scp-header">CONTAIN</h3>
              <p className="text-[rgb(200,200,200)] text-sm leading-relaxed">
                We contain anomalies in specialized facilities designed to prevent their effects from spreading. 
                Each containment procedure is carefully crafted to address the unique properties of every anomaly.
              </p>
            </div>
            <div className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6 hover:border-[rgb(230,200,80)] transition-all">
              <h3 className="text-2xl font-bold text-[rgb(230,200,80)] mb-3 scp-header">PROTECT</h3>
              <p className="text-[rgb(200,200,200)] text-sm leading-relaxed">
                We protect humanity from knowledge of the anomalous. We maintain the Veil, ensuring that the general 
                population remains unaware of the threats that lurk in the shadows of our world.
              </p>
            </div>
          </div>
        </section>

        {/* Object Classification System */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-6 pb-2 border-b-2 border-[rgb(100,100,100)]">
            OBJECT CLASSIFICATION SYSTEM
          </h2>
          <div className="space-y-4">
            {objectClasses.map((obj) => (
              <div 
                key={obj.class} 
                className="bg-[rgb(28,28,28)] border-l-4 p-4 hover:bg-[rgb(35,35,35)] transition-all"
                style={{ borderColor: obj.color }}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{ color: obj.color }}>
                      {obj.class.toUpperCase()}
                    </h3>
                    <p className="text-[rgb(200,200,200)] text-sm">{obj.description}</p>
                  </div>
                  <div 
                    className="px-4 py-2 border-2 font-bold text-sm"
                    style={{ 
                      borderColor: obj.color,
                      color: obj.color,
                      backgroundColor: `${obj.color}15`
                    }}
                  >
                    {obj.class.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Divisions */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-6 pb-2 border-b-2 border-[rgb(100,100,100)]">
            MAJOR DIVISIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division) => (
              <div 
                key={division.code} 
                className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6 hover:border-[rgb(230,200,80)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[rgb(240,240,240)] mb-1">{division.name}</h3>
                    <p className="text-sm text-[rgb(230,200,80)] font-bold font-mono">[{division.code}]</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[rgb(160,160,160)] tracking-wider">
                      LEVEL {division.clearance}
                    </span>
                  </div>
                </div>
                <div className="pt-3 border-t border-[rgb(80,80,80)]">
                  <p className="text-sm text-[rgb(200,200,200)] leading-relaxed">{division.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Presence */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 pb-2 border-b-2 border-[rgb(100,100,100)]">
            GLOBAL PRESENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)]">
              <p className="text-5xl font-bold text-[rgb(230,200,80)] mb-2">100+</p>
              <p className="text-sm text-[rgb(160,160,160)] uppercase tracking-wider">Sites Worldwide</p>
            </div>
            <div className="text-center p-6 bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)]">
              <p className="text-5xl font-bold text-[rgb(230,200,80)] mb-2">7000+</p>
              <p className="text-sm text-[rgb(160,160,160)] uppercase tracking-wider">Contained Anomalies</p>
            </div>
            <div className="text-center p-6 bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)]">
              <p className="text-5xl font-bold text-[rgb(230,200,80)] mb-2">Classified</p>
              <p className="text-sm text-[rgb(160,160,160)] uppercase tracking-wider">Active Personnel</p>
            </div>
          </div>
        </section>

        {/* Foundation Motto */}
        <section className="scp-card p-8 bg-gradient-to-r from-[rgb(28,28,28)] to-[rgb(17,17,17)] border-2 border-[rgb(230,200,80)]">
          <div className="text-center py-6">
            <p className="text-2xl md:text-3xl font-bold text-[rgb(230,200,80)] mb-4 italic tracking-wide">
              "We die in the dark so you can live in the light."
            </p>
            <p className="text-sm text-[rgb(160,160,160)] uppercase tracking-widest">
              — Foundation Motto
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

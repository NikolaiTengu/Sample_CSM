'use client'

import Image from 'next/image'

export default function EthicsCommittee() {
  const committeeMembers = [
    {
      id: 'EC-001',
      name: 'Dr. S. Morrison',
      role: 'Ethics Committee Chair',
      clearance: 5,
      specialization: 'Bioethics & Anomalous Studies'
    },
    {
      id: 'EC-002',
      name: 'Dr. K. Patel',
      role: 'Senior Ethics Officer',
      clearance: 4,
      specialization: 'Research Ethics & Protocol Review'
    },
    {
      id: 'EC-003',
      name: 'Dr. J. Rivera',
      role: 'Ethics Review Specialist',
      clearance: 4,
      specialization: 'Human Subjects & D-Class Protocol'
    },
    {
      id: 'EC-004',
      name: 'Dr. M. Chen',
      role: 'Ethics Compliance Officer',
      clearance: 4,
      specialization: 'Containment Ethics & Safety'
    },
    {
      id: 'EC-005',
      name: 'Dr. A. Williams',
      role: 'Ethics Advisor',
      clearance: 3,
      specialization: 'Field Operations Ethics'
    },
    {
      id: 'EC-006',
      name: 'Dr. L. Nakamura',
      role: 'Ethics Advisor',
      clearance: 3,
      specialization: 'Anomalous Entity Rights'
    }
  ]

  return (
    <div className="min-h-screen bg-[rgb(17,17,17)]">
      {/* Top Security Banner */}
      <div className="bg-[rgb(230,200,80)] text-white text-center py-1 text-xs font-bold tracking-widest">
        ⚠ CLASSIFIED - LEVEL 4 CLEARANCE REQUIRED ⚠
      </div>

      {/* Header */}
      <header className="bg-[rgb(28,28,28)] border-b-4 border-[rgb(230,200,80)] shadow-[0_0_20px_rgba(230,200,80,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <Image 
                src="/pictures/Ethics_Comittee.png" 
                alt="Ethics Committee Logo" 
                width={80} 
                height={80}
                className="filter drop-shadow-[0_0_10px_rgba(230,200,80,0.5)]"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[rgb(230,200,80)] scp-header">
                  ETHICS COMMITTEE
                </h1>
                <p className="text-sm md:text-base text-[rgb(160,160,160)] mt-1 tracking-wide">
                  Oversight and Ethical Guidelines
                </p>
                <p className="text-xs text-[rgb(240,240,240)] mt-1 font-bold">
                  SCP FOUNDATION ETHICS COMMITTEE
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">CLASSIFIED</div>
              <p className="text-xs text-[rgb(160,160,160)] tracking-wider uppercase">
                Established: 1957
              </p>
              <p className="text-xs text-[rgb(230,200,80)] tracking-wider mt-1 font-bold">
                CLEARANCE LEVEL 4+ REQUIRED
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mission Statement */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 pb-2 border-b-2 border-[rgb(100,100,100)]">
            MISSION STATEMENT
          </h2>
          <div className="text-[rgb(220,220,220)] space-y-4">
            <p className="leading-relaxed">
              The Ethics Committee serves as the moral compass of the SCP Foundation, ensuring that our mission 
              to Secure, Contain, and Protect does not come at the cost of our humanity. We oversee all operations 
              to ensure compliance with ethical guidelines and humanitarian principles.
            </p>
            <p className="leading-relaxed">
              Our duty is to question, to challenge, and when necessary, to intervene when the Foundation's 
              actions threaten to cross moral boundaries that should never be crossed.
            </p>
          </div>
        </section>

        {/* Core Responsibilities */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 pb-2 border-b-2 border-[rgb(100,100,100)]">
            CORE RESPONSIBILITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-2">◈ Research Protocol Review</h3>
                <p className="text-[rgb(200,200,200)] text-sm leading-relaxed">
                  Review and approve all research proposals involving anomalous entities, human subjects, 
                  and D-Class personnel to ensure ethical compliance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-2">◈ Containment Ethics</h3>
                <p className="text-[rgb(200,200,200)] text-sm leading-relaxed">
                  Evaluate containment procedures to ensure humane treatment of all entities under Foundation 
                  custody while maintaining necessary security measures.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-2">◈ Personnel Welfare</h3>
                <p className="text-[rgb(200,200,200)] text-sm leading-relaxed">
                  Monitor working conditions, mental health support, and safety protocols for all Foundation 
                  personnel across all facilities and sites.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-2">◈ Operational Oversight</h3>
                <p className="text-[rgb(200,200,200)] text-sm leading-relaxed">
                  Conduct regular audits of Foundation operations to identify and address ethical concerns 
                  before they escalate into serious violations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-2">◈ Amnestization Guidelines</h3>
                <p className="text-[rgb(200,200,200)] text-sm leading-relaxed">
                  Establish and enforce protocols for the ethical use of amnestics on both Foundation 
                  personnel and civilian populations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-2">◈ Termination Authorization</h3>
                <p className="text-[rgb(200,200,200)] text-sm leading-relaxed">
                  Review and authorize termination requests for anomalous entities, ensuring such actions 
                  are justified and all alternative options have been exhausted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Committee Members */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-6 pb-2 border-b-2 border-[rgb(100,100,100)]">
            COMMITTEE MEMBERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member) => (
              <div key={member.id} className="bg-[rgb(28,28,28)] border-2 border-[rgb(100,100,100)] p-6 hover:border-[rgb(230,200,80)] transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[rgb(240,240,240)] mb-1">{member.name}</h3>
                    <p className="text-sm text-[rgb(230,200,80)] font-bold">{member.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[rgb(160,160,160)] tracking-wider">
                      LEVEL {member.clearance}
                    </span>
                  </div>
                </div>
                <div className="pt-3 border-t border-[rgb(80,80,80)]">
                  <p className="text-xs text-[rgb(160,160,160)] uppercase tracking-wider mb-1">
                    Specialization
                  </p>
                  <p className="text-sm text-[rgb(200,200,200)]">{member.specialization}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-[rgb(80,80,80)]">
                  <p className="text-xs text-[rgb(140,140,140)] font-mono">{member.id}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Authority and Powers */}
        <section className="scp-card p-8 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 pb-2 border-b-2 border-[rgb(100,100,100)]">
            AUTHORITY AND POWERS
          </h2>
          <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(230,200,80)] p-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[rgb(230,200,80)] text-xl">◈</span>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                <strong className="text-[rgb(230,200,80)]">Override Authority:</strong> The Ethics Committee 
                has the power to halt any Foundation operation deemed unethical, including those approved by 
                Site Directors or even the O5 Council in extreme cases.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[rgb(230,200,80)] text-xl">◈</span>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                <strong className="text-[rgb(230,200,80)]">Investigation Powers:</strong> Full access to all 
                Foundation records, facilities, and personnel for the purpose of ethical investigations and audits.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[rgb(230,200,80)] text-xl">◈</span>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                <strong className="text-[rgb(230,200,80)]">Disciplinary Action:</strong> Authority to recommend 
                disciplinary measures, including termination, demotion, or reassignment of personnel who violate 
                ethical guidelines.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[rgb(230,200,80)] text-xl">◈</span>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                <strong className="text-[rgb(230,200,80)]">Policy Making:</strong> Power to establish and update 
                ethical guidelines and policies that govern Foundation operations across all departments.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="scp-card p-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 pb-2 border-b-2 border-[rgb(100,100,100)]">
            CONTACT & REPORTING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-3">Report Ethical Concerns</h3>
              <p className="text-[rgb(200,200,200)] text-sm mb-4">
                All Foundation personnel are encouraged to report ethical concerns through secure channels.
              </p>
              <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4 space-y-2">
                <p className="text-xs text-[rgb(160,160,160)]">Secure Email:</p>
                <p className="text-sm text-[rgb(230,200,80)] font-mono font-bold">ethics@scp.foundation</p>
                <p className="text-xs text-[rgb(160,160,160)] mt-3">Hotline:</p>
                <p className="text-sm text-[rgb(230,200,80)] font-mono font-bold">EC-SECURE-LINE</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-3">Anonymous Reporting</h3>
              <p className="text-[rgb(200,200,200)] text-sm mb-4">
                Anonymous reporting is available for personnel who fear retaliation or prefer confidentiality.
              </p>
              <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4">
                <p className="text-sm text-[rgb(220,220,220)] mb-3">
                  All reports are investigated thoroughly and confidentiality is maintained to the fullest extent possible.
                </p>
                <p className="text-xs text-[rgb(160,160,160)] italic">
                  "We protect humanity. That includes the people who work for us."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

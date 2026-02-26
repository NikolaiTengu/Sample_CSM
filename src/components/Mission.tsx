'use client'

import Image from 'next/image'

export default function Mission() {
  return (
    <div className="min-h-screen bg-[rgb(17,17,17)]">
      {/* Top Security Banner */}
      <div className="bg-[rgb(187,0,0)] text-white text-center py-1 text-xs font-bold tracking-widest">
        ⚠ CLASSIFIED - LEVEL 4 CLEARANCE REQUIRED ⚠
      </div>

      {/* Header */}
      <header className="bg-[rgb(28,28,28)] border-b-4 border-[rgb(187,0,0)] shadow-[0_0_20px_rgba(187,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <Image 
                src="/raisa.png" 
                alt="RAISA Logo" 
                width={80} 
                height={80}
                className="filter drop-shadow-[0_0_10px_rgba(187,0,0,0.5)]"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[rgb(187,0,0)] scp-header">
                  SCP FOUNDATION
                </h1>
                <p className="text-sm md:text-base text-[rgb(160,160,160)] mt-1 tracking-wide">
                  Recordkeeping and Information Security Administration
                </p>
                <p className="text-xs text-[rgb(240,240,240)] mt-1 font-bold">
                  MISSION STATEMENT
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">CLASSIFIED</div>
              <p className="text-xs text-[rgb(160,160,160)]">DOCUMENT TYPE</p>
              <p className="text-lg font-semibold text-[rgb(240,240,240)] tracking-wider">DIRECTIVE</p>
              <p className="text-xs text-[rgb(187,0,0)] font-bold mt-1">RAISA-DIR-001</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Notice */}
        <div className="scp-card p-4 mb-6 border-[rgb(187,0,0)]">
          <p className="text-[rgb(187,0,0)] text-sm font-bold">
            ⚠ NOTICE: This document contains RAISA's core mission directives. 
            All personnel are required to review and adhere to these principles.
          </p>
        </div>

        {/* Primary Mission */}
        <div className="scp-card p-8 mb-8 border-2 border-[rgb(187,0,0)]">
          <h2 className="text-3xl font-bold text-[rgb(187,0,0)] scp-header mb-6 text-center flex items-center justify-center gap-3">
            <span className="text-4xl">■</span> PRIMARY MISSION <span className="text-4xl">■</span>
          </h2>
          
          <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(187,0,0)] p-8 text-center">
            <p className="text-xl text-[rgb(220,220,220)] leading-relaxed italic">
              "To secure, preserve, and control access to all classified information within the SCP Foundation 
              while maintaining the integrity and availability of critical documentation in support of global 
              containment operations."
            </p>
          </div>
        </div>

        {/* Core Objectives */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(187,0,0)] scp-header mb-6 flex items-center gap-2">
            <span className="text-3xl">■</span> CORE OBJECTIVES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[rgb(28,28,28)] border border-[rgb(187,0,0)] p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl text-[rgb(187,0,0)]">⚡</div>
                <div>
                  <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-2">INFORMATION SECURITY</h3>
                  <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                    Implement and maintain the highest standards of information security across all Foundation 
                    databases and documentation systems. Protect classified data from unauthorized access, 
                    breaches, and anomalous interference.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(187,0,0)] p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl text-[rgb(187,0,0)]">◈</div>
                <div>
                  <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-2">DATA INTEGRITY</h3>
                  <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                    Ensure the accuracy, completeness, and reliability of all Foundation records. Prevent 
                    data corruption, unauthorized modifications, and maintain comprehensive audit trails 
                    for all information access.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(187,0,0)] p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl text-[rgb(187,0,0)]">◆</div>
                <div>
                  <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-2">ACCESS CONTROL</h3>
                  <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                    Manage and enforce strict clearance-based access protocols. Verify authorization for 
                    all information requests and ensure that sensitive data is only accessible to personnel 
                    with appropriate security clearances.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(187,0,0)] p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl text-[rgb(187,0,0)]">▣</div>
                <div>
                  <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-2">PRESERVATION</h3>
                  <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                    Archive and preserve Foundation documentation for historical purposes and future 
                    reference. Implement long-term storage solutions that ensure data remains accessible 
                    and intact across decades.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(187,0,0)] p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl text-[rgb(187,0,0)]">◉</div>
                <div>
                  <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-2">SERVICE EXCELLENCE</h3>
                  <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                    Provide efficient and responsive information services to authorized Foundation personnel. 
                    Process document requests promptly while maintaining strict security protocols and 
                    quality standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(187,0,0)] p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl text-[rgb(187,0,0)]">▲</div>
                <div>
                  <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-2">CONTINUOUS IMPROVEMENT</h3>
                  <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                    Evaluate and enhance RAISA systems, processes, and protocols regularly. Adopt new 
                    technologies and methodologies to improve efficiency, security, and service quality 
                    in information management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Priorities */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(187,0,0)] scp-header mb-6 flex items-center gap-2">
            <span className="text-3xl">■</span> STRATEGIC PRIORITIES
          </h2>
          
          <div className="space-y-4">
            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(187,0,0)] p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-[rgb(187,0,0)]">PRIORITY ALPHA - CONTAINMENT SUPPORT</h3>
                <span className="text-xs bg-[rgb(187,0,0)] text-white px-3 py-1 font-bold">CRITICAL</span>
              </div>
              <p className="text-[rgb(220,220,220)] leading-relaxed">
                Ensure uninterrupted access to containment documentation and procedures. RAISA must maintain 
                99.99% uptime for critical systems supporting active containment operations. Any system failure 
                affecting containment protocols is classified as a Priority Alpha incident.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(187,0,0)] p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-[rgb(187,0,0)]">PRIORITY BETA - SECURITY ASSURANCE</h3>
                <span className="text-xs bg-[rgb(187,0,0)] text-white px-3 py-1 font-bold">HIGH</span>
              </div>
              <p className="text-[rgb(220,220,220)] leading-relaxed">
                Prevent unauthorized access to classified information at all costs. Implement multi-layered 
                security measures, conduct regular security audits, and respond immediately to any suspected 
                breach or anomalous activity within information systems.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(187,0,0)] p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-[rgb(187,0,0)]">PRIORITY GAMMA - OPERATIONAL EFFICIENCY</h3>
                <span className="text-xs bg-[rgb(187,0,0)] text-white px-3 py-1 font-bold">HIGH</span>
              </div>
              <p className="text-[rgb(220,220,220)] leading-relaxed">
                Streamline information request processing and reduce response times without compromising 
                security. Develop automated systems where appropriate and continuously optimize workflows 
                to enhance service delivery to Foundation personnel.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(187,0,0)] p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-[rgb(187,0,0)]">PRIORITY DELTA - KNOWLEDGE PRESERVATION</h3>
                <span className="text-xs bg-[rgb(187,0,0)] text-white px-3 py-1 font-bold">MEDIUM</span>
              </div>
              <p className="text-[rgb(220,220,220)] leading-relaxed">
                Safeguard Foundation institutional knowledge through comprehensive archival programs. Digitize 
                historical records, implement redundant backup systems, and ensure that critical information 
                remains accessible for future generations of Foundation personnel.
              </p>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="scp-card p-6">
            <div className="text-center mb-4">
              <div className="text-5xl text-[rgb(187,0,0)] mb-3">⚔</div>
              <h3 className="text-lg font-bold text-[rgb(187,0,0)]">VIGILANCE</h3>
            </div>
            <p className="text-[rgb(220,220,220)] text-sm text-center">
              Maintain constant awareness of threats to information security and respond proactively 
              to emerging risks.
            </p>
          </div>

          <div className="scp-card p-6">
            <div className="text-center mb-4">
              <div className="text-5xl text-[rgb(187,0,0)] mb-3">⚖</div>
              <h3 className="text-lg font-bold text-[rgb(187,0,0)]">INTEGRITY</h3>
            </div>
            <p className="text-[rgb(220,220,220)] text-sm text-center">
              Uphold the highest ethical standards in information management and never compromise 
              data accuracy or security.
            </p>
          </div>

          <div className="scp-card p-6">
            <div className="text-center mb-4">
              <div className="text-5xl text-[rgb(187,0,0)] mb-3">⚙</div>
              <h3 className="text-lg font-bold text-[rgb(187,0,0)]">EXCELLENCE</h3>
            </div>
            <p className="text-[rgb(220,220,220)] text-sm text-center">
              Strive for perfection in all aspects of recordkeeping and information security administration.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-[rgb(187,0,0)] text-center">
          <p className="text-[rgb(160,160,160)] text-xs">
            SCP FOUNDATION - RECORDKEEPING AND INFORMATION SECURITY ADMINISTRATION (RAISA)
          </p>
          <p className="text-[rgb(160,160,160)] text-xs mt-1">
            This document is the property of the SCP Foundation. Unauthorized distribution is prohibited.
          </p>
          <p className="text-[rgb(187,0,0)] text-xs mt-2 font-bold">
            CLASSIFIED MATERIAL - LEVEL 4 CLEARANCE
          </p>
        </div>
      </div>
    </div>
  )
}

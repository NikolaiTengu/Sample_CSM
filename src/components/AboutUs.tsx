'use client'

import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[rgb(17,17,17)]">
      {/* Top Security Banner */}
      <div className="bg-[rgb(139,34,34)] text-white text-center py-1 text-xs font-bold tracking-widest">
        ⚠ CLASSIFIED - LEVEL 4 CLEARANCE REQUIRED ⚠
      </div>

      {/* Header */}
      <header className="bg-[rgb(28,28,28)] border-b-4 border-[rgb(139,34,34)] shadow-[0_0_20px_rgba(139,34,34,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <Image 
                src="/raisa.png" 
                alt="RAISA Logo" 
                width={80} 
                height={80}
                className="filter drop-shadow-[0_0_10px_rgba(139,34,34,0.5)]"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[rgb(139,34,34)] scp-header">
                  SCP FOUNDATION
                </h1>
                <p className="text-sm md:text-base text-[rgb(160,160,160)] mt-1 tracking-wide">
                  Recordkeeping and Information Security Administration
                </p>
                <p className="text-xs text-[rgb(240,240,240)] mt-1 font-bold">
                  ABOUT RAISA
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">CLASSIFIED</div>
              <p className="text-xs text-[rgb(160,160,160)]">DOCUMENT TYPE</p>
              <p className="text-lg font-semibold text-[rgb(240,240,240)] tracking-wider">INFORMATIONAL</p>
              <p className="text-xs text-[rgb(139,34,34)] font-bold mt-1">RAISA-INFO-001</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Notice */}
        <div className="scp-card p-4 mb-6 border-[rgb(139,34,34)]">
          <p className="text-[rgb(139,34,34)] text-sm font-bold">
            ⚠ NOTICE: This document contains information about RAISA operations and organizational structure. 
            Distribution restricted to personnel with Level 4 clearance or above.
          </p>
        </div>

        {/* What is RAISA */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(139,34,34)] scp-header mb-6 flex items-center gap-2">
            <span className="text-3xl">■</span> WHAT IS RAISA?
          </h2>
          
          <div className="space-y-6 text-[rgb(220,220,220)]">
            <p className="text-lg leading-relaxed">
              The <span className="text-[rgb(139,34,34)] font-bold">Recordkeeping and Information Security Administration (RAISA)</span> 
              {' '}serves as the Foundation's primary authority on information management, database integrity, and the security 
              of classified documentation across all global facilities.
            </p>
            
            <p className="leading-relaxed">
              Established in 1954, RAISA was formed in response to the growing complexity of Foundation operations 
              and the critical need for centralized information control. As the Foundation expanded its containment 
              operations worldwide, the volume of sensitive documentation grew exponentially, necessitating a dedicated 
              department to maintain order, security, and accessibility.
            </p>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-6 my-6">
              <h3 className="text-lg font-bold text-[rgb(139,34,34)] mb-3">Core Responsibilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(139,34,34)] text-xl mt-1">▸</span>
                  <span>Maintain and secure all SCP object documentation and associated research files</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(139,34,34)] text-xl mt-1">▸</span>
                  <span>Manage Foundation-wide database infrastructure and ensure data integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(139,34,34)] text-xl mt-1">▸</span>
                  <span>Control access to classified information based on clearance levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(139,34,34)] text-xl mt-1">▸</span>
                  <span>Coordinate information security protocols across all Foundation sites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(139,34,34)] text-xl mt-1">▸</span>
                  <span>Process and respond to documentation requests from authorized personnel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(139,34,34)] text-xl mt-1">▸</span>
                  <span>Archive and preserve historical Foundation records for posterity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our History */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(139,34,34)] scp-header mb-6 flex items-center gap-2">
            <span className="text-3xl">■</span> OUR HISTORY
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[rgb(100,100,100)] pl-6 py-2">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-2">1954 - Foundation</div>
              <p className="text-[rgb(220,220,220)]">
                RAISA established as a centralized records management authority following the 
                Containment Crisis of 1953, which highlighted critical gaps in information security.
              </p>
            </div>

            <div className="border-l-4 border-[rgb(100,100,100)] pl-6 py-2">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-2">1967 - Digital Transition</div>
              <p className="text-[rgb(220,220,220)]">
                RAISA spearheaded the Foundation's first digital database initiative, transitioning 
                from paper-based documentation to electronic storage systems.
              </p>
            </div>

            <div className="border-l-4 border-[rgb(100,100,100)] pl-6 py-2">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-2">1983 - Global Network</div>
              <p className="text-[rgb(220,220,220)]">
                Completion of the Foundation-wide secure network infrastructure, enabling real-time 
                information sharing across all major sites under RAISA oversight.
              </p>
            </div>

            <div className="border-l-4 border-[rgb(100,100,100)] pl-6 py-2">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-2">1998 - Security Enhancement</div>
              <p className="text-[rgb(220,220,220)]">
                Implementation of advanced encryption protocols and multi-level access control 
                systems in response to increasing cyber threats.
              </p>
            </div>

            <div className="border-l-4 border-[rgb(100,100,100)] pl-6 py-2">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-2">2015 - Modern Era</div>
              <p className="text-[rgb(220,220,220)]">
                Launch of the Client Satisfaction Management System and integration of AI-assisted 
                document classification technologies.
              </p>
            </div>

            <div className="border-l-4 border-[rgb(139,34,34)] pl-6 py-2">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-2">2026 - Present Day</div>
              <p className="text-[rgb(220,220,220)]">
                RAISA continues to evolve, implementing cutting-edge information security measures 
                and maintaining its critical role in Foundation operations.
              </p>
            </div>
          </div>
        </div>

        {/* Our Structure */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(139,34,34)] scp-header mb-6 flex items-center gap-2">
            <span className="text-3xl">■</span> ORGANIZATIONAL STRUCTURE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-5">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-3">Records & Archival Office</div>
              <p className="text-[rgb(220,220,220)] text-sm">
                Manages physical and digital archives, preserves historical documents, and handles 
                document classification and retrieval.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-5">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-3">Technical Office</div>
              <p className="text-[rgb(220,220,220)] text-sm">
                Maintains database infrastructure, network systems, and provides technical support 
                for RAISA operations.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-5">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-3">Engineering Office</div>
              <p className="text-[rgb(220,220,220)] text-sm">
                Develops and implements technical solutions, automation systems, and specialized 
                software for information management.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-5">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-3">Security Office</div>
              <p className="text-[rgb(220,220,220)] text-sm">
                Oversees information security, access control, cybersecurity operations, and 
                responds to security incidents.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-5">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-3">Surveillance Division</div>
              <p className="text-[rgb(220,220,220)] text-sm">
                Monitors information access patterns, investigates anomalous activities, and 
                ensures compliance with security protocols.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-5">
              <div className="text-[rgb(139,34,34)] font-bold text-lg mb-3">Special Technology Applications</div>
              <p className="text-[rgb(220,220,220)] text-sm">
                Handles specialized technologies, anomalous data systems, and advanced research 
                and development projects.
              </p>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(139,34,34)] mb-2">70+</div>
            <div className="text-sm text-[rgb(160,160,160)]">YEARS OF SERVICE</div>
          </div>
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(139,34,34)] mb-2">24</div>
            <div className="text-sm text-[rgb(160,160,160)]">PERSONNEL</div>
          </div>
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(139,34,34)] mb-2">6</div>
            <div className="text-sm text-[rgb(160,160,160)]">DIVISIONS</div>
          </div>
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(139,34,34)] mb-2">24/7</div>
            <div className="text-sm text-[rgb(160,160,160)]">OPERATIONS</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-[rgb(139,34,34)] text-center">
          <p className="text-[rgb(160,160,160)] text-xs">
            SCP FOUNDATION - RECORDKEEPING AND INFORMATION SECURITY ADMINISTRATION (RAISA)
          </p>
          <p className="text-[rgb(160,160,160)] text-xs mt-1">
            This document is the property of the SCP Foundation. Unauthorized distribution is prohibited.
          </p>
          <p className="text-[rgb(139,34,34)] text-xs mt-2 font-bold">
            CLASSIFIED MATERIAL - LEVEL 4 CLEARANCE
          </p>
        </div>
      </div>
    </div>
  )
}

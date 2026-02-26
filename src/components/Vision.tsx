'use client'

import Image from 'next/image'

export default function Vision() {
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
                  VISION FOR THE FUTURE
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">CLASSIFIED</div>
              <p className="text-xs text-[rgb(160,160,160)]">DOCUMENT TYPE</p>
              <p className="text-lg font-semibold text-[rgb(240,240,240)] tracking-wider">STRATEGIC</p>
              <p className="text-xs text-[rgb(139,34,34)] font-bold mt-1">RAISA-STRAT-001</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Notice */}
        <div className="scp-card p-4 mb-6 border-[rgb(139,34,34)]">
          <p className="text-[rgb(139,34,34)] text-sm font-bold">
            ⚠ NOTICE: This document outlines RAISA's strategic vision and future direction. 
            Contents are restricted to Level 4 personnel and above.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="scp-card p-8 mb-8 border-2 border-[rgb(139,34,34)]">
          <h2 className="text-3xl font-bold text-[rgb(139,34,34)] scp-header mb-6 text-center flex items-center justify-center gap-3">
            <span className="text-4xl">■</span> OUR VISION <span className="text-4xl">■</span>
          </h2>
          
          <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-8 text-center mb-6">
            <p className="text-xl text-[rgb(220,220,220)] leading-relaxed italic">
              "To be the cornerstone of Foundation information security - an unbreakable fortress of knowledge 
              that empowers containment operations worldwide while adapting seamlessly to the evolving challenges 
              of anomalous threats and technological advancement."
            </p>
          </div>

          <div className="text-center text-[rgb(160,160,160)] text-sm">
            <p>A vision of excellence, security, and innovation in service to the Foundation's mission:</p>
            <p className="text-[rgb(139,34,34)] font-bold mt-2 text-lg">SECURE. CONTAIN. PROTECT.</p>
          </div>
        </div>

        {/* Future Goals */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(139,34,34)] scp-header mb-6 flex items-center gap-2">
            <span className="text-3xl">■</span> STRATEGIC GOALS (2026-2030)
          </h2>
          
          <div className="space-y-6">
            <div className="bg-[rgb(28,28,28)] border border-[rgb(139,34,34)] p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-[rgb(139,34,34)] font-bold">01</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(139,34,34)] mb-3">Next-Generation Security Infrastructure</h3>
                  <p className="text-[rgb(220,220,220)] mb-4 leading-relaxed">
                    Implement quantum-resistant encryption across all Foundation databases by 2028. Develop 
                    AI-powered threat detection systems capable of identifying and neutralizing security breaches 
                    in real-time, including those of anomalous origin.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">TARGET COMPLETION</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">Q4 2028</p>
                    </div>
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">PRIORITY LEVEL</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">ALPHA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(139,34,34)] p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-[rgb(139,34,34)] font-bold">02</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(139,34,34)] mb-3">Universal Information Access Protocol</h3>
                  <p className="text-[rgb(220,220,220)] mb-4 leading-relaxed">
                    Create a unified, secure platform enabling authorized personnel to access necessary documentation 
                    from any Foundation site worldwide with zero latency. Implement biometric authentication and 
                    context-aware access controls.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">TARGET COMPLETION</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">Q2 2027</p>
                    </div>
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">PRIORITY LEVEL</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">ALPHA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(139,34,34)] p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-[rgb(139,34,34)] font-bold">03</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(139,34,34)] mb-3">Automated Classification System</h3>
                  <p className="text-[rgb(220,220,220)] mb-4 leading-relaxed">
                    Deploy machine learning systems to automatically classify and tag new documentation, reducing 
                    processing time by 80% while maintaining 99.9% accuracy. Include natural language processing 
                    for contextual understanding of containment procedures.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">TARGET COMPLETION</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">Q3 2026</p>
                    </div>
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">PRIORITY LEVEL</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">BETA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(139,34,34)] p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-[rgb(139,34,34)] font-bold">04</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(139,34,34)] mb-3">Anomalous Data Resilience Program</h3>
                  <p className="text-[rgb(220,220,220)] mb-4 leading-relaxed">
                    Develop specialized systems for handling information affected by anomalous properties. Create 
                    containment protocols for cognitohazardous documents and establish redundant backup systems 
                    immune to temporal and reality-altering anomalies.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">TARGET COMPLETION</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">Q1 2029</p>
                    </div>
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">PRIORITY LEVEL</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">BETA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border border-[rgb(139,34,34)] p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-[rgb(139,34,34)] font-bold">05</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[rgb(139,34,34)] mb-3">Perpetual Archive Initiative</h3>
                  <p className="text-[rgb(220,220,220)] mb-4 leading-relaxed">
                    Establish off-site and off-world archive facilities ensuring Foundation knowledge survives 
                    any potential XK-class scenario. Implement self-maintaining archival systems designed to 
                    preserve information for millennia.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">TARGET COMPLETION</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">Q4 2030</p>
                    </div>
                    <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-3">
                      <p className="text-xs text-[rgb(160,160,160)] mb-1">PRIORITY LEVEL</p>
                      <p className="text-sm text-[rgb(139,34,34)] font-bold">GAMMA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Areas */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(139,34,34)] scp-header mb-6 flex items-center gap-2">
            <span className="text-3xl">■</span> INNOVATION FOCUS AREAS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-5">
              <h3 className="text-lg font-bold text-[rgb(139,34,34)] mb-3">Artificial Intelligence</h3>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                Leverage AI and machine learning for document analysis, threat detection, and automated 
                classification while maintaining human oversight.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-5">
              <h3 className="text-lg font-bold text-[rgb(139,34,34)] mb-3">Quantum Computing</h3>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                Research quantum computing applications for encryption, complex data analysis, and 
                simulation of anomalous information patterns.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-5">
              <h3 className="text-lg font-bold text-[rgb(139,34,34)] mb-3">Blockchain Technology</h3>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                Implement distributed ledger systems for immutable audit trails and tamper-proof 
                documentation of critical containment decisions.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-5">
              <h3 className="text-lg font-bold text-[rgb(139,34,34)] mb-3">Biometric Security</h3>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                Deploy advanced biometric authentication including neural patterns and genetic markers 
                to prevent identity spoofing and unauthorized access.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-5">
              <h3 className="text-lg font-bold text-[rgb(139,34,34)] mb-3">Holographic Storage</h3>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                Explore high-density holographic data storage solutions for long-term archival with 
                superior durability and capacity.
              </p>
            </div>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-5">
              <h3 className="text-lg font-bold text-[rgb(139,34,34)] mb-3">Cognitive Interfaces</h3>
              <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">
                Develop direct neural interfaces for rapid information access during emergency 
                containment situations, with proper memetic safeguards.
              </p>
            </div>
          </div>
        </div>

        {/* Long-Term Vision */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(139,34,34)] scp-header mb-6 flex items-center gap-2">
            <span className="text-3xl">■</span> BEYOND 2030
          </h2>
          
          <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-6 mb-6">
            <h3 className="text-lg font-bold text-[rgb(220,220,220)] mb-4">The Eternal Archive</h3>
            <p className="text-[rgb(220,220,220)] leading-relaxed mb-4">
              Looking beyond the immediate future, RAISA envisions the creation of a truly eternal archive - 
              a repository of Foundation knowledge that transcends conventional limitations of time and space. 
              This archive would be resilient against not only physical destruction but also temporal manipulation, 
              reality restructuring, and even universal heat death scenarios.
            </p>
            <p className="text-[rgb(220,220,220)] leading-relaxed">
              Through collaboration with Foundation research divisions studying anomalous phenomena, we aim to 
              develop information storage and retrieval systems that operate beyond conventional physics, ensuring 
              that humanity's accumulated knowledge of the anomalous remains accessible regardless of future circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[rgb(28,28,28)] border border-[rgb(100,100,100)]">
              <div className="text-4xl text-[rgb(139,34,34)] mb-3">∞</div>
              <h4 className="text-sm font-bold text-[rgb(139,34,34)] mb-2">PERMANENCE</h4>
              <p className="text-xs text-[rgb(220,220,220)]">
                Information that survives any scenario
              </p>
            </div>

            <div className="text-center p-6 bg-[rgb(28,28,28)] border border-[rgb(100,100,100)]">
              <div className="text-4xl text-[rgb(139,34,34)] mb-3">◈</div>
              <h4 className="text-sm font-bold text-[rgb(139,34,34)] mb-2">ACCESSIBILITY</h4>
              <p className="text-xs text-[rgb(220,220,220)]">
                Knowledge available when needed most
              </p>
            </div>

            <div className="text-center p-6 bg-[rgb(28,28,28)] border border-[rgb(100,100,100)]">
              <div className="text-4xl text-[rgb(139,34,34)] mb-3">⚡</div>
              <h4 className="text-sm font-bold text-[rgb(139,34,34)] mb-2">ADAPTABILITY</h4>
              <p className="text-xs text-[rgb(220,220,220)]">
                Systems that evolve with emerging threats
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="scp-card p-8 border-2 border-[rgb(139,34,34)] mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[rgb(139,34,34)] scp-header mb-4">OUR COMMITMENT</h2>
            <p className="text-lg text-[rgb(220,220,220)] leading-relaxed italic">
              "We, the personnel of RAISA, pledge to remain vigilant guardians of Foundation knowledge. 
              We will adapt to every challenge, overcome every obstacle, and ensure that the information 
              necessary for global containment remains secure, accurate, and accessible. Our vision guides us, 
              but our mission defines us: <span className="text-[rgb(139,34,34)] font-bold not-italic">Secure. Contain. Protect.</span>"
            </p>
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

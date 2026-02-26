'use client'

import Image from 'next/image'

export default function Home() {
  const quickLinks = [
    {
      title: 'Department Directory',
      description: 'View RAISA personnel and organizational structure',
      clearance: 4,
      icon: '◈'
    },
    {
      title: 'About RAISA',
      description: 'Learn about our history, mission, and operations',
      clearance: 4,
      icon: '◆'
    },
    {
      title: 'Contact Us',
      description: 'Reach out to RAISA divisions for assistance',
      clearance: 2,
      icon: '▣'
    },
    {
      title: 'Career Opportunities',
      description: 'Explore transfer opportunities to RAISA',
      clearance: 2,
      icon: '◉'
    },
    {
      title: 'Client Satisfaction',
      description: 'View service metrics and feedback reports',
      clearance: 3,
      icon: '▲'
    }
  ]

  const announcements = [
    {
      date: 'February 26, 2026',
      title: 'System Maintenance Scheduled',
      content: 'Database systems will undergo routine maintenance on March 1st, 02:00-04:00 UTC. Limited service interruption expected.',
      priority: 'normal'
    },
    {
      date: 'February 24, 2026',
      title: 'New Security Protocols',
      content: 'Updated information security protocols now in effect. All personnel must complete Security Training Module 2026-Q1 by March 15th.',
      priority: 'high'
    },
    {
      date: 'February 20, 2026',
      title: 'RAISA Career Opportunities',
      content: 'Multiple positions now open across all divisions. Current Foundation personnel are encouraged to apply for transfers.',
      priority: 'normal'
    }
  ]

  return (
    <div className="min-h-screen bg-[rgb(17,17,17)]">
      {/* Top Security Banner */}
      <div className="bg-[rgb(187,0,0)] text-white text-center py-1 text-xs font-bold tracking-widest">
        ⚠ CLASSIFIED - LEVEL 2 CLEARANCE REQUIRED ⚠
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
                  INFORMATION PORTAL
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">CLASSIFIED</div>
              <p className="text-xs text-[rgb(160,160,160)]">ACCESS LEVEL</p>
              <p className="text-lg font-semibold text-[rgb(240,240,240)] tracking-wider">LEVEL 2</p>
              <p className="text-xs text-[rgb(187,0,0)] font-bold mt-1">AUTHORIZED</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="scp-card p-8 mb-8 border-2 border-[rgb(187,0,0)]">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[rgb(187,0,0)] scp-header mb-4">
              WELCOME TO RAISA
            </h2>
            <p className="text-lg text-[rgb(220,220,220)] leading-relaxed max-w-3xl mx-auto">
              The Recordkeeping and Information Security Administration serves as the Foundation's 
              central authority for information management, database security, and classified 
              documentation across all global facilities.
            </p>
            <div className="mt-6 inline-block bg-[rgb(28,28,28)] border-2 border-[rgb(187,0,0)] px-6 py-3">
              <p className="text-sm text-[rgb(187,0,0)] font-bold">
                Your clearance level grants you access to general RAISA information and services
              </p>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(187,0,0)] mb-2">70+</div>
            <div className="text-xs text-[rgb(160,160,160)]">YEARS OF SERVICE</div>
          </div>
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(187,0,0)] mb-2">24</div>
            <div className="text-xs text-[rgb(160,160,160)]">PERSONNEL</div>
          </div>
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(187,0,0)] mb-2">6</div>
            <div className="text-xs text-[rgb(160,160,160)]">DIVISIONS</div>
          </div>
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(187,0,0)] mb-2">24/7</div>
            <div className="text-xs text-[rgb(160,160,160)]">OPERATIONS</div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[rgb(187,0,0)] scp-header mb-4 flex items-center gap-2">
            <span className="text-2xl">■</span> QUICK ACCESS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <div 
                key={index} 
                className="scp-card p-5 hover:border-[rgb(187,0,0)] transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-[rgb(187,0,0)]">{link.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[rgb(220,220,220)] mb-2">{link.title}</h3>
                    <p className="text-xs text-[rgb(160,160,160)] mb-3">{link.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-[rgb(187,0,0)] text-white px-2 py-1 font-bold">
                        LEVEL {link.clearance}
                      </span>
                      {link.clearance <= 2 ? (
                        <span className="text-xs text-green-500">✓ ACCESSIBLE</span>
                      ) : (
                        <span className="text-xs text-yellow-500">⚠ RESTRICTED</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements and Updates */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-[rgb(187,0,0)] scp-header mb-4 flex items-center gap-2">
              <span className="text-2xl">■</span> ANNOUNCEMENTS
            </h2>
            
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="scp-card p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-base font-bold text-[rgb(220,220,220)] mb-1">
                        {announcement.title}
                      </h3>
                      <p className="text-xs text-[rgb(160,160,160)]">{announcement.date}</p>
                    </div>
                    {announcement.priority === 'high' && (
                      <span className="text-xs bg-[rgb(187,0,0)] text-white px-3 py-1 font-bold">
                        HIGH PRIORITY
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[rgb(220,220,220)] leading-relaxed">
                    {announcement.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[rgb(187,0,0)] scp-header mb-4 flex items-center gap-2">
              <span className="text-2xl">■</span> RAISA SERVICES
            </h2>
            
            <div className="space-y-4">
              <div className="scp-card p-4">
                <h3 className="text-sm font-bold text-[rgb(187,0,0)] mb-2">Document Retrieval</h3>
                <p className="text-xs text-[rgb(220,220,220)] mb-2">
                  Access archived documents and classified records
                </p>
                <p className="text-xs text-[rgb(160,160,160)]">Response: 24-48 hours</p>
              </div>

              <div className="scp-card p-4">
                <h3 className="text-sm font-bold text-[rgb(187,0,0)] mb-2">Technical Support</h3>
                <p className="text-xs text-[rgb(220,220,220)] mb-2">
                  Database access and system assistance
                </p>
                <p className="text-xs text-[rgb(160,160,160)]">Response: 2-4 hours</p>
              </div>

              <div className="scp-card p-4">
                <h3 className="text-sm font-bold text-[rgb(187,0,0)] mb-2">Security Services</h3>
                <p className="text-xs text-[rgb(220,220,220)] mb-2">
                  Clearance verification and access requests
                </p>
                <p className="text-xs text-[rgb(160,160,160)]">Response: 1-2 hours</p>
              </div>

              <div className="scp-card p-4">
                <h3 className="text-sm font-bold text-[rgb(187,0,0)] mb-2">Information Security</h3>
                <p className="text-xs text-[rgb(220,220,220)] mb-2">
                  Report breaches and security concerns
                </p>
                <p className="text-xs text-[rgb(160,160,160)]">Response: IMMEDIATE</p>
              </div>
            </div>
          </div>
        </div>

        {/* RAISA Mission Statement */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-xl font-bold text-[rgb(187,0,0)] scp-header mb-4 flex items-center gap-2">
            <span className="text-2xl">■</span> OUR MISSION
          </h2>
          
          <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(187,0,0)] p-6">
            <p className="text-base text-[rgb(220,220,220)] leading-relaxed italic">
              "To secure, preserve, and control access to all classified information within the SCP Foundation 
              while maintaining the integrity and availability of critical documentation in support of global 
              containment operations."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="text-4xl text-[rgb(187,0,0)] mb-3">⚔</div>
              <h3 className="text-sm font-bold text-[rgb(187,0,0)] mb-2">VIGILANCE</h3>
              <p className="text-xs text-[rgb(220,220,220)]">
                Constant awareness of security threats
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[rgb(187,0,0)] mb-3">⚖</div>
              <h3 className="text-sm font-bold text-[rgb(187,0,0)] mb-2">INTEGRITY</h3>
              <p className="text-xs text-[rgb(220,220,220)]">
                Highest ethical standards maintained
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-[rgb(187,0,0)] mb-3">⚙</div>
              <h3 className="text-sm font-bold text-[rgb(187,0,0)] mb-2">EXCELLENCE</h3>
              <p className="text-xs text-[rgb(220,220,220)]">
                Perfection in information security
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="scp-card p-6 border-2 border-[rgb(187,0,0)] mb-8">
          <div className="text-center">
            <div className="text-5xl text-[rgb(187,0,0)] mb-4">⚠</div>
            <h2 className="text-xl font-bold text-[rgb(187,0,0)] mb-3">EMERGENCY CONTACT</h2>
            <p className="text-sm text-[rgb(220,220,220)] mb-4">
              For security breaches, critical system failures, or urgent containment-related information needs:
            </p>
            <div className="inline-block bg-[rgb(28,28,28)] border border-[rgb(187,0,0)] px-8 py-4">
              <p className="text-lg font-bold text-[rgb(187,0,0)] mb-2">RAISA EMERGENCY HOTLINE</p>
              <p className="text-2xl font-bold text-[rgb(220,220,220)]">6-9911</p>
              <p className="text-xs text-[rgb(160,160,160)] mt-2">IMMEDIATE RESPONSE • 24/7</p>
            </div>
          </div>
        </div>

        {/* Access Notice */}
        <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(187,0,0)] p-6 mb-8">
          <h3 className="text-sm font-bold text-[rgb(187,0,0)] mb-3">ACCESS REQUIREMENTS</h3>
          <div className="space-y-2 text-xs text-[rgb(220,220,220)]">
            <p>
              <span className="text-[rgb(187,0,0)]">▸</span> Level 2 clearance grants access to general RAISA information, contact services, and career opportunities
            </p>
            <p>
              <span className="text-[rgb(187,0,0)]">▸</span> Level 3+ clearance required for detailed operational data and client satisfaction metrics
            </p>
            <p>
              <span className="text-[rgb(187,0,0)]">▸</span> Level 4+ clearance required for personnel directory, departmental details, and strategic documentation
            </p>
            <p>
              <span className="text-[rgb(187,0,0)]">▸</span> All access is logged and monitored for security purposes
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-[rgb(187,0,0)] text-center">
          <p className="text-[rgb(160,160,160)] text-xs">
            SCP FOUNDATION - RECORDKEEPING AND INFORMATION SECURITY ADMINISTRATION (RAISA)
          </p>
          <p className="text-[rgb(160,160,160)] text-xs mt-1">
            This portal is the property of the SCP Foundation. Unauthorized access is prohibited.
          </p>
          <p className="text-[rgb(187,0,0)] text-xs mt-2 font-bold">
            CLASSIFIED MATERIAL - LEVEL 2 CLEARANCE
          </p>
          <p className="text-[rgb(160,160,160)] text-xs mt-4">
            Secure. Contain. Protect.
          </p>
        </div>
      </div>
    </div>
  )
}

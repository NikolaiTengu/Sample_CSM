'use client'

import { useState } from 'react'
import Image from 'next/image'

interface JobPosting {
  id: string;
  title: string;
  division: string;
  clearanceLevel: number;
  employmentType: 'Full-Time' | 'Transfer' | 'Temporary Assignment';
  status: 'Open' | 'Urgent' | 'Closing Soon';
  description: string;
  responsibilities: string[];
  requirements: string[];
  qualifications: string[];
  location: string;
  posted: string;
}

const jobPostings: JobPosting[] = [
  {
    id: 'RAISA-2026-001',
    title: 'Senior Information Security Analyst',
    division: 'Security Office',
    clearanceLevel: 4,
    employmentType: 'Transfer',
    status: 'Urgent',
    description: 'RAISA Security Office seeks experienced information security analyst to enhance our cybersecurity protocols and respond to advanced persistent threats, including those of anomalous origin.',
    responsibilities: [
      'Monitor and analyze security threats across Foundation networks',
      'Conduct penetration testing and vulnerability assessments',
      'Develop and implement security countermeasures',
      'Respond to security incidents and breaches',
      'Coordinate with site security teams on information protection'
    ],
    requirements: [
      'Level 3 or higher security clearance',
      '5+ years experience in cybersecurity',
      'Experience with anomalous data systems preferred',
      'Knowledge of Foundation security protocols',
      'Ability to work under high-stress situations'
    ],
    qualifications: [
      'CISSP or equivalent certification',
      'Advanced knowledge of network security',
      'Experience with incident response',
      'Understanding of memetic hazard containment'
    ],
    location: 'Site-01 / Remote Sites',
    posted: 'February 15, 2026'
  },
  {
    id: 'RAISA-2026-002',
    title: 'Database Administrator - Specialized Systems',
    division: 'Technical Office',
    clearanceLevel: 3,
    employmentType: 'Transfer',
    status: 'Open',
    description: 'Technical Office requires database administrator with experience in high-security environments to manage and optimize Foundation-wide database infrastructure.',
    responsibilities: [
      'Maintain and optimize database systems',
      'Implement backup and disaster recovery procedures',
      'Monitor database performance and integrity',
      'Manage user access and permissions',
      'Coordinate database upgrades and migrations'
    ],
    requirements: [
      'Level 3 security clearance',
      '3+ years database administration experience',
      'SQL and NoSQL database expertise',
      'Experience with encrypted databases',
      'Foundation IT systems familiarity'
    ],
    qualifications: [
      'Bachelor\'s degree in Computer Science or related field',
      'Oracle/MySQL/PostgreSQL certification',
      'Experience with cloud database solutions',
      'Scripting and automation skills'
    ],
    location: 'Site-01',
    posted: 'February 18, 2026'
  },
  {
    id: 'RAISA-2026-003',
    title: 'Archival Specialist - Digital Preservation',
    division: 'Records & Archival Office',
    clearanceLevel: 3,
    employmentType: 'Full-Time',
    status: 'Open',
    description: 'Records & Archival Office seeks detail-oriented archival specialist to manage digital preservation initiatives and maintain the integrity of historical Foundation documentation.',
    responsibilities: [
      'Digitize physical documents and records',
      'Implement digital preservation standards',
      'Catalog and index archival materials',
      'Manage metadata systems',
      'Assist researchers with archival access requests'
    ],
    requirements: [
      'Level 2 or higher security clearance (Level 3 preferred)',
      '2+ years archival or library science experience',
      'Knowledge of archival standards and best practices',
      'Attention to detail and organizational skills',
      'Ability to handle classified materials'
    ],
    qualifications: [
      'Master\'s degree in Library Science, Archival Studies, or related field',
      'Experience with digital asset management systems',
      'Knowledge of preservation technologies',
      'Familiarity with classification systems'
    ],
    location: 'Site-01',
    posted: 'February 20, 2026'
  },
  {
    id: 'RAISA-2026-004',
    title: 'Anomalous Systems Engineer',
    division: 'Special Technology Applications Group',
    clearanceLevel: 4,
    employmentType: 'Transfer',
    status: 'Urgent',
    description: 'STAG division urgently requires systems engineer with experience handling anomalous technology to develop and maintain specialized information systems resistant to anomalous interference.',
    responsibilities: [
      'Design systems for handling anomalous data',
      'Develop countermeasures for reality-altering effects',
      'Research and implement advanced containment technologies',
      'Test and validate specialized systems',
      'Collaborate with Research Division on technology integration'
    ],
    requirements: [
      'Level 4 security clearance mandatory',
      '4+ years engineering experience',
      'Direct experience with anomalous objects or phenomena',
      'Knowledge of Scranton Reality Anchors and related tech',
      'Willingness to work with potentially hazardous systems'
    ],
    qualifications: [
      'Advanced degree in Engineering, Physics, or related field',
      'Experience with Foundation anomalous technology',
      'Problem-solving skills in high-uncertainty environments',
      'Clearance for Thaumiel-class access'
    ],
    location: 'Site-01 / Site-19',
    posted: 'February 10, 2026'
  },
  {
    id: 'RAISA-2026-005',
    title: 'Surveillance Data Analyst',
    division: 'Surveillance Division',
    clearanceLevel: 3,
    employmentType: 'Full-Time',
    status: 'Open',
    description: 'Surveillance Division seeks analytical professional to monitor information access patterns and identify potential security anomalies across Foundation databases.',
    responsibilities: [
      'Analyze access logs and usage patterns',
      'Identify unusual or unauthorized activities',
      'Generate surveillance reports',
      'Support security investigations',
      'Maintain surveillance systems and tools'
    ],
    requirements: [
      'Level 3 security clearance',
      '2+ years data analysis experience',
      'Strong analytical and pattern recognition skills',
      'Experience with log analysis tools',
      'Understanding of information security principles'
    ],
    qualifications: [
      'Bachelor\'s degree in Data Science, Statistics, or related field',
      'Proficiency in SQL and data analysis software',
      'Experience with machine learning tools preferred',
      'Strong attention to detail'
    ],
    location: 'Site-01',
    posted: 'February 22, 2026'
  },
  {
    id: 'RAISA-2026-006',
    title: 'Software Engineer - Automation Systems',
    division: 'Engineering Office',
    clearanceLevel: 3,
    employmentType: 'Transfer',
    status: 'Closing Soon',
    description: 'Engineering Office requires skilled software engineer to develop automated classification and processing systems for Foundation documentation.',
    responsibilities: [
      'Develop internal software applications',
      'Implement document classification automation',
      'Maintain and update existing systems',
      'Write clean, documented code',
      'Collaborate with divisions on technical requirements'
    ],
    requirements: [
      'Level 3 security clearance',
      '3+ years software development experience',
      'Proficiency in Python, JavaScript, or similar languages',
      'Experience with machine learning/AI preferred',
      'Foundation development standards knowledge'
    ],
    qualifications: [
      'Bachelor\'s degree in Computer Science or related field',
      'Experience with full-stack development',
      'Knowledge of natural language processing',
      'Git and version control systems'
    ],
    location: 'Site-01',
    posted: 'February 8, 2026'
  },
  {
    id: 'RAISA-2026-007',
    title: 'Records Classification Officer',
    division: 'Records & Archival Office',
    clearanceLevel: 4,
    employmentType: 'Transfer',
    status: 'Open',
    description: 'Senior position for experienced Foundation personnel to review and classify SCP documentation according to security protocols and clearance requirements.',
    responsibilities: [
      'Review and classify SCP documentation',
      'Assign appropriate clearance levels',
      'Process declassification requests',
      'Ensure compliance with classification standards',
      'Train junior staff on classification procedures'
    ],
    requirements: [
      'Level 4 security clearance mandatory',
      '5+ years Foundation experience',
      'Extensive knowledge of SCP classification system',
      'Strong judgment and decision-making skills',
      'Experience with sensitive information handling'
    ],
    qualifications: [
      'Background in research or containment preferred',
      'Understanding of memetic and cognitohazard protocols',
      'Excellent analytical skills',
      'Previous classification experience required'
    ],
    location: 'Site-01',
    posted: 'February 12, 2026'
  },
  {
    id: 'RAISA-2026-008',
    title: 'Technical Support Specialist',
    division: 'Technical Office',
    clearanceLevel: 2,
    employmentType: 'Full-Time',
    status: 'Open',
    description: 'Entry-level technical support position for Foundation personnel seeking to advance in information technology within a secure environment.',
    responsibilities: [
      'Provide technical support to RAISA personnel',
      'Troubleshoot hardware and software issues',
      'Assist with user account management',
      'Document technical issues and solutions',
      'Support system maintenance activities'
    ],
    requirements: [
      'Level 2 security clearance (Level 3 pathway available)',
      '1+ years IT support experience',
      'Strong troubleshooting skills',
      'Customer service orientation',
      'Ability to work in classified environments'
    ],
    qualifications: [
      'CompTIA A+ or equivalent certification',
      'Basic networking knowledge',
      'Windows and Linux familiarity',
      'Strong communication skills'
    ],
    location: 'Site-01',
    posted: 'February 24, 2026'
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    employeeId: '',
    currentSite: '',
    currentDepartment: '',
    clearanceLevel: '',
    yearsOfService: '',
    email: '',
    phone: '',
    supervisor: '',
    reason: '',
    availability: '',
    additionalInfo: ''
  })

  const handleOpenForm = (job: JobPosting) => {
    setSelectedJob(job)
    setShowForm(true)
    setFormSubmitted(false)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setSelectedJob(null)
    setFormData({
      fullName: '',
      employeeId: '',
      currentSite: '',
      currentDepartment: '',
      clearanceLevel: '',
      yearsOfService: '',
      email: '',
      phone: '',
      supervisor: '',
      reason: '',
      availability: '',
      additionalInfo: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Simulate form submission - in a real app, this would send data to a server
    setTimeout(() => {
      handleCloseForm()
    }, 3000)
  }

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
                src="/raisa.png" 
                alt="RAISA Logo" 
                width={80} 
                height={80}
                className="filter drop-shadow-[0_0_10px_rgba(230,200,80,0.5)]"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[rgb(230,200,80)] scp-header">
                  SCP FOUNDATION
                </h1>
                <p className="text-sm md:text-base text-[rgb(160,160,160)] mt-1 tracking-wide">
                  Recordkeeping and Information Security Administration
                </p>
                <p className="text-xs text-[rgb(240,240,240)] mt-1 font-bold">
                  CAREER OPPORTUNITIES & TRANSFERS
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">INTERNAL</div>
              <p className="text-xs text-[rgb(160,160,160)]">UPDATED</p>
              <p className="text-lg font-semibold text-[rgb(240,240,240)] tracking-wider">FEB 2026</p>
              <p className="text-xs text-[rgb(230,200,80)] font-bold mt-1">RAISA-HR-026</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Notice */}
        <div className="scp-card p-4 mb-6 border-[rgb(230,200,80)]">
          <p className="text-[rgb(230,200,80)] text-sm font-bold">
            ⚠ NOTICE: All positions listed are restricted to current Foundation personnel. 
            External recruitment is not permitted. Applicants must possess appropriate clearance levels 
            and pass RAISA security screening.
          </p>
        </div>

        {/* Introduction */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(230,200,80)] scp-header mb-4 flex items-center gap-2">
            <span className="text-3xl">■</span> JOIN RAISA
          </h2>
          
          <div className="space-y-4 text-[rgb(220,220,220)]">
            <p className="leading-relaxed">
              The Recordkeeping and Information Security Administration is seeking qualified Foundation 
              personnel for various positions across our divisions. RAISA offers unique opportunities 
              to work at the heart of Foundation information infrastructure, supporting global containment 
              operations through secure and efficient information management.
            </p>
            <p className="leading-relaxed">
              We value expertise, dedication, and the ability to maintain the highest standards of security 
              and professionalism. All positions require strict adherence to information security protocols 
              and Foundation confidentiality requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4 text-center">
              <div className="text-3xl font-bold text-[rgb(230,200,80)] mb-2">{jobPostings.length}</div>
              <div className="text-xs text-[rgb(160,160,160)]">OPEN POSITIONS</div>
            </div>
            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4 text-center">
              <div className="text-3xl font-bold text-[rgb(230,200,80)] mb-2">6</div>
              <div className="text-xs text-[rgb(160,160,160)]">DIVISIONS HIRING</div>
            </div>
            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4 text-center">
              <div className="text-3xl font-bold text-[rgb(230,200,80)] mb-2">24/7</div>
              <div className="text-xs text-[rgb(160,160,160)]">OPERATIONS</div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[rgb(230,200,80)] scp-header mb-4 flex items-center gap-2">
            <span className="text-2xl">■</span> CURRENT OPENINGS
          </h2>
          
          <div className="space-y-6">
            {jobPostings.map((job) => (
              <div key={job.id} className="scp-card p-6">
                {/* Job Header */}
                <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[rgb(220,220,220)]">{job.title}</h3>
                      <span className={`text-xs font-bold px-3 py-1 ${
                        job.status === 'Urgent' ? 'bg-[rgb(230,200,80)] text-white' :
                        job.status === 'Closing Soon' ? 'bg-yellow-600 text-white' :
                        'bg-[rgb(100,100,100)] text-white'
                      }`}>
                        {job.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[rgb(160,160,160)] flex-wrap">
                      <span className="flex items-center gap-1">
                        <span className="text-[rgb(230,200,80)]">◆</span> {job.division}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-[rgb(230,200,80)]">◆</span> Level {job.clearanceLevel} Clearance
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-[rgb(230,200,80)]">◆</span> {job.employmentType}
                      </span>
                    </div>
                    <p className="text-xs text-[rgb(230,200,80)] font-bold mt-2">{job.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[rgb(160,160,160)]">POSTED</p>
                    <p className="text-sm text-[rgb(220,220,220)]">{job.posted}</p>
                    <p className="text-xs text-[rgb(160,160,160)] mt-1">{job.location}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-[rgb(220,220,220)] leading-relaxed">{job.description}</p>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-bold text-[rgb(230,200,80)] mb-2">KEY RESPONSIBILITIES</h4>
                    <ul className="space-y-1">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="text-xs text-[rgb(220,220,220)] flex items-start gap-2">
                          <span className="text-[rgb(230,200,80)] mt-0.5">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-sm font-bold text-[rgb(230,200,80)] mb-2">REQUIREMENTS</h4>
                    <ul className="space-y-1 mb-4">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-xs text-[rgb(220,220,220)] flex items-start gap-2">
                          <span className="text-[rgb(230,200,80)] mt-0.5">▸</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-bold text-[rgb(230,200,80)] mb-2">PREFERRED QUALIFICATIONS</h4>
                    <ul className="space-y-1">
                      {job.qualifications.map((qual, index) => (
                        <li key={index} className="text-xs text-[rgb(220,220,220)] flex items-start gap-2">
                          <span className="text-[rgb(230,200,80)] mt-0.5">▸</span>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="mt-6 pt-4 border-t border-[rgb(100,100,100)]">
                  <button 
                    onClick={() => handleOpenForm(job)}
                    className="bg-[rgb(230,200,80)] hover:bg-[rgb(200,170,50)] text-white font-bold py-3 px-6 text-sm transition-colors"
                  >
                    ► SUBMIT TRANSFER REQUEST
                  </button>
                  <p className="text-xs text-[rgb(160,160,160)] mt-2">
                    Applications processed through Foundation Internal Transfer System • Requires supervisor approval
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="scp-card p-6">
            <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-4">WHY JOIN RAISA?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[rgb(230,200,80)] text-xl">◆</span>
                <div>
                  <p className="text-sm font-bold text-[rgb(220,220,220)]">Critical Mission</p>
                  <p className="text-xs text-[rgb(160,160,160)]">Work at the heart of Foundation operations</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[rgb(230,200,80)] text-xl">◆</span>
                <div>
                  <p className="text-sm font-bold text-[rgb(220,220,220)]">Career Advancement</p>
                  <p className="text-xs text-[rgb(160,160,160)]">Clear pathways to senior positions</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[rgb(230,200,80)] text-xl">◆</span>
                <div>
                  <p className="text-sm font-bold text-[rgb(220,220,220)]">Specialized Training</p>
                  <p className="text-xs text-[rgb(160,160,160)]">Access to advanced technical and security training</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[rgb(230,200,80)] text-xl">◆</span>
                <div>
                  <p className="text-sm font-bold text-[rgb(220,220,220)]">Inter-Site Opportunities</p>
                  <p className="text-xs text-[rgb(160,160,160)]">Possibility of assignment to multiple Foundation sites</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="scp-card p-6">
            <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-4">APPLICATION PROCESS</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[rgb(230,200,80)] text-white font-bold text-sm w-8 h-8 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-sm font-bold text-[rgb(220,220,220)]">Submit Transfer Request</p>
                  <p className="text-xs text-[rgb(160,160,160)]">Through Foundation Internal Portal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[rgb(230,200,80)] text-white font-bold text-sm w-8 h-8 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-sm font-bold text-[rgb(220,220,220)]">Security Screening</p>
                  <p className="text-xs text-[rgb(160,160,160)]">RAISA background check and clearance verification</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[rgb(230,200,80)] text-white font-bold text-sm w-8 h-8 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-sm font-bold text-[rgb(220,220,220)]">Interview Process</p>
                  <p className="text-xs text-[rgb(160,160,160)]">Technical assessment and panel interview</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[rgb(230,200,80)] text-white font-bold text-sm w-8 h-8 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="text-sm font-bold text-[rgb(220,220,220)]">Transfer Approval</p>
                  <p className="text-xs text-[rgb(160,160,160)]">Final approval and onboarding schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="scp-card p-6 text-center">
          <h3 className="text-lg font-bold text-[rgb(230,200,80)] mb-3">QUESTIONS ABOUT POSITIONS?</h3>
          <p className="text-sm text-[rgb(220,220,220)] mb-4">
            Contact RAISA Human Resources through Foundation Internal Communications
          </p>
          <div className="text-xs text-[rgb(160,160,160)]">
            <p>Email: raisa.hr@foundation.scp</p>
            <p>Internal Extension: 6-2472</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-[rgb(230,200,80)] text-center">
          <p className="text-[rgb(160,160,160)] text-xs">
            SCP FOUNDATION - RECORDKEEPING AND INFORMATION SECURITY ADMINISTRATION (RAISA)
          </p>
          <p className="text-[rgb(160,160,160)] text-xs mt-1">
            Equal Opportunity Employer • All positions subject to security clearance requirements
          </p>
          <p className="text-[rgb(230,200,80)] text-xs mt-2 font-bold">
            INTERNAL USE ONLY - FOUNDATION PERSONNEL ONLY
          </p>
        </div>
      </div>

      {/* Application Form Modal */}
      {showForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-[rgb(28,28,28)] border-4 border-[rgb(230,200,80)] max-w-3xl w-full my-8 shadow-[0_0_30px_rgba(230,200,80,0.5)]">
            {/* Modal Header */}
            <div className="bg-[rgb(230,200,80)] px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">TRANSFER REQUEST FORM</h3>
                <p className="text-sm text-white/80 mt-1">Form ID: RAISA-TR-{selectedJob.id}</p>
              </div>
              <button 
                onClick={handleCloseForm}
                className="text-white hover:text-gray-300 text-3xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {/* Position Applied For */}
                  <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-4 mb-6">
                    <p className="text-xs text-[rgb(160,160,160)] mb-1">POSITION APPLIED FOR</p>
                    <p className="text-lg font-bold text-[rgb(230,200,80)]">{selectedJob.title}</p>
                    <p className="text-sm text-[rgb(220,220,220)]">{selectedJob.division} • {selectedJob.id}</p>
                  </div>

                  {/* Personal Information */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[rgb(230,200,80)] mb-4 border-b border-[rgb(100,100,100)] pb-2">
                      ■ PERSONAL INFORMATION
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          FULL NAME <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          EMPLOYEE ID <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="employeeId"
                          value={formData.employeeId}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                          placeholder="e.g., EMP-12345"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          EMAIL ADDRESS <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                          placeholder="email@foundation.scp"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          PHONE EXTENSION <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                          placeholder="e.g., 6-2472"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Assignment */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[rgb(230,200,80)] mb-4 border-b border-[rgb(100,100,100)] pb-2">
                      ■ CURRENT ASSIGNMENT
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          CURRENT SITE <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="currentSite"
                          value={formData.currentSite}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                          placeholder="e.g., Site-19"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          CURRENT DEPARTMENT <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="currentDepartment"
                          value={formData.currentDepartment}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                          placeholder="e.g., Research Division"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          CLEARANCE LEVEL <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <select
                          name="clearanceLevel"
                          value={formData.clearanceLevel}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                        >
                          <option value="">Select Level</option>
                          <option value="1">Level 1</option>
                          <option value="2">Level 2</option>
                          <option value="3">Level 3</option>
                          <option value="4">Level 4</option>
                          <option value="5">Level 5</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          YEARS OF SERVICE <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <input
                          type="number"
                          name="yearsOfService"
                          value={formData.yearsOfService}
                          onChange={handleInputChange}
                          required
                          min="0"
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                          placeholder="Years"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Supervisor Information */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[rgb(230,200,80)] mb-4 border-b border-[rgb(100,100,100)] pb-2">
                      ■ SUPERVISOR INFORMATION
                    </h4>
                    <div>
                      <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                        CURRENT SUPERVISOR NAME <span className="text-[rgb(230,200,80)]">*</span>
                      </label>
                      <input
                        type="text"
                        name="supervisor"
                        value={formData.supervisor}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                        placeholder="Supervisor's full name"
                      />
                      <p className="text-xs text-[rgb(160,160,160)] mt-2">
                        ⚠ Supervisor approval will be required before transfer can be processed
                      </p>
                    </div>
                  </div>

                  {/* Transfer Details */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[rgb(230,200,80)] mb-4 border-b border-[rgb(100,100,100)] pb-2">
                      ■ TRANSFER DETAILS
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          AVAILABILITY DATE <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <input
                          type="date"
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          REASON FOR TRANSFER REQUEST <span className="text-[rgb(230,200,80)]">*</span>
                        </label>
                        <textarea
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none resize-none"
                          placeholder="Explain why you are interested in transferring to this position..."
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          ADDITIONAL INFORMATION
                        </label>
                        <textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(230,200,80)] focus:outline-none resize-none"
                          placeholder="Any additional qualifications or information you'd like to share..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-[rgb(17,17,17)] border-l-4 border-[rgb(230,200,80)] p-4 mb-6">
                    <p className="text-xs text-[rgb(220,220,220)] leading-relaxed">
                      By submitting this transfer request, I acknowledge that all information provided is accurate 
                      and complete. I understand that this request is subject to approval from both my current 
                      supervisor and RAISA administration, and that transfer is contingent upon passing RAISA 
                      security screening and meeting all position requirements.
                    </p>
                  </div>

                  {/* Form Actions */}
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-[rgb(230,200,80)] hover:bg-[rgb(200,170,50)] text-white font-bold py-3 px-6 text-sm transition-colors"
                    >
                      ► SUBMIT TRANSFER REQUEST
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseForm}
                      className="px-6 py-3 bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] font-bold text-sm hover:bg-[rgb(28,28,28)] transition-colors"
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              ) : (
                // Success Message
                <div className="text-center py-12">
                  <div className="text-6xl text-[rgb(230,200,80)] mb-6">✓</div>
                  <h3 className="text-2xl font-bold text-[rgb(230,200,80)] mb-4">REQUEST SUBMITTED</h3>
                  <p className="text-[rgb(220,220,220)] mb-2">
                    Your transfer request has been successfully submitted.
                  </p>
                  <p className="text-sm text-[rgb(160,160,160)] mb-6">
                    Reference ID: TR-{selectedJob.id}-{Date.now().toString().slice(-6)}
                  </p>
                  <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-4 max-w-lg mx-auto text-left">
                    <p className="text-xs text-[rgb(220,220,220)] leading-relaxed">
                      <strong className="text-[rgb(230,200,80)]">NEXT STEPS:</strong><br/>
                      • RAISA HR will review your application within 5-7 business days<br/>
                      • Your current supervisor will be contacted for approval<br/>
                      • You will be notified via internal email regarding next steps<br/>
                      • Security screening will be scheduled if approved
                    </p>
                  </div>
                  <button
                    onClick={handleCloseForm}
                    className="mt-6 bg-[rgb(230,200,80)] hover:bg-[rgb(200,170,50)] text-white font-bold py-3 px-6 text-sm transition-colors"
                  >
                    CLOSE
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

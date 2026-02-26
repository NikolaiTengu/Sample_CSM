'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ContactForm {
  name: string;
  employeeId: string;
  site: string;
  department: string;
  email: string;
  phone: string;
  clearanceLevel: string;
  contactDivision: string;
  subject: string;
  priority: string;
  message: string;
}

export default function ContactUs() {
  const [showForm, setShowForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    employeeId: '',
    site: '',
    department: '',
    email: '',
    phone: '',
    clearanceLevel: '',
    contactDivision: '',
    subject: '',
    priority: 'normal',
    message: ''
  })

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
    setTimeout(() => {
      setShowForm(false)
      setFormSubmitted(false)
      setFormData({
        name: '',
        employeeId: '',
        site: '',
        department: '',
        email: '',
        phone: '',
        clearanceLevel: '',
        contactDivision: '',
        subject: '',
        priority: 'normal',
        message: ''
      })
    }, 3000)
  }

  const divisions = [
    {
      name: 'Records & Archival Office',
      description: 'Document retrieval, archival requests, historical records',
      email: 'records@raisa.foundation.scp',
      extension: '6-2401',
      hours: '24/7',
      responseTime: '4-6 hours'
    },
    {
      name: 'Technical Office',
      description: 'Database access, technical support, system issues',
      email: 'technical@raisa.foundation.scp',
      extension: '6-2415',
      hours: '24/7',
      responseTime: '2-4 hours'
    },
    {
      name: 'Security Office',
      description: 'Security clearances, access requests, breach reports',
      email: 'security@raisa.foundation.scp',
      extension: '6-2430',
      hours: '24/7',
      responseTime: '1-2 hours (urgent: immediate)'
    },
    {
      name: 'Engineering Office',
      description: 'System requests, software issues, automation inquiries',
      email: 'engineering@raisa.foundation.scp',
      extension: '6-2445',
      hours: 'Mon-Fri 08:00-20:00 UTC',
      responseTime: '8-12 hours'
    },
    {
      name: 'Classification Office',
      description: 'Document classification, declassification requests',
      email: 'classification@raisa.foundation.scp',
      extension: '6-2460',
      hours: 'Mon-Fri 06:00-22:00 UTC',
      responseTime: '24-48 hours'
    },
    {
      name: 'RAISA Administration',
      description: 'General inquiries, transfers, administrative matters',
      email: 'admin@raisa.foundation.scp',
      extension: '6-2472',
      hours: 'Mon-Fri 08:00-18:00 UTC',
      responseTime: '24 hours'
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
                  CONTACT RAISA
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">INTERNAL</div>
              <p className="text-xs text-[rgb(160,160,160)]">DOCUMENT TYPE</p>
              <p className="text-lg font-semibold text-[rgb(240,240,240)] tracking-wider">DIRECTORY</p>
              <p className="text-xs text-[rgb(187,0,0)] font-bold mt-1">RAISA-CONT-001</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Notice */}
        <div className="scp-card p-4 mb-6 border-[rgb(187,0,0)]">
          <p className="text-[rgb(187,0,0)] text-sm font-bold">
            ⚠ NOTICE: This directory is for authorized Foundation personnel only. 
            All communications with RAISA are logged and monitored for security purposes.
          </p>
        </div>

        {/* Introduction */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(187,0,0)] scp-header mb-4 flex items-center gap-2">
            <span className="text-3xl">■</span> HOW TO CONTACT RAISA
          </h2>
          
          <div className="space-y-4 text-[rgb(220,220,220)]">
            <p className="leading-relaxed">
              RAISA maintains multiple communication channels to serve Foundation personnel across all sites. 
              Whether you need to access classified documents, report a security concern, or request technical 
              support, our team is available to assist you.
            </p>
            <p className="leading-relaxed">
              Please select the appropriate division based on your inquiry to ensure the fastest response time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4 text-center">
              <div className="text-3xl font-bold text-[rgb(187,0,0)] mb-2">24/7</div>
              <div className="text-xs text-[rgb(160,160,160)]">EMERGENCY SUPPORT</div>
            </div>
            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4 text-center">
              <div className="text-3xl font-bold text-[rgb(187,0,0)] mb-2">&lt;2h</div>
              <div className="text-xs text-[rgb(160,160,160)]">AVG RESPONSE TIME</div>
            </div>
            <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4 text-center">
              <div className="text-3xl font-bold text-[rgb(187,0,0)] mb-2">6</div>
              <div className="text-xs text-[rgb(160,160,160)]">SPECIALIZED DIVISIONS</div>
            </div>
          </div>
        </div>

        {/* Quick Contact Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowForm(true)}
            className="bg-[rgb(187,0,0)] hover:bg-[rgb(150,0,0)] text-white font-bold py-4 px-8 text-base transition-colors inline-flex items-center gap-3"
          >
            <span className="text-xl">►</span> SUBMIT CONTACT REQUEST
          </button>
          <p className="text-xs text-[rgb(160,160,160)] mt-3">
            For immediate assistance, use the contact form or call the appropriate division directly
          </p>
        </div>

        {/* Division Contact Information */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[rgb(187,0,0)] scp-header mb-4 flex items-center gap-2">
            <span className="text-2xl">■</span> DIVISION CONTACTS
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {divisions.map((division, index) => (
              <div key={index} className="scp-card p-6">
                <h3 className="text-lg font-bold text-[rgb(220,220,220)] mb-2">{division.name}</h3>
                <p className="text-sm text-[rgb(160,160,160)] mb-4 italic">{division.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[rgb(187,0,0)] font-bold text-sm min-w-[80px]">EMAIL:</span>
                    <span className="text-[rgb(220,220,220)] text-sm">{division.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[rgb(187,0,0)] font-bold text-sm min-w-[80px]">EXTENSION:</span>
                    <span className="text-[rgb(220,220,220)] text-sm">{division.extension}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[rgb(187,0,0)] font-bold text-sm min-w-[80px]">HOURS:</span>
                    <span className="text-[rgb(220,220,220)] text-sm">{division.hours}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[rgb(187,0,0)] font-bold text-sm min-w-[80px]">RESPONSE:</span>
                    <span className="text-[rgb(220,220,220)] text-sm">{division.responseTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="scp-card p-6 mb-8 border-2 border-[rgb(187,0,0)]">
          <h2 className="text-xl font-bold text-[rgb(187,0,0)] scp-header mb-4 flex items-center gap-2">
            <span className="text-2xl">⚠</span> EMERGENCY PROTOCOLS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(187,0,0)] p-5">
              <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-3">SECURITY BREACH</h3>
              <p className="text-sm text-[rgb(220,220,220)] mb-4">
                Unauthorized access, data breach, or information security incident
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-[rgb(220,220,220)]">
                  <span className="font-bold text-[rgb(187,0,0)]">HOTLINE:</span> 6-9911
                </p>
                <p className="text-[rgb(220,220,220)]">
                  <span className="font-bold text-[rgb(187,0,0)]">EMAIL:</span> security-emergency@raisa.foundation.scp
                </p>
                <p className="text-xs text-[rgb(160,160,160)] mt-3">
                  Response Time: IMMEDIATE
                </p>
              </div>
            </div>

            <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(187,0,0)] p-5">
              <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-3">CRITICAL SYSTEM FAILURE</h3>
              <p className="text-sm text-[rgb(220,220,220)] mb-4">
                Database outage, system crash affecting containment operations
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-[rgb(220,220,220)]">
                  <span className="font-bold text-[rgb(187,0,0)]">HOTLINE:</span> 6-9922
                </p>
                <p className="text-[rgb(220,220,220)]">
                  <span className="font-bold text-[rgb(187,0,0)]">EMAIL:</span> tech-emergency@raisa.foundation.scp
                </p>
                <p className="text-xs text-[rgb(160,160,160)] mt-3">
                  Response Time: IMMEDIATE
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-4">
            <p className="text-xs text-[rgb(220,220,220)] leading-relaxed">
              <strong className="text-[rgb(187,0,0)]">EMERGENCY PROTOCOL:</strong> For Class-A emergencies 
              affecting containment operations, contact RAISA Emergency Response immediately. All emergency 
              calls are prioritized and routed directly to on-duty senior staff regardless of time or location.
            </p>
          </div>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="scp-card p-6">
            <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-4">PRIMARY OFFICE</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-[rgb(160,160,160)] mb-1">LOCATION</p>
                <p className="text-[rgb(220,220,220)]">Site-01, Sector 7, Building C</p>
              </div>
              <div>
                <p className="text-[rgb(160,160,160)] mb-1">IN-PERSON HOURS</p>
                <p className="text-[rgb(220,220,220)]">Monday-Friday, 08:00-18:00 UTC</p>
              </div>
              <div>
                <p className="text-[rgb(160,160,160)] mb-1">APPOINTMENTS</p>
                <p className="text-[rgb(220,220,220)]">Required for Level 4+ classified consultations</p>
              </div>
              <div className="pt-3 border-t border-[rgb(100,100,100)]">
                <p className="text-xs text-[rgb(160,160,160)]">
                  Visitors must present valid Foundation ID and have scheduled appointment
                </p>
              </div>
            </div>
          </div>

          <div className="scp-card p-6">
            <h3 className="text-lg font-bold text-[rgb(187,0,0)] mb-4">SECURE COMMUNICATION</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[rgb(187,0,0)] text-xl">◆</span>
                <div>
                  <p className="text-[rgb(220,220,220)] font-bold mb-1">Foundation Intranet Portal</p>
                  <p className="text-[rgb(160,160,160)] text-xs">https://internal.foundation.scp/raisa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[rgb(187,0,0)] text-xl">◆</span>
                <div>
                  <p className="text-[rgb(220,220,220)] font-bold mb-1">Secure Messaging System</p>
                  <p className="text-[rgb(160,160,160)] text-xs">Available through SCiPNet terminals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[rgb(187,0,0)] text-xl">◆</span>
                <div>
                  <p className="text-[rgb(220,220,220)] font-bold mb-1">Document Request System</p>
                  <p className="text-[rgb(160,160,160)] text-xs">Submit through official channels only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-xl font-bold text-[rgb(187,0,0)] scp-header mb-4 flex items-center gap-2">
            <span className="text-2xl">■</span> FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-[rgb(100,100,100)] pl-4">
              <h3 className="text-sm font-bold text-[rgb(220,220,220)] mb-2">
                How long does it take to process a document request?
              </h3>
              <p className="text-sm text-[rgb(160,160,160)]">
                Standard requests are processed within 24-48 hours. Urgent requests marked as Priority-1 
                are processed within 4 hours. Request times may vary based on classification level and 
                current system load.
              </p>
            </div>

            <div className="border-l-4 border-[rgb(100,100,100)] pl-4">
              <h3 className="text-sm font-bold text-[rgb(220,220,220)] mb-2">
                What clearance level do I need to contact RAISA?
              </h3>
              <p className="text-sm text-[rgb(160,160,160)]">
                All Foundation personnel with Level 1 clearance or above may contact RAISA for general 
                inquiries. Certain specialized requests require Level 3 or higher clearance.
              </p>
            </div>

            <div className="border-l-4 border-[rgb(100,100,100)] pl-4">
              <h3 className="text-sm font-bold text-[rgb(220,220,220)] mb-2">
                Can I visit the RAISA office in person?
              </h3>
              <p className="text-sm text-[rgb(160,160,160)]">
                Yes, in-person consultations are available by appointment only. Level 3+ clearance required 
                for facility access. Schedule appointments minimum 48 hours in advance through the internal 
                booking system.
              </p>
            </div>

            <div className="border-l-4 border-[rgb(100,100,100)] pl-4">
              <h3 className="text-sm font-bold text-[rgb(220,220,220)] mb-2">
                What should I do if I suspect an information security breach?
              </h3>
              <p className="text-sm text-[rgb(160,160,160)]">
                Contact RAISA Security Office immediately at extension 6-9911 or email 
                security-emergency@raisa.foundation.scp. Do not discuss details over unsecured channels.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-[rgb(187,0,0)] text-center">
          <p className="text-[rgb(160,160,160)] text-xs">
            SCP FOUNDATION - RECORDKEEPING AND INFORMATION SECURITY ADMINISTRATION (RAISA)
          </p>
          <p className="text-[rgb(160,160,160)] text-xs mt-1">
            All communications monitored and logged for security purposes
          </p>
          <p className="text-[rgb(187,0,0)] text-xs mt-2 font-bold">
            INTERNAL USE ONLY - FOUNDATION PERSONNEL ONLY
          </p>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-[rgb(28,28,28)] border-4 border-[rgb(187,0,0)] max-w-3xl w-full my-8 shadow-[0_0_30px_rgba(187,0,0,0.5)]">
            {/* Modal Header */}
            <div className="bg-[rgb(187,0,0)] px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">RAISA CONTACT REQUEST</h3>
                <p className="text-sm text-white/80 mt-1">Form ID: RAISA-CR-{Date.now().toString().slice(-8)}</p>
              </div>
              <button 
                onClick={() => {
                  setShowForm(false)
                  setFormSubmitted(false)
                }}
                className="text-white hover:text-gray-300 text-3xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[rgb(187,0,0)] mb-4 border-b border-[rgb(100,100,100)] pb-2">
                      ■ REQUESTER INFORMATION
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          FULL NAME <span className="text-[rgb(187,0,0)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          EMPLOYEE ID <span className="text-[rgb(187,0,0)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="employeeId"
                          value={formData.employeeId}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          SITE <span className="text-[rgb(187,0,0)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="site"
                          value={formData.site}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          DEPARTMENT <span className="text-[rgb(187,0,0)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          EMAIL <span className="text-[rgb(187,0,0)]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          PHONE EXTENSION <span className="text-[rgb(187,0,0)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          CLEARANCE LEVEL <span className="text-[rgb(187,0,0)]">*</span>
                        </label>
                        <select
                          name="clearanceLevel"
                          value={formData.clearanceLevel}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
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
                          CONTACT DIVISION <span className="text-[rgb(187,0,0)]">*</span>
                        </label>
                        <select
                          name="contactDivision"
                          value={formData.contactDivision}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
                        >
                          <option value="">Select Division</option>
                          <option value="records">Records & Archival Office</option>
                          <option value="technical">Technical Office</option>
                          <option value="security">Security Office</option>
                          <option value="engineering">Engineering Office</option>
                          <option value="classification">Classification Office</option>
                          <option value="admin">RAISA Administration</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Request Details */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[rgb(187,0,0)] mb-4 border-b border-[rgb(100,100,100)] pb-2">
                      ■ REQUEST DETAILS
                    </h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-1">
                          <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                            PRIORITY LEVEL <span className="text-[rgb(187,0,0)]">*</span>
                          </label>
                          <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
                          >
                            <option value="low">Low - Routine Inquiry</option>
                            <option value="normal">Normal - Standard Request</option>
                            <option value="high">High - Time Sensitive</option>
                            <option value="urgent">Urgent - Immediate Attention Required</option>
                          </select>
                        </div>
                        <div className="md:col-span-1">
                          <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                            SUBJECT <span className="text-[rgb(187,0,0)]">*</span>
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none"
                            placeholder="Brief description of request"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-[rgb(160,160,160)] mb-2">
                          MESSAGE <span className="text-[rgb(187,0,0)]">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] px-3 py-2 text-sm focus:border-[rgb(187,0,0)] focus:outline-none resize-none"
                          placeholder="Provide detailed information about your request..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-[rgb(17,17,17)] border-l-4 border-[rgb(187,0,0)] p-4 mb-6">
                    <p className="text-xs text-[rgb(220,220,220)] leading-relaxed">
                      By submitting this request, I acknowledge that all communications with RAISA are monitored 
                      and logged for security purposes. I certify that the information provided is accurate and 
                      that I am authorized to make this request at my stated clearance level.
                    </p>
                  </div>

                  {/* Form Actions */}
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-[rgb(187,0,0)] hover:bg-[rgb(150,0,0)] text-white font-bold py-3 px-6 text-sm transition-colors"
                    >
                      ► SUBMIT REQUEST
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false)
                        setFormSubmitted(false)
                      }}
                      className="px-6 py-3 bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] font-bold text-sm hover:bg-[rgb(28,28,28)] transition-colors"
                    >
                      CANCEL
                    </button>
                  </div>
                </form>
              ) : (
                // Success Message
                <div className="text-center py-12">
                  <div className="text-6xl text-[rgb(187,0,0)] mb-6">✓</div>
                  <h3 className="text-2xl font-bold text-[rgb(187,0,0)] mb-4">REQUEST SUBMITTED</h3>
                  <p className="text-[rgb(220,220,220)] mb-2">
                    Your contact request has been received by RAISA.
                  </p>
                  <p className="text-sm text-[rgb(160,160,160)] mb-6">
                    Tracking ID: CR-{Date.now().toString().slice(-8)}
                  </p>
                  <div className="bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] p-4 max-w-lg mx-auto text-left">
                    <p className="text-xs text-[rgb(220,220,220)] leading-relaxed">
                      <strong className="text-[rgb(187,0,0)]">NEXT STEPS:</strong><br/>
                      • Message routed to {formData.contactDivision} division<br/>
                      • You will receive acknowledgment via email within 1 hour<br/>
                      • Response time varies by priority and division<br/>
                      • Check your Foundation email for updates
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowForm(false)
                      setFormSubmitted(false)
                    }}
                    className="mt-6 bg-[rgb(187,0,0)] hover:bg-[rgb(150,0,0)] text-white font-bold py-3 px-6 text-sm transition-colors"
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

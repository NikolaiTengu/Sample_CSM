'use client'

import { departmentInfo, employees } from '@/data/csmData'
import Image from 'next/image'

export default function DepartmentDashboard() {
  const activeSt = employees.filter(e => e.status === 'Active').length
  const avgYearsOfService = (
    employees.reduce((sum, e) => sum + e.yearsOfService, 0) / employees.length
  ).toFixed(1)
  
  const clearanceLevels = {
    level5: employees.filter(e => e.clearanceLevel === 5).length,
    level4: employees.filter(e => e.clearanceLevel === 4).length,
    level3: employees.filter(e => e.clearanceLevel === 3).length,
  }

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
                  DEPARTMENT PERSONNEL DIRECTORY
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">CLASSIFIED</div>
              <p className="text-xs text-[rgb(160,160,160)]">LAST UPDATED</p>
              <p className="text-lg font-semibold text-[rgb(240,240,240)] tracking-wider">FEBRUARY 2026</p>
              <p className="text-xs text-[rgb(139,34,34)] font-bold mt-1">RAISA-DIR-026</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Notice */}
        <div className="scp-card p-4 mb-6 border-[rgb(139,34,34)]">
          <p className="text-[rgb(139,34,34)] text-sm font-bold">
            ⚠ NOTICE: This document contains classified personnel information. 
            Distribution is restricted to Level {departmentInfo.clearanceRequired} clearance and above. 
            Unauthorized disclosure will result in immediate termination and amnestic treatment.
          </p>
        </div>

        {/* Department Overview */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-[rgb(139,34,34)] scp-header mb-4 flex items-center gap-2">
            <span className="text-3xl">■</span> DEPARTMENT OVERVIEW
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[rgb(139,34,34)] mb-2">{departmentInfo.name}</h3>
                <p className="text-sm text-[rgb(160,160,160)] italic mb-3">{departmentInfo.fullName}</p>
                <p className="text-[rgb(220,220,220)] leading-relaxed mb-4">{departmentInfo.description}</p>
              </div>
              
              <div className="bg-[rgb(28,28,28)] border-l-4 border-[rgb(139,34,34)] p-4">
                <h4 className="text-sm font-bold text-[rgb(139,34,34)] mb-2">MISSION STATEMENT</h4>
                <p className="text-[rgb(220,220,220)] text-sm leading-relaxed">{departmentInfo.mission}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4">
                <p className="text-xs text-[rgb(160,160,160)] mb-1">ESTABLISHED</p>
                <p className="text-2xl font-bold text-[rgb(139,34,34)]">{departmentInfo.established}</p>
              </div>
              
              <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4">
                <p className="text-xs text-[rgb(160,160,160)] mb-1">TOTAL PERSONNEL</p>
                <p className="text-2xl font-bold text-[rgb(139,34,34)]">{departmentInfo.totalStaff}</p>
                <p className="text-xs text-[rgb(160,160,160)] mt-1">{activeSt} ACTIVE</p>
              </div>
              
              <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4">
                <p className="text-xs text-[rgb(160,160,160)] mb-1">DIRECTOR</p>
                <p className="text-sm font-bold text-[rgb(220,220,220)]">{departmentInfo.headOfDepartment}</p>
              </div>
              
              <div className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-4">
                <p className="text-xs text-[rgb(160,160,160)] mb-1">AVG. SERVICE</p>
                <p className="text-2xl font-bold text-[rgb(139,34,34)]">{avgYearsOfService}y</p>
              </div>
            </div>
          </div>

          {/* Divisions */}
          <div className="mt-6">
            <h4 className="text-sm font-bold text-[rgb(139,34,34)] mb-3">OPERATIONAL DIVISIONS</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {departmentInfo.divisions.map((division, index) => (
                <div key={index} className="bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] p-3 text-center">
                  <p className="text-xs text-[rgb(220,220,220)] font-medium">{division}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clearance Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(139,34,34)] mb-2">{clearanceLevels.level5}</div>
            <div className="text-sm text-[rgb(160,160,160)]">LEVEL 5 CLEARANCE</div>
            <div className="text-xs text-[rgb(100,100,100)] mt-1">O5 ACCESS</div>
          </div>
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(139,34,34)] mb-2">{clearanceLevels.level4}</div>
            <div className="text-sm text-[rgb(160,160,160)]">LEVEL 4 CLEARANCE</div>
            <div className="text-xs text-[rgb(100,100,100)] mt-1">SENIOR STAFF</div>
          </div>
          <div className="scp-card p-6 text-center">
            <div className="text-4xl font-bold text-[rgb(139,34,34)] mb-2">{clearanceLevels.level3}</div>
            <div className="text-sm text-[rgb(160,160,160)]">LEVEL 3 CLEARANCE</div>
            <div className="text-xs text-[rgb(100,100,100)] mt-1">OPERATIONAL STAFF</div>
          </div>
        </div>

        {/* Personnel Directory */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[rgb(139,34,34)] scp-header mb-4 flex items-center gap-2">
            <span className="text-2xl">■</span> PERSONNEL DIRECTORY
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {employees.map((employee) => (
              <div key={employee.id} className="scp-card p-6">
                {/* Employee Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[rgb(220,220,220)]">{employee.name}</h3>
                    <p className="text-sm text-[rgb(160,160,160)] italic">{employee.designation}</p>
                    <p className="text-xs text-[rgb(139,34,34)] font-bold mt-1">{employee.id}</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block bg-[rgb(139,34,34)] text-white text-xs font-bold px-3 py-1 mb-2">
                      LEVEL {employee.clearanceLevel}
                    </div>
                    <div className={`text-xs font-bold ${
                      employee.status === 'Active' ? 'text-green-500' : 
                      employee.status === 'On Assignment' ? 'text-yellow-500' : 
                      'text-gray-500'
                    }`}>
                      {employee.status.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Department and Role */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-[rgb(160,160,160)] mb-1">DEPARTMENT</p>
                    <p className="text-sm text-[rgb(220,220,220)]">{employee.department}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[rgb(160,160,160)] mb-1">ROLE</p>
                    <p className="text-sm text-[rgb(220,220,220)]">{employee.role}</p>
                  </div>
                </div>

                {/* Years of Service */}
                <div className="mb-4">
                  <p className="text-xs text-[rgb(160,160,160)] mb-1">SERVICE DURATION</p>
                  <p className="text-sm text-[rgb(139,34,34)] font-bold">{employee.yearsOfService} Years</p>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <p className="text-xs text-[rgb(160,160,160)] mb-2 font-bold">KEY RESPONSIBILITIES</p>
                  <ul className="space-y-1">
                    {employee.responsibilities.map((resp, index) => (
                      <li key={index} className="text-xs text-[rgb(220,220,220)] flex items-start gap-2">
                        <span className="text-[rgb(139,34,34)] mt-0.5">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specializations */}
                <div>
                  <p className="text-xs text-[rgb(160,160,160)] mb-2 font-bold">SPECIALIZATIONS</p>
                  <div className="flex flex-wrap gap-2">
                    {employee.specializations.map((spec, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-[rgb(28,28,28)] border border-[rgb(100,100,100)] px-2 py-1 text-[rgb(220,220,220)]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
            CLASSIFIED MATERIAL - LEVEL {departmentInfo.clearanceRequired} CLEARANCE
          </p>
        </div>
      </div>
    </div>
  )
}

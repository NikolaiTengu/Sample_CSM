'use client'

import { surveyResponses, monthlyData, serviceCategories } from '@/data/csmData'
import MetricCard from './MetricCard'
import SatisfactionChart from './SatisfactionChart'
import ServiceBreakdown from './ServiceBreakdown'
import RecentFeedback from './RecentFeedback'
import Image from 'next/image'

export default function Dashboard() {
  // Calculate overall metrics
  const totalResponses = surveyResponses.length
  const avgOverallScore = (
    surveyResponses.reduce((sum, r) => sum + r.ratings.overall, 0) / totalResponses
  ).toFixed(1)
  
  const avgTimeliness = (
    surveyResponses.reduce((sum, r) => sum + r.ratings.timeliness, 0) / totalResponses
  ).toFixed(1)
  
  const avgQuality = (
    surveyResponses.reduce((sum, r) => sum + r.ratings.quality, 0) / totalResponses
  ).toFixed(1)
  
  const avgProfessionalism = (
    surveyResponses.reduce((sum, r) => sum + r.ratings.professionalism, 0) / totalResponses
  ).toFixed(1)
  
  const avgCommunication = (
    surveyResponses.reduce((sum, r) => sum + r.ratings.communication, 0) / totalResponses
  ).toFixed(1)
  
  const satisfiedClients = surveyResponses.filter(r => r.ratings.overall >= 4).length
  const satisfactionRate = ((satisfiedClients / totalResponses) * 100).toFixed(1)

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
                  CLIENT SATISFACTION MONITORING SYSTEM
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="classified-stamp mb-2">CLASSIFIED</div>
              <p className="text-xs text-[rgb(160,160,160)]">REPORTING PERIOD</p>
              <p className="text-lg font-semibold text-[rgb(240,240,240)] tracking-wider">FEBRUARY 2026</p>
              <p className="text-xs text-[rgb(139,34,34)] font-bold mt-1">RAISA-CSM-026</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Notice */}
        <div className="scp-card p-4 mb-6 border-[rgb(139,34,34)]">
          <p className="text-[rgb(139,34,34)] text-sm font-bold">
            ⚠ NOTICE: This document contains classified information regarding SCP Foundation client satisfaction metrics. 
            Unauthorized access is strictly prohibited and will result in immediate containment protocols.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[rgb(139,34,34)] scp-header mb-4 flex items-center gap-2">
            <span className="text-2xl">■</span> PRIMARY METRICS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="OVERALL SATISFACTION"
              value={avgOverallScore}
              maxValue={5}
              trend="+0.2"
              icon="◈"
            />
            <MetricCard
              title="TOTAL RESPONSES"
              value={totalResponses.toString()}
              subtitle="THIS PERIOD"
              icon="▣"
            />
            <MetricCard
              title="SATISFACTION RATE"
              value={`${satisfactionRate}%`}
              subtitle="RATING ≥ 4"
              trend="+3.5%"
              icon="◆"
            />
            <MetricCard
              title="AVG RESPONSE TIME"
              value="2.3"
              subtitle="DAYS"
              trend="-0.4"
              icon="◉"
            />
          </div>
        </div>

        {/* Detailed Ratings */}
        <div className="scp-card p-6 mb-8">
          <h2 className="text-xl font-bold text-[rgb(139,34,34)] scp-header mb-6 flex items-center gap-2">
            <span className="text-2xl">■</span> DETAILED RATING ANALYSIS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[rgb(160,160,160)] tracking-wider">TIMELINESS</span>
                <span className="text-xl font-bold text-[rgb(139,34,34)]">{avgTimeliness}/5</span>
              </div>
              <div className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] h-3">
                <div
                  className="bg-[rgb(139,34,34)] h-full shadow-[0_0_10px_rgba(139,34,34,0.5)]"
                  style={{ width: `${(Number(avgTimeliness) / 5) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[rgb(160,160,160)] tracking-wider">QUALITY</span>
                <span className="text-xl font-bold text-[rgb(139,34,34)]">{avgQuality}/5</span>
              </div>
              <div className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] h-3">
                <div
                  className="bg-[rgb(139,34,34)] h-full shadow-[0_0_10px_rgba(139,34,34,0.5)]"
                  style={{ width: `${(Number(avgQuality) / 5) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[rgb(160,160,160)] tracking-wider">PROFESSIONALISM</span>
                <span className="text-xl font-bold text-[rgb(139,34,34)]">{avgProfessionalism}/5</span>
              </div>
              <div className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] h-3">
                <div
                  className="bg-[rgb(139,34,34)] h-full shadow-[0_0_10px_rgba(139,34,34,0.5)]"
                  style={{ width: `${(Number(avgProfessionalism) / 5) * 100}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[rgb(160,160,160)] tracking-wider">COMMUNICATION</span>
                <span className="text-xl font-bold text-[rgb(139,34,34)]">{avgCommunication}/5</span>
              </div>
              <div className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] h-3">
                <div
                  className="bg-[rgb(139,34,34)] h-full shadow-[0_0_10px_rgba(139,34,34,0.5)]"
                  style={{ width: `${(Number(avgCommunication) / 5) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SatisfactionChart data={monthlyData} />
          <ServiceBreakdown data={serviceCategories} />
        </div>

        {/* Recent Feedback */}
        <RecentFeedback responses={surveyResponses.slice(0, 5)} />

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

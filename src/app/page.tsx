'use client'

import { useState } from 'react'
import Dashboard from '@/components/Dashboard'
import DepartmentDashboard from '@/components/DepartmentDashboard'
import HomePage from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import Mission from '@/components/Mission'
import Vision from '@/components/Vision'
import Careers from '@/components/Careers'
import ContactUs from '@/components/ContactUs'
import EthicsCommittee from '@/components/EthicsCommittee'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'csm' | 'department' | 'ethics' | 'about' | 'mission' | 'vision' | 'careers' | 'contact'>('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />
      case 'csm':
        return <Dashboard />
      case 'department':
        return <DepartmentDashboard />
      case 'ethics':
        return <EthicsCommittee />
      case 'about':
        return <AboutUs />
      case 'mission':
        return <Mission />
      case 'vision':
        return <Vision />
      case 'careers':
        return <Careers />
      case 'contact':
        return <ContactUs />
      default:
        return <HomePage />
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </main>
  )
}

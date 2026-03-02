'use client'

import { useState } from 'react'
import Image from 'next/image'

interface NavigationProps {
  activeTab: 'home' | 'csm' | 'department' | 'foundation' | 'ethics' | 'about' | 'mission' | 'vision' | 'careers' | 'contact';
  onTabChange: (tab: 'home' | 'csm' | 'department' | 'foundation' | 'ethics' | 'about' | 'mission' | 'vision' | 'careers' | 'contact') => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Search functionality placeholder
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <div className="bg-[rgb(28,28,28)] border-b-2 border-[rgb(230,200,80)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Separate Organization Logos */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* SCP Foundation Logo */}
            <button
              onClick={() => onTabChange('foundation')}
              className="group relative"
              title="SCP Foundation Overview"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[rgb(100,100,100)] group-hover:border-[rgb(230,200,80)] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(230,200,80,0.5)]">
                <Image
                  src="https://static.wikia.nocookie.net/scp-db/images/c/c9/SCP_Foundation.png/revision/latest/scale-to-width-down/1000?cb=20250512065502"
                  alt="SCP Foundation"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              {activeTab === 'foundation' && (
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[rgb(230,200,80)] shadow-[0_0_8px_rgba(230,200,80,0.8)]"></div>
              )}
            </button>

            {/* Ethics Committee Logo */}
            <button
              onClick={() => onTabChange('ethics')}
              className="group relative"
              title="Ethics Committee"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[rgb(100,100,100)] group-hover:border-[rgb(230,200,80)] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(230,200,80,0.5)]">
                <Image
                  src="https://static.wikia.nocookie.net/scp-db/images/b/b1/Ethics_Committee.png/revision/latest/scale-to-width-down/1000?cb=20240405220958"
                  alt="Ethics Committee"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              {activeTab === 'ethics' && (
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[rgb(230,200,80)] shadow-[0_0_8px_rgba(230,200,80,0.8)]"></div>
              )}
            </button>
          </div>

          {/* RAISA Navigation Tabs */}
          <div className="flex gap-2 overflow-x-auto flex-1">
          <button
            onClick={() => onTabChange('home')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'home'
                ? 'bg-[rgb(230,200,80)] text-white border-t-2 border-[rgb(230,200,80)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ HOME
          </button>
          <button
            onClick={() => onTabChange('department')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'department'
                ? 'bg-[rgb(230,200,80)] text-white border-t-2 border-[rgb(230,200,80)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ DEPARTMENT
          </button>
          <button
            onClick={() => onTabChange('about')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'about'
                ? 'bg-[rgb(230,200,80)] text-white border-t-2 border-[rgb(230,200,80)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ ABOUT US
          </button>
          <button
            onClick={() => onTabChange('mission')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'mission'
                ? 'bg-[rgb(230,200,80)] text-white border-t-2 border-[rgb(230,200,80)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ MISSION
          </button>
          <button
            onClick={() => onTabChange('vision')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'vision'
                ? 'bg-[rgb(230,200,80)] text-white border-t-2 border-[rgb(230,200,80)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ VISION
          </button>
          <button
            onClick={() => onTabChange('careers')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'careers'
                ? 'bg-[rgb(230,200,80)] text-white border-t-2 border-[rgb(230,200,80)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ CAREERS
          </button>
          <button
            onClick={() => onTabChange('contact')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'contact'
                ? 'bg-[rgb(230,200,80)] text-white border-t-2 border-[rgb(230,200,80)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ CONTACT US
          </button>
          <button
            onClick={() => onTabChange('csm')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'csm'
                ? 'bg-[rgb(230,200,80)] text-white border-t-2 border-[rgb(230,200,80)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ CLIENT SATISFACTION
          </button>
          </div>

          {/* Search Bar - Right Side */}
          <div className="flex-shrink-0 ml-4">
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <div className="relative w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg 
                    className={`h-4 w-4 ${isSearchFocused ? 'text-[rgb(230,200,80)]' : 'text-[rgb(160,160,160)]'} transition-colors`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search..."
                  className="w-full bg-[rgb(17,17,17)] border border-[rgb(100,100,100)] text-[rgb(220,220,220)] pl-9 pr-9 py-2 text-xs tracking-wide placeholder-[rgb(120,120,120)] focus:border-[rgb(230,200,80)] focus:ring-1 focus:ring-[rgb(230,200,80)] focus:outline-none transition-all rounded-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-2 flex items-center text-[rgb(160,160,160)] hover:text-[rgb(230,200,80)] transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="bg-[rgb(230,200,80)] hover:bg-[rgb(200,170,50)] text-white font-bold px-4 py-2 text-xs tracking-wider transition-all shadow-sm hover:shadow-md"
                title="Search RAISA Database"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

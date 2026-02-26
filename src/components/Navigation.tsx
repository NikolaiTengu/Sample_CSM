'use client'

interface NavigationProps {
  activeTab: 'home' | 'csm' | 'department' | 'about' | 'mission' | 'vision' | 'careers' | 'contact';
  onTabChange: (tab: 'home' | 'csm' | 'department' | 'about' | 'mission' | 'vision' | 'careers' | 'contact') => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <div className="bg-[rgb(28,28,28)] border-b-2 border-[rgb(139,34,34)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => onTabChange('home')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'home'
                ? 'bg-[rgb(139,34,34)] text-white border-t-2 border-[rgb(139,34,34)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ HOME
          </button>
          <button
            onClick={() => onTabChange('department')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'department'
                ? 'bg-[rgb(139,34,34)] text-white border-t-2 border-[rgb(139,34,34)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ DEPARTMENT
          </button>
          <button
            onClick={() => onTabChange('about')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'about'
                ? 'bg-[rgb(139,34,34)] text-white border-t-2 border-[rgb(139,34,34)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ ABOUT US
          </button>
          <button
            onClick={() => onTabChange('mission')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'mission'
                ? 'bg-[rgb(139,34,34)] text-white border-t-2 border-[rgb(139,34,34)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ MISSION
          </button>
          <button
            onClick={() => onTabChange('vision')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'vision'
                ? 'bg-[rgb(139,34,34)] text-white border-t-2 border-[rgb(139,34,34)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ VISION
          </button>
          <button
            onClick={() => onTabChange('careers')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'careers'
                ? 'bg-[rgb(139,34,34)] text-white border-t-2 border-[rgb(139,34,34)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ CAREERS
          </button>
          <button
            onClick={() => onTabChange('contact')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'contact'
                ? 'bg-[rgb(139,34,34)] text-white border-t-2 border-[rgb(139,34,34)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ CONTACT US
          </button>
          <button
            onClick={() => onTabChange('csm')}
            className={`px-6 py-3 text-sm font-bold tracking-wider transition-all whitespace-nowrap ${
              activeTab === 'csm'
                ? 'bg-[rgb(139,34,34)] text-white border-t-2 border-[rgb(139,34,34)]'
                : 'bg-[rgb(17,17,17)] text-[rgb(160,160,160)] hover:text-[rgb(220,220,220)] hover:bg-[rgb(28,28,28)]'
            }`}
          >
            ◈ CLIENT SATISFACTION
          </button>
        </div>
      </div>
    </div>
  )
}

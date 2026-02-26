import { SurveyResponse } from '@/data/csmData'

interface RecentFeedbackProps {
  responses: SurveyResponse[];
}

export default function RecentFeedback({ responses }: RecentFeedbackProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'bg-[rgba(0,255,0,0.1)] text-[rgb(0,255,0)] border-[rgb(0,255,0)]'
    if (rating >= 3.5) return 'bg-[rgba(187,0,0,0.1)] text-[rgb(187,0,0)] border-[rgb(187,0,0)]'
    if (rating >= 2.5) return 'bg-[rgba(255,165,0,0.1)] text-[rgb(255,165,0)] border-[rgb(255,165,0)]'
    return 'bg-[rgba(255,0,0,0.1)] text-[rgb(255,100,100)] border-[rgb(255,100,100)]'
  }

  const getRatingLabel = (rating: number) => {
    if (rating >= 4.5) return 'EXCELLENT'
    if (rating >= 3.5) return 'SATISFACTORY'
    if (rating >= 2.5) return 'ADEQUATE'
    return 'REQUIRES ATTENTION'
  }

  return (
    <div className="scp-card p-6">
      <h2 className="text-xl font-bold text-[rgb(187,0,0)] scp-header mb-6 flex items-center gap-2">
        <span className="text-2xl">■</span> CLIENT FEEDBACK LOG
      </h2>
      <p className="text-xs text-[rgb(160,160,160)] mb-4 tracking-wider">RECENT ENTRIES - CLASSIFIED LEVEL 3</p>
      <div className="space-y-4">
        {responses.map((response, idx) => (
          <div
            key={response.id}
            className="border-2 border-[rgb(100,100,100)] bg-[rgba(28,28,28,0.5)] p-5 transition-all duration-300 hover:border-[rgb(187,0,0)] hover:shadow-[0_0_20px_rgba(187,0,0,0.3)]"
          >
            <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[rgb(187,0,0)] font-bold text-xs">ENTRY #{String(idx + 1).padStart(3, '0')}</span>
                  <span className="text-[rgb(100,100,100)]">|</span>
                  <h3 className="font-bold text-[rgb(240,240,240)] tracking-wide">{response.clientName}</h3>
                </div>
                <p className="text-xs text-[rgb(160,160,160)] tracking-wider uppercase">{response.serviceType}</p>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold border-2 ${getRatingColor(
                    response.ratings.overall
                  )} tracking-wider`}
                >
                  {response.ratings.overall}/5 - {getRatingLabel(response.ratings.overall)}
                </span>
                <p className="text-xs text-[rgb(160,160,160)] mt-2 font-mono">{response.date}</p>
              </div>
            </div>
            
            <div className="my-3 border-l-4 border-[rgb(187,0,0)] pl-4 bg-[rgba(187,0,0,0.05)] py-2">
              <p className="text-[rgb(240,240,240)] text-sm italic leading-relaxed">
                &quot;{response.feedback}&quot;
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-[rgb(100,100,100)] grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center">
                <p className="text-xs text-[rgb(160,160,160)] mb-1 tracking-wider">TIMELINESS</p>
                <span className="font-bold text-[rgb(187,0,0)] text-sm">{response.ratings.timeliness}/5</span>
              </div>
              <div className="text-center">
                <p className="text-xs text-[rgb(160,160,160)] mb-1 tracking-wider">QUALITY</p>
                <span className="font-bold text-[rgb(187,0,0)] text-sm">{response.ratings.quality}/5</span>
              </div>
              <div className="text-center">
                <p className="text-xs text-[rgb(160,160,160)] mb-1 tracking-wider">PROFESSIONALISM</p>
                <span className="font-bold text-[rgb(187,0,0)] text-sm">{response.ratings.professionalism}/5</span>
              </div>
              <div className="text-center">
                <p className="text-xs text-[rgb(160,160,160)] mb-1 tracking-wider">COMMUNICATION</p>
                <span className="font-bold text-[rgb(187,0,0)] text-sm">{response.ratings.communication}/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

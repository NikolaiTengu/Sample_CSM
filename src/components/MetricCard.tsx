interface MetricCardProps {
  title: string;
  value: string;
  maxValue?: number;
  subtitle?: string;
  trend?: string;
  icon?: string;
}

export default function MetricCard({
  title,
  value,
  maxValue,
  subtitle,
  trend,
  icon,
}: MetricCardProps) {
  const isPositiveTrend = trend && trend.startsWith('+')
  const isNegativeTrend = trend && trend.startsWith('-')

  return (
    <div className="scp-card p-6 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xs font-bold text-[rgb(160,160,160)] tracking-widest uppercase">{title}</h3>
        {icon && <span className="text-3xl text-[rgb(187,0,0)]">{icon}</span>}
      </div>
      <div className="flex items-baseline gap-2 mb-3">
        <p className="text-4xl font-bold text-[rgb(240,240,240)] tracking-wide">{value}</p>
        {maxValue && (
          <span className="text-xl text-[rgb(160,160,160)] font-bold">/{maxValue}</span>
        )}
      </div>
      <div className="flex items-center gap-3 pt-3 border-t border-[rgb(100,100,100)]">
        {subtitle && <p className="text-xs text-[rgb(160,160,160)] uppercase tracking-wider">{subtitle}</p>}
        {trend && (
          <span
            className={`text-sm font-bold px-2 py-1 ${
              isPositiveTrend
                ? 'text-[rgb(0,255,0)] bg-[rgba(0,255,0,0.1)] border border-[rgb(0,255,0)]'
                : isNegativeTrend
                ? 'text-[rgb(255,100,100)] bg-[rgba(255,0,0,0.1)] border border-[rgb(255,100,100)]'
                : 'text-[rgb(160,160,160)]'
            }`}
          >
            {trend}
          </span>
        )}
      </div>
    </div>
  )
}

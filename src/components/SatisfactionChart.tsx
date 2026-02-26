'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface MonthlyData {
  month: string;
  score: number;
  responses: number;
}

interface SatisfactionChartProps {
  data: MonthlyData[];
}

export default function SatisfactionChart({ data }: SatisfactionChartProps) {
  return (
    <div className="scp-card p-6">
      <h2 className="text-xl font-bold text-[rgb(230,200,80)] scp-header mb-6 flex items-center gap-2">
        <span className="text-2xl">■</span> SATISFACTION TREND ANALYSIS
      </h2>
      <p className="text-xs text-[rgb(160,160,160)] mb-4 tracking-wider">TEMPORAL METRICS: LAST 7 MONTHS</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgb(100,100,100)" />
          <XAxis 
            dataKey="month" 
            stroke="rgb(160,160,160)" 
            style={{ fontSize: '12px', fontFamily: 'Courier Prime, monospace' }}
          />
          <YAxis 
            domain={[0, 5]} 
            stroke="rgb(160,160,160)"
            style={{ fontSize: '12px', fontFamily: 'Courier Prime, monospace' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgb(28,28,28)',
              border: '2px solid rgb(230,200,80)',
              borderRadius: '0',
              color: 'rgb(240,240,240)',
              fontFamily: 'Courier Prime, monospace',
              boxShadow: '0 0 20px rgba(230,200,80,0.3)',
            }}
          />
          <Legend 
            wrapperStyle={{
              fontFamily: 'Courier Prime, monospace',
              fontSize: '12px',
              color: 'rgb(160,160,160)',
            }}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="rgb(230,200,80)"
            strokeWidth={3}
            dot={{ fill: 'rgb(230,200,80)', r: 5, strokeWidth: 2, stroke: 'rgb(240,240,240)' }}
            activeDot={{ r: 7, stroke: 'rgb(230,200,80)', strokeWidth: 3 }}
            name="AVG SCORE"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

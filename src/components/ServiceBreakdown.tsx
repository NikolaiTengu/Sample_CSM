'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts'

interface ServiceData {
  name: string;
  count: number;
  avgRating: number;
}

interface ServiceBreakdownProps {
  data: ServiceData[];
}

const COLORS = ['rgb(187,0,0)', 'rgb(220,20,20)', 'rgb(150,0,0)', 'rgb(200,50,50)', 'rgb(170,10,10)']

export default function ServiceBreakdown({ data }: ServiceBreakdownProps) {
  return (
    <div className="scp-card p-6">
      <h2 className="text-xl font-bold text-[rgb(187,0,0)] scp-header mb-6 flex items-center gap-2">
        <span className="text-2xl">■</span> SERVICE CLASSIFICATION
      </h2>
      <p className="text-xs text-[rgb(160,160,160)] mb-4 tracking-wider">CATEGORICAL DISTRIBUTION</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgb(100,100,100)" />
          <XAxis 
            dataKey="name" 
            stroke="rgb(160,160,160)" 
            angle={-45} 
            textAnchor="end" 
            height={100}
            style={{ fontSize: '11px', fontFamily: 'Courier Prime, monospace' }}
          />
          <YAxis 
            stroke="rgb(160,160,160)"
            style={{ fontSize: '12px', fontFamily: 'Courier Prime, monospace' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgb(28,28,28)',
              border: '2px solid rgb(187,0,0)',
              borderRadius: '0',
              color: 'rgb(240,240,240)',
              fontFamily: 'Courier Prime, monospace',
              boxShadow: '0 0 20px rgba(187,0,0,0.3)',
            }}
          />
          <Legend 
            wrapperStyle={{
              fontFamily: 'Courier Prime, monospace',
              fontSize: '12px',
              color: 'rgb(160,160,160)',
            }}
          />
          <Bar dataKey="count" fill="rgb(187,0,0)" name="RESPONSES" radius={[0, 0, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 space-y-2 pt-4 border-t border-[rgb(100,100,100)]">
        {data.map((service, index) => (
          <div key={service.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-[rgb(160,160,160)] font-mono text-xs tracking-wide">{service.name}</span>
            </div>
            <span className="font-bold text-[rgb(187,0,0)] font-mono text-xs tracking-wider">
              AVG: {service.avgRating.toFixed(1)}/5
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, Cell, LabelList
} from 'recharts';
import { forcesData, industryPenetration, modelScores } from '../data';

export const ForcesRadarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={forcesData}>
        <PolarGrid stroke="#334155" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar
          name="评分"
          dataKey="A"
          stroke="#06b6d4"
          strokeWidth={2}
          fill="#06b6d4"
          fillOpacity={0.3}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
          itemStyle={{ color: '#06b6d4' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export const IndustryBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={industryPenetration}
        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis 
            dataKey="name" 
            type="category" 
            width={100} 
            tick={{ fill: '#94a3b8', fontSize: 11 }} 
            interval={0}
        />
        <Tooltip 
            cursor={{fill: 'rgba(255,255,255,0.05)'}}
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
            formatter={(value: any, name: any, props: any) => {
                if (name === '当前渗透率') return [`${value}%`, name];
                if (name === '发展潜力') return [`${value}%`, name];
                return [value, name];
            }}
            labelFormatter={(label) => {
                const item = industryPenetration.find(i => i.name === label);
                return `${label} (YoY +${item?.growth}%)`;
            }}
        />
        <Bar dataKey="penetration" name="当前渗透率" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={10}>
        </Bar>
        <Bar dataKey="potential" name="发展潜力" fill="#334155" radius={[0, 4, 4, 0]} barSize={6} />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Mock data for trend line
const marketData = [
    { year: '2020', value: 20 },
    { year: '2021', value: 35 },
    { year: '2022', value: 45 },
    { year: '2023', value: 62 },
    { year: '2024', value: 85 },
    { year: '2025', value: 110 },
];

export const MarketGrowthChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={marketData}>
                <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="year" tick={{fill: '#64748b', fontSize: 10}} axisLine={false} tickLine={false} />
                <YAxis tick={{fill: '#64748b', fontSize: 10}} axisLine={false} tickLine={false} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} 
                    labelStyle={{ color: '#e2e8f0' }}
                />
                <Area type="monotone" name="市场规模(十亿)" dataKey="value" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export const ModelRankChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={modelScores}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
            >
                 <XAxis type="number" domain={[90, 100]} hide />
                 <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={90} 
                    tick={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 'bold' }} 
                    interval={0}
                 />
                 <Tooltip
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#8b5cf6' }}
                    labelStyle={{ color: '#00f0ff', fontWeight: 'bold' }}
                 />
                 <Bar dataKey="score" name="综合评分" radius={[0, 4, 4, 0]} barSize={16}>
                    {modelScores.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.type === 'Domestic' ? '#00f0ff' : '#475569'} />
                    ))}
                    <LabelList dataKey="score" position="right" fill="#fff" fontSize={12} />
                 </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}
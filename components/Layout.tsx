import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`glass-panel p-4 rounded-lg flex flex-col tech-border ${className}`}>
      <div className="flex justify-between items-center mb-4 border-b border-tech-cyan/20 pb-2">
        <h3 className="text-lg font-bold text-tech-cyan uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 bg-tech-accent rounded-full animate-pulse"></span>
          {title}
        </h3>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-tech-500"></div>
          <div className="w-1 h-1 bg-tech-500"></div>
          <div className="w-1 h-1 bg-tech-500"></div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export const KpiCard: React.FC<{ label: string; value: string; trend: string }> = ({ label, value, trend }) => (
  <div className="glass-panel p-4 rounded-md flex flex-col items-center justify-center border-t-2 border-t-tech-accent relative overflow-hidden group">
    <div className="absolute inset-0 bg-tech-accent/5 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
    <span className="text-tech-500 text-xs uppercase tracking-widest z-10">{label}</span>
    <span className="text-3xl font-bold text-white my-1 z-10">{value}</span>
    <span className="text-tech-cyan text-sm font-mono z-10">{trend}</span>
  </div>
);
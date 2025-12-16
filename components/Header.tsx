import React, { useEffect, useState } from 'react';
import { Activity, Radio } from 'lucide-react';

export const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full h-20 mb-6 relative shrink-0">
      <div className="absolute inset-0 flex items-center justify-between px-8 border-b border-tech-cyan/30 bg-gradient-to-r from-tech-900 via-tech-800 to-tech-900">
        <div className="flex items-center gap-4 z-10">
          <Activity className="text-tech-accent animate-pulse" size={32} />
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-tech-cyan tracking-wider uppercase">
              2025 中国 AI 应用发展报告
            </h1>
            <p className="text-xs text-tech-500 tracking-[0.3em] uppercase">商业洞察可视化分析看板</p>
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1/3">
           {/* Decorative center piece */}
           <div className="h-full w-full border-x border-tech-cyan/10 bg-tech-cyan/5 skew-x-12 flex items-center justify-center">
              <div className="text-tech-cyan font-mono text-lg animate-pulse tracking-widest">系统在线</div>
           </div>
        </div>

        <div className="flex items-center gap-6 text-tech-cyan font-mono z-10">
          <div className="flex flex-col items-end">
             <span className="text-xl font-bold">{time.toLocaleTimeString()}</span>
             <span className="text-xs text-tech-500">{time.toLocaleDateString()}</span>
          </div>
          <div className="p-2 border border-tech-cyan/30 rounded-full bg-tech-cyan/10">
             <Radio size={20} className="animate-spin-slow" />
          </div>
        </div>
      </div>
    </header>
  );
};
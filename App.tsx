import React from 'react';
import { Header } from './components/Header';
import { GlassCard, KpiCard } from './components/Layout';
import { ForcesRadarChart, IndustryBarChart, MarketGrowthChart, ModelRankChart } from './components/Charts';
import { TrendItem, ScenarioHexagon, TechCarousel, RealTimeLog } from './components/Visualizations';
import { trends, scenarios } from './data';
import { TrendingUp, Cpu } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center bg-fixed text-white font-sans selection:bg-tech-cyan selection:text-tech-900">
      <div className="min-h-screen bg-tech-900/95 backdrop-blur-sm pb-4 flex flex-col">
        <Header />

        {/* Main Content Grid - Responsive: Stack on mobile, 12 cols on lg screens */}
        {/* We use specific heights to ensure alignment at the bottom of the grid */}
        <main className="px-4 lg:px-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* LEFT COLUMN - Total Height: 90+400+250 + 2*24gap = 788px + gaps */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* KPI ROW: ~90px */}
            <div className="grid grid-cols-2 gap-4 h-[90px]">
               <KpiCard label="融资规模" value="1100亿" trend="+62% 同比" />
               <KpiCard label="企业采纳率" value="90%" trend="行业领先" />
            </div>

            {/* Trends: 400px */}
            <GlassCard title="6大技术趋势" className="h-[400px]">
              <div className="overflow-y-auto h-full pr-2">
                {trends.map(trend => (
                  <TrendItem key={trend.id} trend={trend} />
                ))}
              </div>
            </GlassCard>

            {/* Radar: 250px */}
            <GlassCard title="4大驱动力分析" className="h-[250px]">
              <ForcesRadarChart />
            </GlassCard>
          </div>

          {/* CENTER COLUMN - Total Height: 360+130+250 + 2*24gap = 788px + gaps */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Carousel: 360px */}
            <GlassCard title="核心战略与应用场景" className="h-[360px] relative overflow-hidden p-0">
               <TechCarousel />
            </GlassCard>

            {/* Hexagons: 130px */}
            <div className="h-[130px] grid grid-cols-5 gap-3 shrink-0">
                {scenarios.map((scenario, idx) => (
                    <ScenarioHexagon key={scenario.id} scenario={scenario} index={idx} />
                ))}
            </div>

            {/* Growth: 250px */}
            <GlassCard title="市场增长预测 (2020-2025)" className="h-[250px]">
                 <MarketGrowthChart />
            </GlassCard>
          </div>

          {/* RIGHT COLUMN - Total Height: 190+250+300 + 2*24gap = 788px + gaps */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
             {/* Real-time: 190px */}
             <GlassCard title="AI 系统实时监控" className="h-[190px] bg-black/40">
                <RealTimeLog />
             </GlassCard>

             {/* Penetration: 250px */}
             <GlassCard title="行业渗透率排行" className="h-[250px]">
                <div className="flex justify-between items-center px-2 mb-2">
                    <span className="text-xs text-tech-500">各行业 AI 采用指数</span>
                    <span className="text-xs text-tech-accent flex items-center gap-1"><TrendingUp size={10}/> 持续增长</span>
                </div>
                <IndustryBarChart />
             </GlassCard>

             {/* New Model Rank Chart: 300px */}
             <GlassCard title="核心模型能力测评" className="h-[300px]">
                <div className="flex justify-between items-center px-2 mb-2 border-b border-tech-700 pb-2">
                    <span className="text-xs text-tech-500">DeepSeek-V3 vs 国际主流</span>
                    <Cpu size={14} className="text-tech-accent"/>
                </div>
                <ModelRankChart />
             </GlassCard>
          </div>

        </main>
        
        {/* Footer */}
        <footer className="w-full text-center py-4 text-tech-500 text-xs font-mono tracking-widest border-t border-tech-800 bg-tech-900/80">
            牧谦尔尔原创 © 2025
        </footer>
      </div>
    </div>
  );
};

export default App;
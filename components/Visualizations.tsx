import React, { useState, useEffect, useRef } from 'react';
import { Brain, Layers, Network, Bot, Cpu, Server, Zap, Heart, Box, Compass, FlaskConical, Terminal, AlertCircle, Wifi, Activity, DollarSign } from 'lucide-react';
import { Trend, Scenario, LogEntry } from '../types';
import { logTemplates } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={24} />,
  Layers: <Layers size={24} />,
  Network: <Network size={24} />,
  Bot: <Bot size={24} />,
  Cpu: <Cpu size={24} />,
  Server: <Server size={24} />,
};

export const TrendItem: React.FC<{ trend: Trend }> = ({ trend }) => (
  <div className="flex items-center gap-3 p-3 mb-2 bg-tech-800/50 rounded border border-tech-700 hover:border-tech-cyan/50 transition-colors group">
    <div className="text-tech-cyan group-hover:text-tech-accent transition-colors group-hover:scale-110 transform duration-300">
      {iconMap[trend.icon]}
    </div>
    <div>
      <h4 className="font-bold text-sm text-gray-200">{trend.title}</h4>
      <p className="text-xs text-gray-500">{trend.description}</p>
    </div>
  </div>
);

export const ScenarioHexagon: React.FC<{ scenario: Scenario, index: number }> = ({ scenario, index }) => {
    const icons = [<Zap />, <Heart />, <Box />, <Compass />, <FlaskConical />];
    
    return (
        <div className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-tech-800 to-tech-900 border border-tech-700 rounded-xl hover:border-tech-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 transform hover:-translate-y-1 h-full">
            <div className="text-tech-purple mb-1 p-2 bg-tech-purple/10 rounded-full">
                {icons[index % icons.length]}
            </div>
            <h4 className="text-tech-accent font-bold text-sm">{scenario.title}</h4>
            <span className="text-[10px] text-tech-500 uppercase tracking-wide">{scenario.subtitle}</span>
        </div>
    )
}

const carouselImages = [
    {
        url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
        title: "未来工厂",
        desc: "人机协作与全自动化产线"
    },
    {
        url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
        title: "智慧城市大脑",
        desc: "数据驱动的城市管理"
    },
    {
        url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
        title: "具身智能",
        desc: "仿生机器人与环境交互"
    },
    {
        url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop",
        title: "AI 科研",
        desc: "加速新药研发与材料科学"
    }
];

export const TechCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden rounded group">
            {carouselImages.map((img, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[10s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-900 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                        <div className="transform translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] border-l-4 border-tech-accent pl-4">
                                {img.title}
                            </h3>
                            <p className="text-tech-cyan/80 text-lg pl-5">{img.desc}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-6 right-6 flex gap-2">
                {carouselImages.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 bg-tech-accent' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                    />
                ))}
            </div>
            
            <div className="absolute top-4 right-4 text-xs font-mono text-tech-accent/60 bg-black/40 px-2 py-1 rounded border border-tech-accent/20">
                LIVE FEED • CAM-{currentIndex + 1}
            </div>
        </div>
    );
};

export const RealTimeLog: React.FC = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    
    // Initialize logs
    useEffect(() => {
        const initialLogs: LogEntry[] = Array.from({length: 6}).map((_, i) => ({
            id: i,
            time: new Date(Date.now() - i * 2000).toLocaleTimeString(),
            ...logTemplates[Math.floor(Math.random() * logTemplates.length)]
        } as LogEntry));
        setLogs(initialLogs);
    }, []);

    // Add new log every 1.5s
    useEffect(() => {
        const interval = setInterval(() => {
            const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
            const newLog: LogEntry = {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                category: template.category!,
                message: template.message!
            };
            setLogs(prev => [newLog, ...prev.slice(0, 8)]);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    const getIcon = (cat: string) => {
        switch(cat) {
            case 'SYSTEM': return <Activity size={12} className="text-tech-blue" />;
            case 'ALERT': return <AlertCircle size={12} className="text-red-400" />;
            case 'NETWORK': return <Wifi size={12} className="text-tech-cyan" />;
            case 'FINANCE': return <DollarSign size={12} className="text-tech-purple" />;
            default: return <Terminal size={12} />;
        }
    }

    const getColor = (cat: string) => {
        switch(cat) {
            case 'SYSTEM': return 'text-tech-blue';
            case 'ALERT': return 'text-red-400';
            case 'NETWORK': return 'text-tech-cyan';
            case 'FINANCE': return 'text-tech-purple';
            default: return 'text-gray-400';
        }
    }

    return (
        <div className="h-full flex flex-col font-mono text-xs overflow-hidden">
            <div className="flex items-center gap-2 mb-2 px-2 text-tech-500 border-b border-tech-700 pb-1">
                <Terminal size={14} />
                <span>SYSTEM_LOGS // REALTIME</span>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="flex-1 overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col gap-1.5">
                    {logs.map((log) => (
                        <div key={log.id} className="flex gap-2 items-center px-2 py-1 animate-in slide-in-from-top-2 fade-in duration-500">
                            <span className="text-tech-600 shrink-0">[{log.time}]</span>
                            <span className={`shrink-0 ${getColor(log.category)}`}>{log.category}</span>
                            <span className="text-tech-cyan/80 truncate"> {log.message}</span>
                        </div>
                    ))}
                </div>
                {/* Fade out bottom */}
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-tech-900 via-tech-900/50 to-transparent"></div>
            </div>
        </div>
    );
}
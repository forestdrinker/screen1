import { Trend, Scenario, IndustryData, Startup, ForceData, LogEntry, ModelScore } from './types';

export const trends: Trend[] = [
  { id: 1, title: "认知深化", description: "强化学习驱动推理能力提升", icon: "Brain" },
  { id: 2, title: "多模态融合", description: "拓展人机交互与感知边界", icon: "Layers" },
  { id: 3, title: "云端协同", description: "智能应用深度渗透至边缘", icon: "Network" },
  { id: 4, title: "智能体 (Agents)", description: "从指令响应进化为目标导向", icon: "Bot" },
  { id: 5, title: "具身智能", description: "物理世界交互与自主决策", icon: "Cpu" },
  { id: 6, title: "AI 基础设施", description: "构建高效的开发与算力基座", icon: "Server" },
];

export const scenarios: Scenario[] = [
  { id: 1, title: "提效", subtitle: "新工具", description: "自动代码生成、文档分析" },
  { id: 2, title: "服务", subtitle: "新体验", description: "超个性化推荐、智能客服" },
  { id: 3, title: "产品", subtitle: "新形态", description: "AI 硬件、生成式应用" },
  { id: 4, title: "决策", subtitle: "新助手", description: "数据驱动的战略洞察" },
  { id: 5, title: "研发", subtitle: "新范式", description: "AI for Science (科研)" },
];

export const industryPenetration: IndustryData[] = [
  { name: '软件/信息技术', penetration: 85, potential: 95, growth: 12.5 },
  { name: '金融服务', penetration: 70, potential: 85, growth: 8.3 },
  { name: '汽车/自动驾驶', penetration: 65, potential: 90, growth: 15.2 },
  { name: '传媒/娱乐内容', penetration: 60, potential: 80, growth: 22.1 },
  { name: '医疗/生物医药', penetration: 45, potential: 90, growth: 18.7 },
  { name: '工业/高端制造', penetration: 40, potential: 85, growth: 9.4 },
  { name: '农林牧渔', penetration: 20, potential: 70, growth: 5.6 },
];

export const forcesData: ForceData[] = [
  { subject: '技术创新力', A: 85, fullMark: 100 },
  { subject: '资本吸引力', A: 90, fullMark: 100 },
  { subject: '市场渗透率', A: 65, fullMark: 100 },
  { subject: '商业价值', A: 75, fullMark: 100 },
];

export const modelScores: ModelScore[] = [
    { name: 'DeepSeek-V3', score: 98.5, capabilities: '推理/代码', type: 'Domestic' },
    { name: 'GPT-4o', score: 98.2, capabilities: '综合全能', type: 'International' },
    { name: 'Claude 3.5', score: 97.8, capabilities: '代码/逻辑', type: 'International' },
    { name: '豆包 (Doubao)', score: 96.5, capabilities: '长文/语音', type: 'Domestic' },
    { name: 'GLM-4', score: 95.9, capabilities: '工具调用', type: 'Domestic' },
    { name: 'Qwen-2.5', score: 95.5, capabilities: '数学/编程', type: 'Domestic' },
];

export const startups: Startup[] = [
  { id: 101, name: "DeepSeek", field: "通用大模型", highlight: "DeepSeek-V3 性能霸榜，开源先锋", valuation: "独角兽" },
  { id: 102, name: "字节跳动", field: "应用层", highlight: "豆包 APP 月活超千万，视频生成", valuation: "巨头" },
  { id: 1, name: "月之暗面", field: "大模型", highlight: "Kimi 长文本处理突破 200万字", valuation: "$30亿" },
  { id: 2, name: "Minimax", field: "生成式AI", highlight: "语音合成与即时交互技术领先", valuation: "$25亿" },
  { id: 3, name: "智谱AI", field: "大模型", highlight: "GLM-4 开源生态与商用落地", valuation: "B+轮" },
  { id: 4, name: "百川智能", field: "医疗AI", highlight: "医疗垂类大模型准确率98%", valuation: "$18亿" },
  { id: 5, name: "零一万物", field: "大模型", highlight: "Yi-34B 模型登顶 HuggingFace", valuation: "独角兽" },
  { id: 9, name: "文远知行", field: "自动驾驶", highlight: "L4级自动驾驶小巴商业运营", valuation: "IPO" },
  { id: 6, name: "宇树科技", field: "具身智能", highlight: "通用人形机器人 H1 量产", valuation: "B轮" },
  { id: 14, name: "生数科技", field: "多模态", highlight: "Vidu 视频生成模型发布", valuation: "Pre-A" },
  { id: 7, name: "银河通用", field: "机器人", highlight: "泛化抓取与药店场景落地", valuation: "天使轮" },
  { id: 11, name: "壁仞科技", field: "AI芯片", highlight: "大算力 GPU 性能对标国际", valuation: "Pre-IPO" },
  { id: 8, name: "深势科技", field: "AI4Science", highlight: "蛋白质结构预测与药物设计", valuation: "C轮" },
  { id: 15, name: "智元机器人", field: "具身智能", highlight: "远征 A1 具身智能机器人", valuation: "A++++" },
];

// Pre-defined log templates
export const logTemplates: Partial<LogEntry>[] = [
    { category: 'SYSTEM', message: '算力节点 CN-SH-03 负载率达到 94%' },
    { category: 'NETWORK', message: 'API 网关检测到并发请求峰值：12,400 QPS' },
    { category: 'FINANCE', message: '检测到大额融资事件：具身智能领域 +3.5亿 RMB' },
    { category: 'ALERT', message: '模型微调任务 #8832 已完成，耗时 4h 21m' },
    { category: 'SYSTEM', message: '边缘端设备上线数量：+452 台/分钟' },
    { category: 'NETWORK', message: '数据清洗管道吞吐量：50GB/s' },
    { category: 'FINANCE', message: '行业渗透率指数更新：制造领域 +0.2%' },
    { category: 'ALERT', message: '安全围栏拦截到异常 Prompt 攻击' },
];
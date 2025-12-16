export interface Trend {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Scenario {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface IndustryData {
  name: string;
  penetration: number; // 0-100
  potential: number; // 0-100
  growth: number; // YoY growth %
}

export interface Startup {
  id: number;
  name: string;
  field: string;
  highlight: string;
  valuation: string; // e.g. "Pre-IPO" or "$1B"
}

export interface ForceData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface LogEntry {
  id: number;
  time: string;
  category: 'SYSTEM' | 'FINANCE' | 'ALERT' | 'NETWORK';
  message: string;
}

export interface ModelScore {
  name: string;
  score: number;
  capabilities: string;
  type: 'Domestic' | 'International';
}
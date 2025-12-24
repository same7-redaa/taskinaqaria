
import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Lightbulb, 
  Layers, 
  PieChart, 
  Hammer, 
  Layout, 
  Truck, 
  PenTool, 
  HardHat, 
  Users, 
  Search,
  Wallet,
  Target,
  FileText
} from 'lucide-react';

export const COLORS = {
  primary: '#FAF9F6', // Off-white
  secondary: '#F3F1ED', // Sand
  accent: '#0A5C8F', // Primary Blue
  accentSecondary: '#C9A96E', // Soft Beige for details/icons
  text: '#1a1a1a',
  softText: '#6b7280'
};

export const STATS = [
  { value: '15+', label: 'عام خبرة' },
  { value: '2000+', label: 'عميل' },
  { value: '650000', label: 'متر مربع مطور' },
  { value: '5', label: 'مشاريع منفذة' },
  { value: '6', label: 'مشاريع تحت الدراسة' },
  { value: '3', label: 'مشاريع تحت التنفيذ' }
];

export const DEVELOPMENT_SERVICES = [
  { title: 'تمويل المشاريع', description: 'هيكلة الحلول المالية', icon: <Wallet size={32} /> },
  { title: 'دراسة الجدوى', description: 'تحليل مالي وتشغيلي', icon: <PieChart size={32} /> },
  { title: 'التقييم الأولي', description: 'تقييم أفضل استخدام', icon: <Search size={32} /> },
  { title: 'إدارة المشاريع', description: 'من التخطيط للتسليم', icon: <Target size={32} /> },
  { title: 'إدارة المشتريات', description: 'ضبط التكاليف والموردين', icon: <Truck size={32} /> },
  { title: 'إدارة التصميم', description: 'إشراف معماري وهندسي', icon: <PenTool size={32} /> },
  { title: 'إدارة الإنشاءات', description: 'متابعة التنفيذ والجودة', icon: <HardHat size={32} /> },
  { title: 'التسويق والاتصال', description: 'جذب المستثمرين', icon: <Users size={32} /> }
];

export const ASSET_SERVICES = [
  'إدارة وتشغيل الأصول',
  'بناء الاستراتيجيات',
  'إدارة التحصيل والائتمان',
  'إدارة المرافق والأمن والسلامة',
  'جذب العملاء',
  'تحسين تجربة العميل',
  'البيع والتأجير'
];

export const INVESTMENT_SERVICES = [
  { title: 'صناعة الفرص الاستثمارية', icon: <Lightbulb /> },
  { title: 'دراسات تحليلية للاستثمار', icon: <FileText /> },
  { title: 'استثمار بخدمات متكاملة', icon: <ShieldCheck /> },
  { title: 'شبكة علاقات متنوعة', icon: <Layers /> }
];

export const PROJECT_TYPES = [
  { title: 'مجمعات تجارية', image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=800' },
  { title: 'مباني إدارية', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { title: 'مجمعات طبية', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
  { title: 'مراكز لوجستية', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' }
];

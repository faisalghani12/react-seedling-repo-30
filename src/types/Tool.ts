export interface Tool {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  status: 'available' | 'coming-soon' | 'beta';
  features: string[];
  onAction: () => void;
  category: string;
  actionLabel: string;
  gradient?: string;
}
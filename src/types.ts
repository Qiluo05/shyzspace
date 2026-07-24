export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductModule {
  id: string;
  iconName: string;
  title: string;
  summary: string;
  items: string[];
}

export interface UseCase {
  industry: string;
  title: string;
  result: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  type: 'miniprogram';
  title: string;
  tagline: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  platform: 'gongxu' | 'mishu';
  badgeColor: string;
  badgeText: string;
  highlights: string[];
  modules?: ProductModule[];
  features: ProductFeature[];
  workflowSteps: { step: number; title: string; desc: string }[];
  useCases: UseCase[];
  faqs: FAQItem[];
  previewTemplate: {
    defaultTitle: string;
    defaultDesc: string;
    defaultImage: string;
    targetUrl: string;
  };
}



export interface ServiceContent { title: string; text: string; }
export interface FAQContent { question: string; answer: string; }
export interface SiteConfig {
  isDemo: boolean;
  allowIndexing: boolean;
  googleSiteVerification: string;
  url: string;
  businessName: string;
  description: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  ctaLabel: string;
  contactEmail: string;
  contactHeading: string;
  contactText: string;
  services: ServiceContent[];
  process: ServiceContent[];
  faqs: FAQContent[];
}

// The agent updates this from your brief. No credentials belong in this file.
export const site: SiteConfig = {
  isDemo: true,
  allowIndexing: false,
  googleSiteVerification: '',
  url: '',
  businessName: 'Northline Studio',
  description: 'A fictional local design studio. A starter website for your next idea.',
  eyebrow: 'A small studio. A considered approach.',
  headline: 'Make room for what matters.',
  introduction: 'Thoughtful spaces for everyday life. Tell us what you want your home to feel like, and we’ll help you find a direction.',
  ctaLabel: 'Start a conversation',
  contactEmail: '',
  contactHeading: 'Let’s talk about your space.',
  contactText: 'Share what you’re planning, what feels difficult, and what a good result would look like.',
  services: [
    { title: 'Find your direction', text: 'A focused conversation to understand your space, priorities, and ideas.' },
    { title: 'Bring it together', text: 'A clear plan for materials, layout, and the details that make a room feel right.' },
    { title: 'Take the next step', text: 'Practical guidance to help you move from a collection of ideas to a place you enjoy.' }
  ],
  process: [
    { title: 'Tell us what you need', text: 'Start with a conversation about your goals and your space.' },
    { title: 'Review a clear direction', text: 'See the approach, ask questions, and decide what works for you.' },
    { title: 'Make it yours', text: 'Move forward with a plan that reflects the way you want to live.' }
  ],
  faqs: [
    { question: 'Where do we start?', answer: 'Start with your goals. We can work together to decide what kind of support makes sense.' },
    { question: 'Do I need to know exactly what I want?', answer: 'A few ideas, a problem you want to solve, or a feeling you want to create is enough to begin.' }
  ]
};

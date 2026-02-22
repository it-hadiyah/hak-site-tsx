
export type PageId = 'home' | 'about' | 'services' | 'governance' | 'media' | 'contact' | 'news-archive';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface CardData {
  title: string;
  description: string;
  icon?: string;
  points?: string[];
}

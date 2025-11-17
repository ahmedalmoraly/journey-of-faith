
export interface CollectionItem {
  title: string;
  description: string;
  image?: string;
  slug?: string;
}

export interface CollectionData {
  hero: Hero;
  featuredArticle: FeaturedArticle;
  tools: Array<Tool>;
  articles: Array<Article>;
  videos?: Array<Video>;
  shorts?: Array<Video>;
}

export type CollectionConfig = {
  [key: string]: {
    data: () => Promise<{ default: CollectionData }>;
  };
};

export interface FeaturedArticle {
  title: string;
  paragraphs: string[];
  image: string;
}

export interface Slide {
  image: string;
  altText: string;
  hash: string;
}

export interface Hero {
  title: string;
  description: string;
  slides: Array<Slide>;
}

export interface Tool {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  link: string;
  button?: string;
  icon?: string;
}

export interface Video {
  title: string;
  url: string;
  description: string;
  isShort: boolean;
}

export interface Article {
  title: string;
  description: string;
  image: string;
  link: string;
  source: string;
}

export const collections: CollectionConfig = {
  'reasons-to-believe': {
    data: () => import('@/data/reasons-to-believe.json'),
  },
};

export type CollectionKey = keyof typeof collections;

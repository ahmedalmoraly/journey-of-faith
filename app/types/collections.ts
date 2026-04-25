

export interface CollectionData {
  hero: Hero;
  featuredArticle: FeaturedArticle;
  tools: Array<Tool>;
  articles: Array<Article>;
  videos: Array<Video>;
  shorts: Array<Video>;
  relatedCollections: Array<string>;
  revertsStories: Array<Video>;
}
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

export type CollectionConfig = {
  [key: string]: {
    data: () => Promise<{ default: CollectionData }>;
  };
};

export const collections: CollectionConfig = {
  'reasons-to-believe': {
    data: () => import('@/data/reasons-to-believe.json'),
  },
};

export type CollectionKey = keyof typeof collections;

export interface CollectionItem {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const reasonsToBelieve: CollectionItem = {
  title: "Reasons to Believe",
  description: "Islam invites you to explore the magnificent creation, where every discovery reveals another chapter in the unfolding story of God's boundless wisdom. Far from standing in opposition to faith, science becomes a trusted companion in this awe-inspiring journey of understanding.",
  image: "https://d6x6me9j41n5u.cloudfront.net/reasons_to_believe.webp",
  slug: "/reasons-to-believe",
};

export const knotsOfFaith: CollectionItem = {
  title: "Knots of Faith",
  description: "In Islam, God (Allah) is the Absolute One, the Originator of everything. He is beyond comprehension, unlike anything created, with no likeness ascribed to Him. His existence is self-evident, revealed in the intricate tapestry of the universe, yet requiring no proof.",
  image: "https://d6x6me9j41n5u.cloudfront.net/knots_of_faith.webp",
  slug: "/knots-of-faith",
};

export const fromTheGroundUp: CollectionItem = {
  title: "From The Ground Up",
  description: "God is the One Who made the sun a radiant source and the moon a reflected light, with precisely ordained phases, so that you may know the number of years and calculation ˹of time˺. God did not create all this except for a purpose. He makes the signs clear for people of knowledge.” [Quran 10:5]",
  image: "https://d6x6me9j41n5u.cloudfront.net/from_the_ground_up.webp",
  slug: "/from-the-ground-up",
};

export const herMajesty: CollectionItem = {
  title: "Her Majesty",
  description: "Discover the true status of women in Islam — where dignity, rights, and respect were granted over 1,400 years ago. Uncover the stories, the strength, and the legacy ",
  image: "https://d6x6me9j41n5u.cloudfront.net/her_majesty.webp",
  slug: "/women",
};

export const allCollections: { [key: string]: CollectionItem } = {
  'reasons-to-believe': reasonsToBelieve,
  'knots-of-faith': knotsOfFaith,
  'from-the-ground-up': fromTheGroundUp,
  'her-majesty': herMajesty,
};

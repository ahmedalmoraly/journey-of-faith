import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import MainContainer from '@/components/MainContainer';
import ToolsGrid from '@/components/ToolsGrid';
import ArticlesGrid from '@/components/ArticlesGrid';
import ArticleCard from '@/components/ArticleCard';
import AyahADay from '@/components/AyahADay';
import FeaturedArticle from '@/components/FeaturedArticle'; 

// Define the type for our collection data
const collectionData = {
  'reasons-to-believe': () => import('@/data/reasons-to-believe.json'),
  // 'scientific-miracles': () => import('@/app/data/scientific-miracles.json'),
} as const;

type CollectionKey = keyof typeof collectionData;

interface Props {
  params: { slug: string };
}

// Type guard to check if slug is a valid collection key
function isValidCollectionKey(slug: string): slug is CollectionKey {
  return slug in collectionData;
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  
  if (!isValidCollectionKey(slug)) {
    notFound();
  }

  const module = await collectionData[slug as CollectionKey]();
  const data = module.default;

  if (!data) {
    notFound();
  }

  const toolsGrid = <ToolsGrid key="tools" tools={data.tools}/>;
  const articlesGrid = <ArticlesGrid key="articles" articles={data.articles}/>;
  const featuredArticle = <FeaturedArticle key="featured-article" title={data.featuredArticle.title} paragraphs={data.featuredArticle.paragraphs} image={data.featuredArticle.image}/>

  const mainContent = [featuredArticle, toolsGrid, articlesGrid];
  
  const sidebarContent = [
          <AyahADay key="ayahaday" />
        ];

  return (
    <>
      <Hero title={data.hero.title} description={data.hero.description} slides={data.hero.slides} />
      {/* ... other sections */}
      <MainContainer mainContent={mainContent} sidebarContent={sidebarContent} />
    </>
  );
}

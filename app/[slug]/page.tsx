import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import MainContainer from '@/components/MainContainer';
import ToolsGrid from '@/components/ToolsGrid';
import ArticlesGrid from '@/components/ArticlesGrid';
import AyahADay from '@/components/AyahADay';
import FeaturedArticle from '@/components/FeaturedArticle'; 
import VideosGrid from '@/components/VideosGrid';
import RelatedCollections from '@/components/RelatedCollections';

import {collections, allCollections} from '@/types/collections';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Type guard to check if slug is a valid collection key
function isValidCollectionKey(slug: string) {
  return slug in collections;
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isValidCollectionKey(slug)) {
    notFound();
  }

  const module = await collections[slug].data();
  const data = module.default;

  if (!data) {
    notFound();
  }

  const featuredArticle = <FeaturedArticle key="featured-article" title={data.featuredArticle.title} paragraphs={data.featuredArticle.paragraphs} image={data.featuredArticle.image}/>
  const toolsGrid = <ToolsGrid key="tools" tools={data.tools}/>;
  const articlesGrid = <ArticlesGrid key="articles" articles={data.articles}/>;
  const videosGrid = <VideosGrid key="videos" videos={data.videos} shorts={data.shorts}/>;
  const relatedCollections = <RelatedCollections key="related-collections" collections={data.relatedCollections.map((collectionKey) => allCollections[collectionKey])}/>;

  const mainContent = [featuredArticle, toolsGrid, videosGrid, articlesGrid, relatedCollections];
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

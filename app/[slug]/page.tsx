import { notFound, redirect } from 'next/navigation';
import Hero from '@/components/Hero';
import MainContainer from '@/components/MainContainer';
import ToolsGrid from '@/components/ToolsGrid';
import ArticlesGrid from '@/components/ArticlesGrid';
import FeaturedArticle from '@/components/FeaturedArticle'; 
import VideosGrid from '@/components/VideosGrid';
import RelatedCollections from '@/components/RelatedCollections';
import RevertsStories from '@/components/RevertsStories';
import {collections, allCollections} from '@/types/collections';

// Static params for known collection slugs
export async function generateStaticParams() {
  return [
    { slug: 'reasons-to-believe' },
    { slug: 'knots-of-faith' },
    { slug: 'from-the-ground-up' },
    { slug: 'her-majesty' },
  ];
}

// Sidebar
import AyahADay from '@/components/AyahADay';
import NearbyMosques from '@/components/NearbyMosques';


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
    // redirect to reasons-to-believe
    redirect('/reasons-to-believe');
  }

  const collectionModule = await collections[slug].data();
  const data = collectionModule.default;

  if (!data) {
    notFound();
  }

  const featuredArticle = <FeaturedArticle key="featured-article" title={data.featuredArticle.title} paragraphs={data.featuredArticle.paragraphs} image={data.featuredArticle.image}/>
  const toolsGrid = <ToolsGrid key="tools" tools={data.tools}/>;
  const videosGrid = <VideosGrid key="videos" videos={data.videos} shorts={data.shorts}/>;
  const articlesGrid = <ArticlesGrid key="articles" articles={data.articles}/>;
  const revertStories = <RevertsStories key="revert-stories" videos={data.revertsStories}/>;
  const relatedCollections = <RelatedCollections key="related-collections" collections={data.relatedCollections.map((collectionKey) => allCollections[collectionKey])}/>;

  const mainContent = [featuredArticle, toolsGrid, videosGrid, articlesGrid, revertStories, relatedCollections];
  const sidebarContent = [
          <AyahADay key="ayahaday" />,
          <NearbyMosques key="nearby-mosques" />
        ];

  return (
    <>
      <Hero title={data.hero.title} description={data.hero.description} slides={data.hero.slides} />
      {/* ... other sections */}
      <MainContainer mainContent={mainContent} sidebarContent={sidebarContent} />
    </>
  );
}

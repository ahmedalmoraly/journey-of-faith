import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';

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

  return (
    <>
      <Hero title={data.hero.title} description={data.hero.description} slides={data.hero.slides} />
      {/* ... other sections */}
    </>
  );
}

import CollectionCard from "./CollectionCard";

import { CollectionItem } from "@/types/collections";

export default function RelatedCollections({ collections }: { collections: CollectionItem[] }) {
  return (
    
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 section-title">Related Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {collections.map((collection, i) => (
            <div key={i} className="w-full">
                <CollectionCard {...collection} />
            </div>
        ))}
        </div>
    </section>
  );
}

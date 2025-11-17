import Link from "next/link";

import type { CollectionItem } from "@/types/collections";
import Image from "next/image";

export default function CollectionCard({ title, description, image, slug }: CollectionItem) {
  return (
    <Link href={slug}>
      <div className={`group bg-linear-to-br rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer`}>
        <div className="relative h-48">
          <Image src={image} alt={title} fill priority className="object-cover rounded-t-xl" />
        </div>
        <div className="bg-white rounded-2xl p-4 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#28348E] mb-3 line-clamp-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4 grow line-clamp-5">{description}</p>
          </div>
          <span className="text-[#28348E] font-medium mt-4 inline-block group-hover:underline article-title">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}

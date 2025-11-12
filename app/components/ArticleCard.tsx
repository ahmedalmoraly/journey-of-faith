import Link from "next/link";

export default function ArticleCard({ title, description, image, source, link }: any) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="h-full">
        <div className="group h-full flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 md:h-60 bg-cover bg-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${image}')` }}></div>
            </div>
            <div className=" h-full rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col">
                <span className="w-fit inline-block bg-[#FFC931] text-[#28348E] text-xs px-2 py-1 rounded-full mb-2">{source}</span>
                <h3 className="text-lg font-bold text-[#28348E] mb-3 line-clamp-2">{title}</h3>
                <p className="text-sm text-gray-600 mb-4 grow line-clamp-3">{description}</p>
                <div className="mt-auto pt-2 text-[#FFC931] text-sm font-medium flex items-center">
                    Read More <i className="fas fa-arrow-right ml-1 text-xs"></i>
                </div>
            </div>
        </div>
    </Link>
  );
}

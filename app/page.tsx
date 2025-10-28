import Image from "next/image";
import Hero from "@/components/Hero";
import CollectionCard, { IconType } from "@/components/CollectionCard";
import WhyCard from "@/components/WhyCard";
import Testimonial from "@/components/Testimonial";

import data from "@/data/landing.json";
import { redirect, RedirectType } from "next/navigation";

export default function Home() {
    redirect('/reasons-to-believe', RedirectType.replace)
    return null
}

// export default function Home() {
//   return (
//     <>

//       {/* Featured Collections */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
//             Explore Islam Through
//           </h2>
//           <p className="text-xl text-center text-gray-600 mb-12">
//             Curated collections of wisdom, science, and stories
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//             {data.collections.map((c, i) => (
//               <CollectionCard key={i} {...c} icon={c.icon as IconType} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Explore */}
//       <section className="py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-12">{data.why.title}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {data.why.items.map((item, i) => (
//               <WhyCard key={i} {...item} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-blue-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
//             What Others Are Saying
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {data.testimonials.map((t, i) => (
//               <Testimonial key={i} {...t} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

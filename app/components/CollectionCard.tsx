import Link from "next/link";

const icons = {
  sparkles: "✨",
  beaker: "🧪",
  heart: "❤️",
  compass: "🧭",
  // Fallback icon in case an unknown icon is provided
  default: "✨"
} as const;

export type IconType = keyof Omit<typeof icons, 'default'>;

interface CollectionCardProps {
  title: string;
  description: string;
  link: string;
  icon: IconType;
  color: string;
}

export default function CollectionCard({ title, description, link, icon, color }: CollectionCardProps) {
  return (
    <Link href={link}>
      <div className={`group bg-gradient-to-br ${color} p-1 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer`}>
        <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between">
          <div>
            <div className="text-5xl mb-4">{icon in icons ? icons[icon as IconType] : icons.default}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <span className="text-blue-600 font-medium mt-4 inline-block group-hover:underline">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}
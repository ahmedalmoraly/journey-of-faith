export default function ToolCard({ title, subtitle, description, link, button }: any) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
      <h3 className="text-2xl font-bold text-blue-800">{title}</h3>
      <p className="text-sm text-teal-600 font-medium mb-2">{subtitle}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-5 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-teal-700 transition"
      >
        {button}
      </a>
    </div>
  );
}
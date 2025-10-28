export default function WhyCard({ icon, title, text }: any) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
export default function Testimonial({ quote, author }: any) {
  return (
    <blockquote className="bg-gray-50 p-8 rounded-xl italic text-lg text-gray-700 border-l-4 border-blue-500">
      <p className="mb-4">"{quote}"</p>
      <footer className="text-right font-semibold text-blue-700">— {author}</footer>
    </blockquote>
  );
}
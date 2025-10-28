export default function QuranQuote({ text, reference }: { text: string; reference: string }) {
  return (
    <blockquote className="my-12 max-w-4xl mx-auto bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-xl border-r-4 border-teal-600 italic text-lg text-gray-800">
      <p className="mb-4">"{text}"</p>
      <footer className="text-right font-semibold text-teal-700">— {reference}</footer>
    </blockquote>
  );
}
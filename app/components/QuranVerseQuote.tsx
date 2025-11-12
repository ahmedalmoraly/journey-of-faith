import Link from "next/link";

export interface QuranVerseQuoteProps {
    text: string;
    reference: string;
    verse_id: string;
}

export default function QuranVerseQuote({ text, reference, verse_id }: QuranVerseQuoteProps) {
  return (
    <blockquote className="text-center my-12 max-w-4xl mx-auto bg-linear-to-r from-[#F8FAFC] to-[#F0F4F8] p-8 rounded-xl border-r-4 border-[#28348E] italic text-lg text-[#28348E]">
      <i className="fas fa-quote-left text-3xl text-gray-300 mb-4"></i>
                
      <p className="mb-4 text-center px-6">"{text}"</p>
      <footer className="text-right font-semibold text-[#28348E]">
        <Link href={`https://quran.com/${verse_id}`} target="_blank" rel="noopener noreferrer">— {reference}</Link>
      </footer>
    </blockquote>
  );
}
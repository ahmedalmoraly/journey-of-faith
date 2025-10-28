export default function IntroSection({ title, text }: { title: string; text: string }) {
  return (
    <section className="text-center py-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">{title}</h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">{text}</p>
    </section>
  );
}
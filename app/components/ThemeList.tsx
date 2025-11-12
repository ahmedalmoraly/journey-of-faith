export default function ThemeList({ themes }: { themes: string[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
      {themes.map((t, i) => (
        <li
          key={i}
          className="bg-linear-to-r from-blue-500 to-teal-500 text-white text-center py-6 rounded-lg shadow-md font-semibold text-lg hover:shadow-xl transition"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
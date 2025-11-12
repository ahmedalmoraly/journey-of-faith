export default function AyahADay() {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <h2 className="text-xl font-bold p-6 pb-4 flex items-center article-title">
                <i className="fas fa-book-quran mr-2 text-[#28348E]"></i>
                Verse of the Day
            </h2>
            <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe 
                    src="https://ayahaday.com" 
                    className="w-full h-[500px] border-0"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts allow-popups">
                </iframe>
            </div>
        </div>
    );
}
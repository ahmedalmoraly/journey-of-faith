'use client'

function search() {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
    }
}

function searchMobile() {
    const searchInput = document.getElementById('mobileSearchInput') as HTMLInputElement;
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
    }
}

function toggleMenu() {
    const menu = document.getElementById('mobileMenu') as HTMLDivElement;
    menu.classList.toggle('hidden');
}

function switchLanguage(lang: string) {
    const languageBtn = document.getElementById('languageBtn') as HTMLButtonElement;
    const languageDropdown = document.getElementById('languageDropdown') as HTMLDivElement;
    languageBtn.textContent = lang.toUpperCase();
    languageDropdown.classList.toggle('hidden');
}

export default function Header() {
  return (
        <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://d6x6me9j41n5u.cloudfront.net/rof-logo-notext.png" alt="Logo" className="h-10 w-auto mr-3 rounded-md"/>
                    <h1 className="text-xl font-medium text-gray-800 article-title">Journey of Faith</h1>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 text-gray-800">
                        <li><a href="#" className="hover:text-[#FFC931] transition-colors article-title">Home</a></li>
                        <li><a href="#" className="hover:text-[#FFC931] transition-colors article-title">Reasons To Believe</a></li>
                        <li><a href="#" className="hover:text-[#FFC931] transition-colors article-title">Knots of Faith</a></li>
                        <li><a href="#" className="hover:text-[#FFC931] transition-colors article-title">From The Ground Up</a></li>
                        <li><a href="#" className="hover:text-[#FFC931] transition-colors article-title">Her Majesty</a></li>
                        <li><a href="#" className="hover:text-[#FFC931] transition-colors article-title">About</a></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <div className="relative hidden md:block">
                        <div className="flex items-center">
                            <input type="text" id="searchInput" placeholder="Search..." className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28348E] w-64 paragraph"/>
                            <button onClick={search} className="absolute right-0 px-4 py-2 bg-[#28348E] hover:bg-[#FFC931] text-white rounded-lg">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <button className="md:hidden" onClick={toggleMenu}>
                        <i className="fas fa-bars text-xl text-[#28348E]"></i>
                    </button>
                    <div className="relative">
                        <button id="languageBtn" className="flex items-center text-[#28348E] hover:text-[#FFC931] transition-colors" onClick={() => switchLanguage('en')}>
                            <i className="fas fa-globe text-lg mr-1"></i>
                            <span id="currentLanguage">EN</span>
                            <i className="fas fa-chevron-down text-sm ml-1"></i>
                        </button>
                        <div id="languageDropdown" className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 hidden">
                            <ul className="space-y-1">
                                <li>
                                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors" onClick={() => switchLanguage('en')}>
                                        <span className="flex items-center">
                                            <img src="https://flagcdn.com/w20/us.png" className="w-4 h-4 mr-2" alt="US"/>
                                            English
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors" onClick={() => switchLanguage('es')}>
                                        <span className="flex items-center">
                                            <img src="https://flagcdn.com/w20/es.png" className="w-4 h-4 mr-2" alt="ES"/>
                                            Español
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Search Bar */}
                <div className="md:hidden w-full mt-4">
                    <div className="relative">
                        <input type="text" id="mobileSearchInput" placeholder="Search..." className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28348E] paragraph"/>
                        <button onClick={searchMobile} className="absolute right-0 top-0 h-full px-4 bg-[#28348E] hover:bg-[#FFC931] text-white rounded-r-lg">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}
'use client'

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Language {
    code: string;
    name: string;
    flag: string;
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const languageRef = useRef<HTMLDivElement>(null);

    const languages: Language[] = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
    ];

    const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);


    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
            if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
                setIsLanguageOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguageDropdown = () => {
        setIsLanguageOpen(!isLanguageOpen);
        setIsMenuOpen(false); // Close mobile menu when language is toggled
    };

    const selectLanguage = (language: Language) => {
        setCurrentLanguage(language);
        setIsLanguageOpen(false);
        // Here you would typically:
        // 1. Update the application's language context
        // 2. Persist the language preference
        // 3. Potentially refresh the page or update translations
        console.log('Language changed to:', language.code);
    };


    const menuItems = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Reasons To Believe', href: '/reasons-to-believe' },
        { id: 3, name: 'Knots of Faith', href: '/knots-of-faith' },
        { id: 4, name: 'From The Ground Up', href: '/from-the-ground-up' },
        { id: 5, name: 'Her Majesty', href: '/her-majesty' },
        { id: 6, name: 'About', href: '/about' },
    ];

    return (
        <header className="bg-white shadow-sm relative" ref={menuRef}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img src="https://d6x6me9j41n5u.cloudfront.net/rof-logo-notext.png" alt="Logo" className="h-10 w-auto mr-3 rounded-md" />
                        <span className="text-2xl font-bold text-[#28348E]">Journey of Faith</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="article-title transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Language Selector */}
                    <div className="relative" ref={languageRef}>
                        <button
                            onClick={toggleLanguageDropdown}
                            className="flex items-center space-x-1 text-gray-700 hover:text-[#FFC931] transition-colors"
                            aria-haspopup="true"
                            aria-expanded={isLanguageOpen}
                        >
                            <span className="text-lg">{currentLanguage.flag}</span>
                            <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
                            <i className={`fas fa-chevron-${isLanguageOpen ? 'up' : 'down'} text-xs ml-1`}></i>
                        </button>

                        {/* Language Dropdown */}
                        {isLanguageOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => selectLanguage(lang)}
                                        className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 ${currentLanguage.code === lang.code
                                            ? 'bg-gray-100 text-[#28348E]'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <span className='article-title'>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <button
                            className="md:hidden text-[#28348E] hover:text-[#FFC931]"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
                            <div className="container mx-auto px-4 py-4">
                                <nav className="flex flex-col space-y-4">
                                    {menuItems.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={item.href}
                                            className="block py-2 px-4 article-title hover:bg-gray-50 rounded-md transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

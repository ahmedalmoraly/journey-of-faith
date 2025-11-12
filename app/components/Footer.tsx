export default function Footer() {
    return (
    <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4 footer-title">About Us</h3>
                    <p className="footer-paragraph">Providing authentic Islamic knowledge and resources to help you grow spiritually and strengthen your faith.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4 footer-title">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-white footer-paragraph">Home</a></li>
                        <li><a href="https://quran.com" target="_blank" className="text-white footer-paragraph">Quran</a></li>
                        <li><a href="https://sunnah.com" target="_blank" className="text-white footer-paragraph">Hadith</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4 footer-title">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="https://whyislam.org" target="_blank" className="text-white footer-paragraph">WhyIslam.org</a></li>
                        <li><a href="https://yaqeeninstitute.org" target="_blank" className="text-white footer-paragraph">YaQeenInstitute.org</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4 footer-title">Connect With Us</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                    </div>
                    <p className="footer-title">Subscribe to our newsletter</p>
                    <div className="mt-2 flex">
                        <input type="email" 
                               placeholder="Your email" 
                               className="bg-white px-3 py-2 text-amber-950 rounded-l-lg focus:outline-none w-full" />
                        <button className="bg-[#28348E] hover:bg-[#28348E] px-4 rounded-r-lg">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center footer-title">
                <a href="https://theraysoffaith.org" target="_blank" className="text-white footer-paragraph">&copy; 2025 Rays of Faith. All rights reserved.</a>
            </div>
        </div>
    </footer>
    );
}
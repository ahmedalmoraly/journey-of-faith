import Link from "next/link";

export default function CTAs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 min-w-[250px] md:min-w-[300px] lg:min-w-[300px]">
      <Link href="#contact" className="cta-card bg-white p-6 text-center hover:shadow-lg transition-shadow relative">
        <div className="--primary-text-color text-2xl mb-3">
          <i className="fas fa-envelope"></i>
        </div>
        <div>
          <h3 className="font-medium cta-title">
            Need to Talk?
            <br/>
            <span className='font-normal paragraph'>
              Open Ears, Open Hearts!
            </span>
          </h3>
          <span className="absolute bottom-4 right-4">
            <i className="fas fa-arrow-right text-[#28348E] text-lg"></i>
          </span>
        </div>
      </Link>

      <Link href="#quran-request" className="cta-card bg-white p-6 text-center hover:shadow-lg transition-shadow relative">
        <div className="text-[#28348E] text-2xl mb-3 hover:text-[#FFC931] transition-colors duration-200">
          <i className="fas fa-gift"></i>
        </div>
        <div>
          <h3 className="font-medium hover:text-[#FFC931] transition-colors duration-200 article-title">
            Curious about the Quran?
            <br/>
            <span className='font-normal text-gray-700 hover:text-[#FFC931] transition-colors duration-200 paragraph'>
              Get Your Free Quran Gift Box!
            </span>
          </h3>
          <span className="absolute bottom-4 right-4">
            <i className="fas fa-arrow-right text-[#28348E] text-lg"></i>
          </span>
        </div>
      </Link>

      <Link href="https://quran.com" target="_blank" className="cta-card bg-white p-6 text-center hover:shadow-lg transition-shadow relative">
        <div className="text-[#28348E] text-2xl mb-3 hover:text-[#FFC931] transition-colors duration-200">
          <i className="fas fa-book-quran"></i>
        </div>
        <div>
          <h3 className="font-medium hover:text-[#FFC931] transition-colors duration-200 article-title">
            Ready to explore the Quran?
            <br/>
            <span className='font-normal text-gray-700 hover:text-[#FFC931] transition-colors duration-200 paragraph'>
              Dive in and read online!
            </span>
          </h3>
          <span className="absolute bottom-4 right-4">
            <i className="fas fa-arrow-right text-[#28348E] text-lg"></i>
          </span>
        </div>
      </Link>
    </div>
  );
}

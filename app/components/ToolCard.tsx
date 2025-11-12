export default function ToolCard({ title, subtitle, image, description, link, button, icon }: any) {
  return (
    <div className="group h-full bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 mx-auto flex flex-col">
      <div className="relative h-48 md:h-60 bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${image}')` }}></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 p-5 w-full">
                  <div className="flex items-center">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg mr-3">
                          <i className={icon}></i>
                      </div>
                      <h3 className="text-lg font-bold text-white">{title}</h3>
                  </div>
                  <div className="mt-2 flex items-center">
                      <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                      <span className="text-xs text-green-200">{subtitle}</span>
                  </div>
              </div>
          </div>
      </div>
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
      <h3 className="text-2xl font-bold text-[#28348E]">{title}</h3>
      <p className="text-sm text-[#28348E] font-medium mb-2">{subtitle}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center group-hover:text-[#FFC931] font-medium transition-colors text-[#28348E]"
      >
        <span>{button}</span>
        <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
      </a>
    </div>
    </div>
  );
}

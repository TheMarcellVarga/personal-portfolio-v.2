import { history } from '../data/history';

export default function History() {
  return (
    <article className="w-full p-3 sm:p-4 transform transition-all duration-500">
      <h2
        className="text-custom-blue text-xs sm:text-sm font-bold mb-4 sm:mb-8 tracking-wider uppercase flex items-center
        before:content-[''] before:block before:w-3 sm:before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
      >
        Experience
      </h2>
      <div className="flex flex-col gap-8 sm:gap-16">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row group  
            rounded-xl transition-all duration-300 p-2 sm:p-4 -mx-2 sm:-mx-4"
          >
            <div className="w-full md:w-1/2 pr-2 sm:pr-8 mb-1 md:mb-0">
              <h3
                className="text-lg sm:text-2xl font-bold text-custom-blue transform 
                group-hover:translate-x-1 transition-transform duration-300 break-words hyphens-auto"
              >
                {item.company}
              </h3>
            </div>

            <div className="w-full md:w-1/2">
              <div
                className="flex flex-col gap-2 sm:gap-4 relative pl-4 sm:pl-6 border-l-2 border-custom-blue/10
                group-hover:border-custom-blue transition-colors duration-300"
              >
                <div className="transition-colors duration-300 group-hover:text-custom-blue">
                  <h3 className="text-base sm:text-xl font-semibold text-custom-blue">
                    {item.jobTitle}
                  </h3>
                  <h4 className="text-xs sm:text-base font-medium italic text-custom-blue/70">
                    {item.time.start} - {item.time.end ? item.time.end : "Present"}
                  </h4>
                </div>

                <div className="text-custom-blue/80 text-xs sm:text-base">
                  {item.description.map((desc, index) => (
                    <p
                      key={index}
                      className="py-1 sm:py-2 text-justify sm:text-left leading-relaxed
                      transition-colors duration-300"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
} 
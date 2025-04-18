import React from 'react';
import { history } from '../data/history';

export default function History() {
  return (
    <article className="w-full p-4 transform transition-all duration-500">
      <h2
        className="text-custom-blue text-sm font-bold mb-8 tracking-wider uppercase flex items-center
        before:content-[''] before:block before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
      >
        History
      </h2>
      <div className="flex flex-col gap-16">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row group  
            rounded-xl transition-all duration-300 p-4 -mx-4"
          >
            <div className="w-full md:w-1/2 pr-8">
              <h3
                className="text-2xl font-bold text-custom-blue transform 
                group-hover:translate-x-1 transition-transform duration-300"
              >
                {item.company}
              </h3>
            </div>

            <div className="w-full md:w-1/2">
              <div
                className="flex flex-col gap-4 relative
                before:absolute before:left-0 before:w-[2px] 
                before:h-[calc(100%+1rem)] before:bg-custom-blue/10 before:-ml-4 
                before:transition-all before:duration-300
                before:-top-4 sm:before:top-0
                group-hover:before:bg-custom-blue"
              >
                <div className="transition-colors duration-300 group-hover:text-custom-blue">
                  <h3 className="text-xl font-semibold text-custom-blue">
                    {item.jobTitle}
                  </h3>
                  <h4 className="text-base font-medium italic text-custom-blue/70">
                    {item.time.start} - {item.time.end ? item.time.end : "Present"}
                  </h4>
                </div>

                <div className="text-custom-blue/80">
                  {item.description.map((desc, index) => (
                    <p
                      key={index}
                      className="py-2 leading-relaxed
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
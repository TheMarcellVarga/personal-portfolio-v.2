import { highlights } from "../data/highlights";

export default function Highlights() {
  return (
    <section className="w-full p-3 sm:p-4">
      <h2 className="text-custom-blue text-xs sm:text-sm font-bold mb-4 tracking-wider uppercase flex items-center
        before:content-[''] before:block before:w-3 sm:before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
      >
        Impact
      </h2>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-custom-blue/10 bg-gray-100/90 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-2xl sm:text-3xl font-bold text-custom-blue">
              {item.value}
            </div>
            <div className="text-sm sm:text-base font-semibold text-custom-blue/80 mt-1">
              {item.label}
            </div>
            <p className="text-xs sm:text-sm text-custom-blue/60 mt-2 leading-relaxed">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

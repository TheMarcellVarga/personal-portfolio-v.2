import { services } from "../data/services";

export default function Services() {
  return (
    <section className="w-full p-3 sm:p-4">
      <h2 className="text-custom-blue text-xs sm:text-sm font-bold mb-3 tracking-wider uppercase flex items-center
        before:content-[''] before:block before:w-3 sm:before:w-4 before:h-[2px] before:bg-custom-blue before:mr-2"
      >
        What I Offer
      </h2>
      <p className="text-custom-blue/70 text-xs sm:text-sm md:text-base max-w-3xl mb-6 sm:mb-8">
        Flexible engagement from early discovery to full product delivery.
      </p>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-custom-blue/10 bg-gray-100/90 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-base sm:text-lg font-semibold text-custom-blue">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-custom-blue/70 mt-2 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

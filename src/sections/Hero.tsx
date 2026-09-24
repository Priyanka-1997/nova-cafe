import heroImage from "../assets/images/nova-hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-nova-charcoal"
    >
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="NOVA restaurant dining experience"
          className="h-full w-full object-cover nova-image-zoom"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Left-side gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end">
        <div className="nova-container w-full pb-20 pt-32 sm:pb-24 lg:pb-28">

          <div className="max-w-3xl">

            {/* Eyebrow */}
            <p
              className="nova-fade-up mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-nova-brown-light"
              style={{ animationDelay: "200ms" }}
            >
              NOVA — Modern Kitchen
            </p>

            {/* Main heading */}
            <h1
              className="nova-fade-up max-w-3xl font-display text-5xl font-medium leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ animationDelay: "350ms" }}
            >
              Where every
              <br />
              <span className="italic text-nova-brown-light">
                plate
              </span>{" "}
              tells a story.
            </h1>

            {/* Description */}
            <p
              className="nova-fade-up mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg"
              style={{ animationDelay: "500ms" }}
            >
              Seasonal ingredients, thoughtful cooking and
              unforgettable evenings — crafted for those who
              appreciate good food.
            </p>

            {/* Buttons */}
            <div
              className="nova-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "650ms" }}
            >
              <a
                href="#menu"
                className="group inline-flex min-h-14 items-center justify-center bg-white px-7 text-sm font-semibold uppercase tracking-[0.12em] text-nova-charcoal transition-all duration-300 hover:bg-nova-brown-light"
              >
                View Menu

                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#reservation"
                className="group inline-flex min-h-14 items-center justify-center border border-white/60 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-nova-charcoal"
              >
                Reserve a Table

                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 text-white/60 sm:flex lg:right-10">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="h-px w-10 bg-white/40" />
      </div>
    </section>
  );
}
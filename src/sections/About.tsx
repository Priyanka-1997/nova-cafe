import heroImage from "../assets/images/nova-about.png";

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-nova-white py-24 sm:py-32">
      <div className="nova-container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-nova-brown/50 sm:-left-8 sm:-top-8" />
          <div className="relative aspect-[4/5] overflow-hidden bg-nova-border">
            <img
              src={heroImage}
              alt="A warmly lit table at NOVA"
              className="h-full w-full object-cover object-[68%] transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 flex h-28 w-28 items-center justify-center bg-nova-brown p-5 text-center sm:-right-8">
            <p className="font-display text-lg leading-tight text-white">
              Made with
              <br />
              intention.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-nova-brown">
            About NOVA
          </p>
          <h2 className="max-w-xl font-display text-4xl leading-[1.08] text-nova-charcoal sm:text-5xl lg:text-6xl">
            A table for the
            <span className="italic text-nova-brown"> curious.</span>
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-nova-muted">
            <p>
              NOVA is a modern kitchen built around the simple pleasure of
              gathering. Our menu follows the seasons, bringing familiar
              ingredients into focus through thoughtful, uncomplicated cooking.
            </p>
            <p>
              From the first pour to the last shared plate, every detail is
              considered to make an evening feel unhurried and entirely yours.
            </p>
          </div>
          <a
            href="#reservation"
            className="group mt-9 inline-flex items-center border-b border-nova-charcoal pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-nova-charcoal transition-colors hover:border-nova-brown hover:text-nova-brown"
          >
            Join us for dinner
            <span className="ml-4 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
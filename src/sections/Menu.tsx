const menuGroups = [
  {
    name: "To begin",
    items: [
      ["Charred sourdough", "cultured butter, smoked salt", "₹750"],
      ["Citrus & fennel", "whipped ricotta, pistachio, mint", "₹1,150"],
      ["Lamb meatballs", "tomato sugo, parmesan, basil", "₹1,400"],
    ],
  },
  {
    name: "From the kitchen",
    items: [
      ["Hand-cut pappardelle", "wild mushroom, sage, pecorino", "₹2,100"],
      ["Roasted market fish", "beans, preserved lemon, herbs", "₹2,650"],
      ["Crisp half chicken", "grapes, radicchio, pan jus", "₹2,400"],
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-nova-cream py-24 sm:py-32">
      <div className="nova-container">
        <div className="flex flex-col justify-between gap-8 border-b border-nova-border pb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-nova-brown">
              The menu
            </p>
            <h2 className="font-display text-4xl leading-tight text-nova-charcoal sm:text-5xl lg:text-6xl">
              Seasonal, <span className="italic text-nova-brown">always.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-nova-muted">
            A small selection of dishes that changes with the market, the
            weather, and what looks too good to leave behind.
          </p>
        </div>

        <div className="grid gap-x-16 gap-y-14 pt-12 lg:grid-cols-2">
          {menuGroups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-6 font-display text-2xl text-nova-charcoal">
                {group.name}
              </h3>
              <div className="divide-y divide-nova-border">
                {group.items.map(([name, description, price]) => (
                  <div key={name} className="grid grid-cols-[1fr_auto] gap-6 py-5">
                    <div>
                      <h4 className="text-sm font-semibold text-nova-charcoal sm:text-base">
                        {name}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-nova-muted">
                        {description}
                      </p>
                    </div>
                    <span className="font-display text-lg text-nova-brown">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-nova-border pt-7 sm:flex-row sm:items-center">
          <p className="text-xs uppercase tracking-[0.18em] text-nova-muted">
            Ask about our daily specials and wine pairing.
          </p>
          <a
            href="#reservation"
            className="inline-flex min-h-12 items-center bg-nova-charcoal px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-nova-brown"
          >
            Reserve your table <span className="ml-3">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
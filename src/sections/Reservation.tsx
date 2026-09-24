import { useState } from "react";
import type { FormEvent } from "react";

type ThemedSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function ThemedSelect({ label, value, options, onChange }: ThemedSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-xs uppercase tracking-[0.14em] text-white/60">
      {label}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((previous) => !previous)}
        className="mt-3 flex w-full items-center justify-between border-b border-white/25 bg-transparent py-3 text-left text-base normal-case tracking-normal text-white outline-none transition-colors hover:border-white/50 focus:border-nova-brown-light"
      >
        <span>{value || "Select a time"}</span>
        <span className={`nova-select-arrow ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div role="listbox" className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden border border-nova-brown/60 bg-nova-charcoal shadow-2xl">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`block w-full px-4 py-3 text-left text-sm normal-case tracking-normal transition-colors ${value === option ? "bg-nova-brown text-white" : "text-white/75 hover:bg-white/10 hover:text-white"}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const initialForm = {
  name: "",
  email: "",
  date: "",
  time: "",
  partySize: "2",
  note: "",
};

export default function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="reservation" className="bg-nova-charcoal py-24 text-white sm:py-32">
      <div className="nova-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-nova-brown-light">
            Your table awaits
          </p>
          <h2 className="max-w-md font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Make an evening of it.
          </h2>
          <p className="mt-7 max-w-sm text-base leading-7 text-white/60">
            Tell us when you would like to join us. We will take care of the
            rest, from the first welcome to the final pour.
          </p>
          <div className="mt-12 border-t border-white/15 pt-6 text-sm leading-7 text-white/60">
            <p>Tuesday – Sunday, from 5pm</p>
            <p>45 Mercer Street, Downtown</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          {isSubmitted ? (
            <div className="flex min-h-[360px] flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-nova-brown-light">
                Request received
              </p>
              <h3 className="mt-5 max-w-lg font-display text-4xl leading-tight sm:text-5xl">
                We look forward to welcoming you, {form.name.split(" ")[0] || "soon"}.
              </h3>
              <p className="mt-6 max-w-md text-base leading-7 text-white/60">
                This demo request has been saved in the page state. A real
                booking service can be connected when one is selected.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setIsSubmitted(false);
                }}
                className="mt-8 self-start border-b border-nova-brown-light pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-nova-brown-light transition-colors hover:text-white"
              >
                Make another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.14em] text-white/60">
                Name
                <input required value={form.name} onChange={(event) => updateField("name", event.target.value)} className="mt-3 block w-full border-b border-white/25 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-nova-brown-light" placeholder="Your name" />
              </label>
              <label className="text-xs uppercase tracking-[0.14em] text-white/60">
                Email
                <input required type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="mt-3 block w-full border-b border-white/25 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-nova-brown-light" placeholder="you@email.com" />
              </label>
              <label className="text-xs uppercase tracking-[0.14em] text-white/60">
                Date
                <input required type="date" value={form.date} onChange={(event) => updateField("date", event.target.value)} className="nova-date-input mt-3 block w-full border-b border-white/25 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-white outline-none transition-colors focus:border-nova-brown-light" />
              </label>
              <ThemedSelect
                label="Time"
                value={form.time}
                options={["5:30 PM", "6:30 PM", "7:30 PM", "8:30 PM"]}
                onChange={(value) => updateField("time", value)}
              />
              <ThemedSelect
                label="Party size"
                value={`${form.partySize} guests`}
                options={["1 guests", "2 guests", "3 guests", "4 guests", "5 guests", "6 guests", "7+ guests"]}
                onChange={(value) => updateField("partySize", value.replace(" guests", ""))}
              />
              <label className="text-xs uppercase tracking-[0.14em] text-white/60 sm:col-span-2">
                Notes <span className="normal-case tracking-normal text-white/30">(optional)</span>
                <textarea value={form.note} onChange={(event) => updateField("note", event.target.value)} rows={2} className="mt-3 block w-full resize-none border-b border-white/25 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-nova-brown-light" placeholder="A birthday, dietary note, or anything we should know" />
              </label>
              <button type="submit" className="mt-2 inline-flex min-h-14 items-center justify-center bg-nova-brown px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-nova-brown-light hover:text-nova-charcoal sm:col-span-2 sm:justify-self-start">
                Request a reservation <span className="ml-3">↗</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
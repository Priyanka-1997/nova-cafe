import { useState } from "react";
import type { FormEvent } from "react";

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
                <input required type="date" value={form.date} onChange={(event) => updateField("date", event.target.value)} className="mt-3 block w-full border-b border-white/25 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-white outline-none transition-colors focus:border-nova-brown-light" />
              </label>
              <label className="text-xs uppercase tracking-[0.14em] text-white/60">
                Time
                <select required value={form.time} onChange={(event) => updateField("time", event.target.value)} className="mt-3 block w-full border-b border-white/25 bg-nova-charcoal px-0 py-3 text-base normal-case tracking-normal text-white outline-none transition-colors focus:border-nova-brown-light">
                  <option value="" disabled>Select a time</option>
                  <option>5:30 PM</option>
                  <option>6:30 PM</option>
                  <option>7:30 PM</option>
                  <option>8:30 PM</option>
                </select>
              </label>
              <label className="text-xs uppercase tracking-[0.14em] text-white/60">
                Party size
                <select value={form.partySize} onChange={(event) => updateField("partySize", event.target.value)} className="mt-3 block w-full border-b border-white/25 bg-nova-charcoal px-0 py-3 text-base normal-case tracking-normal text-white outline-none transition-colors focus:border-nova-brown-light">
                  {["1", "2", "3", "4", "5", "6", "7+"] .map((size) => <option key={size} value={size}>{size} guests</option>)}
                </select>
              </label>
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
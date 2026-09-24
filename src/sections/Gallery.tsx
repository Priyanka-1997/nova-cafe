import { useState } from "react";
import galleryImage1 from "../assets/images/nova-gallery1.jpg";
import galleryImage2 from "../assets/images/nova-gallery2.jpg";
import galleryImage3 from "../assets/images/nova-gallery3.jpg";
import galleryImage4 from "../assets/images/nova-gallery4.jpg";
import galleryImage5 from "../assets/images/nova-gallery5.jpg";
import galleryImage6 from "../assets/images/nova-gallery6.jpg";
import galleryImage7 from "../assets/images/nova-gallery7.jpg";
import galleryImage8 from "../assets/images/nova-gallery8.jpg";
import galleryImage9 from "../assets/images/nova-gallery9.jpg";
import galleryImage10 from "../assets/images/nova-gallery10.jpg";

const galleryTiles = [
  { image: galleryImage1, label: "Where light lingers", number: "01" },
  { image: galleryImage4, label: "Small, beautiful rituals", number: "04" },
   { image: galleryImage3, label: "An unhurried pour", number: "03" },
  { image: galleryImage5, label: "From flame to plate", number: "05" },
  { image: galleryImage8, label: "After the first glass", number: "08" },
  { image: galleryImage2, label: "Plates in conversation", number: "02" },
  { image: galleryImage6, label: "Gather, linger, repeat", number: "06" },
  { image: galleryImage7, label: "The market at its brightest", number: "07" },
  { image: galleryImage9, label: "Good nights start here", number: "09" },
  { image: galleryImage10, label: "Stay for something sweet", number: "10" },
];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleTiles = isExpanded ? galleryTiles : galleryTiles.slice(0, 3);

  return (
    <section id="gallery" className="bg-nova-white py-24 sm:py-32">
      <div className="nova-container">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-nova-brown">
              A feeling, captured
            </p>
            <h2 className="font-display text-4xl leading-tight text-nova-charcoal sm:text-5xl lg:text-6xl">
              Come as you are.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-nova-muted">
            Golden light, open bottles, and a little more time than you planned
            to spend.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {visibleTiles.map((tile) => (
            <figure key={tile.image} className="group relative aspect-[4/5] overflow-hidden bg-nova-charcoal">
              <img
                src={tile.image}
                alt={`${tile.label} at NOVA`}
                className="block h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-5 pt-16 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="font-display text-xl italic">{tile.label}</p>
                <span className="text-[10px] tracking-[0.2em] text-white/70">{tile.number}</span>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-14">
          <button
            type="button"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((previous) => !previous)}
            className="group inline-flex items-center gap-5 border border-nova-charcoal px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-nova-charcoal transition-colors duration-300 hover:bg-nova-charcoal hover:text-white"
          >
            <span>{isExpanded ? "Show less" : "View full gallery"}</span>
            <span className="flex h-6 w-6 items-center justify-center border border-current text-base font-normal leading-none transition-transform duration-300 group-hover:rotate-90">
              {isExpanded ? "−" : "+"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
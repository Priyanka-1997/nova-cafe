import logo from "../assets/logo/nova-logo.png";

const footerLinks = [
  ["Menu", "#menu"],
  ["About", "#about"],
  ["Gallery", "#gallery"],
  ["Reserve", "#reservation"],
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-nova-cream py-14 sm:py-20">
      <div className="nova-container">
        <div className="grid gap-12 border-b border-nova-border pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <img src={logo} alt="NOVA Café & Restaurant" className="h-12 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-6 text-nova-muted">
              Modern cooking, warm light, and a place to stay awhile.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-nova-charcoal">Explore</h2>
            <nav className="mt-5 flex flex-col items-start gap-3 text-sm text-nova-muted">
              {footerLinks.map(([label, href]) => <a key={label} href={href} className="transition-colors hover:text-nova-brown">{label}</a>)}
            </nav>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-nova-charcoal">Visit</h2>
            <p className="mt-5 text-sm leading-6 text-nova-muted">45 Mercer Street<br />Downtown, NY 10013</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-nova-charcoal">Hours</h2>
            <p className="mt-5 text-sm leading-6 text-nova-muted">Tue – Thu, 5 – 10pm<br />Fri – Sun, 5 – 11pm</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-nova-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NOVA Café & Restaurant</p>
          <a href="mailto:hello@novacafe.com" className="transition-colors hover:text-nova-brown">hello@novacafe.com</a>
        </div>
      </div>
    </footer>
  );
}
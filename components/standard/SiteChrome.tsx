import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "./index";
import { PHONE_DISPLAY, PHONE_TEL, calendlyUrl } from "../../lib/areaFacts";

const NAV = [
  { href: "/floor-plans", label: "Floor plans" },
  { href: "/quick-move-in", label: "Quick move-in" },
  { href: "/community", label: "Skye Canyon" },
  { href: "/sell-your-home-to-buy-at-sierra-skyeview", label: "Sell & buy" },
  { href: "/qa", label: "Q&A" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ campaign }: { campaign: string }) {
  return (
    <header className="bg-white/95 backdrop-blur border-b border-stone-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <LogoMark />
        <nav className="hidden lg:flex items-center gap-6 text-sm text-stone-700" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-stone-950">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline text-sm font-medium text-stone-900">
            {PHONE_DISPLAY}
          </a>
          <a
            href={calendlyUrl("buyer", "header", campaign)}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-btn !px-4 !py-2 text-sm"
          >
            Book a time
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-14">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/headshot-32.png" alt="Dr. Jan Duffy" width={32} height={32} className="rounded-full" />
            <p className="font-serif text-xl text-white">Sierra at Skyeview Homes</p>
          </div>
          <p className="text-sm leading-relaxed">
            Dr. Jan Duffy, buyer&apos;s agent for Sierra at Skyeview and Skye Canyon, Las Vegas.
          </p>
          <p className="mt-4 text-sm">
            8925 Vanhoy Creek St., Las Vegas, NV 89166
            <br />
            <a href={`tel:${PHONE_TEL}`} className="text-white">{PHONE_DISPLAY}</a>
          </p>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/mortgage-calculator" className="hover:text-white">Mortgage calculator</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-medium mb-3">Hours</p>
          <p className="text-sm">Monday to Sunday, 10:00 AM to 6:00 PM</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-8 border-t border-stone-800 text-center text-sm text-stone-400 space-y-3">
        <p>&copy; {new Date().getFullYear()} Sierra Skyeview | Homes by Dr Jan Duffy. All rights reserved.</p>
        <p>Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC</p>
        <Image
          src="/Berkshire Hathaway HomeServices_Quality Seal_White.png"
          alt="Berkshire Hathaway HomeServices Logo"
          width={200}
          height={40}
          className="h-8 w-auto mx-auto opacity-80"
        />
      </div>
    </footer>
  );
}

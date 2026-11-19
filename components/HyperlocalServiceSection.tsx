import Link from "next/link";
import {
  formatResearchFooter,
  VARIANT_COPY,
  type HyperlocalPageVariant,
} from "../lib/hyperlocalContent";

type HyperlocalServiceSectionProps = {
  variant: HyperlocalPageVariant;
  className?: string;
};

/**
 * Reusable hyperlocal + realtor-service block for marketing pages.
 * Keeps Skye Canyon / Sierra facts and buyer-agent CTAs consistent sitewide.
 */
export default function HyperlocalServiceSection({
  variant,
  className = "",
}: HyperlocalServiceSectionProps) {
  const copy = VARIANT_COPY[variant];

  return (
    <section
      className={`py-16 bg-slate-50 border-y border-slate-200 ${className}`.trim()}
      aria-labelledby={`hyperlocal-${variant}-heading`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold tracking-wide text-blue-800 uppercase mb-3">
            Sierra at Skyeview · Skye Canyon · 89166
          </p>
          <h2
            id={`hyperlocal-${variant}-heading`}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {copy.headline}
          </h2>
          <p className="text-lg text-gray-700 mb-8">{copy.lead}</p>
          <ul className="space-y-3 mb-8">
            {copy.bullets.map((bullet) => (
              <li key={bullet.slice(0, 48)} className="flex gap-3 text-gray-700">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-700" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <p className="text-base font-medium text-gray-900 mb-6">{copy.serviceFocus}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:7029034687"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
            >
              Call (702) 903-4687
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg border-2 border-blue-700 text-blue-800 font-semibold hover:bg-blue-50 transition-colors"
            >
              Book a Sierra buyer consult
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-lg text-blue-800 font-semibold hover:underline"
            >
              Realtor services →
            </Link>
          </div>
          <p className="mt-6 text-xs text-gray-500">{formatResearchFooter()}</p>
        </div>
      </div>
    </section>
  );
}

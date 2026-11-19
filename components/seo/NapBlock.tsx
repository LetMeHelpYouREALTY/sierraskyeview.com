import { SITE_CONTACT } from "../../lib/siteContact";

type NapBlockProps = {
  className?: string;
};

export default function NapBlock({ className = "" }: NapBlockProps) {
  return (
    <aside
      className={`rounded-lg border border-slate-200 bg-white p-6 ${className}`.trim()}
      aria-label="Business contact information"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-3">{SITE_CONTACT.businessName}</h2>
      <p className="text-gray-700 mb-1">{SITE_CONTACT.agentName}</p>
      <p className="text-gray-700 mb-1">{SITE_CONTACT.brokerage}</p>
      <p className="text-gray-700 mb-1">License {SITE_CONTACT.license}</p>
      <p className="text-gray-700 mb-1">{SITE_CONTACT.fullAddress}</p>
      <p className="text-gray-700 mb-1">
        <a className="text-blue-700 font-semibold hover:underline" href={`tel:${SITE_CONTACT.phoneTel}`}>
          {SITE_CONTACT.phoneDisplay}
        </a>
      </p>
      <p className="text-gray-700 mb-1">
        <a className="text-blue-700 hover:underline" href={`mailto:${SITE_CONTACT.email}`}>
          {SITE_CONTACT.email}
        </a>
      </p>
      <p className="text-sm text-gray-600 mt-3">Hours: {SITE_CONTACT.hoursLabel}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`tel:${SITE_CONTACT.phoneTel}`}
          className="inline-flex min-h-[44px] items-center rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
        >
          Call
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONTACT.fullAddress)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-lg border-2 border-blue-700 px-4 py-2 font-semibold text-blue-800 hover:bg-blue-50"
        >
          Directions
        </a>
      </div>
    </aside>
  );
}

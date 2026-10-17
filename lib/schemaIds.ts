export const SITE_URL = "https://www.sierraskyeview.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const REAL_ESTATE_AGENT_ID = `${SITE_URL}/#realestateagent`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Link subpage JSON-LD to the canonical agent node in _document.tsx */
export const PAGE_AGENT_REFERENCE = {
  "@context": "https://schema.org",
  "@id": REAL_ESTATE_AGENT_ID,
};

export const CENTURY_COMMUNITIES_SELLER = {
  "@type": "Organization",
  name: "Century Communities",
  url: "https://www.centurycommunities.com/",
};

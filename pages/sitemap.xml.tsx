import type { GetServerSideProps } from "next";

const Sitemap = () => null;

const createSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.sierraskyeview.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg</image:loc>
      <image:title>Sierra at Skyeview Homes - Luxury New Construction Home Exterior</image:title>
      <image:caption>Two-story luxury home exterior at Sierra at Skyeview in Skye Canyon, Northwest Las Vegas</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://www.sierraskyeview.com/9026-rimerton-kitchen-real.jpg</image:loc>
      <image:title>Modern Luxury Kitchen at Sierra at Skyeview Homes</image:title>
      <image:caption>Premium kitchen with high-end appliances at Sierra at Skyeview Homes</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://www.sierraskyeview.com/9026-rimerton-living-room-real.jpg</image:loc>
      <image:title>Spacious Living Room at Sierra at Skyeview Homes</image:title>
      <image:caption>Elegant living room with premium finishes at Sierra at Skyeview Homes</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://www.sierraskyeview.com/9026-rimerton-master-bedroom-real.jpg</image:loc>
      <image:title>Master Bedroom at Sierra at Skyeview Homes</image:title>
      <image:caption>Luxury master bedroom with premium finishes at Sierra at Skyeview Homes</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/floor-plans</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/community</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/amenities</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/new-build-homes</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/quick-move-in</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/reviews</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/qa</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/mortgage-calculator</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/blog/complete-guide-buying-new-construction-las-vegas</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/blog/why-choose-skye-canyon-buyers-guide</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/blog/understanding-hoa-fees-what-to-know</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/blog/new-construction-vs-resale-which-right-for-you</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/blog/buyers-agent-advantage-independent-representation</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/model-1602</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg</image:loc>
      <image:title>1,602 sq ft Home at Sierra at Skyeview</image:title>
      <image:caption>Two-story 1,602 sq ft home with 3 bedrooms and 2.5 bathrooms at Sierra at Skyeview</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/model-1708</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg</image:loc>
      <image:title>1,708 sq ft Home at Sierra at Skyeview</image:title>
      <image:caption>Two-story 1,708 sq ft home with 3 bedrooms and 2.5 bathrooms at Sierra at Skyeview</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/model-1965</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg</image:loc>
      <image:title>1,965 sq ft Home at Sierra at Skyeview</image:title>
      <image:caption>Two-story 1,965 sq ft home with 3 bedrooms and 2.5 bathrooms at Sierra at Skyeview</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/homes-near-mount-charleston</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/northwest-las-vegas-new-homes</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = createSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;



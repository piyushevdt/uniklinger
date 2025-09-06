// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const xmlFormatter = require('xml-formatter');

// Array of links with metadata like changefreq and priority
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/partner-with-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/careers', changefreq: 'monthly', priority: 0.8 },
  { url: '/products', changefreq: 'weekly', priority: 0.9 },
  { url: '/industry-solutions', changefreq: 'weekly', priority: 0.9 },
  { url: '/blog', changefreq: 'monthly', priority: 0.7 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/about-us/company-updates', changefreq: 'monthly', priority: 0.7 },
  { url: '/product-detail', changefreq: 'monthly', priority: 0.6 },
  { url: '/products-listing', changefreq: 'weekly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms-conditions', changefreq: 'yearly', priority: 0.5 },
  { url: '/industry-solution-details', changefreq: 'monthly', priority: 0.7 },
  { url: '/insights', changefreq: 'monthly', priority: 0.8 },
  { url: '/insights-details', changefreq: 'monthly', priority: 0.7 },
];

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://uniklinger.com' });

  // Create write stream for the sitemap.xml file
  const writeStream = fs.createWriteStream('./public/sitemap.xml');
  sitemapStream.pipe(writeStream);

  // Write all the links to the sitemap stream
  links.forEach((link) => sitemapStream.write(link));

  // End the stream
  sitemapStream.end();

  // Wait for the stream to finish writing
  await streamToPromise(sitemapStream);

  // Read the generated XML file
  const sitemapXml = await fs.promises.readFile('./public/sitemap.xml', 'utf8');

  // Format the XML with pretty print
  const formattedXml = xmlFormatter(sitemapXml, { indentation: '  ', lineSeparator: '\n' });

  // Write the formatted XML back to the sitemap.xml file
  await fs.promises.writeFile('./public/sitemap.xml', formattedXml);

  console.log('Sitemap generated and pretty-printed successfully!');
};

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
});
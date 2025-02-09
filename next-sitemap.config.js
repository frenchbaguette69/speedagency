/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://nextwebsite.nl', // Pas dit aan naar jouw domeinnaam
    generateRobotsTxt: true, // Hiermee wordt robots.txt automatisch gegenereerd
    sitemapSize: 5000,
    changefreq: 'daily', // Geeft aan hoe vaak pagina's kunnen veranderen
    priority: 0.7, // Standaard prioriteit voor pagina's
    exclude: ['/admin', '/secret'], // Pagina's die je niet in de sitemap wilt hebben
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin', '/secret']
        }
      ]
    }
  };
  
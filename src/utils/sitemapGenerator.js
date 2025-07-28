// Sitemap Generator Utility

export const generateSitemap = (products = [], blogs = []) => {
  const baseUrl = process.env.REACT_APP_SITE_URL || "https://zippty.com";
  const currentDate = new Date().toISOString().split('T')[0];

  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: '/',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: '/shop',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: '/about-us',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/contact-us',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: '/privacy-policy',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      url: '/terms-conditions',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      url: '/cancellation-refund',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    },
    {
      url: '/shipping-delivery',
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: '0.3'
    }
  ];

  // Product pages
  const productPages = products.map(product => ({
    url: `/product/${product.id}`,
    lastmod: product.updatedAt || currentDate,
    changefreq: 'weekly',
    priority: '0.8'
  }));

  // Blog pages
  const blogPages = blogs.map(blog => ({
    url: `/blog/${blog.id}`,
    lastmod: blog.updatedAt || currentDate,
    changefreq: 'monthly',
    priority: '0.6'
  }));

  const allPages = [...staticPages, ...productPages, ...blogPages];

  // Generate XML sitemap
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

export const generateRobotsTxt = () => {
  const baseUrl = process.env.REACT_APP_SITE_URL || "https://zippty.com";
  
  return `User-agent: *
Allow: /

# Disallow admin pages
Disallow: /admin/
Disallow: /login
Disallow: /signup
Disallow: /profile
Disallow: /cartitems

# Allow important pages
Allow: /
Allow: /shop
Allow: /about-us
Allow: /contact-us
Allow: /product/
Allow: /blog/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`;
};
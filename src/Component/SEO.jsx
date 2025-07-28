import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Zippty - Premium Pet Products & Interactive Toys",
  description = "Discover premium pet products, interactive toys, accessories, food, and clothing at Zippty. Quality products for your beloved pets with fast delivery across India.",
  keywords = "pet products, interactive toys, pet accessories, pet food, pet clothing, dog toys, cat toys, pet care, pet supplies, online pet store",
  image = "/logo.png",
  url = "",
  type = "website",
  author = "Zippty",
  siteName = "Zippty",
  locale = "en_IN",
  twitterHandle = "@zippty",
  canonicalUrl,
  noIndex = false,
  noFollow = false,
  structuredData,
  additionalMetaTags = []
}) => {
  const siteUrl = process.env.REACT_APP_SITE_URL || "https://zippty.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const canonical = canonicalUrl || fullUrl;

  const robotsContent = `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur" />
      <meta name="geo.position" content="26.9124;75.7873" />
      <meta name="ICBM" content="26.9124, 75.7873" />

      {/* Additional Custom Meta Tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
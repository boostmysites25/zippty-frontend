// Structured Data Utilities for SEO

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zippty",
  "description": "Premium pet products and interactive toys for your beloved pets",
  "url": process.env.REACT_APP_SITE_URL || "https://zippty.com",
  "logo": `${process.env.REACT_APP_SITE_URL || "https://zippty.com"}/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "916367189188",
    "contactType": "Customer Service",
    "email": "info@zippty.in",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "JP Colony, Shastri Nagar",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302016",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/zippty",
    "https://www.instagram.com/zippty",
    "https://www.twitter.com/zippty"
  ]
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zippty",
  "url": process.env.REACT_APP_SITE_URL || "https://zippty.com",
  "description": "Premium pet products and interactive toys for your beloved pets",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.REACT_APP_SITE_URL || "https://zippty.com"}/shop?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

export const generateProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.images || [],
  "brand": {
    "@type": "Brand",
    "name": product.brand || "Zippty"
  },
  "category": product.category,
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "INR",
    "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Zippty"
    }
  },
  "aggregateRating": product.rating ? {
    "@type": "AggregateRating",
    "ratingValue": product.rating,
    "reviewCount": product.reviewCount || 1,
    "bestRating": 5,
    "worstRating": 1
  } : undefined
});

export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `${process.env.REACT_APP_SITE_URL || "https://zippty.com"}${crumb.url}`
  }))
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zippty",
  "description": "Premium pet products and interactive toys store",
  "url": process.env.REACT_APP_SITE_URL || "https://zippty.com",
  "telephone": "916367189188",
  "email": "info@zippty.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "JP Colony, Shastri Nagar",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302016",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.9124",
    "longitude": "75.7873"
  },
  "openingHours": [
    "Mo-Sa 09:00-18:00"
  ],
  "priceRange": "₹₹",
  "servesCuisine": "Pet Products",
  "acceptsReservations": false
});

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Person",
    "name": article.author || "Zippty Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zippty",
    "logo": {
      "@type": "ImageObject",
      "url": `${process.env.REACT_APP_SITE_URL || "https://zippty.com"}/logo.png`
    }
  },
  "datePublished": article.publishedDate,
  "dateModified": article.modifiedDate || article.publishedDate,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${process.env.REACT_APP_SITE_URL || "https://zippty.com"}${article.url}`
  }
});

export const generateCollectionPageSchema = (collection) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": collection.name,
  "description": collection.description,
  "url": `${process.env.REACT_APP_SITE_URL || "https://zippty.com"}${collection.url}`,
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": collection.itemCount,
    "itemListElement": collection.items?.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${process.env.REACT_APP_SITE_URL || "https://zippty.com"}/product/${item.id}`
    }))
  }
});
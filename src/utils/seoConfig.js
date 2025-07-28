// SEO Configuration for different pages

export const seoConfig = {
  home: {
    title: "Zippty - Premium Pet Products & Interactive Toys | Best Pet Store in India",
    description: "Discover premium pet products, interactive toys, accessories, food, and clothing at Zippty. Quality products for your beloved pets with fast delivery across India. Shop now for the best pet care products.",
    keywords: "pet products, interactive toys, pet accessories, pet food, pet clothing, dog toys, cat toys, pet care, pet supplies, online pet store, premium pet products, pet store India, Jaipur pet store",
    type: "website"
  },
  
  shop: {
    title: "Shop Premium Pet Products | Interactive Toys & Accessories - Zippty",
    description: "Browse our extensive collection of premium pet products including interactive toys, accessories, food, and clothing. Find the perfect products for your pets with fast delivery and great prices.",
    keywords: "shop pet products, buy pet toys, pet accessories online, pet food online, pet clothing, dog products, cat products, pet supplies shopping",
    type: "website"
  },

  about: {
    title: "About Zippty - Your Trusted Pet Products Store | Premium Pet Care",
    description: "Learn about Zippty's mission to provide premium pet products and interactive toys. We specialize in quality pet care products that keep your pets happy, healthy, and entertained.",
    keywords: "about zippty, pet store story, premium pet products, pet care mission, trusted pet store, quality pet products",
    type: "website"
  },

  contact: {
    title: "Contact Zippty - Get in Touch | Pet Products Store in Jaipur",
    description: "Contact Zippty for premium pet products and interactive toys. Located in Jaipur, Rajasthan. Get in touch for customer support, product inquiries, and more.",
    keywords: "contact zippty, pet store contact, Jaipur pet store, customer support, pet products inquiry",
    type: "website"
  },

  product: {
    title: (productName) => `${productName} - Premium Pet Product | Buy Online at Zippty`,
    description: (productName, category) => `Buy ${productName} online at Zippty. Premium ${category} for your pets with fast delivery. Quality guaranteed pet products at best prices.`,
    keywords: (productName, category) => `${productName}, ${category}, pet products, buy online, premium quality, fast delivery, pet supplies`,
    type: "product"
  },

  blog: {
    title: (blogTitle) => `${blogTitle} - Pet Care Tips & Advice | Zippty Blog`,
    description: (excerpt) => excerpt || "Read expert pet care tips, advice, and guides on the Zippty blog. Learn how to keep your pets happy, healthy, and entertained with our comprehensive articles.",
    keywords: "pet care tips, pet advice, pet blog, pet care guide, pet health, pet training, pet nutrition",
    type: "article"
  },

  privacy: {
    title: "Privacy Policy - Zippty | Pet Products Store",
    description: "Read Zippty's privacy policy to understand how we collect, use, and protect your personal information when you shop for pet products on our website.",
    keywords: "privacy policy, data protection, personal information, zippty privacy",
    type: "website"
  },

  terms: {
    title: "Terms & Conditions - Zippty | Pet Products Store",
    description: "Read Zippty's terms and conditions for shopping pet products online. Understand our policies, shipping terms, and conditions of use.",
    keywords: "terms conditions, shopping terms, pet products terms, zippty terms",
    type: "website"
  },

  shipping: {
    title: "Shipping & Delivery Information - Zippty | Fast Pet Product Delivery",
    description: "Learn about Zippty's shipping and delivery options for pet products. Fast and reliable delivery across India with tracking and secure packaging.",
    keywords: "shipping delivery, pet products delivery, fast shipping, India delivery, secure packaging",
    type: "website"
  },

  cancellation: {
    title: "Cancellation & Refund Policy - Zippty | Pet Products Store",
    description: "Understand Zippty's cancellation and refund policy for pet products. Easy returns and refunds with customer-friendly policies.",
    keywords: "cancellation refund, return policy, pet products return, refund policy",
    type: "website"
  }
};

// Default fallback SEO data
export const defaultSEO = {
  title: "Zippty - Premium Pet Products & Interactive Toys",
  description: "Discover premium pet products, interactive toys, accessories, food, and clothing at Zippty. Quality products for your beloved pets with fast delivery across India.",
  keywords: "pet products, interactive toys, pet accessories, pet food, pet clothing, dog toys, cat toys, pet care, pet supplies, online pet store",
  image: "/logo.png",
  type: "website"
};

// Category-specific SEO data
export const categorySEO = {
  accessories: {
    title: "Pet Accessories - Collars, Leashes & More | Zippty",
    description: "Shop premium pet accessories including collars, leashes, harnesses, and more. Quality accessories for dogs and cats with fast delivery.",
    keywords: "pet accessories, dog collars, pet leashes, pet harnesses, pet gear"
  },
  toys: {
    title: "Interactive Pet Toys - Engaging Toys for Dogs & Cats | Zippty",
    description: "Discover interactive pet toys that keep your pets engaged and entertained. Premium quality toys for mental stimulation and physical activity.",
    keywords: "interactive pet toys, dog toys, cat toys, pet entertainment, engaging toys"
  },
  food: {
    title: "Premium Pet Food - Nutritious Food for Dogs & Cats | Zippty",
    description: "Shop premium pet food for optimal nutrition. High-quality dog and cat food with natural ingredients for healthy, happy pets.",
    keywords: "premium pet food, dog food, cat food, pet nutrition, healthy pet food"
  },
  cloths: {
    title: "Pet Clothing - Stylish Clothes for Dogs & Cats | Zippty",
    description: "Browse our collection of stylish pet clothing. Comfortable and fashionable clothes for dogs and cats in various sizes and styles.",
    keywords: "pet clothing, dog clothes, cat clothes, pet fashion, pet apparel"
  }
};
export const siteUrl = "https://marcellvarga.com";
export const siteName = "Marcell Varga Portfolio";
export const personName = "Marcell Varga";
export const roleTitle = "Product-Focused Frontend Engineer";
export const location = "Singapore";
export const profileImage = "/images/cinematic-profile-pic-sg.png";
export const shareImage = "/images/cinematic-profile-pic-sg.png";

export const siteDescription =
  "Official portfolio of Marcell Varga, a Singapore-based product-focused frontend engineer building clear React and TypeScript product interfaces.";

export const lastUpdated = "2026-07-08";
export const alternatePersonNames = [
  "Varga Marcell",
  "TheMarcellVarga",
  "Marcell Varga Singapore",
] as const;

export const personSameAs = [
  "https://www.linkedin.com/in/marcellvarga/",
  "https://github.com/TheMarcellVarga",
  "https://marcellvarga.com",
] as const;

export const featuredWorks = [
  {
    name: "Aperture Financial Intelligence",
    url: `${siteUrl}/ai-finance`,
    description:
      "Fixture-backed finance product prototype for portfolio review, research briefs, goal scenarios, and clear advice boundaries.",
    image: `${siteUrl}/images/ai-finance/aperture-home.jpg`,
  },
  {
    name: "Wild Route",
    url: `${siteUrl}/wild-route`,
    description:
      "Partial prompt-first adventure travel planner with ranked route options and deterministic reasoning.",
    image: `${siteUrl}/images/wild-route/home.png`,
  },
  {
    name: "Professional product work",
    url: `${siteUrl}/about`,
    description:
      "Confidential professional frontend work for complex network products, described without implementation details.",
    image: `${siteUrl}${profileImage}`,
  },
] as const;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#marcell-varga`,
      name: personName,
      alternateName: alternatePersonNames,
      givenName: "Marcell",
      familyName: "Varga",
      url: siteUrl,
      image: `${siteUrl}${profileImage}`,
      jobTitle: roleTitle,
      description: siteDescription,
      email: "mailto:themarcellvarga@gmail.com",
      identifier: "TheMarcellVarga",
      address: {
        "@type": "PostalAddress",
        addressLocality: location,
        addressCountry: "SG",
      },
      worksFor: {
        "@type": "Organization",
        name: "AXON Networks",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University College of Northern Denmark",
      },
      knowsAbout: [
        "UX design",
        "Frontend engineering",
        "Product engineering",
        "Design systems",
        "React",
        "Next.js",
        "TypeScript",
        "AI product workflows",
      ],
      sameAs: personSameAs,
      mainEntityOfPage: `${siteUrl}/`,
      disambiguatingDescription:
        "Marcell Varga, also searchable as Varga Marcell in Hungarian name order, is a Singapore-based product-focused frontend engineer working on clear product interfaces with React and TypeScript.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      alternateName: [
        "Marcell Varga",
        ...alternatePersonNames,
        "marcellvarga.com",
      ],
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#marcell-varga`,
      },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: "Marcell Varga - Product-Focused Frontend Engineer in Singapore",
      description: siteDescription,
      dateModified: lastUpdated,
      mainEntity: {
        "@id": `${siteUrl}/#marcell-varga`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#homepage`,
      url: siteUrl,
      name: "Marcell Varga | Product-Focused Frontend Engineer in Singapore",
      description: siteDescription,
      dateModified: lastUpdated,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#marcell-varga`,
      },
      primaryImageOfPage: `${siteUrl}${profileImage}`,
      breadcrumb: {
        "@id": `${siteUrl}/#breadcrumb`,
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Marcell Varga",
          item: siteUrl,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#selected-work`,
      name: "Selected work by Marcell Varga",
      description:
        "Portfolio case studies by Marcell Varga across AI product UX, frontend engineering, design systems, and complex product interfaces.",
      itemListElement: featuredWorks.map((work, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: work.name,
          url: work.url,
          description: work.description,
          image: work.image,
          creator: {
            "@id": `${siteUrl}/#marcell-varga`,
          },
        },
      })),
    },
  ],
} as const;

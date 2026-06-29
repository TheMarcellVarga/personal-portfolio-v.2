export const siteUrl = "https://marcellvarga.com";
export const siteName = "Marcell Varga Portfolio";
export const personName = "Marcell Varga";
export const roleTitle = "UX & Frontend Engineer";
export const location = "Singapore";
export const profileImage = "/images/cinematic-profile-pic-sg.png";
export const shareImage = "/images/cinematic-profile-pic-sg.png";

export const siteDescription =
  "Official portfolio of Marcell Varga, a Singapore-based UX and frontend engineer building AI-aware product interfaces, design systems, React and Next.js products.";

export const personSameAs = [
  "https://www.linkedin.com/in/marcellvarga/",
  "https://github.com/TheMarcellVarga",
  "https://marcellvarga.com",
] as const;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#marcell-varga`,
      name: personName,
      givenName: "Marcell",
      familyName: "Varga",
      url: siteUrl,
      image: `${siteUrl}${profileImage}`,
      jobTitle: roleTitle,
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
        "Product design",
        "Design systems",
        "React",
        "Next.js",
        "TypeScript",
        "AI product workflows",
      ],
      sameAs: personSameAs,
      mainEntityOfPage: `${siteUrl}/`,
      disambiguatingDescription:
        "Marcell Varga at marcellvarga.com is a Singapore-based UX and frontend engineer focused on product interfaces, design systems, React, Next.js, and AI-aware workflows.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      alternateName: [
        "Marcell Varga",
        "marcellvarga.com",
        "TheMarcellVarga",
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
      name: "Marcell Varga - UX & Frontend Engineer in Singapore",
      description: siteDescription,
      mainEntity: {
        "@id": `${siteUrl}/#marcell-varga`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      inLanguage: "en",
    },
  ],
} as const;

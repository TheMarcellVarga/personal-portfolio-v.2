import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marcell Varga | UX & Frontend Engineer',
  description: 'Marcell Varga is a UX & Frontend engineer dedicated to crafting delightful, business-focused, and user-centered digital experiences.',
  keywords: [
    'Marcell Varga', 
    'UX Engineer', 
    'Frontend Engineer', 
    'Web Development', 
    'UI Design', 
    'User Experience', 
    'React', 
    'Next.js', 
    'TypeScript', 
    'Portfolio'
  ],
  authors: [{ name: 'Marcell Varga', url: 'https://www.linkedin.com/in/marcellvarga/' }],
  creator: 'Marcell Varga',
  publisher: 'Marcell Varga',
  metadataBase: new URL('https://marcellvarga.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marcellvarga.com',
    title: 'Marcell Varga | UX & Frontend Engineer',
    description: 'UX & Frontend engineer dedicated to crafting delightful, business-focused, and user-centered digital experiences.',
    siteName: 'Marcell Varga Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marcell Varga - UX & Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcell Varga | UX & Frontend Engineer',
    description: 'UX & Frontend engineer dedicated to crafting delightful, business-focused, and user-centered digital experiences.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'replace-with-your-google-verification-code',
  },
  alternates: {
    canonical: 'https://marcellvarga.com',
  },
}; 
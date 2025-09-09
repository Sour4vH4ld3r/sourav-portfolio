import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sourav-portfolio.vercel.app'),
  title: 'Sourav Halder - Web Developer & MERN Stack Specialist',
  description: 'Portfolio of Sourav Halder, a skilled Web Developer with 4+ years experience in MERN Stack, PHP, Laravel, and modern web technologies.',
  keywords: ['Web Developer', 'MERN Stack', 'React', 'Node.js', 'PHP', 'Laravel', 'Portfolio'],
  authors: [{ name: 'Sourav Halder' }],
  creator: 'Sourav Halder',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Sourav Halder - Web Developer Portfolio',
    description: 'Professional portfolio showcasing web development projects and skills',
    url: 'https://sourav-portfolio.vercel.app',
    siteName: 'Sourav Halder Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Sourav Halder - Web Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sourav Halder - Web Developer Portfolio',
    description: 'Professional portfolio showcasing web development projects and skills',
    images: ['/assets/images/sh-logo.svg'],
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/images/sh-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/images/sh-logo.svg" />
      </head>
      <body className={`${inter.className} bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
} 
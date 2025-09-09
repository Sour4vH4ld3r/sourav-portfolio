import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Projects | Sourav Halder - Web Developer & MERN Stack Specialist',
  description: 'Explore my complete portfolio of web applications, mobile apps, and innovative solutions. View detailed information about my projects including technologies used and live demos.',
  keywords: 'projects, portfolio, web development, MERN stack, React, Next.js, PHP, Laravel, mobile apps',
  openGraph: {
    title: 'All Projects | Sourav Halder',
    description: 'Explore my complete portfolio of web applications, mobile apps, and innovative solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Projects | Sourav Halder',
    description: 'Explore my complete portfolio of web applications, mobile apps, and innovative solutions.',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import ScrollProgress from '../components/ScrollProgress'
import AnimatedBackground from '../components/AnimatedBackground'
import ScrollAnimations from '../components/ScrollAnimations'
import BackToTop from '../components/BackToTop'
import { getAllProjects, Project } from '../data/projects'

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'featured' | 'web' | 'mobile'>('all')
  const allProjects = getAllProjects()

  const getFilteredProjects = (): Project[] => {
    switch (filter) {
      case 'featured':
        return allProjects.filter(project => project.featured)
      case 'web':
        return allProjects.filter(project => 
          project.frontend.some(tech => 
            ['React', 'Next.js', 'Vue.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript'].includes(tech)
          ) && !project.frontend.includes('React Native')
        )
      case 'mobile':
        return allProjects.filter(project => 
          project.frontend.includes('React Native')
        )
      default:
        return allProjects
    }
  }

  const filteredProjects = getFilteredProjects()

  return (
    <main className="min-h-screen relative bg-dark-900">
      <ScrollProgress />
      <AnimatedBackground />
      <ScrollAnimations />

      {/* Header */}
      <section className="relative pt-20 pb-12 bg-dark-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Navigation Back */}
            <div className="flex justify-start mb-8 animate-on-scroll">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Page Title */}
            <div className="animate-on-scroll">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">All Projects</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Explore my complete portfolio of web applications, mobile apps, and innovative solutions
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
              {[
                { key: 'all', label: 'All Projects', count: allProjects.length },
                { key: 'featured', label: 'Featured', count: allProjects.filter(p => p.featured).length },
                { key: 'web', label: 'Web Apps', count: allProjects.filter(p => 
                  p.frontend.some(tech => 
                    ['React', 'Next.js', 'Vue.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript'].includes(tech)
                  ) && !p.frontend.includes('React Native')).length },
                { key: 'mobile', label: 'Mobile Apps', count: allProjects.filter(p => 
                  p.frontend.includes('React Native')).length }
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter === filterOption.key
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                  }`}
                >
                  {filterOption.label} ({filterOption.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 animate-on-scroll">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-gray-400">Try a different filter to see more projects.</p>
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-20 pt-16 border-t border-gray-700/50 animate-on-scroll">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  {allProjects.length}
                </div>
                <div className="text-gray-400">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {allProjects.filter(p => p.featured).length}
                </div>
                <div className="text-gray-400">Featured Work</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {Array.from(new Set(allProjects.flatMap(p => [...p.frontend, ...p.backend]))).length}
                </div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {allProjects.filter(p => p.liveUrl && p.githubUrl).length}
                </div>
                <div className="text-gray-400">Live </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center animate-on-scroll">
            <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, innovative projects, and creative collaborations.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </main>
  )
} 
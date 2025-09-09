'use client'

import Image from 'next/image'
import { Project } from '../data/projects'
import TechIcon from './TechIcon'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className={`glass p-6 rounded-2xl hover-lift card-interactive animate-on-scroll-stagger-${(index % 3) + 1} corner-borders group`}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl mb-6 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback to gradient background with icon if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-primary-400 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technology Stacks */}
        <div className="space-y-3">
          {/* Frontend Technologies */}
          {project.frontend.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-cyan-400">Frontend</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.frontend.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-1 px-2 py-1 bg-cyan-400/10 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                    title={tech}
                  >
                    <TechIcon tech={tech} size={16} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Backend Technologies */}
          {project.backend.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Backend</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.backend.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-1 px-2 py-1 bg-green-400/10 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                    title={tech}
                  >
                    <TechIcon tech={tech} size={16} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row gap-3 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 hover-glow text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Live Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          )}
          
        
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 
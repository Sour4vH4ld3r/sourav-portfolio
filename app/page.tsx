'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ScrollProgress from './components/ScrollProgress'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollAnimations from './components/ScrollAnimations'
import BackToTop from './components/BackToTop'
import ProjectCard from './components/ProjectCard'
import LoadingSkeleton from './components/LoadingSkeleton'
import { getFeaturedProjects } from './data/projects'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    // Check if this is a first-time visit
    const hasVisited = localStorage.getItem('hasVisited')
    
    if (hasVisited) {
      // Skip loading screen for returning visitors
      setIsLoading(false)
    } else {
      // Show loading screen for first-time visitors
      localStorage.setItem('hasVisited', 'true')
    }
  }, [])

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return <LoadingSkeleton onLoadComplete={handleLoadComplete} />
  }

  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <AnimatedBackground />
      <ScrollAnimations />
      <Navigation />
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="relative py-16 sm:py-20 bg-dark-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a passionate web developer with 4+ years of experience creating digital solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 animate-on-scroll-stagger-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Hello! I'm Sourav Halder
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I specialize in building exceptional digital experiences with modern web technologies. 
                My journey in web development started 4 years ago, and I've been passionate about 
                creating clean, efficient, and user-friendly applications ever since.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I have extensive experience with the MERN stack (MongoDB, Express.js, React, Node.js), 
                PHP, Laravel, and various other technologies. I enjoy working on both frontend and 
                backend development, always striving to write clean, maintainable code.
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
                {['React', 'Node.js', 'PHP', 'Laravel', 'MongoDB', 'MySQL', 'JavaScript', 'HTML/CSS'].map((skill, index) => (
                  <span 
                    key={skill} 
                    className={`px-2 sm:px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs sm:text-sm transition-all duration-300 cursor-default ${
                      !isMobile ? 'hover-glow' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mb-6 lg:mb-0 animate-on-scroll-stagger-2">
              <div className={`w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto bg-gradient-to-br from-primary-500 to-purple-600 rounded-full p-1 ${
                !isMobile ? 'animate-morph hover-glow' : 'animate-morph-mobile glow-mobile'
              }`}>
                <div className="w-full h-full bg-dark-800 rounded-full flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/assets/images/profilephoto.png" 
                    alt="Sourav Halder" 
                    width={400} 
                    height={400}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating elements around avatar */}
              {!isMobile ? (
                <>
                  <div className="absolute top-1/4 -left-4 w-8 h-8 bg-primary-400/20 rounded-full animate-float" />
                  <div className="absolute top-3/4 -right-4 w-6 h-6 bg-purple-400/20 rounded-lg rotate-45 animate-wiggle" />
                  <div className="absolute bottom-1/4 left-1/4 w-4 h-4 border-2 border-cyan-400/30 rounded-full animate-pulse" />
                </>
              ) : (
                <>
                  <div className="absolute top-1/4 -left-3 w-6 h-6 bg-primary-400/15 rounded-full animate-float-mobile" />
                  <div className="absolute bottom-1/4 -right-3 w-4 h-4 bg-purple-400/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-16 sm:py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies I love working with
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Frontend */}
            <div className={`glass p-6 sm:p-8 rounded-2xl card-interactive animate-on-scroll-stagger-1  border-shimmer ${
              !isMobile ? 'hover-lift' : ''
            }`}>
              <div className={`text-4xl mb-4 ${!isMobile ? 'animate-float' : ''}`}>🎨</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-primary-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  React.js & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-primary-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  JavaScript/TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-primary-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-primary-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className={`glass p-6 sm:p-8 rounded-2xl card-interactive animate-on-scroll-stagger-2  border-shimmer ${
              !isMobile ? 'hover-lift' : ''
            }`}>
              <div className={`text-4xl mb-4 ${!isMobile ? 'animate-float' : ''}`} style={{animationDelay: '1s'}}>⚙️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-purple-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  Node.js & Express
                </li>
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-purple-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  PHP & Laravel
                </li>
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-purple-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  RESTful APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-purple-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  Authentication
                </li>
              </ul>
            </div>

            {/* Database & Tools - spans 2 columns on small screens */}
            <div className={`glass p-6 sm:p-8 rounded-2xl card-interactive sm:col-span-2 lg:col-span-1 animate-on-scroll-stagger-3  border-shimmer ${
              !isMobile ? 'hover-lift' : ''
            }`}>
              <div className={`text-4xl mb-4 ${!isMobile ? 'animate-float' : ''}`} style={{animationDelay: '2s'}}>🗄️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Database & Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-cyan-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  MongoDB & MySQL
                </li>
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-cyan-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-cyan-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  Docker 
                </li>
                <li className="flex items-center gap-2">
                  <span className={`w-2 h-2 bg-cyan-400 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></span>
                  VS Code & Postman
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-16 sm:py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className={`absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 ${
                !isMobile ? 'animate-glow' : ''
              }`}></div>
              
              <div className="space-y-8 sm:space-y-12">
                {/* Experience 1: Accede Technology */}
                <div className="relative flex items-start gap-4 sm:gap-8 animate-on-scroll-stagger-1">
                  <div className={`flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full border-4 border-dark-800 relative z-10 ${
                    !isMobile ? 'animate-pulse-glow' : 'animate-pulse'
                  }`}></div>
                  <div className={`glass p-6 rounded-2xl flex-1  ${
                    !isMobile ? 'hover-lift' : ''
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">Senior Software Developer (PHP, Laravel)</h3>
                        <h4 className="text-primary-400 font-semibold">Accede Technology Private Limited</h4>
                        <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Kolkata
                        </p>
                      </div>
                      <span className="text-primary-400 font-medium text-sm sm:text-base whitespace-nowrap">Feb 2021 - Nov 2021</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      A technology company focused on software solutions and development. Specialized in developing web applications 
                      with modern PHP frameworks and ensuring high-quality code standards.
                    </p>
                    <ul className="text-gray-300 mb-4 space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-400 mt-1">-</span>
                        Developing Web Applications and User Interfaces
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-400 mt-1">-</span>
                        Coding, Unit Testing & debugging
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-400 mt-1">-</span>
                        Coordinated and worked effectively with team members
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-400 mt-1">-</span>
                        Handled various technical queries and issues independently
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {['PHP', 'Laravel', 'JavaScript', 'HTML/CSS', 'MySQL', 'Git'].map((tech, index) => (
                        <span 
                          key={tech} 
                          className={`px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm transition-all duration-300 ${
                            !isMobile ? 'hover-glow' : ''
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience 2: Infinity Web Solution */}
                <div className="relative flex items-start gap-4 sm:gap-8 animate-on-scroll-stagger-2">
                  <div className={`flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full border-4 border-dark-800 relative z-10 ${
                    !isMobile ? 'animate-pulse-glow' : 'animate-pulse'
                  }`}></div>
                  <div className={`glass p-6 rounded-2xl flex-1  ${
                    !isMobile ? 'hover-lift' : ''
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">Senior Software Developer (PHP)</h3>
                        <h4 className="text-primary-400 font-semibold">Infinity Web Solution</h4>
                        <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Kolkata
                        </p>
                      </div>
                      <span className="text-purple-400 font-medium text-sm sm:text-base whitespace-nowrap">Aug 2020 - Jan 2021</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      A web solutions provider specializing in custom web application development. Focused on delivering 
                      high-quality PHP solutions for diverse client requirements.
                    </p>
                    <ul className="text-gray-300 mb-4 space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">-</span>
                        Developed multiple web applications using PHP
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">-</span>
                        Ensured high-quality coding standards and practices
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">-</span>
                        Collaborated with clients for project requirements and delivery
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'jQuery', 'Bootstrap'].map((tech, index) => (
                        <span 
                          key={tech} 
                          className={`px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm transition-all duration-300 ${
                            !isMobile ? 'hover-glow' : ''
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-16 sm:py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My academic journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className={`absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-green-500 ${
                !isMobile ? 'animate-glow' : ''
              }`}></div>
              
              <div className="space-y-8 sm:space-y-12">
                {/* Education 1: Bachelor's Degree */}
                <div className="relative flex items-start gap-4 sm:gap-8 animate-on-scroll-stagger-1">
                  <div className={`flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full border-4 border-dark-800 relative z-10 ${
                    !isMobile ? 'animate-pulse-glow' : 'animate-pulse'
                  }`}></div>
                  <div className={`glass p-6 rounded-2xl flex-1  ${
                    !isMobile ? 'hover-lift' : ''
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">Bachelor Of Computer Application</h3>
                        <h4 className="text-cyan-400 font-semibold">Dinabandhu Andrews Institute of Technology and Management (DAITM)</h4>
                        <a 
                          href="https://www.daitm.org.in/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm underline transition-colors duration-300"
                        >
                          www.daitm.org.in
                        </a>
                        <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Kolkata
                        </p>
                      </div>
                      <span className="text-cyan-400 font-medium text-sm sm:text-base whitespace-nowrap">2022 - 2025</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Currently pursuing Bachelor of Computer Application with focus on software development, 
                      programming languages, and modern web technologies. Building strong foundation in computer science principles.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Computer Science', 'Programming', 'Software Development', 'Web Technologies', 'Database Management'].map((subject, index) => (
                        <span 
                          key={subject} 
                          className={`px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm transition-all duration-300 ${
                            !isMobile ? 'hover-glow' : ''
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education 2: Higher Secondary */}
                <div className="relative flex items-start gap-4 sm:gap-8 animate-on-scroll-stagger-2">
                  <div className={`flex-shrink-0 w-8 h-8 bg-green-500 rounded-full border-4 border-dark-800 relative z-10 ${
                    !isMobile ? 'animate-pulse-glow' : 'animate-pulse'
                  }`}></div>
                  <div className={`glass p-6 rounded-2xl flex-1  ${
                    !isMobile ? 'hover-lift' : ''
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">Higher Secondary Education</h3>
                        <h4 className="text-green-400 font-semibold">KAKDWIP SISHU SIKSHAYTAN HIGH SCHOOL</h4>
                        <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          India
                        </p>
                      </div>
                      <span className="text-green-400 font-medium text-sm sm:text-base whitespace-nowrap">2016 - 2018</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Completed higher secondary education with strong academic foundation. 
                      This period marked the beginning of my interest in technology and programming.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Academic Excellence', 'Foundation Learning', 'Critical Thinking'].map((achievement, index) => (
                        <span 
                          key={achievement} 
                          className={`px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm transition-all duration-300 ${
                            !isMobile ? 'hover-glow' : ''
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-16 sm:py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing my latest work with modern technologies and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getFeaturedProjects().map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* More Projects Button */}
          <div className="text-center mt-12 animate-on-scroll">
            <a
              href="/projects"
              className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white font-semibold rounded-xl transform transition-all duration-300 shadow-lg ${
                !isMobile ? 'hover:scale-105 hover:shadow-primary-500/25 hover-glow' : 'hover:opacity-90'
              }`}
            >
              <span>View All Projects</span>
              <svg className={`w-5 h-5 transition-transform duration-300 ${
                !isMobile ? 'group-hover:translate-x-1' : ''
              }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's work together on your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 animate-on-scroll-stagger-1">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="animate-on-scroll-stagger-1">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-all duration-300 ${
                        !isMobile ? 'hover-glow' : ''
                      }`}
                    />
                  </div>
                  <div className="animate-on-scroll-stagger-2">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-all duration-300 ${
                        !isMobile ? 'hover-glow' : ''
                      }`}
                    />
                  </div>
                </div>
                <div className="animate-on-scroll-stagger-3">
                  <input
                    type="text"
                    placeholder="Subject"
                    className={`w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-all duration-300 ${
                      !isMobile ? 'hover-glow' : ''
                    }`}
                  />
                </div>
                <div className="animate-on-scroll-stagger-4">
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className={`w-full px-4 py-3 bg-dark-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-all duration-300 resize-none ${
                      !isMobile ? 'hover-glow' : ''
                    }`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`btn-primary w-full py-4 text-lg font-semibold transition-all duration-300 ${
                    !isMobile ? 'hover-glow' : ''
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 animate-on-scroll-stagger-2">
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Let's Create Something Amazing Together
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>

                {/* Download CV Button */}
                <div className="flex justify-center lg:justify-start animate-on-scroll-stagger-3">
                  <a
                    href="/assets/documents/Sourav_Halder_CV.pdf"
                    download="Sourav_Halder_CV.pdf"
                    className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-purple-700 transform transition-all duration-300 shadow-lg ${
                      !isMobile ? 'hover:scale-105 hover:shadow-primary-500/25 hover-glow' : 'hover:opacity-90'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>

                <div className="grid gap-4 sm:gap-6">
                  {[
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ), 
                      label: 'Email', 
                      value: 'souravhalder7890@gmail.com' 
                    },
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ), 
                      label: 'Phone', 
                      value: '+91 7908099602' 
                    },
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ), 
                      label: 'Location', 
                      value: 'Kolkata, West Bengal, India' 
                    }
                  ].map((contact, index) => (
                    <div 
                      key={contact.label} 
                      className={`glass p-4 sm:p-6 rounded-xl flex items-center gap-4 animate-on-scroll-stagger-${index + 1}  ${
                        !isMobile ? 'hover-lift' : ''
                      }`}
                    >
                      <div className={!isMobile ? 'animate-bounce-slow' : ''}>{contact.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white">{contact.label}</h4>
                        <p className="text-gray-300">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-on-scroll-stagger-4">
                  {[
                    {
                      name: 'GitHub',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )
                    },
                    {
                      name: 'LinkedIn',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Twitter',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Instagram',
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )
                    }
                  ].map((social, index) => (
                    <button
                      key={social.name}
                      className={`w-12 h-12 bg-primary-500/20 hover:bg-primary-500/30 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                        !isMobile ? 'hover-glow' : ''
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className={`text-primary-400 transition-transform duration-300 ${
                        !isMobile ? 'group-hover:scale-110' : ''
                      }`}>
                        {social.icon}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 sm:py-12 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-on-scroll">
            <div className="flex justify-center items-center gap-2 mb-4">
              <svg className={`w-8 h-8 text-primary-400 ${!isMobile ? 'animate-bounce-slow' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-xl font-bold gradient-text">Sourav Halder</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building digital experiences with passion and precision
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((link, index) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                  className={`text-gray-400 hover:text-primary-400 transition-colors duration-300 ${
                    !isMobile ? 'hover:text-shimmer' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link}
                </button>
              ))}
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8">
              <p className="text-gray-500 text-sm">
                © 2025 Sourav Halder. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <BackToTop />
    </main>
  )
} 
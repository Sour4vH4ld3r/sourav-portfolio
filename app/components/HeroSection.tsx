'use client'

import { useState, useEffect, useMemo } from 'react'
import { useScrollAnimation, useMagnetic } from '../hooks/useScrollAnimation'

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  
  const titleAnimation = useScrollAnimation<HTMLDivElement>({ direction: 'up', delay: 50 })
  const subtitleAnimation = useScrollAnimation<HTMLDivElement>({ direction: 'up', delay: 150 })
  const buttonAnimation = useScrollAnimation<HTMLDivElement>({ direction: 'up', delay: 250 })
  const ctaAnimation = useScrollAnimation<HTMLDivElement>({ direction: 'scale', delay: 350 })
  
  // Only use magnetic effects on desktop
  const magneticRef1 = useMagnetic<HTMLButtonElement>(isMobile ? 0 : 15)
  const magneticRef2 = useMagnetic<HTMLAnchorElement>(isMobile ? 0 : 12)
  const magneticRef3 = useMagnetic<HTMLButtonElement>(isMobile ? 0 : 12)
  
  const titles = useMemo(() => [
    'Web Developer',
    'MERN Stack Developer',
    'React Developer',
    'PHP Developer'
  ], [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    const checkReducedMotion = () => {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkMobile()
    checkReducedMotion()
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isReducedMotion) {
      setDisplayText(titles[0])
      return
    }

    // Faster typing speeds for better perceived performance
    const typeSpeed = isDeleting ? (isMobile ? 30 : 50) : (isMobile ? 60 : 100)
    const pauseTime = isMobile ? 1000 : 2000
    const currentTitle = titles[currentIndex]

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % titles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentTitle.slice(0, prev.length + 1)
      )
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, titles, isMobile, isReducedMotion])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Main Title with Optimized Animation */}
        <div 
          ref={titleAnimation.ref}
          className={`mb-6 ${titleAnimation.animationClasses}`}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="block text-white">
              Hi, I'm{' '}
              <span className={`gradient-text relative ${!isReducedMotion ? 'text-shimmer' : ''}`}>
                Sourav
                {!isMobile && !isReducedMotion && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/10 to-purple-500/10 blur-lg animate-pulse" />
                )}
              </span>
            </span>
          </h1>
        </div>

        {/* Optimized Typing Animation */}
        <div 
          ref={subtitleAnimation.ref}
          className={`mb-8 ${subtitleAnimation.animationClasses}`}
        >
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-400 min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center">
            <span className="relative">
              {displayText}
              {!isReducedMotion && <span className="animate-pulse text-primary-500">|</span>}
              {!isMobile && !isReducedMotion && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent animate-shimmer" />
              )}
            </span>
          </div>
        </div>

        {/* Description */}
        <div 
          ref={buttonAnimation.ref}
          className={`mb-12 ${buttonAnimation.animationClasses}`}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with{' '}
            <span className={`text-primary-400 font-semibold ${!isReducedMotion ? 'hover:text-shimmer' : ''} transition-all duration-300`}>
              4+ years
            </span>{' '}
            of expertise in modern web technologies
          </p>
        </div>

        {/* Optimized CTA Buttons */}
        <div 
          ref={ctaAnimation.ref}
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center ${ctaAnimation.animationClasses}`}
        >
          <button
            ref={magneticRef1}
            onClick={() => scrollToSection('#projects')}
            className={`group btn-primary w-full sm:w-auto px-8 py-4 text-lg font-semibold transition-all duration-300 ${
              !isReducedMotion ? 'hover-glow' : 'hover:scale-105'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${
                  !isReducedMotion ? 'group-hover:translate-x-1' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <a
            ref={magneticRef2}
            href="/assets/documents/Sourav_Halder_CV.pdf"
            download="Sourav_Halder_CV.pdf"
            className={`group w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transform transition-all duration-300 shadow-lg ${
              !isReducedMotion ? 'hover:scale-105 hover:shadow-green-500/25 hover-glow' : 'hover:opacity-90'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download CV
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${
                  !isReducedMotion ? 'group-hover:translate-y-1' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </a>
          
          <button
            ref={magneticRef3}
            onClick={() => scrollToSection('#contact')}
            className={`group btn-secondary w-full sm:w-auto px-8 py-4 text-lg font-semibold transition-all duration-300 ${
              !isReducedMotion ? 'hover-lift' : 'hover:bg-primary-500/10'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Let's Connect
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${
                  !isReducedMotion ? 'group-hover:scale-110' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Simplified Scroll Indicator */}
        <div className={`absolute bottom-4 sm:bottom-8 transform -translate-x-1/2 w-full flex justify-center ${
          !isReducedMotion ? 'animate-bounce' : ''
        }`}>
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 group mx-auto"
          >
            <span className={`text-xs sm:text-sm font-medium transition-all duration-300 text-center ${
              !isReducedMotion ? 'group-hover:text-shimmer' : ''
            }`}>
              Scroll Down
            </span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-current rounded-full flex justify-center mx-auto">
              <div className={`w-1 h-2 sm:h-3 bg-current rounded-full mt-1 sm:mt-2 ${
                !isReducedMotion ? 'animate-pulse' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Simplified Floating Elements - only on desktop */}
      {!isMobile && !isReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-16 h-16 border border-primary-500/10 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-10 w-12 h-12 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg" />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-cyan-400/10 rotate-45" />
        </div>
      )}

      {/* Lighter Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/5 to-dark-800/50 pointer-events-none" />
    </section>
  )
}

export default HeroSection 
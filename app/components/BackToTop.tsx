'use client'

import { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
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
    const toggleVisibility = () => {
      // Reduced threshold for better UX - show after 200px scroll
      const scrollThreshold = isMobile ? 150 : 200
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout
    const throttledToggleVisibility = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(toggleVisibility, 100)
    }

    window.addEventListener('scroll', throttledToggleVisibility, { passive: true })
    return () => {
      window.removeEventListener('scroll', throttledToggleVisibility)
      clearTimeout(timeoutId)
    }
  }, [isMobile])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
            isMobile ? 'w-14 h-14' : 'w-12 h-12 sm:w-14 sm:h-14 transform hover:scale-110'
          }`}
          aria-label="Back to top"
        >
          <svg 
            className={`group-hover:-translate-y-0.5 transition-transform duration-300 ${
              isMobile ? 'w-6 h-6' : 'w-5 h-5 sm:w-6 sm:h-6'
            }`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
          
          {/* Animated ring effect - disabled on mobile for performance */}
          {!isMobile && (
            <div className="absolute inset-0 rounded-full border-2 border-primary-400/30 animate-ping"></div>
          )}
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-purple-600/20 blur-lg"></div>
        </button>
      )}
    </>
  )
}

export default BackToTop 
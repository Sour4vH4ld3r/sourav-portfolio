'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  stagger?: number
}

// Throttle function for performance optimization
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    direction = 'up',
    stagger = 0
  } = options

  const elementRef = useRef<T>(null)
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
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reduce delays on mobile for faster perceived performance
          const actualDelay = isMobile ? Math.min(delay, 200) : delay
          const actualStagger = isMobile ? Math.min(stagger, 100) : stagger
          
          setTimeout(() => {
            setIsVisible(true)
          }, actualDelay + actualStagger)
          
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, triggerOnce, delay, stagger, isMobile])

  const getAnimationClasses = () => {
    // Faster transitions on mobile
    const duration = isMobile ? 'duration-500' : 'duration-800'
    const baseClasses = `transition-all ${duration} ease-out`
    
    if (!isVisible) {
      const transform = isMobile ? 'translate-y-6' : 'translate-y-12'
      const scale = isMobile ? 'scale-98' : 'scale-95'
      
      const hiddenClasses = {
        up: `opacity-0 ${transform} ${scale}`,
        down: `opacity-0 -${transform} ${scale}`,
        left: `opacity-0 translate-x-6 ${scale}`,
        right: `opacity-0 -translate-x-6 ${scale}`,
        scale: `opacity-0 ${scale}`,
        fade: 'opacity-0'
      }
      return `${baseClasses} ${hiddenClasses[direction]}`
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return {
    ref: elementRef,
    isVisible,
    animationClasses: getAnimationClasses()
  }
}

// Hook for parallax effect with performance optimizations
export const useParallax = (speed: number = 0.5) => {
  const [offsetY, setOffsetY] = useState(0)
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

  const handleScroll = useCallback(
    throttle(() => {
      // Reduce or disable parallax on mobile for better performance
      if (isMobile) {
        setOffsetY(window.pageYOffset * (speed * 0.3)) // Much lighter on mobile
      } else {
        setOffsetY(window.pageYOffset * speed)
      }
    }, 16), // ~60fps
    [speed, isMobile]
  )

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      return
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return offsetY
}

// Hook for magnetic hover effect
export const useMagnetic = <T extends HTMLElement = HTMLDivElement>(strength: number = 20) => {
  const ref = useRef<T>(null)
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
    const element = ref.current
    if (!element || isMobile) return // Disable magnetic effect on mobile

    const handleMouseMove = throttle((e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      const moveX = (x / rect.width) * strength
      const moveY = (y / rect.height) * strength
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`
    }, 16)

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)'
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength, isMobile])

  return ref
}

// Hook for scroll progress with throttling
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = useCallback(
    throttle(() => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }, 16), // ~60fps
    []
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return scrollProgress
} 
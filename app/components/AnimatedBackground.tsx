'use client'

import { useState, useEffect, useMemo } from 'react'
import { useParallax } from '../hooks/useScrollAnimation'

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  
  // Use lighter parallax on mobile
  const parallaxSpeed = isMobile ? 0.05 : 0.1
  const offsetY1 = useParallax(parallaxSpeed)
  const offsetY2 = useParallax(parallaxSpeed * 1.5)
  const offsetY3 = useParallax(parallaxSpeed * 1.2)
  
  const [particles, setParticles] = useState<Array<{
    id: string;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
    character: string;
  }>>([])

  useEffect(() => {
    // Detect mobile devices and reduced motion preference
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    const checkReducedMotion = () => {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkMobile()
    checkReducedMotion()
    
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Memoize particles to prevent recreation on every render
  const memoizedParticles = useMemo(() => {
    if (isReducedMotion) return []
    
    // Reduce particles on mobile for better performance
    const particleCount = isMobile ? 12 : 20
    const codeSymbols = ['-', ';', ':', '?', '#', '$', '{', '}', '=', '+', '*', '/', '!', '@', '%', '&', '|', '^', '~', '`']
    
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: `particle-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${6 + Math.random() * 4}s`,
      character: codeSymbols[Math.floor(Math.random() * codeSymbols.length)]
    }))
  }, [isMobile, isReducedMotion])

  useEffect(() => {
    setParticles(memoizedParticles)
  }, [memoizedParticles])

  // Don't render complex animations if reduced motion is preferred
  if (isReducedMotion) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Enhanced Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' patternUnits='userSpaceOnUse' width='60' height='60'%3e%3cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%233b82f6' stroke-width='0.8'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
          transform: `translateY(${offsetY1}px)`
        }}
      />

      {/* Large React Logo */}
      <div 
        className="absolute top-16 right-16 opacity-10"
        style={{ transform: `translateY(${offsetY2}px)` }}
      >
        <svg className="w-24 h-24 text-cyan-400 animate-spin" style={{ animationDuration: '20s' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      </div>

      {/* Medium React Logos */}
      <div 
        className="absolute bottom-32 left-20 opacity-8"
        style={{ transform: `translateY(${offsetY1}px)` }}
      >
        <svg className="w-16 h-16 text-blue-400 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
        </svg>
      </div>

      {/* Prominent Round Shapes with Glowing Effects */}
      <div 
        className="absolute top-1/5 left-1/4 w-32 h-32 rounded-full border-2 border-primary-400/20 animate-pulse"
        style={{ transform: `translateY(${offsetY3}px)` }}
      >
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-400/10 to-transparent animate-ping" style={{ animationDuration: '3s' }} />
      </div>

      <div 
        className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full border border-purple-400/30 animate-pulse"
        style={{ transform: `translateY(${offsetY1}px)` }}
      >
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-400/15 to-transparent animate-ping" style={{ animationDuration: '4s' }} />
      </div>

      <div 
        className="absolute top-1/2 right-1/6 w-20 h-20 rounded-full border border-cyan-400/25 animate-pulse"
        style={{ transform: `translateY(${offsetY2}px)` }}
      >
        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-400/10 to-transparent animate-ping" style={{ animationDuration: '5s' }} />
      </div>

      {/* Enhanced Coding Symbols */}
      <div 
        className="absolute top-20 left-10"
        style={{ transform: `translateY(${offsetY2}px)` }}
      >
        <div className="text-4xl font-mono text-primary-400/25 animate-pulse">{'{ }'}</div>
      </div>

      <div 
        className="absolute top-40 right-20"
        style={{ transform: `translateY(${offsetY3}px)` }}
      >
        <div className="text-3xl font-mono text-purple-400/30 rotate-12 animate-bounce" style={{ animationDuration: '3s' }}>{'< />'}</div>
      </div>

      <div 
        className="absolute top-60 left-1/3"
        style={{ transform: `translateY(${offsetY1}px)` }}
      >
        <div className="text-2xl font-mono text-green-400/30 animate-pulse">{'const'}</div>
      </div>

      <div 
        className="absolute bottom-60 right-1/3"
        style={{ transform: `translateY(${offsetY2}px)` }}
      >
        <div className="text-xl font-mono text-yellow-400/30 animate-pulse">{'function()'}</div>
      </div>

      <div 
        className="absolute top-1/4 right-10"
        style={{ transform: `translateY(${offsetY3}px)` }}
      >
        <div className="text-2xl font-mono text-cyan-400/30 animate-bounce" style={{ animationDuration: '2s' }}>{'=>'}</div>
      </div>

      <div 
        className="absolute bottom-1/4 left-20"
        style={{ transform: `translateY(${offsetY1}px)` }}
      >
        <div className="text-xl font-mono text-pink-400/30 animate-pulse">{'if(true)'}</div>
      </div>

      {!isMobile && (
        <>
          <div 
            className="absolute bottom-40 left-1/4"
            style={{ transform: `translateY(${offsetY1}px)` }}
          >
            <div className="text-2xl font-mono text-cyan-400/35 animate-pulse">{'[ ]'}</div>
          </div>

          <div 
            className="absolute top-1/3 right-1/3"
            style={{ transform: `translateY(${offsetY2}px)` }}
          >
            <div className="text-3xl font-mono text-green-400/25 animate-bounce" style={{ animationDuration: '4s' }}>{'=>'}</div>
          </div>

          <div 
            className="absolute bottom-20 right-10"
            style={{ transform: `translateY(${offsetY3}px)` }}
          >
            <div className="text-2xl font-mono text-yellow-400/30 animate-pulse">{'()'}</div>
          </div>

          {/* Additional Coding Elements */}
          <div 
            className="absolute top-1/6 left-3/4"
            style={{ transform: `translateY(${offsetY2}px)` }}
          >
            <div className="text-base font-mono text-blue-400/35 animate-pulse">{'import React'}</div>
          </div>

          <div 
            className="absolute bottom-1/6 right-1/4"
            style={{ transform: `translateY(${offsetY1}px)` }}
          >
            <div className="text-base font-mono text-purple-400/35 animate-pulse">{'export default'}</div>
          </div>

          <div 
            className="absolute top-3/5 left-1/6"
            style={{ transform: `translateY(${offsetY3}px)` }}
          >
            <div className="text-xl font-mono text-orange-400/30 animate-pulse">{'async'}</div>
          </div>

          <div 
            className="absolute bottom-2/5 right-1/6"
            style={{ transform: `translateY(${offsetY2}px)` }}
          >
            <div className="text-xl font-mono text-red-400/30 animate-pulse">{'await'}</div>
          </div>
        </>
      )}

      {/* Enhanced Programming Language Tags */}
      <div 
        className="absolute top-1/4 left-1/3"
        style={{ transform: `translateY(${offsetY1}px)` }}
      >
        <div className="px-3 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-300/50 text-sm font-mono animate-pulse backdrop-blur-sm">React</div>
      </div>

      {!isMobile && (
        <>
          <div 
            className="absolute top-2/3 right-1/4"
            style={{ transform: `translateY(${offsetY2}px)` }}
          >
            <div className="px-3 py-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full text-yellow-300/50 text-sm font-mono animate-pulse backdrop-blur-sm">JavaScript</div>
          </div>

          <div 
            className="absolute bottom-1/3 right-1/6"
            style={{ transform: `translateY(${offsetY1}px)` }}
          >
            <div className="px-3 py-2 bg-green-500/10 border border-green-400/30 rounded-full text-green-300/50 text-sm font-mono animate-pulse backdrop-blur-sm">Node.js</div>
          </div>

          <div 
            className="absolute top-1/2 left-1/6"
            style={{ transform: `translateY(${offsetY3}px)` }}
          >
            <div className="px-3 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full text-purple-300/50 text-sm font-mono animate-pulse backdrop-blur-sm">TypeScript</div>
          </div>

          <div 
            className="absolute bottom-1/6 left-1/3"
            style={{ transform: `translateY(${offsetY2}px)` }}
          >
            <div className="px-3 py-2 bg-pink-500/10 border border-pink-400/30 rounded-full text-pink-300/50 text-sm font-mono animate-pulse backdrop-blur-sm">PHP</div>
          </div>

          <div 
            className="absolute top-1/8 right-1/2"
            style={{ transform: `translateY(${offsetY1}px)` }}
          >
            <div className="px-3 py-2 bg-teal-500/10 border border-teal-400/30 rounded-full text-teal-300/50 text-sm font-mono animate-pulse backdrop-blur-sm">MongoDB</div>
          </div>

          <div 
            className="absolute bottom-1/8 left-1/2"
            style={{ transform: `translateY(${offsetY3}px)` }}
          >
            <div className="px-3 py-2 bg-indigo-500/10 border border-indigo-400/30 rounded-full text-indigo-300/50 text-sm font-mono animate-pulse backdrop-blur-sm">MySQL</div>
          </div>
        </>
      )}

      {/* Enhanced Tech Icons with Glow Effects */}
      {!isMobile && (
        <>
          {/* Git Icon */}
          <div 
            className="absolute top-1/5 right-1/5"
            style={{ transform: `translateY(${offsetY2}px)` }}
          >
            <div className="p-3 rounded-full bg-orange-400/5 border border-orange-400/20 backdrop-blur-sm animate-pulse">
              <svg className="w-6 h-6 text-orange-400/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.717.713 1.880 0 2.596-.719.719-1.884.719-2.604 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.422-.227-.605-.406-.543-.544-.674-1.338-.404-1.997L8.162 4.25 .452 11.96c-.603.604-.603 1.582 0 2.187l10.48 10.477c.604.604 1.582.604 2.186 0L23.546 13.12c.603-.603.603-1.582 0-2.187"/>
              </svg>
            </div>
          </div>

          {/* VS Code Icon */}
          <div 
            className="absolute bottom-1/5 left-1/5"
            style={{ transform: `translateY(${offsetY1}px)` }}
          >
            <div className="p-3 rounded-full bg-blue-400/5 border border-blue-400/20 backdrop-blur-sm animate-pulse">
              <svg className="w-6 h-6 text-blue-400/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
              </svg>
            </div>
          </div>

          {/* Terminal Icon */}
          <div 
            className="absolute top-2/5 left-1/12"
            style={{ transform: `translateY(${offsetY3}px)` }}
          >
            <div className="p-2 rounded-full bg-green-400/5 border border-green-400/20 backdrop-blur-sm animate-pulse">
              <svg className="w-5 h-5 text-green-400/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 3h20c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v14h20V5H2zm1 1h18v12H3V6zm2 2v2l2-1-2-1zm4 3h6v1H9v-1z"/>
              </svg>
            </div>
          </div>

          {/* Database Icon */}
          <div 
            className="absolute bottom-2/5 right-1/12"
            style={{ transform: `translateY(${offsetY1}px)` }}
          >
            <div className="p-2 rounded-full bg-cyan-400/5 border border-cyan-400/20 backdrop-blur-sm animate-pulse">
              <svg className="w-5 h-5 text-cyan-400/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C7.58 3 4 4.79 4 7C4 9.21 7.58 11 12 11C16.42 11 20 9.21 20 7C20 4.79 16.42 3 12 3ZM4 9V12C4 14.21 7.58 16 12 16C16.42 16 20 14.21 20 12V9C20 11.21 16.42 13 12 13C7.58 13 4 11.21 4 9ZM4 14V17C4 19.21 7.58 21 12 21C16.42 21 20 19.21 20 17V14C20 16.21 16.42 18 12 18C7.58 18 4 16.21 4 14Z"/>
              </svg>
            </div>
          </div>

          {/* API Icon */}
          <div 
            className="absolute top-4/5 right-2/5"
            style={{ transform: `translateY(${offsetY2}px)` }}
          >
            <div className="p-2 rounded-full bg-purple-400/5 border border-purple-400/20 backdrop-blur-sm animate-pulse">
              <svg className="w-5 h-5 text-purple-400/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.5 6.5C7.5 5.67 8.17 5 9 5h1.5c.83 0 1.5.67 1.5 1.5S11.33 8 10.5 8H9c-.83 0-1.5-.67-1.5-1.5zM9 10h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H9c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10zm4.5-1.5c0-.83.67-1.5 1.5-1.5H16c.83 0 1.5.67 1.5 1.5S16.83 10 16 10h-1c-.83 0-1.5-.67-1.5-1.5zM15 12h1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5z"/>
              </svg>
            </div>
          </div>

          {/* Cloud Icon */}
          <div 
            className="absolute bottom-3/5 left-2/5"
            style={{ transform: `translateY(${offsetY3}px)` }}
          >
            <div className="p-2 rounded-full bg-gray-400/5 border border-gray-400/20 backdrop-blur-sm animate-pulse">
              <svg className="w-5 h-5 text-gray-400/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
              </svg>
            </div>
          </div>
        </>
      )}

      {/* Enhanced Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-primary-400/60 rounded-full animate-ping" />
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-primary-400/80 rounded-full animate-pulse" />
      
      {!isMobile && (
        <>
          <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-purple-400/50 rounded-full animate-ping" />
          <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-purple-400/80 rounded-full animate-pulse" />
          
          <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-cyan-400/45 rounded-full animate-ping" />
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400/80 rounded-full animate-pulse" />
          
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-yellow-400/50 rounded-full animate-ping" />
          <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-yellow-400/80 rounded-full animate-pulse" />
          
          <div className="absolute top-1/8 left-1/8 w-2 h-2 bg-green-400/45 rounded-full animate-ping" />
          <div className="absolute top-1/8 left-1/8 w-1 h-1 bg-green-400/80 rounded-full animate-pulse" />
        </>
      )}

      {/* Enhanced Particle Effect */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute text-primary-400/25 font-mono text-sm animate-bounce"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          >
            {particle.character}
          </div>
        ))}
      </div>

      {/* Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-900/20 to-dark-900/40" />
    </div>
  )
}

export default AnimatedBackground 
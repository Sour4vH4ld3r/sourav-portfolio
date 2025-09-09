'use client'

import { useEffect, useState } from 'react'

const LoadingSkeleton = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onLoadComplete, 300) // Allow fade out to complete
          }, 500)
          return 100
        }
        // Simulate realistic loading progression
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onLoadComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-50 bg-dark-900 flex items-center justify-center transition-opacity duration-300 ${
      progress >= 100 ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' patternUnits='userSpaceOnUse' width='40' height='40'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%233b82f6' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`
        }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto px-4">
        {/* Logo/Name */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Sourav Halder</span>
          </h1>
          <div className="text-lg sm:text-xl text-gray-400 mb-6">
            <span className="loading-dots">Loading Portfolio</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700/50 rounded-full h-2 mb-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        {/* Progress Text */}
        <div className="text-sm text-gray-500 mb-8">
          {Math.round(Math.min(progress, 100))}%
        </div>

        {/* Skeleton Content Preview */}
        <div className="space-y-4 opacity-40">
          {/* Hero section skeleton */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-600/30 rounded w-3/4 mx-auto animate-pulse" />
            <div className="h-4 bg-gray-600/30 rounded w-1/2 mx-auto animate-pulse" style={{ animationDelay: '0.1s' }} />
          </div>
          
          {/* Button skeletons */}
          <div className="flex gap-3 justify-center mt-6">
            <div className="h-10 bg-gray-600/30 rounded-lg w-24 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="h-10 bg-gray-600/30 rounded-lg w-24 animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-12 h-12 border border-primary-500/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-purple-500/10 rounded-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-6 h-6 border border-cyan-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  )
}

export default LoadingSkeleton 
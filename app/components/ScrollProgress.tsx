'use client'

import { useScrollProgress } from '../hooks/useScrollAnimation'

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress()

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1 bg-dark-800/30 backdrop-blur-sm z-50"
      style={{
        background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.3), rgba(30, 41, 59, 0.3))'
      }}
    >
      <div
        className="h-full bg-gradient-to-r from-primary-400 via-primary-500 to-purple-500 transition-all duration-300 ease-out shadow-lg"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
        }}
      />
    </div>
  )
}

export default ScrollProgress 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      },
      animation: {
        // Existing animations
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        
        // New advanced animations
        'parallax-slow': 'parallax 20s ease-in-out infinite',
        'parallax-fast': 'parallax 10s ease-in-out infinite',
        'stagger-1': 'fadeInUp 0.6s ease-out 0.1s both',
        'stagger-2': 'fadeInUp 0.6s ease-out 0.2s both',
        'stagger-3': 'fadeInUp 0.6s ease-out 0.3s both',
        'stagger-4': 'fadeInUp 0.6s ease-out 0.4s both',
        'reveal-left': 'revealLeft 0.8s ease-out both',
        'reveal-right': 'revealRight 0.8s ease-out both',
        'morph': 'morph 4s ease-in-out infinite',
        'text-shimmer': 'textShimmer 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 10s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in-bottom': 'slideInBottom 0.5s ease-out',
        'slide-in-top': 'slideInTop 0.5s ease-out',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'flip-in': 'flipIn 0.6s ease-out',
        'elastic': 'elastic 0.6s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'text-focus': 'textFocus 0.8s ease-out both'
      },
      keyframes: {
        // Existing keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          'from': { boxShadow: '0 0 20px #3b82f6' },
          'to': { boxShadow: '0 0 30px #3b82f6, 0 0 40px #3b82f6' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#3b82f6' }
        },
        
        // New advanced keyframes
        parallax: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-5px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-1deg)' }
        },
        revealLeft: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-100px) scale(0.8)',
            filter: 'blur(4px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0) scale(1)',
            filter: 'blur(0px)'
          }
        },
        revealRight: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(100px) scale(0.8)',
            filter: 'blur(4px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0) scale(1)',
            filter: 'blur(0px)'
          }
        },
        morph: {
          '0%, 100%': { borderRadius: '50% 30% 30% 50%' },
          '25%': { borderRadius: '30% 50% 50% 30%' },
          '50%': { borderRadius: '50% 30% 50% 30%' },
          '75%': { borderRadius: '30% 50% 30% 50%' }
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
            transform: 'scale(1.05)'
          }
        },
        slideInBottom: {
          '0%': { 
            transform: 'translateY(100%) scale(0.8)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0) scale(1)',
            opacity: '1'
          }
        },
        slideInTop: {
          '0%': { 
            transform: 'translateY(-100%) scale(0.8)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0) scale(1)',
            opacity: '1'
          }
        },
        zoomIn: {
          '0%': { 
            transform: 'scale(0.5) rotate(-5deg)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1'
          }
        },
        flipIn: {
          '0%': { 
            transform: 'perspective(400px) rotateY(90deg)',
            opacity: '0'
          },
          '40%': { 
            transform: 'perspective(400px) rotateY(-10deg)'
          },
          '70%': { 
            transform: 'perspective(400px) rotateY(10deg)'
          },
          '100%': { 
            transform: 'perspective(400px) rotateY(0deg)',
            opacity: '1'
          }
        },
        elastic: {
          '0%': { 
            transform: 'scale(0.3) rotate(-5deg)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scale(1.05) rotate(1deg)'
          },
          '70%': { 
            transform: 'scale(0.9) rotate(-1deg)'
          },
          '100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.1)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(1)' }
        },
        textFocus: {
          '0%': { 
            filter: 'blur(12px)',
            opacity: '0'
          },
          '100%': { 
            filter: 'blur(0px)',
            opacity: '1'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'url("data:image/svg+xml,%3csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3e%3cdefs%3e%3cpattern id="a" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="translate(0,0) rotate(0) skewX(0) skewY(0)"%3e%3cpath d="M0 60V0h60v60z" stroke-width="0" fill="none"/%3e%3cpath d="M0 0h60v60H0z" stroke-width="0.5" stroke="%23f1f5f9" fill="none"/%3e%3c/pattern%3e%3c/defs%3e%3crect width="100%25" height="100%25" fill="url(%23a)"/%3e%3c/svg%3e")',
        'shimmer': 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)'
      },
      // Enhanced transition utilities
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms',
      }
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#020617', // Deepest Navy
          surface: 'rgba(15, 23, 42, 0.6)', // Glassmorphism Surface
          border: 'rgba(56, 189, 248, 0.2)', // Faint Cyan Border
          primary: '#0ea5e9', // Neon Cyan
          secondary: '#f59e0b', // Amber/Yellow
          accent: '#8b5cf6', // Purple
          danger: '#ef4444', // Neon Red
          success: '#10b981', // Neon Green
          text: {
            primary: '#f1f5f9', // Slate-100
            secondary: '#94a3b8', // Slate-400
            muted: '#64748b', // Slate-500
          }
        },
        mint: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 15px rgba(14, 165, 233, 0.4)',
        'neon-secondary': '0 0 15px rgba(245, 158, 11, 0.4)',
        'neon-border': '0 0 2px rgba(14, 165, 233, 0.8)',
      }
    },
  },
  plugins: [],
}

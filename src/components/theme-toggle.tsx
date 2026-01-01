'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ThemeToggle() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  // On mount, set theme from localStorage or system preference
  React.useEffect(() => {
    let initial: 'light' | 'dark' = 'light'

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('theme') as 'light' | 'dark' | null

      if (stored === 'light' || stored === 'dark') {
        initial = stored
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        initial = prefersDark ? 'dark' : 'light'
      }
    }

    setTheme(initial)
    document.documentElement.classList[initial === 'dark' ? 'add' : 'remove']('dark')

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', initial)
    }

    // Observe class changes to update localStorage
    let observer: MutationObserver | undefined

    if (typeof localStorage !== 'undefined') {
      observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains('dark')

        localStorage.setItem('theme', isDark ? 'dark' : 'light')
      })
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    }

    return () => {
      if (observer) observer.disconnect()
    }
  }, [])

  // Update theme class and localStorage when theme changes
  React.useEffect(() => {
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark')

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <Button
      variant='outline'
      size='icon'
      className='relative'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className='size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <Moon className='absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle

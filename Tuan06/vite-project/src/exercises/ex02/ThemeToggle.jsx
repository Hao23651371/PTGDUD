import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(null)

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('ex2-theme') || 'light')

  useEffect(() => {
    localStorage.setItem('ex2-theme', theme)
    document.documentElement.setAttribute('data-theme-demo', theme)
    return () => {
      document.documentElement.removeAttribute('data-theme-demo')
    }
  }, [theme])

  const value = useMemo(
    () => ({ theme, toggleTheme: () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light')) }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return context
}

function ThemeStatus() {
  const { theme } = useTheme()
  return (
    <div className="demo-card">
      <h3>Theme hiện tại</h3>
      <p>{theme}</p>
    </div>
  )
}

function ThemeController() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="demo-card">
      <h3>Toggle</h3>
      <button type="button" onClick={toggleTheme}>
        Chuyển sang {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  )
}

export default function ThemeToggleExercise() {
  return (
    <section className="exercise-block theme-preview" data-theme-mode>
      <h2>Bài 2: Theme Toggle</h2>
      <p>Global state điều khiển theme toàn bộ khu vực bài tập + lưu localStorage.</p>
      <ThemeProvider>
        <div className="grid two-col">
          <ThemeStatus />
          <ThemeController />
        </div>
      </ThemeProvider>
    </section>
  )
}

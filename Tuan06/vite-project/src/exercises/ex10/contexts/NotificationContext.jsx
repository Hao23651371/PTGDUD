import { createContext, useContext, useMemo, useState } from 'react'

const NotificationContext = createContext(null)

export function NotificationProvider({ children }) {
  const [messages, setMessages] = useState([])

  const notify = (text, type = 'info') => {
    const id = crypto.randomUUID()
    setMessages((prev) => [...prev, { id, text, type }])
    setTimeout(() => {
      setMessages((prev) => prev.filter((item) => item.id !== id))
    }, 3000)
  }

  const value = useMemo(() => ({ notify }), [])

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <div className="toast-stack">
        {messages.map((item) => (
          <div key={item.id} className={`toast ${item.type}`}>
            {item.text}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

export function useNotify() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotify must be used in NotificationProvider')
  }
  return context
}

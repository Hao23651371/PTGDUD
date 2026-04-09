import { createContext, useContext, useMemo, useState } from 'react'

const NotificationContext = createContext(null)

function NotificationProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const notify = (message, type = 'info') => {
    const id = crypto.randomUUID()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 3000)
  }

  const value = useMemo(() => ({ notify }), [])

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <div className="toast-stack">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

function useNotify() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotify must be used inside NotificationProvider')
  }
  return context
}

function HeaderAction() {
  const { notify } = useNotify()
  return (
    <button type="button" onClick={() => notify('Thông báo từ Header component', 'success')}>
      Trigger từ Header
    </button>
  )
}

function SidebarAction() {
  const { notify } = useNotify()
  return (
    <button type="button" onClick={() => notify('Thông báo từ Sidebar component', 'info')}>
      Trigger từ Sidebar
    </button>
  )
}

export default function NotificationExercise() {
  return (
    <section className="exercise-block">
      <h2>Bài 6: Notification System</h2>
      <p>Toast có thể gọi từ bất kỳ component nào và tự ẩn sau 3 giây.</p>
      <NotificationProvider>
        <div className="grid two-col">
          <div className="demo-card">
            <h3>Component A</h3>
            <HeaderAction />
          </div>
          <div className="demo-card">
            <h3>Component B</h3>
            <SidebarAction />
          </div>
        </div>
      </NotificationProvider>
    </section>
  )
}

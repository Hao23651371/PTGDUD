import { useMemo, useState } from 'react'
import './App.css'
import CounterGlobalExercise from './exercises/ex01/CounterGlobal'
import ThemeToggleExercise from './exercises/ex02/ThemeToggle'
import FakeAuthExercise from './exercises/ex03/FakeAuth'
import TodoGlobalExercise from './exercises/ex04/TodoGlobal'
import CartGlobalExercise from './exercises/ex05/CartGlobal'
import NotificationExercise from './exercises/ex06/NotificationSystem'
import FetchUsersGlobalExercise from './exercises/ex07/FetchUsersGlobal'
import SearchDebounceApiExercise from './exercises/ex08/SearchDebounceApi'
import AuthTokenApiExercise from './exercises/ex09/AuthTokenApi'
import MiniAppExercise from './exercises/ex10/MiniApp'

const lessons = [
  { id: 'ex01', title: 'Bài 1 - Counter Global', component: CounterGlobalExercise },
  { id: 'ex02', title: 'Bài 2 - Theme Toggle', component: ThemeToggleExercise },
  { id: 'ex03', title: 'Bài 3 - Auth giả lập', component: FakeAuthExercise },
  { id: 'ex04', title: 'Bài 4 - Todo List Global', component: TodoGlobalExercise },
  { id: 'ex05', title: 'Bài 5 - Cart Global', component: CartGlobalExercise },
  { id: 'ex06', title: 'Bài 6 - Notification System', component: NotificationExercise },
  { id: 'ex07', title: 'Bài 7 - Fetch Users Global Async', component: FetchUsersGlobalExercise },
  { id: 'ex08', title: 'Bài 8 - Search Debounce API', component: SearchDebounceApiExercise },
  { id: 'ex09', title: 'Bài 9 - Auth API Token', component: AuthTokenApiExercise },
  { id: 'ex10', title: 'Bài 10 - Mini App Context', component: MiniAppExercise },
]

export default function App() {
  const [activeLessonId, setActiveLessonId] = useState('ex01')

  const ActiveComponent = useMemo(
    () => lessons.find((item) => item.id === activeLessonId)?.component || CounterGlobalExercise,
    [activeLessonId],
  )

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <h1>Buổi 6</h1>
        <p>State Management (Redux Toolkit/Recoil mô phỏng bằng Context API)</p>
        <nav className="lesson-nav">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              type="button"
              className={lesson.id === activeLessonId ? 'active' : ''}
              onClick={() => setActiveLessonId(lesson.id)}
            >
              {lesson.title}
            </button>
          ))}
        </nav>
      </aside>

      <section className="content">
        <ActiveComponent />
      </section>
    </main>
  )
}

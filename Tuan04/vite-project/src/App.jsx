import { useState } from 'react'
import UsersFetchExercise from './components/UsersFetchExercise'
import DynamicUserFetch from './components/DynamicUserFetch'
import PostsSearchExercise from './components/PostsSearchExercise'
import TodosCrudExercise from './components/TodosCrudExercise'
import './App.css'

function App() {
  const [lesson, setLesson] = useState('bai1')

  return (
    <main className="page">
      <div className="container">
        <h1>Buổi 4 - Fetch API</h1>
        <p>Bài 1 đến bài 5, viết kiểu đơn giản cho người mới học.</p>

        <div className="menu">
          <button onClick={() => setLesson('bai1')}>Bài 1-2</button>
          <button onClick={() => setLesson('bai3')}>Bài 3</button>
          <button onClick={() => setLesson('bai4')}>Bài 4</button>
          <button onClick={() => setLesson('bai5')}>Bài 5</button>
        </div>

        {lesson === 'bai1' && <UsersFetchExercise />}
        {lesson === 'bai3' && <DynamicUserFetch />}
        {lesson === 'bai4' && <PostsSearchExercise />}
        {lesson === 'bai5' && <TodosCrudExercise />}
      </div>
    </main>
  )
}

export default App

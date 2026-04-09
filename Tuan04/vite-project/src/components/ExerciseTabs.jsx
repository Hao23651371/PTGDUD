function ExerciseTabs({ active, onChange }) {
  const tabs = [
    { id: 'bai1', label: 'Bài 1-2' },
    { id: 'bai3', label: 'Bài 3' },
    { id: 'bai4', label: 'Bài 4' },
    { id: 'bai5', label: 'Bài 5' },
  ]

  return (
    <nav className="exercise-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={active === tab.id ? 'active' : ''}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}

export default ExerciseTabs

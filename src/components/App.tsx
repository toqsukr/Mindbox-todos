import { useState } from 'react'
import { v1 } from 'uuid'
import { Todo, TodoStatus } from '../type'
import AddTodo from './add-todo/AddTodo'
import css from './App.module.scss'
import Todos from './todos/Todos'
import Navigation from './ui/navigation/Navigation'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoStatus, setStatus] = useState<TodoStatus>('All')

  const addTodo = (text: string) => {
    setTodos(prev => [...prev, { id: v1(), status: 'Active', text }])
  }

  const toggleTodo = (id: string, checked: boolean) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, status: checked ? 'Done' : 'Active' } : todo))
    )
  }

  const handleNavClick = (status: TodoStatus) => {
    setStatus(status)
  }

  const getNavigation = (navStatus: TodoStatus, currentStatus: TodoStatus) => ({
    onClick: () => handleNavClick(navStatus),
    text: navStatus,
    active: navStatus === currentStatus,
  })

  const elements = [
    getNavigation('All', todoStatus),
    getNavigation('Active', todoStatus),
    getNavigation('Done', todoStatus),
  ]

  return (
    <main className={css.container}>
      <section className={css.todo_section}>
        <header className={css.header}>
          <h1>TODOS</h1>
          <Navigation elements={elements} />
        </header>
        <AddTodo addTodo={addTodo} disabled={todoStatus === 'Done'} />
        <Todos todos={todos} toggleTodo={toggleTodo} status={todoStatus} />
      </section>
    </main>
  )
}

export default App

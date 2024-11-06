export type TodoStatus = 'Active' | 'Done' | 'All'

export type Todo = {
  id: string
  text: string
  status: TodoStatus
}

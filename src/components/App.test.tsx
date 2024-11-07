import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import App from './App'

jest.mock('clsx', () => {
  return {
    __esModule: true,
    default: jest.fn((...args) => args.filter(Boolean).join(' ')),
  }
})

const addTodo = async (todoText: string) => {
  const input = screen.getByTestId('add-todo-input')
  const addButton = screen.getByTestId('add-todo-btn')

  expect(screen.queryByText(todoText)).not.toBeInTheDocument()
  fireEvent.change(input, { target: { value: todoText } })
  expect(input).toHaveValue(todoText)
  fireEvent.click(addButton)
  expect(screen.getByText(todoText)).toBeInTheDocument()
}

describe('Todo actions', () => {
  afterEach(() => {
    cleanup()
  })

  it('Add todo', () => {
    render(<App />)

    addTodo('Test Todo')
  })

  it('Delete todo', () => {
    render(<App />)

    addTodo('Test Todo')

    const deleteTodoButton = screen.getByTestId('delete-todo-btn')

    fireEvent.click(deleteTodoButton)

    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument()
  })

  it('Toggle todo', () => {
    render(<App />)

    addTodo('Test Todo')

    const todoCheckbox = screen.getByRole<HTMLInputElement>('checkbox')

    expect(todoCheckbox).not.toBeChecked()

    fireEvent.click(todoCheckbox)

    expect(todoCheckbox).toBeChecked()

    fireEvent.click(todoCheckbox)

    expect(todoCheckbox).not.toBeChecked()
  })
})

describe('Navigation', () => {
  it('List filtering', () => {
    render(<App />)

    addTodo('Todo1')

    addTodo('Todo2')

    fireEvent.click(within(screen.getByText('Todo1')).getByRole('checkbox'))

    const navigation = screen.getByRole('navigation')

    fireEvent.click(within(navigation).getByText('Done'))

    expect(screen.getByText('Todo1')).toBeInTheDocument()
    expect(screen.queryByText('Todo2')).not.toBeInTheDocument()

    fireEvent.click(within(navigation).getByText('Active'))

    expect(screen.getByText('Todo2')).toBeInTheDocument()
    expect(screen.queryByText('Todo1')).not.toBeInTheDocument()
  })
})

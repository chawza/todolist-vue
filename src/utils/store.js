const generateId = () => Math.random().toString(36)

import { ref } from 'vue'

const TODOS_IN_STORAGE_KEY = 'todos'

const TodoList = {
  todos : ref([]),
  createTodo(title) {
    this.todos.value.push({
      title: title,
      id: generateId(),
      isDone: false
    })
  },
  deleteTodo(id) {
    const indexToDelete = this.todos.value.findIndex(value => value.id === id)
    if (indexToDelete === -1) {
      console.warn(`cannot delete todo with id ${id}`);
    }
    this.todos.value.splice(indexToDelete, 1);
  },
  toggleIsDone(id) {
    const searchIndex = this.todos.value.findIndex(value => value.id === id)
    this.todos.value[searchIndex].isDone = !this.todos.value[searchIndex].isDone
  },
  updateTodo(id, title) {
    const searchIndex = this.todos.value.findIndex(value => value.id === id)
    this.todos.value[searchIndex].title = title
  },
  loadFromLocalStorage() {
    const todolist = JSON.parse(localStorage.getItem(TODOS_IN_STORAGE_KEY))
    this.todos.value = todolist || [];
  },
  saveToLocalStorage() {
    localStorage.setItem(TODOS_IN_STORAGE_KEY, toString(this.todos.value))
  }
}

export {
  TodoList
}
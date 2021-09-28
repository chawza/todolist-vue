const generateId = () => Math.random().toString(36)

import { ref } from 'vue'

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
  }
}

export {
  TodoList
}
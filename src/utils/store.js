const generateId = () => Math.random().toString(36)

const TodoList = {
  todos : [],
  createTodo(title) {
    console.log('createTodo')
    this.todos.push({
      title: title,
      id: generateId(),
      isDone: false
    })
  },
  deleteTodo(id) {
    const indexToDelete = this.todos.findIndex(value => value === id)
    if (indexToDelete === -1) {
      console.warn(`cannot delete todo with id ${id}`);
    }
    this.todos = this.todos.splice(indexToDelete, 1);
  }
}

export {
  TodoList
}
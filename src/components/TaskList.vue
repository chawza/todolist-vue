<template>
  <div class="task-container">
    <input class="task-content input-field"
      type="text"
      v-model="taskData.title"
      placeholder="Task to do"
      :class="{'task-is-done': taskData.isDone}"
    >
    <div class="task-content" @click="handleToggleDone">
      <img :src="checkIcon">
    </div>
    <div class="task-content" @click="handleRemoveTask">
      <img :src="removeIcon">
    </div>
  </div>
  
</template>

<script>
import checkIcon from '../assets/check.svg'
import removeIcon from '../assets/remove.svg'
import { TodoList } from '../utils/store'

export default {
  props: {
    taskData: Object
  },
  setup(props) {
    const { taskData } = props;
    return {
      checkIcon,
      removeIcon,
      handleRemoveTask() {
        TodoList.deleteTodo(taskData.id)
      },
      handleToggleDone() {
        TodoList.toggleIsDone(taskData.id)
      }
    }
  }
}
</script>

<style>
.task-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-style: solid;
  border-radius: 6px;
  border-width: 1px;
  padding: 6px;
  gap:6px;
}

.task-content {
  height: 2em;
}

.task-content img {
  width: 2em;
  cursor: pointer;
}

.input-field {
  flex-grow: 1;
  border: none;
}

.input-field:focus {
  outline: none;;
}

.task-is-done {
  text-decoration: line-through;
}
</style>
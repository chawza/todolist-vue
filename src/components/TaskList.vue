<template>
  <div class="task-container">
    <input class="task-content input-field"
      type="text"
      v-model="title"
      placeholder="Task to do"
      :class="{'task-is-done': taskData.isDone}"
      @keyup.enter="handleUpdateTitle"
    >
    <div class="task-content" @click="handleToggleDone">
      <img v-if="taskData.isDone === true" :src="checkIcon">
      <img v-else :src="hollowCheckIcon">
    </div>
    <div class="task-content" @click="handleRemoveTask">
      <img :src="removeIcon">
    </div>
  </div>
  
</template>

<script>
import checkIcon from '../assets/check.svg'
import removeIcon from '../assets/remove.svg'
import hollowCheckIcon from '../assets/check-hollow.png'
import { TodoList } from '../utils/store'
import { ref } from 'vue'

export default {
  props: {
    taskData: Object,
  },
  setup(props) {
    const { taskData } = props;
    const tasktitle = ref(taskData.title)

    return {
      checkIcon,
      removeIcon,
      hollowCheckIcon,
      title: tasktitle,
      handleRemoveTask() {
        TodoList.deleteTodo(taskData.id)
      },
      handleToggleDone() {
        TodoList.toggleIsDone(taskData.id)
      },
      handleUpdateTitle() {
        TodoList.updateTodo(taskData.id, tasktitle.value)
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
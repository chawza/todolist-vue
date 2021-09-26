<template>
  <div class="task-container">
    <input class="task-content input-field"
      type="text"
      v-model="taskData.title"
      placeholder="Task to do"
    >
    <div class="task-content">
      <img :src="checkIcon">
    </div>
    <div class="task-content">
      <img :src="removeIcon">
    </div>
  </div>
  
</template>

<script>
import checkIcon from '../assets/check.svg'
import removeIcon from '../assets/remove.svg'

export default {
  props: {
    taskData: Object
  },
  setup() {
    return {
      checkIcon,
      removeIcon
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
}

.input-field {
  flex-grow: 1;
  border: none;
}

.input-field:focus {
  outline: none;;
}
</style>
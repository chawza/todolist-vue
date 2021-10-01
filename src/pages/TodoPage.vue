<template>
  <div class="page-container">
    <div class="content-area">
      <div class="task-board">
        <template v-if="todos.length > 0">
          <TaskList v-for="(todo, index) in todos" :key="index" :taskData="todo" />
        </template>
      </div>
      <div class="bottom-bar">
        <NewTaskInput />
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from '../components/TaskList.vue';
import NewTaskInput from '../components/NewTaskInput.vue';
import { TodoList } from '../utils/store';
import { onMounted } from '@vue/runtime-core';

export default {
  components : {
    TaskList,
    NewTaskInput
  },
  setup() {
    onMounted(() => {
      TodoList.loadFromLocalStorage()
    })
    return {
      todos: TodoList.todos,
    };
  }
}
</script>

<style>
.page-container {
  display: flex;
  justify-content: center;
}

.content-area {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50em;
  min-width: 30em;
  padding-top: 6em;
}

.task-board {
  display: flex;
  flex-direction: column;
  height: 80vh;
  gap: 12px;
  overflow-y: auto;
}

.task-board::-webkit-scrollbar {
  display: none;
}

.bottom-bar {
  position: sticky;
  margin-bottom: 1em;
}
</style>

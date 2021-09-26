<template>
  <div class="page-container">
    <div class="content-area">
      <!-- <div v-for="(todo, index) in todos" :key="index"> {{ todo.title }} {{todo.isDone}}</div> -->
      <div class="task-board" v-if="todos.length > 0">
        <TaskList v-for="(todo, index) in todos" :key="index" :taskData="todo" />
      </div>
      <div class="bottom-bar">
        <NewTaskInput />
      </div>
    </div>
  </div>
</template>

<script>
import  { ref } from 'vue';
import TaskList from '../components/TaskList.vue';
import NewTaskInput from '../components/NewTaskInput.vue';

const todos = ref([
  {title: 'Do this work', isDone: false},
  {title: 'Go make a coffee', isDone: false},
  {title: 'Learn Vue3', isDone: false},
  {title: 'Do this work', isDone: false},
  {title: 'Go make a coffee', isDone: false},
  {title: 'Learn Vue3', isDone: false},
  {title: 'Do this work', isDone: false},
  {title: 'Go make a coffee', isDone: false},
  {title: 'Learn Vue3', isDone: false},
  {title: 'Do this work', isDone: false},
])

export default {
  components : {
    TaskList,
    NewTaskInput
  },
  setup() {    
    return { todos };
  },
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
  margin-top: 1em;
}
</style>

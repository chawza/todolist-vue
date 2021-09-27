<template>
  <div class="task-container">
    <input
      class="task-content input-field center-input"
      placeholder="What do I do today?"
      v-model="inputField"
      @keyup.enter="handleNewTodo"
    >
  </div>
</template>

<script>
import { ref } from 'vue';
import { TodoList } from '../utils/store';

export default {
  setup() {
    const inputField = ref('')
    return {
      inputField,
      handleNewTodo: () => {
        TodoList.createTodo(inputField.value);
        inputField.value = ''
      }
    }
  }
}
</script>

<style scoped>

.center-input {
  text-align: center;
}

</style>
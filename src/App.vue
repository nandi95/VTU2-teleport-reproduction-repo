<template>
  <img alt="Vue logo" src="assets/logo.png" />
  <Modal ref="modal" />
  <button @click="$refs.modal.toggleVisibility()">toggle modal</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from './components/Modal.vue'

export default defineComponent({
  name: 'App',
  components: {
    Modal
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

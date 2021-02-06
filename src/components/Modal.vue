<template>
  <teleport to="body">
    <div v-if="isVisible" style="background: red; padding: 20px">
      Header
      <slot></slot>
    </div>
  </teleport>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  setup: () => {
    const isVisible = ref(false)
    const toggleVisibility = () => isVisible.value = !isVisible.value // expected to be toggled as $refs.ref.toggleVisibility()
    return { isVisible, toggleVisibility }
  }
})
</script>

<style>
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
}
</style>

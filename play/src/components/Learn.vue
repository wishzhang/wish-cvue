<script lang="ts" setup>
  import { ref } from 'vue'

  const state = {
    count: ref(0),
  }

  let b = state.count

  const increase = () => {
    b.value++
  }
</script>

<template>
  <button style="width: 200px" @click="increase">
    {{ state.count }}
  </button>
</template>

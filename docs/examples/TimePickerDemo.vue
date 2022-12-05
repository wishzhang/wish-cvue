<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref()
</script>

<template>
  <cvue-time-picker v-model="value"></cvue-time-picker>
</template>

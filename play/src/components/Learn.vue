<script lang="ts" setup>
  import {reactive, ref} from 'vue'

  const state = {
    count: ref(0)
  }

  let b = state.count

  const increase = () => {
    b.value++
  }

</script>

<template>
  <button @click="increase" style="width: 200px;">
    {{state.count}}
  </button>
</template>
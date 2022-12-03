<script lang="ts" setup>
import { reactive, ref } from 'vue'

const value = ref('')
</script>

<template>
  <cvue-date-picker v-model="value" />
</template>
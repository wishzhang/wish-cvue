<script lang="ts" setup>
import { reactive, ref } from 'vue'
import ContainerDemo from "./ContainerDemo.vue";

const value = ref('')
</script>

<template>
  <ContainerDemo>
    <cvue-date-picker v-model="value" />
  </ContainerDemo>
</template>
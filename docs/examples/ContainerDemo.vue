<script lang="ts" setup></script>

<template>
  <div class="container-demo">
    <slot />
  </div>
</template>

<style scoped>
  .container-demo {
    margin: 24px 0;
    padding: 24px;
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
  }
</style>
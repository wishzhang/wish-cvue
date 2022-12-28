<script lang="ts" setup></script>

<template>
  <ClientOnly>
    <div class="container-demo">
      <slot />
    </div>
  </ClientOnly>
</template>

<style scoped>
  .container-demo {
    margin: 24px 0;
    padding: 24px 20px;
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
  }
</style>

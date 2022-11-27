<script setup lang="ts">
  export interface CardProps {
    shadow?: 'always' | 'hover' | 'never'
  }

  const {shadow = 'never'} = defineProps<CardProps>()
</script>

<template>
  <el-card class="avue-card-box" v-bind="$attrs" :shadow="shadow">
    <template #header>
      <div class="avue-card-header">
        <div class="avue-card-header-left">
          <slot name="headerLeft"></slot>
        </div>
        <div class="avue-card-header-right">
          <slot name="headerRight"></slot>
        </div>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>


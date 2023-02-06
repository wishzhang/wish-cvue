<script setup lang="ts">
  interface CvueCardProps {
    shadow?: 'always' | 'hover' | 'never'
  }

  // defineOptions({
  //   name: 'CvueCard',
  // })
  let aa = $ref('hihi')
  const { shadow = 'never' } = defineProps<CvueCardProps>()
</script>

<template>
  <el-card class="cvue-card-box" v-bind="$attrs" :shadow="shadow">
    <template #header>
      <div>{{ aa }}</div>
      <div class="cvue-card-header">
        <div class="cvue-card-header-left">
          <slot name="headerLeft"></slot>
        </div>
        <div class="cvue-card-header-right">
          <slot name="headerRight"></slot>
        </div>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

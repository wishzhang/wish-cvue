<template>
  <el-button text @click="dialogVisible = true"> 点击打开弹窗</el-button>
  <cvue-dialog title="新增" v-model="dialogVisible" @confirm="handleConfirm">
    <div>item1</div>
    <div>item2</div>
    <div>item3</div>
    <div>item4</div>
    <div>item5</div>
  </cvue-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const dialogVisible = ref(false)
  const handleConfirm = ({ startLoading, stopLoading, done }) => {
    startLoading()
    setTimeout(() => {
      stopLoading()
      done()
    }, 2000)
  }
</script>

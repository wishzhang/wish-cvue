<template>
  <cvue-select
    v-model="value"
    :lazy-load="{
      request: handleLazyLoadRequest,
    }"
    :dic="dic"
    @change="handleChange"
  ></cvue-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  let value = ref()

  let i = 0

  async function fetchData(pageSize: number) {
    return new Array(pageSize).fill(0).map(() => {
      i++
      return {
        label: i + '',
        value: i,
      }
    })
  }

  function handleChange(val: number) {
    console.log(val)
  }

  function handleLazyLoadRequest(pageSize: number) {
    return new Promise((resolve) => {
      console.log('start load')
      setTimeout(async () => {
        let data = await fetchData(pageSize)
        resolve({
          total: 100,
          data: data,
        })
      }, 2000)
    })
  }
</script>

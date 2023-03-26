<template>
  <!--  <cvue-select-->
  <!--    :lazy-load="{-->
  <!--      request: handleLazyLoadRequest,-->
  <!--    }"-->
  <!--  ></cvue-select>-->
  <learn />
</template>

<script lang="ts" setup>
  // let i = 0
  //
  // let dataSource = new Array(1).fill(0).map(() => {
  //   i++
  //   return {
  //     label: i + '',
  //     value: i,
  //   }
  // })
  //
  // async function fetchData(params: any) {
  //   let searchData = dataSource
  //   if (params.filterValue) {
  //     searchData = dataSource.filter((el: any) =>
  //       el.label.includes(params.filterValue)
  //     )
  //   }
  //   let startIndex = (params.pageIndex - 1) * params.pageSize
  //   let data = searchData.slice(startIndex, startIndex + params.pageSize)
  //   return {
  //     data: data,
  //     total: searchData.length,
  //   }
  // }
  //
  // function handleLazyLoadRequest(params: any) {
  //   return new Promise((resolve) => {
  //     console.log('start load')
  //     setTimeout(async () => {
  //       let res = await fetchData(params)
  //       resolve({
  //         total: res.total,
  //         data: res.data,
  //       })
  //     }, 1000)
  //   })
  // }
  import Learn from '@root/play/src/components/Learn.vue'
</script>

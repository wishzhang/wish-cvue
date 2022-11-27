<script lang="ts" setup>
  import {reactive} from 'vue'

  let form = reactive({
    prop1: "",
    prop2: 1
  });

  let formColumns = reactive([
    {
      label: "姓名",
      prop: "prop1",
    },
    {
      label: '性别',
      prop: 'prop2',
      component: 'radio',
      dic: [
        {label: 'yes', value: 1},
        {label: 'no', value: 2},
      ],
    },
    {
      label: '水果',
      component: 'select',
      prop: 'prop3',
      dic: [
        {label: '苹果', value: 1},
        {label: '香蕉', value: 2},
        {label: '荔枝', value: 3},
      ]
    },
    {
      label: '时间',
      prop: 'prop4',
      component: 'date-picker',
    }
  ]);
</script>

<template>
  <CvueForm v-model="form" :columns="formColumns"></CvueForm>
</template>
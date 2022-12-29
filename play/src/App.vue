<!--<script lang="ts" setup>-->
<!--  import { reactive } from 'vue'-->

<!--  let form = reactive(null)-->

<!--  let formColumns = reactive([-->
<!--    {-->
<!--      label: '姓名',-->
<!--      prop: 'prop1',-->
<!--      component: 'input',-->
<!--      rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }],-->
<!--    },-->
<!--    {-->
<!--      label: '性别',-->
<!--      prop: 'prop2',-->
<!--      component: 'radio',-->
<!--      dic: [-->
<!--        { label: '男', value: 1 },-->
<!--        { label: '女', value: 2 },-->
<!--      ],-->
<!--    },-->
<!--    {-->
<!--      label: '水果',-->
<!--      component: 'select',-->
<!--      prop: 'prop3',-->
<!--      dic: [-->
<!--        { label: '苹果', value: 1 },-->
<!--        { label: '香蕉', value: 2 },-->
<!--        { label: '荔枝', value: 3 },-->
<!--      ],-->
<!--    },-->
<!--    {-->
<!--      label: '日期',-->
<!--      prop: 'prop4',-->
<!--      component: 'date-picker',-->
<!--    },-->
<!--    {-->
<!--      label: '时间',-->
<!--      prop: 'prop5',-->
<!--      component: 'time-picker',-->
<!--    },-->
<!--    {-->
<!--      label: '开关',-->
<!--      prop: 'prop6',-->
<!--      component: 'switch',-->
<!--    },-->
<!--    {-->
<!--      label: '蔬菜',-->
<!--      component: 'checkbox',-->
<!--      prop: 'prop7',-->
<!--      dic: [-->
<!--        { label: '白菜', value: 1 },-->
<!--        { label: '西红柿', value: 2 },-->
<!--        { label: '葱花', value: 3 },-->
<!--      ],-->
<!--    },-->
<!--    {-->
<!--      label: '文本框',-->
<!--      prop: 'prop8',-->
<!--      component: 'input',-->
<!--      type: 'textarea',-->
<!--    },-->
<!--  ])-->

<!--  const handleFinish = (value: any, done: any) => {-->
<!--    setTimeout(() => {-->
<!--      console.log(value)-->
<!--      done()-->
<!--    }, 2000)-->
<!--  }-->
<!--</script>-->

<!--<template>-->
<!--  <CvueForm :model="form" :columns="formColumns" :inline="false" @finish="handleFinish"></CvueForm>-->
<!--</template>-->
<script lang="ts" setup>
  import Demo from '@wele/docs/examples/table/fixed.vue'
</script>

<template>
  <Demo></Demo>
</template>

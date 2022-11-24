<template>
  <div>
    <!-- 单选按钮 -->
    <cvue-radio v-model="radio" :dic-data="radioDicData" size="small">
    </cvue-radio>

    <!-- 表单 -->
    <cvue-form v-model="form" :option="option" @submit="onSubmit"></cvue-form>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from "vue";
let radio = ref(null);
let radioDicData = [
  {
    label: "男",
    value: 1,
  },
  {
    label: "女",
    value: 2,
  },
];
let form = reactive({
  hi: "",
});
let option = reactive({
  columns: [
    {
      type: "input",
      prop: "hi",
      label: "姓名",
    },
  ],
});
const onSubmit = (form: any) => {
  console.log(form);
};

watch(radio, (newVal)=>{
  console.log(newVal)
})
</script>

<style>
</style>

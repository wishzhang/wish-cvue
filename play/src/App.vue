<template>
  <div>
    <!-- 单选按钮 -->
    <!--    <cvue-radio v-model="radio" :dic-data="radioDicData" size="small"></cvue-radio>-->

    <!-- 表单 -->
    <!--    <cvue-form v-model="form" :columns="formColumns"></cvue-form>-->

    <!--    表格-->
    <!--    <cvue-table :columns="columns" :data="data" :pagination="{position: 'right'}" @on-load="onLoad"></cvue-table>-->

    <!--    搜索-->
    <cvue-query-filter :columns="queryColumns" @search="handleSearch"/>
  </div>
</template>

<script setup lang="ts">
  import {reactive, ref, watch} from "vue";

  const dd = ref(null)

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
  //----------------------------------------
  let form = reactive({
    prop1: "",
    prop2: 1
  });
  let formColumns = reactive([
    {
      type: "input",
      prop: "prop1",
      label: "姓名",
      span: 12,
    },
    {
      type: 'cvue-radio',
      prop: 'prop2',
      label: '性别',
      dicData: [
        {label: 'yes', value: 1},
        {label: 'no', value: 2},
      ],
      hide: true
    }
  ]);

  watch(radio, (newVal) => {
    console.log(newVal)
  })

  //----------------------------------------
  const columns = reactive([{
    label: '标题1',
    prop: 'date'
  }, {
    label: '标题2',
    prop: 'name',
  }, {
    label: '标题3',
    prop: 'address',
  }])
  const data = reactive([
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州'
    }
  ])

  const onLoad = () => {
    console.log('onload')
  }

  //---------------------------------------
  const queryColumns = reactive(Array(6).fill(0).map((el, index) => ({label: 'label' + index, prop: 'prop' + index})))

  const handleSearch = (val: any) => {
    console.log(val)
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>

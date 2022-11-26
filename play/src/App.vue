<template>
  <div>
    <!-- 单选按钮 -->
    <!--    <cvue-radio v-model="radio" :dic-data="radioDicData" size="small"></cvue-radio>-->

    <!-- 表单 -->
    <!--    <cvue-form v-model="form" :columns="formColumns"></cvue-form>-->

    <!--表格-->
    <!--    <div style="width: calc(100% - 200px);">-->
    <!--      <cvue-table size="large" :operation="{width: 200}" :search="search" :columns="columns"-->
    <!--                  :data="data"-->
    <!--                  @row-add="handleRowAdd"-->
    <!--                  @on-load="onLoad"></cvue-table>-->
    <!--    </div>-->

    <!--    <cvue-checkbox v-model="checkboxValue"-->
    <!--                   :dic="[{label:'选项1', value: 1}, {label: '选项2', value: 2}]"></cvue-checkbox>-->


    <!--    <cvue-input-number-range v-model="inputNumberRangeValue"></cvue-input-number-range>-->

    <!--    <cvue-select v-model="selectValue" :dic="selectDic"></cvue-select>-->

    <el-button text @click="dialogVisible = true">
      click to open the Dialog
    </el-button>

    <cvue-dialog
        v-model="dialogVisible"
        title="Tips"
        @confirm="handleConfirm"
    >
      <template #header>dd</template>
    </cvue-dialog>

    <!--    搜索-->
    <!--    <cvue-query-filter :columns="queryColumns" @search="handleSearch"/>-->
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
    },
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州'
    },
    {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州'
    }, {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州'
    }, {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州'
    }, {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州'
    }, {
      date: '2022-12-12',
      name: 'wishzhang',
      address: '广州'
    },
  ])

  const onLoad = (val: Record<string, any>) => {
    console.log(val)
  }

  const handleRowAdd = () => {
    console.log('handleRowAdd')
  }

  const search = reactive({
    columns: [
      {
        label: '什么鬼的a',
        prop: 'prop1'
      },
      {
        label: 'label2',
        prop: 'prop2'
      },
      {
        label: 'label3',
        prop: 'prop3'
      },
      {
        label: 'label4',
        prop: 'prop4'
      },
      {
        label: 'label5',
        prop: 'prop5'
      }
    ]
  })

  //---------------------------------------
  const queryColumns = reactive(Array(6).fill(0).map((el, index) => ({label: 'label' + index, prop: 'prop' + index})))

  const handleSearch = (val: any) => {
    console.log(val)
  }

  //----------------------------------------
  const checkboxValue = reactive([])

  //----------------------------------------
  const inputNumberRangeValue = reactive([1])

  //----------------------------------------
  const selectValue = ref('')
  const selectDic = ref([{
    value: 'Option1',
    label: 'Option1',
  },
    {
      value: 'Option2',
      label: 'Option2',
    }])
  //-------------------------------------------
  let dialogVisible = ref(false)
  const handleConfirm = ({startLoading, stopLoading, done}) => {
    startLoading()
    setTimeout(() => {
      stopLoading()
      done()
    }, 2000)
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #eee;
  }
</style>

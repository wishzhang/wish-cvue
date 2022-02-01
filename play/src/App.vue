<template>
  <div>
    <!-- 单选按钮 -->
    <cvue-radio v-model="radio" :dic-data="radioDicData">
      <template v-slot="slotProps">
        {{ slotProps.item.label }}
      </template>
    </cvue-radio>

    <!-- 表单 -->
    <cvue-form v-model="form" :option="option" @submit="onSubmit"></cvue-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
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
    const onSubmit = (form) => {
      console.log(form);
    };
    return {
      option,
      form,
      onSubmit,

      radio,
      radioDicData,
    };
  },
});
</script>

<style>
</style>

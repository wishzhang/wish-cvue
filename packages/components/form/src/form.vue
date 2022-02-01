<template>
  <div>
    <el-form :model="form" label-width="120px" @submit="handleSubmit">
      <template v-for="(item, index) in columns" :key="index">
        <el-form-item :label="item.label">
          <component v-bind:is="$cvue._getOptionType(item.type)"></component>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { formProps, formEmits } from "./form";

export default defineComponent({
  name: "CvueForm",
  model: {
    prop: "value",
    event: "change",
  },
  props: formProps,
  emits: formEmits,
  setup(props, { emit }) {
    let columns = JSON.parse(JSON.stringify(props.option.columns));

    let form = {};
    for (let column of columns) {
      form[column.prop] = undefined;
    }

    form = reactive(form);

    const handleSubmit = (evt: MouseEvent) => {
      emit("submit", form);
    };

    return {
      columns,
      form,
      handleSubmit,
    };
  },
});
</script>

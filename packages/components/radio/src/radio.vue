<template>
  <el-radio-group v-model="theValue">
    <template v-for="(item, index) in dicData" :key="index">
      <template v-if="button">
        <el-radio-button
          :size="size"
          :label="item.value"
          :disabled="disabled"
          :border="border"
        >
          <!-- 按钮模板 -->
          <template v-if="$slots.default">
            <slot
              :item="item"
              :size="size"
              :disabled="disabled"
              :value="theValue"
            ></slot>
          </template>
          <template v-else>
            {{ item.label }}
          </template>
        </el-radio-button>
      </template>

      <template v-else>
        <el-radio
          :size="size"
          :label="item.value"
          :disabled="disabled"
          :border="border"
        >
          <!-- 按钮模板 -->
          <template v-if="$slots.default">
            <slot
              :item="item"
              :size="size"
              :disabled="disabled"
              :value="theValue"
            ></slot>
          </template>
          <template v-else>
            {{ item.label }}
          </template>
        </el-radio>
      </template>
    </template>
  </el-radio-group>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { radioProps, radioEmits } from "./radio";

export default defineComponent({
  name: "CvueRadio",
  model: {
    prop: "value",
    event: "change",
  },
  props: radioProps,
  emits: radioEmits,
  setup(props, { emit }) {
    let theValue = ref(null);

    watch(theValue, () => {
      emit("change", theValue);
    });

    return {
      theValue: theValue,
    };
  },
});
</script>

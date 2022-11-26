<script setup lang="ts">
  import {reactive, ref, watch, watchEffect} from "vue";

  interface RadioProps {
    size?: String
    modelValue?: Number
    dic?: Array<Record<string, any>>
  }

  interface RadioEmits {
    (e: 'update:modelValue', value: RadioProps['modelValue']): void
  }

  const {modelValue, dic = [], ...rest} = defineProps<RadioProps>();
  const restProps = reactive(rest)
  const emit = defineEmits<RadioEmits>();

  const innerValue = ref(modelValue);
  watch(innerValue, val => {
    emit("update:modelValue", val);
  });
</script>

<template>
  <el-radio-group v-bind="$attrs" v-model="innerValue">
    <template v-for="(item, index) in dic">
      <el-radio
          v-bind="restProps"
          :label="item?.value">
        {{ item?.label }}
      </el-radio>
    </template>
  </el-radio-group>
</template>


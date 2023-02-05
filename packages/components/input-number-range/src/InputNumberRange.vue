<script setup lang="ts">
  import { ref, watchEffect } from 'vue'

  export interface InputNumberRangeProps {
    controls?: boolean
    modelValue?: Array<number | undefined>
  }

  interface InputNumberRangeEmits {
    (e: 'update:modelValue', value: InputNumberRangeProps['modelValue']): void
    (e: 'change', value: InputNumberRangeProps['modelValue']): void
  }

  defineOptions({
    name: 'CvueInputNumberRange',
  })

  const { modelValue = [undefined, undefined], controls = false } =
    defineProps<InputNumberRangeProps>()
  const emit = defineEmits<InputNumberRangeEmits>()

  const leftValue = ref(modelValue[0])
  const rightValue = ref(modelValue[1])

  const getValue = () => {
    return [leftValue.value ?? undefined, rightValue.value ?? undefined]
  }

  watchEffect(() => {
    emit('update:modelValue', getValue())
  })

  const handleLeftChange = () => {
    emit('change', getValue())
  }

  const handleRightChange = () => {
    emit('change', getValue())
  }

  const controlsPosition = 'right'
  const styleWidth = '90px'
</script>

<template>
  <div class="avue-input-number-range-box">
    <el-input-number
      v-bind="$attrs"
      v-model="leftValue"
      :style="{ width: styleWidth }"
      :controls="controls"
      :controls-position="controlsPosition"
      @change="handleLeftChange"
    />
    <span class="avue-input-number-range-split"></span>
    <el-input-number
      v-bind="$attrs"
      v-model="rightValue"
      :style="{ width: styleWidth }"
      :controls="controls"
      :controls-position="controlsPosition"
      @change="handleRightChange"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  interface CvueDialogProps {
    modelValue?: any
    destroyOnClose?: boolean
  }

  interface CvueDialogEmits {
    (e: 'update:modelValue', val: CvueDialogProps['modelValue']): void
    (e: 'confirm', val: any): void
    (e: 'cancel'): void
    (e: 'close'): void
  }

  defineOptions({
    name: 'CvueDialog',
  })

  const { modelValue, destroyOnClose = true } = defineProps<CvueDialogProps>()
  const emit = defineEmits<CvueDialogEmits>()

  let innerModelValue = ref(modelValue)

  const confirmLoading = ref(false)

  const handleConfirm = () => {
    emit('confirm', {
      startLoading: () => {
        confirmLoading.value = true
      },
      stopLoading: () => {
        confirmLoading.value = false
      },
      done: () => {
        confirmLoading.value = false
        closeDialog()
      },
    })
  }

  const handleCancel = () => {
    closeDialog()
  }

  const handleClose = () => {
    closeDialog()
    emit('close')
  }

  function closeDialog() {
    innerModelValue.value = false
    emit('update:modelValue', false)
  }
</script>

<template>
  <el-dialog
    v-bind="$attrs"
    v-model="innerModelValue"
    class="avue-dialog-box"
    :destroy-on-close="destroyOnClose"
    @close="handleClose"
  >
    <slot></slot>
    <template #footer>
      <slot name="footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" :loading="confirmLoading" @click="handleConfirm">确定 </el-button>
      </slot>
    </template>
    <template #header="scope">
      <slot name="header" v-bind="scope"></slot>
    </template>
  </el-dialog>
</template>

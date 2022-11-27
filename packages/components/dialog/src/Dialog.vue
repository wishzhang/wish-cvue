<script setup lang="ts">
  import { ref } from 'vue'

  interface DialogConfirm {
    startLoading: () => void
    stopLoading: () => void
    done: () => void
  }

  interface DialogProps {
    modelValue?: any
    destroyOnClose?: boolean
  }

  interface DialogEmits {
    (e: 'update:modelValue', val: DialogProps['modelValue']): void
    (e: 'confirm', val: DialogConfirm): void
    (e: 'cancel'): void
    (e: 'close'): void
  }

  let a = 'd'

  const { modelValue = false, destroyOnClose = true } =
    defineProps<DialogProps>()
  const emit = defineEmits<DialogEmits>()

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
        emit('update:modelValue', false)
      },
    })
  }

  const handleCancel = () => {
    emit('update:modelValue', false)
  }

  const handleClose = () => {
    emit('update:modelValue', false)
    emit('close')
  }
</script>

<template>
  <el-dialog
    v-bind="$attrs"
    v-model="modelValue"
    class="avue-dialog-box"
    :destroy-on-close="destroyOnClose"
    @close="handleClose"
  >
    <slot></slot>
    <template #footer>
      <slot name="footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button
          type="primary"
          :loading="confirmLoading"
          @click="handleConfirm"
          >确定
        </el-button>
      </slot>
    </template>
    <template #header="scope">
      <slot name="header" v-bind="scope"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import {reactive, ref, watch, watchEffect} from "vue";

  interface RadioProps {
    size?: String
    dic?: Array<Record<string, any>>
  }

  interface RadioEmits {
  }

  const {dic = []} = defineProps<RadioProps>();
  const emit = defineEmits<RadioEmits>();
</script>

<template>
  <el-radio-group v-bind="$attrs">
    <template v-for="(item, index) in dic">
      <el-radio
          :label="item?.value">
        {{ item?.label }}
      </el-radio>
    </template>
  </el-radio-group>
</template>


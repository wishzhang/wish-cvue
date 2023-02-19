<script setup lang="ts">
  import { useEventListener } from '@vueuse/core'
  import { computed, ref, nextTick, onMounted, reactive, watch } from 'vue'
  import { merge } from 'lodash-es'

  type CvueSelectValue = string | number | undefined

  interface CvueSelectItem {
    label: string
    value: CvueSelectValue
  }

  interface LazyLoad {
    initialItem?: CvueSelectItem
    pageSize?: number
    request: (pageSize: number) => Promise<{
      data: CvueSelectItem[]
      total: number
    }>
  }

  export interface CvueSelectProps {
    modalValue: CvueSelectValue
    placeholder?: string
    clearable?: boolean
    dic?: Array<object>
    lazyLoad?: LazyLoad
  }

  export interface CvueSelectEmits {
    (e: 'update:modalValue', value: CvueSelectValue): void
  }

  enum LoadStatus {
    PROGRESS = 1,
    SUCCESS = 2,
    FAIL = 3,
  }

  defineOptions({
    name: 'CvueSelect',
  })

  const {
    modalValue,
    lazyLoad,
    placeholder = '请选择',
    clearable = true,
    dic = [],
  } = defineProps<CvueSelectProps>()
  const emit = defineEmits<CvueSelectEmits>()

  const innerLazyLoad: LazyLoad = reactive(
    merge(
      {
        pageSize: 20,
        initialItem: {},
      },
      lazyLoad
    )
  )

  let innerModalValue = ref(modalValue)
  let innerDic = ref(dic)
  let total = 0
  let loadStatus = ref()

  if (lazyLoad) {
    innerModalValue.value = innerLazyLoad.initialItem.value ?? undefined
    innerDic.value = innerLazyLoad.initialItem.value ? [innerLazyLoad.initialItem] : []
  }

  let bottomText = computed(() => {
    const map = {
      [LoadStatus.PROGRESS]: '加载中',
      [LoadStatus.FAIL]: '加载失败',
    }
    return map[loadStatus.value]
  })

  let vLazyLoad = {
    mounted(el) {
      const selectWrap = el.closest('.el-select-dropdown .el-select-dropdown__wrap')
      useEventListener(selectWrap, 'scroll', async (e) => {
        if (
          hasReachBottom(e.target) &&
          innerDic.value.length !== 0 &&
          innerDic.value.length < total
        ) {
          handleLoad()
        }
      })
    },
  }

  function hasReachBottom(el) {
    const tolerance = 10
    let bottomDistance = el.scrollHeight - el.clientHeight - el.scrollTop - tolerance
    if (bottomDistance <= 0) {
      return true
    }
    return false
  }

  let lockFlag = false

  async function handleLoad() {
    if (!innerLazyLoad || lockFlag) return

    lockFlag = true
    loadStatus.value = LoadStatus.PROGRESS
    try {
      let { data, total: tot } = await innerLazyLoad.request(innerLazyLoad.pageSize)
      innerDic.value.push(...data)
      total = tot
      loadStatus.value = LoadStatus.SUCCESS
    } catch {
      loadStatus.value = LoadStatus.FAIL
    } finally {
      nextTick(() => {
        lockFlag = false
      })
    }
  }

  onMounted(() => {
    handleLoad()
  })

  watch(innerModalValue, () => {
    emit('update:modalValue', innerModalValue.value)
  })
</script>

<template>
  <el-select v-model="innerModalValue" :placeholder="placeholder" :clearable="clearable">
    <div style="visibility: hidden" v-lazy-load></div>
    <el-option v-for="item in innerDic" :key="item.value" :label="item.label" :value="item.value" />
    <div class="cvue-select-dropdown-bottom">
      <el-icon v-if="loadStatus === LoadStatus.PROGRESS" class="is-loading">
        <Loading />
      </el-icon>
      <span class="cvue-select-dropdown-bottom-text">
        {{ bottomText }}
      </span>
    </div>
  </el-select>
</template>

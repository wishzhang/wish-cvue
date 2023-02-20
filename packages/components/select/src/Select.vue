<script setup lang="ts">
  import { useEventListener, watchDebounced } from '@vueuse/core'
  import { computed, ref, nextTick, onMounted, reactive, watch } from 'vue'
  import { merge } from 'lodash-es'

  type CvueSelectValue = string | number | undefined

  export interface CvueSelectItem {
    label: string
    value: CvueSelectValue
  }

  interface CvueSelectLazyLoad {
    initialItem?: CvueSelectItem
    pageSize?: number
    request: (params: {
      pageIndex: number
      pageSize: number
      filterValue: string
    }) => Promise<{
      data: CvueSelectItem[]
      total: number
    }>
  }

  interface CvueSelectProps {
    filterable?: boolean
    filterMethod?: (value: CvueSelectValue) => void
    modalValue?: CvueSelectValue
    placeholder?: string
    clearable?: boolean
    dic?: Array<object>
    lazyLoad?: CvueSelectLazyLoad
  }

  interface CvueSelectEmits {
    (e: 'update:modalValue', value: CvueSelectValue): void
  }

  const CvueSelectLoadStatus = {
    PROGRESS: 1,
    SUCCESS: 2,
    FAIL: 3,
  }

  defineOptions({
    name: 'CvueSelect',
  })

  const {
    filterable = false,
    filterMethod,
    modalValue,
    lazyLoad,
    placeholder = '请选择',
    clearable = true,
    dic = [],
  } = defineProps<CvueSelectProps>()
  const emit = defineEmits<CvueSelectEmits>()

  const innerLazyLoad = reactive(
    merge(
      {
        pageSize: 100,
        initialItem: {},
      },
      lazyLoad
    )
  )

  let innerModalValue = ref(modalValue)
  let innerDic = ref(dic)
  let innerFilterable = ref(filterable)
  let pageIndex = ref(1)
  let filterValue = ref('')
  let total = 0
  let loadStatus = ref()
  let lockFlag = false

  if (lazyLoad) {
    innerModalValue.value = innerLazyLoad.initialItem.value ?? undefined
    innerDic.value = innerLazyLoad.initialItem.value
      ? [innerLazyLoad.initialItem]
      : []
    innerFilterable.value = true
  }

  let bottomText = computed(() => {
    const map = {
      [CvueSelectLoadStatus.PROGRESS]: '加载中',
      [CvueSelectLoadStatus.FAIL]: '加载失败',
    }
    return map[loadStatus.value]
  })

  let vLazyLoad = {
    mounted(el) {
      const selectWrap = el.closest(
        '.el-select-dropdown .el-select-dropdown__wrap'
      )
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
    let bottomDistance =
      el.scrollHeight - el.clientHeight - el.scrollTop - tolerance
    if (bottomDistance <= 1000) {
      return true
    }
    return false
  }

  async function handleLoad() {
    if (!innerLazyLoad || lockFlag) return

    lockFlag = true
    loadStatus.value = CvueSelectLoadStatus.PROGRESS
    try {
      let { data, total: tot } = await innerLazyLoad.request({
        pageIndex: pageIndex.value,
        pageSize: innerLazyLoad.pageSize,
        filterValue: filterValue.value,
      })
      innerDic.value.push(...data)
      pageIndex.value++
      total = tot
      loadStatus.value = CvueSelectLoadStatus.SUCCESS
    } catch {
      loadStatus.value = CvueSelectLoadStatus.FAIL
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

  function handleFilterMethod(value) {
    if (lazyLoad) {
      if (filterValue.value !== value) {
        filterValue.value = value
      }
    } else {
      filterMethod(value)
    }
  }

  watchDebounced(
    filterValue,
    () => {
      lockFlag = false
      pageIndex.value = 1
      total = 0
      innerDic.value.length = 0
      handleLoad()
    },
    { debounce: 1000 }
  )
</script>

<template>
  <el-select
    class="cvue-select"
    v-model="innerModalValue"
    :placeholder="placeholder"
    :clearable="clearable"
    :filterable="innerFilterable"
    :filter-method="handleFilterMethod"
  >
    <div style="visibility: hidden" v-lazy-load></div>
    <el-option
      v-for="item in innerDic"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
    <div class="cvue-select-dropdown-bottom">
      <el-icon
        v-if="loadStatus === CvueSelectLoadStatus.PROGRESS"
        class="is-loading"
      >
        <Loading />
      </el-icon>
      <span class="cvue-select-dropdown-bottom-text">
        {{ bottomText }}
      </span>
    </div>
  </el-select>
</template>

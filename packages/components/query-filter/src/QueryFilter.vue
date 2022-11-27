<script lang="ts" setup>
  import Form, { FormProps, formItemHide } from '@cvue/components/form'
  import { reactive, ref, watchEffect, watch, computed } from 'vue'
  import { ArrowDown } from '@element-plus/icons-vue'
  import { cloneDeep } from 'lodash-es'

  export interface QueryFilterProps {
    defaultColsNumber?: number
    columns: FormProps['columns']
  }

  export interface QueryFilterEmits {
    (e: 'search', val: any): void
  }

  const { columns = [], defaultColsNumber = 0 } =
    defineProps<QueryFilterProps>()
  const emit = defineEmits<QueryFilterEmits>()

  let innerColumns = reactive(cloneDeep(columns))
  let form = reactive({})
  const collapse = ref(true)
  const appendSpan = ref(6)

  const firstRowSpans = computed(() => {
    let spanSum = 0
    let num = 0
    for (let i = 0; i < innerColumns.length; i++) {
      if (spanSum >= 24 - appendSpan.value) {
        break
      }
      num++
      spanSum += innerColumns[i].span ?? 6
    }
    return num
  })

  const showNum = computed(() => {
    if (collapse.value) {
      if (defaultColsNumber <= 0 || !defaultColsNumber) {
        return firstRowSpans.value
      } else {
        return defaultColsNumber
      }
    } else {
      return innerColumns.length
    }
  })

  const showCollapseButton = computed(() => {
    if (innerColumns.length <= firstRowSpans.value) {
      return false
    }
    return true
  })

  const init = () => {
    updateView()
  }

  const updateView = () => {
    innerColumns = innerColumns.map((el, index) => {
      el.class = el?.class ?? ''
      if (index < showNum.value) {
        el.hide = false
      } else {
        el.hide = true
      }
      return el
    })
  }

  init()

  // update the location of button in append slot
  const offsetSpan = ref(0)
  watchEffect(() => {
    let columns = innerColumns.slice(0, showNum.value)
    let spanSum = columns.reduce((total, el) => {
      el.span = el.span ?? 6
      return total + el.span
    }, 0)
    let restSpan = 24 - (spanSum % 24)
    offsetSpan.value = restSpan - appendSpan.value
    if (offsetSpan.value < 0) {
      offsetSpan.value = 24 - appendSpan.value
    }

    updateView()
  })

  // search
  const handleSearch = () => {
    emit('search', form)
  }
</script>

<template>
  <div class="cvue-query-filter">
    <Form v-model="form" :columns="innerColumns" :show-operation="false">
      <template #append>
        <el-col :offset="offsetSpan" :span="appendSpan">
          <div class="cvue-query-filter-append-box">
            <el-button type="primary" @click="handleSearch">查询</el-button>
            <span
              v-if="showCollapseButton"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--el-color-primary);
                cursor: pointer;
                margin-left: 16px;
              "
              @click="collapse = !collapse"
            >
              <span style="font-size: 15px">{{
                collapse ? '展开' : '收起'
              }}</span>
              <i
                :style="{
                  transform: collapse ? 'rotate(0)' : 'rotate(180deg)',
                }"
                class="iconfont icon-chevron-down"
                style="font-size: 20px; font-weight: 400; transition: all 200ms"
              />
            </span>
          </div>
        </el-col>
      </template>
    </Form>
  </div>
</template>

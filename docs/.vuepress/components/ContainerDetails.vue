<script lang="ts" setup>
  import { ref ,useSlots} from 'vue'
  import useClipboard from "vue-clipboard3/dist/esm/index.js";
  import $ from 'jquery/dist/jquery.js'
  import { ElMessage } from 'element-plus'

  const { toClipboard } = useClipboard();
  let visible = ref(false)
  const slots = useSlots()
  const copy = async (text) => {
    try {
      await toClipboard(text);  //实现复制
      ElMessage.success('复制成功')
    } catch (e) {
      console.error(e);
    }
  };

  function handleVisible() {
    visible.value = !visible.value
  }

  function handleCopy(e) {
    const target = e.target;
    if(target) {
      const context = target.parentNode.parentNode.parentNode
      const codeEl = context.querySelector('code')
      const codeHtml = $(codeEl).text()
      copy(codeHtml)
    }
  }
</script>

<template>
  <div class="my-code-container">
    <div class="my-code-container-operation" :class="{invisible: !visible}" @click="handleVisible">
      <el-icon @click.stop="handleCopy">
        <CopyDocument />
      </el-icon>
      <el-icon>
        <View />
      </el-icon>
    </div>
    <div v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .my-code-container {
    position: relative;
    z-index: 999999;
    .language-vue {
      margin-top: 0 !important;
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }

    .my-code-container-operation {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-left: 1px solid var(--el-border-color);
      border-right: 1px solid var(--el-border-color);
      border-bottom: 1px solid var(--el-border-color);

      height: 40px;
      padding: 0 12px;

      .el-icon {
        cursor: pointer;
        margin-left: 16px;

        &:hover {
          color: #1c1d1f;
        }
      }

      &.invisible {
        border-bottom: 1px solid var(--el-border-color) !important;
        border-bottom-left-radius: var(--el-border-radius-base);
        border-bottom-right-radius: var(--el-border-radius-base);
      }
    }
  }
</style>


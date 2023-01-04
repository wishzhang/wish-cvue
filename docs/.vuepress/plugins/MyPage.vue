<script setup lang="ts">
  import PageMeta from '@theme/PageMeta.vue'
  import PageNav from '@theme/PageNav.vue'
  import { usePageData } from '@vuepress/client'
  import { computed, ref, onMounted, watch } from 'vue'
  import { useRoute, onBeforeRouteUpdate } from 'vue-router'

  const page = usePageData()

  let activeHash = ref('')
  if(!__VUEPRESS_SSR__) {
    onBeforeRouteUpdate((to) => {
      activeHash.value = to.hash
    })
  }

  function getActiveClass(hash) {
    return activeHash.value === hash ? 'active' : ''
  }
</script>

<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <slot name="content-top" />

      <div class="my-content">
        <Content />
        <div class="my-outline">
          <div v-for="(item, index) in page.headers" :key="index">
            <a :class="getActiveClass(item.link)" :href="item.link">{{
                item.title
            }}</a>
          </div>
        </div>
      </div>
      <slot name="content-bottom" />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>

<style lang="scss">
  .page .theme-default-content,
  .page-meta {
    max-width: calc(100% - 200px) !important;
    margin: 0 !important;
    box-sizing: border-box;
    padding: 0rem 4rem !important;
  }

  .my-content {
    position: relative;

    .my-outline {
      position: fixed;
      right: 0;
      width: 200px;
      top: 80px;
      z-index: 1000;

      a {
        display: inline-block;
        color: var(--c-text);
        font-size: 14px;
        padding: 5px 0;
        text-decoration: none !important;

        &.active {
          color: var(--c-brand) !important;
          font-weight: bold;
          text-decoration: none !important;
          outline: 0;
        }
      }
    }
  }
</style>
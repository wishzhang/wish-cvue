import { describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from '../src/Select.vue'
import { nextTick } from 'vue'

describe('select.vue', () => {
  describe('basic', () => {
    test('create', () => {
      const wrapper = mount(Select, {})
      expect(wrapper.find('.cvue-select').exists()).toBe(true)
    })
  })

  describe('lazy load', () => {
    beforeAll(() => {
      document.body.innerHTML = `
        <div id="app"></div>
      `
    })

    test('init data', async () => {
      const label = `lazy load init data`
      mount(Select, {
        props: {
          lazyLoad: {
            request: () => {
              return Promise.resolve({
                total: 1,
                data: [{ label: label, value: 1 }],
              })
            },
          },
        },
        attachTo: document.getElementById('app'),
      })
      await nextTick()
      await nextTick()
      expect(
        document.body.querySelector(`.el-select-dropdown__item span`).innerHTML
      ).toBe(label)
    })
  })
})

import { mount } from '@vue/test-utils'
import Card from '../src/Card.vue'
import ElementUI from 'element-plus'
import { describe, test } from 'vitest'

describe('Card.vue', () => {
  test('create', () => {
    const wrapper = mount(Card, {
      global: {
        plugins: [ElementUI],
      },
    })
    expect(wrapper.find('.cvue-card-box').exists()).toBe(true)
  })
})

import { mount } from '@vue/test-utils'
import Card from '../src/Card.vue'
import { describe, test } from 'vitest'

describe('Card.vue', () => {
  test('create', () => {
    const wrapper = mount(Card)
    expect(wrapper.find('.cvue-card-box').exists()).toBe(true)
  })
})

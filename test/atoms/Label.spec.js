import { mount } from '@vue/test-utils'
import Label from '@/components/atoms/Label.vue'

describe('Label', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Label)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

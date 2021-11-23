import Button from '../button.vue'
import { mount } from '@vue/test-utils'

const TEXT = 'This is the button test'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.classes()).toContain('v-button--primary')
  })
  it('render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: TEXT,
      }
    })
    expect(wrapper.text()).toEqual(TEXT)
  })
})
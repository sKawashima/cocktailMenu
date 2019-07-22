import { storiesOf } from '@storybook/vue'
import Label from '../../components/atoms/Label.vue'
import Input from '../../components/atoms/Input.vue'

storiesOf('atoms/Label', module)
  .add('simple', () => ({
    components: {
      Label
    },
    template: `<Label>カクテル名</Label>`
  }))

storiesOf('atoms/Input', module)
  .add('simple', () => ({
    components: {
      Input
    },
    template: `<Input />`
  }))

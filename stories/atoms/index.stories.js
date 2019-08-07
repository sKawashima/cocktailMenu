import { storiesOf } from '@storybook/vue'
import Label from '../../components/atoms/Label.vue'
import Input from '../../components/atoms/Input.vue'
import SelectBox from '../../components/atoms/SelectBox.vue'

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

storiesOf('atoms/SelectBox', module)
  .add('simple', () => ({
    components: {
      SelectBox
    },
    template: `<SelectBox v-bind:choices='["1st", "2nd", "3rd"]'/>`
  }))

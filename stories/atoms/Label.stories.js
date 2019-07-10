import { storiesOf } from '@storybook/vue'
import Label from '../../components/atoms/Label.vue'

storiesOf('atoms/Label', module)
  .add('simple', () => ({
    components: {
      Label
    },
    template: `<Label text='カクテル名' />`
  }))

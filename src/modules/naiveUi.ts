import {
  NAvatar,
  NDivider,
  NGradientText,
  NImage,
  NResult,
  create,
} from 'naive-ui'
import type { UserModule } from '~/types'

const naive = create({
  components: [NAvatar, NImage, NResult, NGradientText, NDivider],
})

export const install: UserModule = ({ use }) => {
  use(naive)
}

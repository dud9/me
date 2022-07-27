import {
  NAvatar,
  NDivider,
  NGradientText,
  NImage,
  NPopselect,
  NProgress,
  NResult,
  NSwitch,
  NTag,
  NText,
  NTimeline,
  NTimelineItem,
  create,
} from 'naive-ui'
import type { UserModule } from '~/types'

const naive = create({
  components: [
    NAvatar,
    NImage,
    NResult,
    NPopselect,
    NProgress,
    NGradientText,
    NDivider,
    NSwitch,
    NText,
    NTag,
    NTimeline,
    NTimelineItem,
  ],
})

export const install: UserModule = ({ use }) => {
  use(naive)
}

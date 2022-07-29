import {
  NAvatar,
  NDivider,
  NGradientText,
  NImage,
  NPopover,
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
    NPopover,
  ],
})

export const install: UserModule = ({ use }) => {
  use(naive)
}

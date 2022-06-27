import { NAvatar, NImage } from 'naive-ui'
import avatarDefaultImage from '~/assets/avatar2.jpg'

export function useImageNote({
  title = '',
  description = '',
  imageSrc = '',
  metaDate = dayJs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  avatar = avatarDefaultImage,
  hasLeaveMessage = false,
  leaveMessage = 'Thank U~',
  onClose = () => {},
}) {
  const { message, notification } = useGlobalNaiveApi()
  return notification.create({
    title,
    description,
    content: () =>
      h(NImage, {
        src: imageSrc,
      }),
    meta: metaDate,
    avatar: () =>
      h(NAvatar, {
        size: 'small',
        round: true,
        src: avatar,
      }),
    onAfterLeave: () => {
      if (hasLeaveMessage)
        message.success(leaveMessage)
    },
    onClose,
  })
}


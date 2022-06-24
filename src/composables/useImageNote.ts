import { NAvatar, NImage } from 'naive-ui'

export function useImageNote({
  title = '',
  description = '',
  imageSrc = 'src/assets/avatar.jpg',
  // fallbackSrc = '',
  metaDate = dayJs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  avatar = 'src/assets/avatar.jpg',
  hasLeaveMessage = false,
  leaveMessage = 'Thank U~',
}) {
  const { message, notification } = useGlobalNaiveApi()
  notification.create({
    title,
    description,
    content: () =>
      h(NImage, {
        // width: '100%',
        src: imageSrc,
        // fallbackSrc,
        // lazy: true,
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
  })
}


import { NAvatar, NImage, useMessage, useNotification } from 'naive-ui'

export function showImageNote({
  title = '',
  description = '',
  imageSrc = '',
  fallbackSrc = '',
  metaDate = dayJs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
  avatar = '~/assets/avatar.jpg',
  leaveMessage = 'Thank U~',
}) {
  const message = useMessage()
  const notification = useNotification()
  notification.create({
    title,
    description,
    content: () =>
      h(NImage, {
        width: '100%',
        src: imageSrc,
        fallbackSrc,
        lazy: true,
      }),
    meta: metaDate,
    avatar: () =>
      h(NAvatar, {
        size: 'small',
        round: true,
        src: avatar,
      }),
    onAfterLeave: () => {
      message.success(leaveMessage)
    },
  })
}


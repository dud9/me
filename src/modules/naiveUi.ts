import {
  NAvatar,
  NImage,
  NResult,
  create,
} from 'naive-ui'

const naive = create({
  components: [NAvatar, NImage, NResult],
})

export default {
  install(app: any) {
    app.use(naive)
  },
}

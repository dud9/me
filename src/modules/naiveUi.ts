import {
  NAvatar,
  NImage,
  create,
} from 'naive-ui'

const naive = create({
  components: [NAvatar, NImage],
})

export default {
  install(app: any) {
    app.use(naive)
  },
}

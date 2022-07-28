---

---

<script setup lang="ts">
import avatar from '~/assets/avatar.jpg' 
</script>
<style scoped>
.typing-words {
  font: bold 150% Consolas, Monaco, monospace;
  width: 20ch;
  white-space: nowrap;
  margin: 0;
  overflow: hidden;
  animation: typing 2.3s steps(20, end);
}

@keyframes typing {
  from {
    width: 0;
  }
}
</style>

<div flex gap-x-8 lt-sm="flex-col gap-y-4" items-center>
  <img :src="avatar" rounded-full class="!w-160px !h-160px">
  <div flex="~ col" lt-sm="!mt-[-40px] items-center">
    <span text-42px font-bold>Duende</span>
    <span class="typing-words">
      Welcome2 my harbor!
    </span>
    <n-gradient-text :size="16" type="success">
      I'm just infected with a disease called curiosity.
    </n-gradient-text>
    <span flex-inline items-center >
      <div i-twemoji-flag-china /> <n-divider vertical />
      NanJing <n-divider vertical />
      <div i-twemoji-keycap-2 mr-1 /> <div i-twemoji-keycap-3 /> <n-divider vertical />
      <div i-noto-v1-man-facepalming-light-skin-tone /> <n-divider vertical />
      <span flex-inline items-center>
        Good at C&V <div i-twemoji-face-savoring-food ml-2 />
      </span>
    </span>
    <div flex items-center text-16px>
      <div i-twemoji-backhand-index-pointing-right-medium-light-skin-tone mr-2 />
      <span mr-3 font-bold>Contact me</span>
      <div i-twemoji-two-hearts mr-4 />
      <div i-carbon-letter-qq mx-2 cursor-pointer hover:text-red text-20px />
      <n-divider vertical />
      <div i-carbon-logo-wechat mx-2 cursor-pointer hover="text-[#329672]" text-20px />
      <n-divider vertical />
      <div i-carbon-logo-twitter ml-2 cursor-pointer hover="text-[#1D9BF0]" text-20px />
    </div>
  </div>
</div>

***
Hey, I am Duende, a front & end engineer. I have work for 2 years, I write java
and vue apps.

Dreaming up ideas and making them come true is where my passion lies. You can find my [full projects list here](/projects). 
Find me on [GitHub](https://github.com/dud9).

If you like my works, consider sponsoring me to keep them sustainable.

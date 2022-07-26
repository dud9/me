<template>
  <div class="wrapper">
    <div class="mask" />
    <div class="logo" i-carbon-campsite text=" white" />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  animation-name: scale;
  animation-duration: 10s;
  animation-timeline: box-move;
}

.mask {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-75deg, #18A058, #63E2B7);
  z-index: 2;
  animation-name: reOpacityChange;
  animation-duration: 2s;
  animation-timeline: box-move;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% - 2px), calc(-50% - 2px));
  width: 148px;
  height: 232px;
  z-index: 3;
  animation-name: reOpacityChange;
  animation-duration: 2s;
  animation-timeline: box-move;
}

@keyframes reOpacityChange {
  0% {
    opacity: 1;
  }

  50% {
    opacity: .6;
  }

  80% {
    opacity: .3;
  }

  100% {
    opacity: .1;
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(3);
  }

  50% {
    transform: scale(6);
  }

  75% {
    transform: scale(9);
  }

  100% {
    transform: scale(12);
  }
}
</style>

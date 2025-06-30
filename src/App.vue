<script setup>
// import avator from '@/App?url'
// import avator from '@/App?raw'
// import avator from '@/App?inline'
import worker from '@/assets/js/worker?worker'
// const Worker = new worker()
// Worker.onmessage = (e) => {
//   console.log('data from worker', e)
// }
// console.log('worker',worker)
</script>

<template>
  <div class="app_wrap app_wrap_scss">
    App
    <div class="text_style">测试</div>
  </div>
</template>

<style scoped lang="scss">
.app_wrap{
  background-color: $bg;
  transform: scale(1,1);
}
</style>

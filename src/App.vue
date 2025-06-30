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

const globImport = () => {
  // 批量导入 assets 目录中的所有图片
  const imageModules = import.meta.glob(
    '@/images/*.{png,jpg,jpeg,gif,svg,webp}',
    { eager: true } // 立即导入所有模块
  );
  console.log('imageModules', imageModules);
  // 提取图片 URL
  const images = Object.values(imageModules).map(module => module.default);
  console.log('images', images);
}
globImport()
</script>

<template>
  <div class="app_wrap app_wrap_scss">
    App
    <div class="text_style">测试22221</div>
  </div>
</template>

<style scoped lang="scss">
.app_wrap{
  background-color: $bg;
  transform: scale(1,1);
}
</style>

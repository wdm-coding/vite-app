<script setup>
const appVersion = __APP_VERSION__;
const url = __API_URL__;
console.log('__API_URL__',url);
console.log('appVersion', appVersion);
</script>

<template>
  <div class="app_wrap">
    App{{ __API_URL__ }}111
  </div>
</template>

<style scoped lang="scss">
.app_wrap{
  width: 100vw;
  height: 100vh;
  background-color: $white;
}
</style>

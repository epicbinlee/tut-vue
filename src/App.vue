<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
const boxWith = '100px';
</script>

<style lang="scss" scoped>
.box {
  width: v-bind(boxWith);
  height: 100px;
  color: red;
}
</style>

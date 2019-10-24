<template>
  <div class="wrapper">
    <header>
        <h1>Sass快速入门</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'sass'
}
</script>

<style lang="scss">
header {
    color: $main-color;
}
.title {
    background: #000;

    h1 {
        color: $main-color;
    }
}
</style>

<template>
    <header>
        <h2>
            <slot></slot>
        </h2>
    </header>
</template>

<script>
export default {
    name: 'headers',
    data () {
        return {}
    },
    props: {

    }
}
</script>

<style scoped lang="scss">
// 头部
header {
    text-align: center;
    background: $headerBg;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    h2 {
        color: $main-color;
        line-height: 2.5em;
        margin: 0;
    }
}
</style>
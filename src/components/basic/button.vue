<template>
    <button>123</button>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
button {
    width: 140px;
    line-height: 38px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px 1px #333;
    border-radius: 5px;
    border: 1px solid #1e7db9;
    box-shadow: 0 1px 2px #8fcaee inset, 0 -1px 0 #497897 inset, 0 -2px 3px #8fcaee inset;
    background: -webkit-linear-gradient(top, #42a4e0, #2e88c0);
    background: -moz-linear-gradient(top, #42a4e0, #2e88c0);
    background: linear-gradient(top, #42a4e0, #2e88c0);
}
button:active {
    top: 1px;
    box-shadow: 0 1px 3px #114566 inset, 0 3px 0 #fff;
    background: -webkit-linear-gradient(top, #1a71a8, #1976b1);
    background: -moz-linear-gradient(top, #1a71a8, #1976b1);
    background: linear-gradient(top, #1a71a8, #1976b1);
}
button:focus {
    outline: none;
}
</style>
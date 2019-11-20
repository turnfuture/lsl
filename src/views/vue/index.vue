<template>
    <div class="wrapper">
        <common-header>vue</common-header>
        <article class="container">
          <lsl-button></lsl-button>
          <ul>
              <li v-for="(item, index) in list" :key="index">
                  <h3>{{item.title}}</h3>
                  <template v-for="(main, maIndex) in item.main">
                      <div class="main" :key="maIndex">
                      <p>{{main.title}}</p>
                      <div class="bg-black">
                          <template v-for="(p, pIndex) in main.html">
                          <p class="none" :class="{ti: index == 0 && pIndex == 1}" :key="pIndex" v-html="p"></p>
                          </template>
                      </div>
                      </div>
                  </template>
              </li>
          </ul>
        </article>
    </div>
</template>

<script>
import commonHeader from "@/components/comHeader.vue";
export default {
  name: "vue",
  data() {
    return {
      list: [{
        title: '1、生命周期钩子函数'
      },{
        title: "2、事件修饰符",
        main: [
          {
            title: "click事件修饰符",
            html: [
              "v-on:click.stop=\"\"      阻止事件冒泡",
            ]
          }
        ]
      },]
    };
  },
  components: {
    commonHeader
  }
};
</script>

<style lang="scss" scoped>
ul li {
  h3 {
    margin-top: $p15;
  }
  h4,
  p {
    padding: $p0;
  }
  .bg-black {
    margin: $p0 $p10;
    padding: $p10;
    background: $middle-black;
    color: $fff;
    overflow-x: auto;

    p {
      white-space: pre;
    }
  }
}
.main > p {
  margin: $p15 $p10;
}
button {
  background: red;
}
</style>
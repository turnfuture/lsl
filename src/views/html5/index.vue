<template>
  <div class="wrapper">
    <common-header>html</common-header>
    <article class="container">
      <ul>
        <li v-for="(item, index) in list" :key="index" :id="item.id">
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
  name: "html5s",
  data() {
    return {
      list: [
        {
          title: "1、html5语义化元素兼容IE8及更早的版本",
          main: [
            {
              title: "对于较早版本的IE浏览器，它们拒绝给无法识别的元素应用样式",
              html: [
                "&lt;!--[if lt IE 9]&gt;",
                '&lt;script src="http://cdn.bootcss.com/html5shiv/r29/html5.min.js"&gt;&lt;/script&gt;',
                "&lt;![endif]--&gt;"
              ]
            }
          ]
        },
        {
          title: "2、html页面引入css",
          main: [
            {
              title: "第一种：link引入",
              html: [
                '&lt;link rel="stylesheet" type="text/css" href="1.css" /&gt;'
              ]
            },
            {
              title: "第二种：在style中引入",
              html: ["@import url(1.css);"]
            },
            {
              title: "第三种：js中引入",
              html: [
                'var a = document.createElement("link");',
                'a.setAttribute("rel", "stylesheet");',
                'a.setAttribute("href", "1.css");',
                'document.getElementsByTagName("head")[0].appendChild(a);'
              ]
            }
          ]
        }
      ]
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
    overflow-x: scroll;

    p {
      white-space: pre;
    }
  }
}
.main > p {
  margin: $p15 $p10;
}
</style>
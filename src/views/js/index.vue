<template>
    <div class="wrapper">
        <common-header>js</common-header>
        <article class="container">
            <lsl-button></lsl-button>
            <ul>
                <li v-for="(item, index) in list" :key="index" :id="item.id">
                <h3>{{item.title}}</h3>
                <template v-for="(main, maIndex) in item.main">
                    <div class="main" :key="maIndex">
                    <p>{{main.title}}</p>
                    <div class="bg-black">
                        <template v-for="(p, pIndex) in main.html">
                        <p class="none" :key="pIndex" v-html="p"></p>
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
          title: "1、Object.keys()和Object.values()",
          main: [
            {
              title: "对象：{name: '张三', age: '22', width: 100}",
              html: [
                "Object.keys()：['name', 'age', 'width']",
                "Object.values()：['张三', '22', 100]"
              ]
            }
          ]
        },
        {
          title: "2、字符串大小写转换",
          main: [
            {
              title: "",
              html: [
                "小写转大写：str.toUpperCase();",
                "大写转小写：str.toLowerCase();"
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
    overflow-x: auto;

    p {
      white-space: pre;
    }
  }
}
.main > p {
  margin: $p15 $p10;
}
</style>
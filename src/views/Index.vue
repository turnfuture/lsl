<template>
    <div class="wrapper">
        <ul>
            <template v-for="(item, index) in list">
                <li :key="index">
                    <div class="title" @click="bindDetails(index)">
                        <router-link :to="item.url">
                            {{item.title}}
                            <div class="right-arrow"></div>
                        </router-link>
                    </div>
                    <!-- <div class="main" v-show="current === index">
                        <dl>
                            <dd v-for="(itm, idx) in item.pageList" :key="idx">
                                <router-link :to="itm.url">
                                    {{itm.title}}
                                    <div class="right-arrow"></div>
                                </router-link>
                            </dd>
                        </dl>
                    </div> -->
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {
            list: [{
                title: 'html5',
                url: 'html#one'
            }, {
                url: 'sass',
                title: 'sass'
            }, {
                url: 'vue',
                title: 'vue'
            }, {
                url: 'js',
                title: 'js'
            }],
            current: -1
        }
    },
    methods: {
        bindDetails (index) {
            this.current = (this.current === index) ? -1 : index;
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    margin: 0;
}
ul li a {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    font-size: 16px;
    height: 50px;
    background: #fff;
    padding: 0 10px;
    border-bottom: 1px solid #eee;
}
dl, dd {
    margin: 0;
}
dd a {
    font-size: 14px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    height: 44px;
    background: #eee;
}
</style>
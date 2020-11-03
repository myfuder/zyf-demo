<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    mounted() {
        console.log(this.$route)
    },
    methods: {}
}
</script>
<style lang="less">
* {
    margin: 0;
    padding: 0;
    /*&::-webkit-scrollbar {*/
    /*width: 0px;*/
    /*height:0px;*/
    /*}*/
}

ul,
li {
    list-style: none;
}

html {
    text-align: center;
    font-size: 125%;
}
html,
body,
#app {
    height: 100%;
    -ms-overflow-style: none;
    /*火狐下隐藏滚动条*/
    overflow: -moz-scrollbars-none;
    text-align: center;
    /*background: #000;*/
    font-weight: 500;
    &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
}
body {
    /*font-family: "黑体","Myriad Pro","Microsoft YaHei", "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", 'Avenir', Helvetica, Arial ;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-size: 100%;
}
input::-webkit-input-safebox-button {
    display: none;
}
input::-ms-reveal,
input::-ms-clear {
    display: none;
}
.flex-space-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.flex-start {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.flex-col-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.flex-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
@media only screen and (min-width: 768px) {
    .el-col-sm-4-8 {
        width: 20% !important;
    }

    .el-col-sm-offset-4-8 {
        margin-left: 20%;
    }

    .el-col-sm-pull-4-8 {
        position: relative;
        right: 20%;
    }

    .el-col-sm-push-4-8 {
        position: relative;
        left: 20%;
    }
}

@media only screen and (min-width: 992px) {
    .el-col-md-4-8 {
        width: 20% !important;
    }

    .el-col-md-offset-4-8 {
        margin-left: 20%;
    }

    .el-col-md-pull-4-8 {
        position: relative;
        right: 20%;
    }

    .el-col-md-push-4-8 {
        position: relative;
        left: 20%;
    }
}

@media only screen and (min-width: 1200px) {
    .el-col-lg-4-8 {
        width: 20% !important;
    }

    .el-col-lg-offset-4-8 {
        margin-left: 20% !important;
    }

    .el-col-lg-pull-4-8 {
        position: relative;
        right: 20%;
    }

    .el-col-lg-push-4-8 {
        position: relative;
        left: 20%;
    }
}

@media only screen and (min-width: 1920px) {
    .el-col-xl-4-8 {
        width: 20% !important;
    }

    .el-col-xl-offset-4-8 {
        margin-left: 20% !important;
    }

    .el-col-xl-pull-4-8 {
        position: relative;
        right: 20%;
    }

    .el-col-xl-push-4-8 {
        position: relative;
        left: 20%;
    }
}
</style>

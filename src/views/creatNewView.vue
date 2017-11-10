<template>
    <div style="height:100%">
        <div style="background-color: #0e2a43" class="topDiv">
            <div class="topLeft">
                <Button shape="circle" icon="chevron-left" @click="fanhui"></Button>
            </div>
               <div class="topCenter">
                   <div class="topIcon">
                       <Icon type="android-expand" color="white" size="30"></Icon>
                       <p>常规图标</p>
                   </div>
               </div>
            <div class="topRight">
                <div class="topIcon">
                    <Icon type="paper-airplane" color="white" size="30"></Icon>
                    <p>发布</p>
                </div>
                <div class="topIcon" style="justify-content: flex-end">
                    <Icon type="social-skype" color="white" size="30"></Icon>
                    <p>保存</p>
                </div>
                <div class="topIcon">
                    <Icon type="android-expand" color="white" size="30"></Icon>
                    <p>预览</p>
                </div>
            </div>

        </div>
        <div class="leftDiv">
            <Card>
                <p slot="title" style="text-align: center">图层</p>
                <p>
                    <Icon type="arrow-up-a" style="float:left"></Icon>
                    <Icon type="arrow-down-a" style="float:right"></Icon>
                </p>
            </Card>
            <div class="leftTable">
                <Checkbox></Checkbox>
                <img src="../images/guadalogo.jpg" alt="">
                <Icon type="navicon-round" size="20"></Icon>
            </div>
            <div class="leftTable">
                <Checkbox></Checkbox>
                <img src="../images/guadalogo.jpg" alt="">
                <Icon type="navicon-round" size="20"></Icon>
            </div>

        </div>
        <div class="mdDiv"></div>
        <div class="bottomDiv">
            <Button icon="trash-a" style="float:left;">删除</Button>

        </div>
        <div class="rightDiv">

        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {};
        },
        methods: {
            fanhui () {
                this.$router.push({
                    name: 'Visuakization'
                });
            }
        }
    };
</script>
<style>
    .topDiv {
        width: 100%;
        height: 10%;
        background-color: gainsboro;
        position: relative;
        color: whitesmoke;
        display: flex;
    }

    .topLeft {
        width: 10%;
        display: flex;
        align-items: center;
    }
    .topCenter{
        width:50%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content:flex-start;
    }
    .topRight{
        width:40%;
        display: flex;
        align-items: center;
        justify-content:flex-end;
        margin-left:-2rem;
    }

    .topIcon {
        margin-left: 2rem;
    }

    .leftDiv {
        width: 10%;
        height: 85%;
        position: absolute;
        left: 0;
        top: 10%;
    }
    .mdDiv{
        width:70%;
        height:85%;
        position: absolute;
        left:10%;
        top:10%;
        background-color: #e5e4e5;

    }
    .bottomDiv {
        width: 80%;
        height: 5%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
    }

    .rightDiv {
        width: 20%;
        height: 90%;
        float: right;
        position: absolute;
        right: 0;
        top: 10%;
    }

    .leftTable {
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
    }

    .leftTable img {
        width: 5rem;
        height: 3rem;
    }


</style>
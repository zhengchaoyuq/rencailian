<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        <Row>
            <Col span="8">
                <Row>
                    <Card>
                        <Row type="flex" class="user-infor">
                            <Col span="8">
                                <Row class-name="made-child-con-middle" type="flex" align="middle">
                                    <img class="avator-img"  />
                                    <!--头像-->
                                </Row>
                            </Col>
                            <Col span="16" style="padding-left:6px;">
                                <Row class-name="made-child-con-middle" type="flex" align="middle">
                                    <div>
                                        <b class="card-user-infor-name">公司全称</b>
                                        <p>公司简称</p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                        <div class="line-gray"></div>
                        <Row class="margin-top-8">
                            <Col span="8"><p class="notwrap">上次登录时间:</p></Col>
                            <Col span="16" class="padding-left-8">2017.09.12-13:32:20</Col>
                        </Row>
                        <Row class="margin-top-8">
                            <Col span="8"><p class="notwrap">上次登录地点:</p></Col>
                            <Col span="16" class="padding-left-8">北京</Col>
                        </Row>
                    </Card>
                </Row>
              
            </Col>
      
        </Row>
       
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
export default {
    name: 'home',
    data () {
        return {
        };
    },
    mounted(){
        this.$http.post('http://120.76.72.183:6158/ent/rest/EntBaseBusiness/modify',{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                'token':Cookies.get('token')
            }
        }).then((res)=>{
            console.log(res);
        })
    }
}
</script>

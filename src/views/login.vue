<style lang="less">
    @import './login.less';
</style>

<template>
	
    <div class="login" @keydown.enter="handleSubmit">
    	<div class="zhuce">
    		
    		<img src="../../dist/plugins/emoticons/img/smiley-innocent.gif"/>
    		<div class="context">
    			<span style="color:black">第一次使用？</span>
    			<span @click="LoginResigister">立即注册</span>|<span>客服</span>
    		</div>
    		
    	</div>
    	
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data () {
        return {
            form: {
                userName: 'iview_admin',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    Cookies.set('user', this.form.userName);
                    Cookies.set('password', this.form.password);
                    this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                    if (this.form.userName === 'iview_admin') {
                        Cookies.set('access', 0);
                    } else {
                        Cookies.set('access', 1);
                    }
                    this.$router.push({
                        name: 'home_index'
                    });
                }
            });
        },
      LoginResigister(){
      	 this.$router.push({
                        name: 'resigister'
                    });
      }
    }
    
};
</script>

<style>
.zhuce{
	width:100%;
	height:10%;
	background-color: white;
}
.zhuce img {
	position:absolute;
}
.context{
	cursor: pointer;
	position:relative;
	left:75%;
	top:70%;
	font-size: 1rem;
}
.context span{
	color:blue;
	
}
</style>

<template>
	<div>
	<header>
			123
		</header>
		<section>
			<Steps :current="4" class="xinxi">
					<Step title="协议"></Step>
					<Step title="注册"></Step>
					<Step title="邮箱验证"></Step>
					<Step title="基本信息填写"></Step>
					<Step title="完成"></Step>
				</Steps>
			<div class="successCon">
				<Scroll>
				<h1>注册成功跳转至登录页</h1>
			<br/><Button @click="login">登录</Button>
			    </Scroll>
			</div>
			</section>
			
		</div>
</template>

<script>
	export default {
    data () {
        return {
           
            }
    },
    methods:{
    	login(){
      	 this.$router.push({
                        name: 'login'
                    });
      }
    }
}
</script>

<style>
 	.successCon {
		position: relative;
		left: 35%;
	}
	
	.successCon span{
		display: block;
		width: 200px;
		height: 1.5rem;
	}
	
	.successCon input {
		width: 20%;
	}
</style>
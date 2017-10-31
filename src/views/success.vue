<template>
	<div>
	<header>
			123
		</header>
		<section>
		<Steps :current="2">
        <Step title="基本信息" content="这里是该步骤的描述信息"></Step>
        <Step title="协议" content="这里是该步骤的描述信息"></Step>
        <Step title="成功" content="这里是该步骤的描述信息"></Step>
           </Steps>
			123123123123123
			<br/><Button @click="login">下一步</Button>
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
</style>
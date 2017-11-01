<template>
	<div>
		<header>
			123
			
		</header>
		<section>
			<Steps :current="0" class="xinxi">
				<Step title="协议"></Step>
				<Step title="注册"></Step>
				<Step title="邮箱验证"></Step>
				<Step title="基本信息填写"></Step>
				<Step title="完成"></Step>
			</Steps>
			<div class="annContext">
			123123123123123
			<CheckboxGroup>
				<Checkbox v-model="single" label="我同意协议"></Checkbox>
			</CheckboxGroup>
			<br/>
			<Button  @click="resigister" :disabled=disable>下一步</Button>
              </div>
		</section>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				 checked: true,
				disable: true,
				 single: false
			}
		},
		created(){
			this.$watch('single',function(newVal){
				this.Ynbutton(newVal);
			},{
				deep:true
			})
		},
		methods: {
			resigister() {
				this.$router.push({
					name: 'resigister'
				});
			},
			Ynbutton(newVal) {
				this.disable = !newVal;
		}
	}
}
</script>

<style>
	.xinxi{
		padding:5% 20%;
		position: relative;
		left:5%;
	}
	.annContext{
		text-align: center;
		
	}
	
</style>
<template>
	<div>
		<header>
			123
		</header>
		<section>
			<Steps :current="2" class="xinxi">
				<Step title="协议"></Step>
				<Step title="注册"></Step>
				<Step title="邮箱验证"></Step>
				<Step title="基本信息填写"></Step>
				<Step title="完成"></Step>
			</Steps>
			<div class="emailCo">
				 <Scroll>
				<h2>请输入验证码</h2>
				<div>
					<Form :model="form" :rules="rules" ref="form">
						<FormItem prop="code">
							<Input v-model="form.code" placeholder="验证码">
							</Input>
						</FormItem>
					</Form>
				</div>
				<br/>
				<Button style="width:20%" @click="fillin" :disabled=disable>下一步</Button>
				</Scroll>
			</div>

		</section>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				disable: true,
				form: {
					code: ''
				},
		rules: {
					code: [{
						required: true,
						message: '验证码不能为空',
						trigger: 'blur'
					}]
				}

			        }
		         },
		         created(){
			this.$watch('form',function(newVal){
				this.Ynbutton(newVal);
				
			},{
				deep:true
			})
		},
		         methods:{
				fillin() {
				this.$router.push
				({
					name: 'fillin'
				});
		                 },
		     	Ynbutton(newVal) {
				this.$refs.form.validate((valid) => {
					valid ? (this.disable = false) : (this.disable = true)
				})
			}
				}

	}
</script>

<style>
	.emailCo {
		position: relative;
		left: 40%;
	}
	
	.emailCo input {
		width: 20%;
	}
</style>
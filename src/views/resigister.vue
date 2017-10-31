<template>
	<div>
		<header>
			123
		</header>
		<section>
			<div>
				<Steps :current="0">
					<Step title="基本信息" content="这里是该步骤的描述信息"></Step>
					<Step title="协议" content="这里是该步骤的描述信息"></Step>
					<Step title="成功" content="这里是该步骤的描述信息"></Step>

				</Steps>
			</div>
			<div class="ResigisterCon">
				<div>
					<Form :model="form" :rules="rules" ref="form">
						<FormItem label="企业全称" prop="userName">
							<Input v-model="form.userName" placeholder="请输入企业全称">
							</Input>
						</FormItem>
						<FormItem label="邮箱" prop="email">
							<Input v-model="form.email" placeholder="请输入邮箱"></Input>
						</FormItem>
						<FormItem label="密码" prop="password">
							<Input type="password" v-model="form.password" placeholder="请输入密码">
							</Input>
						</FormItem>
						<FormItem label="确认密码" prop="password">

							<Input type="password" v-model="form.repassword" placeholder="请输入密码">
							</Input>
						</FormItem>
					</Form>
				</div>

				<br/>
				<Button @click="announce" :disabled=disable>下一步</Button>
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
					userName: '',
					password: '',
					repassword: "",
					email: '',
				},
				rules: {
					userName: [{
						required: true,
						message: '企业全称不能为空',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}],
					email: [{
							required: true,
							message: '邮箱不能为空',
							trigger: 'blur'
						},
						{
							type: 'email',
							message: '邮箱格式不正确',
							trigger: 'blur'
						}
					]
				}
			};
		},
		created(){
			this.$watch('form',function(newVal){
				this.Ynbutton(newVal);
				
			},{
				deep:true
			})
		},
		methods: {
			announce() {
				this.$router.push({
					name: 'announce'
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
	header {
		width: 100%;
		height: 10%;
		background-color: white;
		font-size: 2.5rem;
	}
	
	section {
		position: absolute;
		width: 80%;
		height: auto;
		background: white;
		top: 10%;
		left: 10%;
	}
	
	.ResigisterCon {
		position: relative;
		left: 35%;
	}
	
	.ResigisterCon span {
		display: block;
		width: 200px;
		height: 1.5rem;
	}
	
	.ResigisterCon input {
		width: 20%;
	}
</style>
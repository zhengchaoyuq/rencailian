<template>
	<div>
		<header>
			1123
		</header>
		<section>
			<div >
				<Steps :current="3" class="xinxi">
					<Step title="协议"></Step>
					<Step title="注册"></Step>
					<Step title="邮箱验证"></Step>
					<Step title="基本信息填写"></Step>
					<Step title="完成"></Step>
				</Steps>
			</div>
			<div class="fillCon">
				<Scroll>
				<Form :model="form" :rules="rules" ref="form">
					<FormItem label="企业全称" prop="userName">
						<Input v-model="form.userName" placeholder="请输入企业全称">
						</Input>
					</FormItem>
					<FormItem label="企业简称" >
						<Input v-model="form.shortname" placeholder="请输入企业简称（可选）">
						</Input>
					</FormItem>
					<FormItem label="统一信用代码" prop="USCI">
						<Input  v-model="form.USCI" placeholder="请输入密码">
						</Input>
					</FormItem>
					<FormItem label="注册地址" prop="address">
						<Input v-model="form.address" placeholder="请输入注册地址">
						</Input>
					</FormItem>
					<FormItem label="注册资金" prop="money">
						<Input v-model="form.money" placeholder="请输入注册资金">
						</Input>
					</FormItem>
						<FormItem label="法人代表" prop="people">
						<Input v-model="form.people" placeholder="请输入法人代表">
						</Input>
					</FormItem>
						</FormItem>
						<FormItem label="经营范围 " prop="range">
						<Input v-model="form.range" placeholder="请输入经营范围">
						</Input>
					</FormItem>
						<FormItem label="对外公开户名" prop="name">
						<Input v-model="form.name" placeholder="请输入对外公开户名">
						</Input>
					</FormItem>
						<FormItem label="开户行账号 " prop="account">
						<Input v-model="form.account" placeholder="请输入开户行账号">
						</Input>
					</FormItem>
				</Form>
				<br/>
				<Button style="width:20%" @click="success" :disabled=disable>下一步</Button>
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
					userName: '',
					USCI: '',
					repassword:"",
					shortname:"",
					address:"",
					money:"",
					people:"",
					range:"",
					name:"",
					account:""
				},
				rules: {
					userName: [{
						required: true,
						message: '企业全称不能为空',
						trigger: 'blur'
					}],
					USCI: [{
						required: true,
						message: '统一社会信用代码不能为空',
						trigger: 'blur'
					}],
					address: [{
						required: true,
						message: '注册地址不能为空',
						trigger: 'blur'
					}],
					money: [{
						required: true,
						message: '注册资金不能为空',
						trigger: 'blur'
					}],
						people: [{
						required: true,
						message: '法人代表不能为空',
						trigger: 'blur'
					}],
						range: [{
						required: true,
						message: '经营范围不能为空',
						trigger: 'blur'
					}],
					name: [{
						required: true,
						message: '对外公开户名不能为空',
						trigger: 'blur'
					}],
					account: [{
						required: true,
						message: '开户行账号不能为空',
						trigger: 'blur'
					}],
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
			success() {
				this.$router.push({
					name: 'success'
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
	.fillCon {
		position: relative;
		left: 35%;
	}
	
	.fillCon span {
		display: block;
		width: 200px;
		height: 1.5rem;
	}
	
	.fillCon input {
		width: 20%;
	}
</style>
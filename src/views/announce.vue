<template>
	<div>
		<header>
			123
			
		</header>
		<section>
			<Steps :current="1">
				<Step title="基本信息" content="这里是该步骤的描述信息"></Step>
				<Step title="协议" content="这里是该步骤的描述信息"></Step>
				<Step title="成功" content="这里是该步骤的描述信息"></Step>
			</Steps>
			123123123123123
			<CheckboxGroup>
				<Checkbox v-model="single" label="我同意协议"></Checkbox>
			</CheckboxGroup>
			<br/>
			<Button  @click="success" :disabled=disable>下一步</Button>

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
			success() {
				this.$router.push({
					name: 'success'
				});
			},
			Ynbutton(newVal) {
				this.disable = !newVal;
		}
	}
}
</script>

<style>

</style>
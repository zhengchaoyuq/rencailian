<style>

</style>

<template>
    <div class="baseTitle">
          <Card style="width:80%">
        <div style="text-align:center">
            <h3>{{title}}</h3>
            <Input v-model="address" :disabled=disable>
        <Button slot="append" @click="ynbutton" :icon=edit></Button>
    </Input>
            
            
            <!--<h3>公司理念</h3>
            <span>理念</span>
            <h3>主营业务</h3>
               <span>业务</span>
            <h3>发展阶段</h3>
            <span>发展阶段</span>
            <h3>公司主页</h3>
            <span>主页</span>-->
        </div>
    </Card>
    </div>
</template>

<script>
export default{
	data(){
		return {
			disable:true,
			 address: 'address',
			 title:"公司定位",
			 edit:"edit"
		}
	},
	methods:{
              ynbutton(){
              	(this.disable=!this.disable)?(this.edit="edit"):(this.edit="checkmark");
		}
}
}
</script>

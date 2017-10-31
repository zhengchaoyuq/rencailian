<template>
    <div>
    <h1>企业全称</h1>
    <h2>企业简称</h2>
    <h2>统一信用代码</h2>
    <h2>注册地址</h2>
       <Card style="width:320px">
        <div style="text-align:center">
            <h3>法人代表</h3>
        </div>
    </Card>
    <h2>经营范围</h2>
    <h2>办公地址</h2>
     <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">营业执照</p>
            <p>无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充。</p>
        </Card>
           <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或将文件拖拽到这里上传</p>
        </div>
    </Upload>
    </div>
    <h2>对公开户名</h2>
    <h2>开户行</h2>
   <h2>账号</h2>
   <h3>管理员姓名</h3>
   <h1>管理员身份证号</h1>
   <h1>管理员身份证复印件</h1>
   <h1>管理员电话</h1>
   <h2>管理员邮箱</h2>
   
    </div>
</template>

<script>

      
</script>
<style>
	
</style>

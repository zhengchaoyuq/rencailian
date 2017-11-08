<template>
    <div>
        <Card style="width:20%;height:20%" >
            <div style="text-align:center" @click="creatNew">
                <img src="../../images/shizi.png" alt="">
                <h3>新建可视化</h3>
            </div>
        </Card>
    </div>
</template>
<script>
    export default {
        data () {
            return{

            }
        },
        methods:{
            creatNew(){
                this.$router.push({
                    name: 'creatNewView'
                });
            }
        }

    };
</script>
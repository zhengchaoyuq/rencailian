<style lang="less">
    @import './login.less';
</style>
<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="zhuce">

            <div class="context">
                <span style="color:black">第一次使用？</span>
                <span @click="announce" style="cursor: pointer">立即注册</span>|<span style="cursor: pointer">客服</span>
            </div>

        </div>

        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                            <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                            <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';

    export default {
        data () {
            return {
                form: {
                    userName: '',
                    password: ''
                },
                rules: {
                    userName: [
                        {required: true, message: '账号不能为空', trigger: 'blur'},
                        {
                            type: 'email',
                            message: '邮箱格式不正确',
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}

                    ]
                }
            };
        },
        methods: {
            handleSubmit () {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.$http.get('http://120.76.72.183:6158/ent/rest/EntAuthBusiness/login', {
                            params: {
                                userName: this.form.userName,
                                pwd: this.form.password
                            }
                        }).then((res) => {
                            console.log(res.data);
                            if (res.data.code === 500) {
                                alert(res.data.msg);
                            }
                            else {
                                Cookies.set('token', res.data.data);
                                Cookies.set('user', this.form.userName);
                                this.$router.push({
                                    name: 'home'
                                });
                            }
                        });

                    }
                });
            },
            announce () {
                this.$router.push({
                    name: 'announce'
                });
            }
        }

    };
</script>

<style>
    .zhuce {
        width: 100%;
        height: 10%;
        background-color: gainsboro;
    }

    .zhuce img {
        position: absolute;
    }

    .context {
        position: relative;
        left: 75%;
        top: 70%;
        font-size: 1rem;
    }

    .context span {
        color: #4e73ff;

    }
</style>

<template>
  <div>
      <Button type="primary" icon="plus-round" @click="modal = true">添加数据</Button>
      <Modal v-model="modal" width="360">
          <p slot="header" style=";text-align:center">
              <span>新建数据</span>
          </p>
          <div style="text-align:center">
              <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                  <FormItem label="类型" prop="type">
                      <Select v-model="formValidate.type" placeholder="选择类型">
                          <Option value="beijing">New York</Option>
                      </Select>
                  </FormItem>
                  <FormItem label="名称" prop="name">
                      <Input v-model="formValidate.name" placeholder="自定义数据库名称"></Input>
                  </FormItem>
                  <FormItem label="域名" prop="DominName">
                      <Input v-model="formValidate.DominName" placeholder="数据源链接域名"></Input>
                  </FormItem>
                  <FormItem label="用户名" prop="UserName">
                      <Input v-model="formValidate.UserName" placeholder="数据库用户名"></Input>
                  </FormItem>
                  <FormItem label="密码" prop="password">
                      <Input v-model="formValidate.password" placeholder="数据库密码"></Input>
                  </FormItem>
                  <FormItem label="端口" prop="port">
                      <Input v-model="formValidate.port" placeholder="数据库端口"></Input>
                  </FormItem>
                  <FormItem label="数据库" prop="DataBase">
                      <Input v-model="formValidate.DataBase" placeholder="数据库DB名称"></Input>
                  </FormItem>
              </Form>
          </div>
          <div slot="footer">
              <Button type="primary"  @click="Ynbutton" :disabled=disable>完成</Button>
          </div>
      </Modal>
      <Table border :columns="columns" :data="data"></Table>
  </div>



</template>
<script>
    export default {
        data () {
            return {
                disable:false,
                modal: false,
                formValidate: {
                    type: '',
                    mail: '',
                    DominName: '',
                    UserName: '',
                    password: '',
                    port: '',
                    DataBase: ''
                },
                ruleValidate: {
                    type: [
                        {required: true, message: '类型不能为空', trigger: 'blur'}
                    ],
                    name:
                        [
                            {required: true, message: '名称不能为空', trigger: 'blur'},
                        ],
                    DominName:
                        [
                            {required: true, message: '域名不能为空', trigger: 'blur'}
                        ],
                    UserName:
                        [
                            {required: true, message: '数据库用户名不能为空', trigger: 'blur'}
                        ],
                    password:
                        [
                            {required: true, message: '密码不能为空', trigger: 'blur'}
                        ],
                    port:
                        [
                            {required: true, message: '数据库端口不能为空', trigger: 'blur'}
                        ],
                    DataBase:
                        [
                            {required: true, message: '数据库名称不能为空', trigger:'blur'}
                        ]
                },
                columns: [
                    {
                        title: '名称',
                        key: 'name',
                        render: (h,params) => {
                            return h('div', [
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '描述',
                        key: 'des'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '展示'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        name: '123213123123123',
                        des: '12312312312',
                    }
                ]

            }
        },
        created(){
            this.$watch('form',function(newVal){
                    this.Ynbutton(newVal);
                },
                {
                    deep:true
                })
        },
        methods: {
            Ynbutton(newVal) {
                this.$refs.formValidate.validate((valid) => {
                    valid ? (this.disable = false) : (this.disable = true);
                    this.modal = false;
                    this.$Message.success('创建成功');
                })
            },
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data[index].name}<br>des：${this.data[index].des}`
                })
            },
            remove (index) {
                this.data.splice(index, 1);
            }
        }
    }
</script>
<style>

</style>
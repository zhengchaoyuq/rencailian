<style lang="less">
    @import '../../styles/common.less';
    @import './components/table.less';
</style>

<template>
    <div>
        <Row class="margin-top-10">
            <Col span="12">
                <Card>
                    <div class="edittable-table-height-con">
                        <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"  :saveEdit="saveEditInline" :deleteRow="deleteRowInline"></can-edit-table>
                    </div>
                </Card>
            </Col>
            <Col span="12" class="padding-left-10">
                <Card>
            
                    <div class="edittable-table-height-con">
                        <can-edit-table refs="table3" v-model="editIncellData" :hover-show="true" :edit-incell="true" :columns-list="editIncellColumns" :saveEdit="saveEditIncell" :deleteRow="deleteRowIncell"></can-edit-table>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row class="margin-top-10">
            <Col span="24">
                <Card>

                    <Row :gutter="10">
                        <Col span="2">
                            <Row type="flex" justify="center" align="middle" class="edittable-table-get-currentdata-con">
                                <Button type="primary" @click="getCurrentData">当前数据</Button>
                            </Row>
                        </Col>
                        <Col span="22">
                            <div class="edittable-table-height-con">
                                <can-edit-table refs="table4" v-model="editInlineAndCellData" :editIncell="true" :columns-list="editInlineAndCellColumn" :saveEdit="saveEditInlineIncell" :deleteRow="deleteRowInlineIncell"></can-edit-table>
                            </div>
                        </Col>
                        <Modal :width="900" v-model="showCurrentTableData">
                            <can-edit-table refs="table5" v-model="editInlineAndCellData" :columns-list="showCurrentColumns"></can-edit-table>
                        </Modal>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import canEditTable from './components/canEditTable.vue';
import tableData from './components/table_data.js';
export default {
    name: 'editable-table',
    components: {
        canEditTable
    },
    data () {
        return {
            columnsList: [],
            tableData: [],
            breakConnect: false,
            lowNetSpeed: false,
            editInlineColumns: [],
            editInlineData: [],
            editIncellColumns: [],
            editIncellData: [],
            editInlineAndCellColumn: [],
            editInlineAndCellData: [],
            showCurrentColumns: [],
            showCurrentTableData: false
        };
    },
    methods: {
        getData () {
            this.columnsList = tableData.table1Columns;
            this.tableData = tableData.table1Data;
            this.editInlineColumns = tableData.editInlineColumns;
            this.editInlineData = tableData.editInlineData;
            this.editIncellColumns = tableData.editIncellColumns;
            this.editIncellData = tableData.editIncellData;
            this.editInlineAndCellColumn = tableData.editInlineAndCellColumn;
            this.editInlineAndCellData = tableData.editInlineAndCellData;
            this.showCurrentColumns = tableData.showCurrentColumns;
        },
        handleNetConnect (state) {
            this.breakConnect = state;
        },
        handleLowSpeed (state) {
            this.lowNetSpeed = state;
        },
        saveEdit (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以保存失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('保存成功');
                    });
                }
            }, delay);
        },
        deleteRow (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以删除失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('删除数据成功~');
                    });
                }
            }, delay);
        },
        saveEditInline (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以保存失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('保存成功');
                    });
                }
            }, delay);
        },
        deleteRowInline (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以删除失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('删除数据成功~');
                    });
                }
            }, delay);
        },
        saveEditIncell (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以保存失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('保存成功');
                    });
                }
            }, delay);
        },
        deleteRowIncell (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以删除失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('删除数据成功~');
                    });
                }
            }, delay);
        },
        saveEditInlineIncell (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以保存失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('保存成功');
                    });
                }
            }, delay);
        },
        deleteRowInlineIncell (index, success, fail) {
            let delay = 0;
            if (this.lowNetSpeed) {
                delay = 1000;
            }
            setTimeout(() => {
                if (this.breakConnect) {
                    fail(() => {
                        this.$Message.error('服务器嫌弃你的网络，所以删除失败');
                    });
                } else {
                    success(() => {
                        this.$Message.success('删除数据成功~');
                    });
                }
            }, delay);
        },
        getCurrentData () {
            this.showCurrentTableData = true;
        }
    },
    created () {
        this.getData();
    }
};
</script>

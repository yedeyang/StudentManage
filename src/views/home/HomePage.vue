<template>
    <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/logo.png" alt="" />
          <div class="user-info">
            <p class="name">O小P</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2023-8-24</span></p>
          <p>上次登录的地点:<span>西安</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px" height="450px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px" class="right-num"></el-col>
  </el-row>
  </template>
  
<script>
import { defineComponent,onMounted} from 'vue';
import axios from "axios"
export default defineComponent({
  setup(){
    const tableData=[
    {
      name: "电路",
      today: "180",
      month: "1000",
      total: "5000"
    },
    {
    name: "离散数学",
    today: "200",
    month: "2000",
    total: "114514"
    }
  ]
  
  const tableLabel={
    name:"课程",
    today:"今日上交量",
    month:"本月上交量",
    total:"总上交量"
  }
  const getTableList = async () =>{
    await axios.get("/home/getData").then((res) => {
      tableData.value = res.data.data.tableData
    })
  }
  onMounted(() => {
    getTableList();
  });
  return {
    tableData,
    tableLabel
  }
  }
})
 
</script>


<style lang="less" scoped>
  .home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }
}
</style>
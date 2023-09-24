<template>
  <div class="common-layout">
    <el-container>
      <common-aside />
      <el-container class="container">
        <common-header />
        <el-main class="direct">
            <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>


<script >
import CommonHeader from "@/components/CommonHeader.vue";
import CommonAside from "@/components/CommonAside.vue"
import { defineComponent } from "vue";
export default defineComponent({
  components: { 
    CommonHeader, 
    CommonAside
  },
});
</script>

<style lang="less" scoped>
.container{
  flex-direction: column;
}
</style>
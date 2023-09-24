<template>
        <el-header>
            <div class="l-content">
                <!-- 图标的组件 -->
                <el-button size="small" plain @click="handleCollapse">
                    <el-icon :size="20">
                        <Menu />
                    </el-icon>
                </el-button>
            </div>
            <div class="r-content">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <img class="user" src="../assets/logo.png" alt="">
                    </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
                </el-dropdown>
            </div>
        </el-header>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    let store = useStore();
    let getImageUrl = (user) => {
      // console.log(import.meta.url);
      // console.log(new URL("../assets/images/user.png", import.meta.url));
      return new URL(`../assets/images/${user}.png`, import.meta.url).href;
    };
    // let userImg = require("../assets/images/user.png");
    let handleCollapse = () => {
      // 调用vuex中的mutations
      store.commit("updateIsCollapse");
    };
    // 计算属性

    const current = computed(() => {
      return store.state.currentMenu;
    });
    const router = useRouter();
    const handleLoginOut = () => {
      store.commit("cleanMenu");
      router.push({
        name: "login",
      });
    };
    return {
      // userImg,
      getImageUrl,
      handleCollapse,
      current,
      handleLoginOut,
    };
  },
});
</script>

<style lang="less" scoped>
 header{
     background-color: #333;
     height: 60px;
     display: flex;
     justify-content: space-between;
     align-items:center;
     width: 100%;
}


        .user {
            width: 40px;
            height: 40px;
            // 50%变圆形
            border-radius: 50%;
            width: 100%;
        }


</style>
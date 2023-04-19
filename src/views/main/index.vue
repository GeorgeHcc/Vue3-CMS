<template>
  <div>
    <el-container class="layout-container-demo" style="height: 100vh">
      <el-aside width="200px">
        <navMenu />
      </el-aside>
      <el-container>
        <el-header>
          <navHeader />
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import navMenu from "@/components/nav-menu/src/nav-menu.vue"
import navHeader from "@/components/nav-header/src/nav-header.vue"
</script>

<style scoped lang="less">
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  background-color: #0d0245;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>

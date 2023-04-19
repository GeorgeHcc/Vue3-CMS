<template>
  <div ref="navMenu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#0d0245"
      class="el-menu-vertical-demo"
      default-active="2"
      :default-openeds="activeOpend"
      :collapse="isCollapse"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统总览</span>
        </template>
        <el-menu-item index="1-1">核心技术</el-menu-item>
        <el-menu-item index="1-2">商品统计</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统设置</span>
        </template>
        <el-menu-item index="2-1">系统管理 </el-menu-item>
        <el-menu-item index="2-2"> 用户管理</el-menu-item>
        <el-menu-item index="2-3"> 菜单管理</el-menu-item>
        <el-menu-item index="2-4">角色管理 </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Goods /></el-icon>
          <span>商品中心</span>
        </template>
        <el-menu-item index="3-1">商品类型</el-menu-item>
        <el-menu-item index="3-2">商品信息</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
const isCollapse = ref(false)
const activeOpend = reactive(["1", "2", "3"])
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped></style>

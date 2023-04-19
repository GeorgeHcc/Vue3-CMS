<template>
  <div class="user-wrap">
    <div class="message">
      <el-icon size="1.3rem"><Message /></el-icon>
    </div>
    <div class="avatar">
      <el-avatar :size="40" :src="user.avatar" />
    </div>
    <div class="username">
      <!-- <span>{{ user.name }}</span> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { hyn } from "@/assets/img"
const user = reactive({
  name: "GeorgeH",
  avatar: hyn
})
</script>

<style scoped>
.user-wrap {
  width: 7rem;
  flex: auto;
  margin: 0 10px 0 10px;
  display: flex;
  align-items: center;
}
.avatar {
  flex: 1;
}
.message {
  flex: 1;
}
</style>

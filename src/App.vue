<!-- src/App.vue -->
<template>
  <div id="app-layout">
    <!-- 引入并使用侧边栏组件 -->
    <SideBar />

    <!-- 主内容区 -->
    <main class="content">
      <!-- 路由匹配到的组件将在这里渲染 -->
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

// eslint-disable-next-line vue/block-lang
<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<style scoped>
#app-layout {
  display: flex;
  min-height: 100vh;
  background-color: #f4f7f6;
}

.content {
  flex-grow: 1;
  /* 占据剩余的所有空间 */
  padding: 40px;
  overflow-y: auto;
}

/* 页面切换时的淡入淡出效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
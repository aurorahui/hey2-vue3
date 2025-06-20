<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HeaderCom from '@/components/HeaderCom.vue'
import Footer from '@/components/FooterCom.vue'
import router from './router'

const route = useRoute() // 获取当前路由对象
const activeIndex = ref(route.path) // 根据当前路由路径初始化 activeIndex

// 监听路由路径变化，并更新 activeIndex
watch(() => route.path, (newPath) => {
  activeIndex.value = newPath
})

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const reload = () => {
  // 这里的 window.location.reload() 会导致整个页面重新加载。
  // 如果点击 logo 是为了回到首页并刷新，这个逻辑是正确的，因为首页的路径是 '/'。
  // activeIndex 会在页面重新加载后，根据新的 URL (即 '/') 重新初始化。
  // 如果你希望在不改变 URL 的情况下刷新当前页面的数据，通常不直接使用 window.location.reload()，
  // 而是触发数据重新加载的函数，或者使用 router.go(0) (但这也类似于硬刷新)。
  // window.location.reload()
  router.push('/')
  
}
</script>

<template>
  <!-- <HeaderCom></HeaderCom> -->
  <div class="mune">
    <img
          style="width: 100px;object-fit: contain;"
          src="@/assets/images/logo-03.png"
          alt="logo"
          @click="reload"
        />
    <el-menu
      :default-active="activeIndex"
      active-text-color="#000"
      class="el-menu-content"
      mode="horizontal"
      :ellipsis="false"
      :router="true"
      @select="handleSelect"
    >
      <!-- <el-menu-item index="/">
        
      </el-menu-item> -->
      <el-menu-item index="/">HOME</el-menu-item>
      <!-- <el-menu-item index="/leion-hey2">LEION HEY2</el-menu-item> -->
      <el-menu-item index="/brand">BRAND</el-menu-item>
      <el-menu-item index="/contact">CONTACT</el-menu-item>
    </el-menu>
  </div>
  <KeepAlive>
    <RouterView />
  </KeepAlive>
  <Footer />
</template>

<style scoped>
.mune {
  width: 100vw;
  background-color: #fff;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: #fff;
  }
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

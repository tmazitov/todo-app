<template>
    <div class="layout">
        <Menu/>
        <slot></slot>
    </div>
</template>

<script>
import Menu from './menu/Menu.vue'

export default {
    name: 'Layout',
    components: {
        Menu
    }
}
</script>

<style scoped>
.layout{
  display: grid;
  grid-template-columns: 170px calc(100% - 170px);
  height: 100vh;
}
</style>

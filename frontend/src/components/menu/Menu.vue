<template>
    <div class="menu" v-bind:style="{'border-radius': isSecondMenu?'0':'0 10px 10px 0'}">
        <div class="menu__item__cont">
            <MenuItem 
                v-for="(item, index) in items" 
                :key="`menu__item__${index}`" 
                :title="item.title" 
                :usage="item.usage"
            />
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import MenuItem from './Item.vue'

import router from '../../router.js'
import useEmitter from '../../composable/useEmitter'

export default {
    name: "Menu",
    components: {
        MenuItem
    },
    props:{
        isSecondMenu:Boolean
    },
    setup() { 
        const emitter = useEmitter()

        const closeSecondMenu = () => {emitter.emit('layout:view-second-menu', {
            isVisible: false
        })}

        const openSecondMenu = () => {emitter.emit('layout:view-second-menu', {
            menuItems : ['java', 'c#', 'pyhton'],
        })}

        const changePage = (name) => {
            closeSecondMenu()
            router.push({name:name})
        }

        const items = [
            {title :"All", usage: changePage},
            {title :"Add task", usage: null},
            {title :"Topics", usage: openSecondMenu},
            {title :"Today", usage: changePage},
            {title :"Settings", usage: changePage},
        ]

        return {items}
    }   
}
</script>

<style scoped>
.menu{
    height: 100vh;
    width: 170px;
    color: rgb(224, 224, 224);
    border-right: 1px solid rgb(69, 164, 183, .6);
    background: rgba(255, 255 ,255, .07);
    backdrop-filter: blur(10px); 
}
.menu__item__cont{
    display: grid;
    grid-row-gap: 10px;
    grid-template-rows: repeat(22px, 4);
    padding: 25px 0;
}
*::selection {
   background: transparent;
}
*::-moz-selection {
   background: transparent;
}
</style>
<template>
    <div class="menu">
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

export default {
    name: "Menu",
    components: {
        MenuItem
    },
    setup() {

        const changePage = (name) => { router.push({name:name})}
        const addTask = (name) => {console.log('add Task')}
        const viewTopics = (name) => { console.log("Topics!")}

        const items = [
            {title :"All", usage: changePage},
            {title :"Add task", usage: addTask},
            {title :"Topics", usage: viewTopics},
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
    border-radius: 0 10px 10px 0 ;
    border-right: 1px solid rgba(255, 255, 255, .14);
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
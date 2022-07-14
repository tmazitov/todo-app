<template>
    <div class="layout" v-bind:style="{'grid-template-columns' : template}">
        <Menu :isSecondMenu="secondMenu.isVisible"/>
        <SecondMenu v-if="secondMenu.isVisible" :items="secondMenu.items"/>
        <slot></slot>
    </div>
</template>

<script>
import Menu from './menu/Menu.vue'
import SecondMenu from './menu/SecondMenu.vue'

import router from '../router.js'

import useEmitter from '../composable/useEmitter'
import {reactive, computed} from 'vue'

export default {
    name: 'Layout',
    components: {
        Menu,
        SecondMenu
    },
    setup(){
        const emitter = useEmitter()

        const data = reactive({
            secondMenu: {
                isVisible: false,
                items: [],  
            },
        })

        const template = computed(
            () => {
                let items = [170]
                if (data.secondMenu.isVisible){
                    items.push(170)
                }
                let sum = 0

                items.forEach((elem,index) => {
                    sum += elem
                    items[index] = elem + 'px'
                })
                let result = `${items.join(" ")} calc(100% - ${sum}px) `
                return result
            }
        )
        
        emitter.on('layout:view-second-menu', ({menuItems, isVisible}) => {
            console.log('menuItems', menuItems)
            menuItems = menuItems ?? []
            data.secondMenu.isVisible = isVisible ?? !data.secondMenu.isVisible
            menuItems.forEach((title, index) => menuItems[index] = {
                title: title,
                usage: (name) => {
                    router.push({name:'topic', params: {topicName: name}})
                }
            });
            data.secondMenu.items = menuItems
        })

        return {...data, template}
    },
}
</script>

<style scoped>
.layout{
    display: grid;
    height: 100vh;
}
</style>

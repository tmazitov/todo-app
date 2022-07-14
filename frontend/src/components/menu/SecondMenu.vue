<template>
    <div class="second__menu">
        <div class="menu__item__cont">
            <Item v-for="(item, index) in items" :key="`menu__item__${index}`" :title="item.title" :usage="item.usage"/>
        </div>
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    name:'SecondMenu',
    props: {
        items: Array
    },
    components:{
        Item
    }
}
</script>

<style scoped>
.second__menu{
    height: 100%;
    width: 170px;
    color: rgb(224, 224, 224);
    border-radius: 0 10px 10px 0 ;
    border-right: 1px solid rgb(69, 164, 183, .6);
    background: rgba(255, 255 ,255, .07);
}
.menu__item__cont{
    display: grid;
    grid-row-gap: 10px;
    grid-template-rows: repeat(22px, 4);
    padding: 25px 0;
}
</style>
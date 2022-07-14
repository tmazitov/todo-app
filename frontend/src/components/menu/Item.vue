<template>
    <div class="menu__item" @click="usage(title.toLowerCase())">
        {{title}}
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    props:{
        title: String,
        usage: Function
    },
    setup(props) {


        return  {}
    }
}
</script>

<style scoped>
.menu__item{
    height: fit-content;
    padding: 9px 19px;
}

.menu__item:hover{
    border: 1px solid rgba(255, 255, 255, );
    color: #45A4B7;
    cursor: pointer;
}


</style>
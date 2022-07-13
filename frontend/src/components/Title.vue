<template>
    <div class="title">
        <h1>{{title}}</h1>
        <slot name="date"></slot>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: String,
    },
    setup(){
        
    
    }
}
</script>

<style scoped>
.title{
    color: white;
    padding: 0px 30px;
}

.title > * {
    display: inline-flex;
    margin-right: 20px;
}




</style>
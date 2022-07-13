<template>
    <div class="today">
        <Title title="Today">
            <template v-slot:date>
                <div class="date">{{date}}</div>
            </template>
        </Title>
    </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
    name: 'Today',
    components: {
        Title
    },
    setup(){

        const date = (new Date()).toLocaleDateString()

        return {date}
    }
}
</script>

<style scoped>
.date{
    color: grey;
    display: inline-flex;
    margin-right: 20px;
}
</style>
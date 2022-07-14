<template>
    <div>
        <Title :title="$route.params.topicName"/>
    </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
    name: 'Topic',
    components: {
        Title
    }
}
</script>
<template>
<i class="fas fa-search" @click="$emit('send')"></i>
</template>

<script>
export default {
    name: 'SearchIcon',  
    emits: ['send'],
}
</script>

<style scoped>

</style>
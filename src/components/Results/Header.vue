<template>
    <header>
        <Title :size="fontSize" />
        <SearchBar :searchWidth="searchWidth" :userGithub="userGithub" />
        
    </header>
</template>

<script>
import Title from '../Title.vue'
import SearchBar from '../SearchBar.vue'
import SearchIcon from '../SearchIcon.vue'

export default {
    name: 'Header',
    components: {
        Title,
        SearchBar,
        SearchIcon
    },
    data(){
        return {
            fontSize: '25px',
            searchWidth: '400px',
            userGithub: ''
        }
    },
    methods: {
        clg(){
            console.log('click')
        }
    }
}
</script>

<style scoped>

header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 2rem;
}

h1 {
    font-size: 1.4rem;
}

@media screen and (max-width: 680px) {
    header{
        justify-content: center;
    }
}
</style>
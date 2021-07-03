<template>
    <div id="searchbar-container">
        <input type="text" id="search-bar" :style="setStyles" v-model="userGithub">
        <!-- <i class="fas fa-search" @click="searchUser"></i> -->
    </div>
</template>

<script>
import SearchIcon from './SearchIcon.vue'

export default {
    name: 'SearchBar',
    components: {
        SearchIcon
    },
    props: {
        searchWidth: {
            type: String,
            default: '150px'
        },
        userGithub: {
            type: String,
            default: ''
        },
    },
    data(){
        return {
            userName: null,
            fullName: null,
            publicRepos: null,
            location: null,
            followers: null,
            userAvatar: null
        }
    },
    methods: {
        async searchUser(){
            const response = await fetch(`https://api.github.com/users/${this.userGithub}`)
            const data = await response.json()
            this.userName = data.login
            this.fullName = data.name
            this.publicRepos = data.public_repos
            this.location = data.location
            this.followers = data.followers
            this.userAvatar = data.avatar_url
            console.log(this.userName + ' ' + this.fullName + ' ' + this.publicRepos + ' ' + this.location + ' ' +this.followers + ' ' +this.userAvatar)
        },
        log(){
            console.log(this.userGithub)
        }
    },
    computed: {
        setStyles(){
            return{
                width: this.searchWidth
            }
        }
    }
}
</script>

<style scoped>

#searchbar-container {
    display: flex;
}

#search-bar {
    font-family: "Rubik";
    border: 1px solid #000;
    color: #757575;
    padding: 4px;
    outline: none;
}

/* i {
    font-size: 12px;
    color: white;
    background-color: black;
    padding: 7px 18px;
}

@media screen and (min-width: 768px){

    i {
        font-size: 14px;
    }
} */

@media screen and (max-width: 465px){

    #search-bar{
        width: 100%!important;
    }
}

</style>
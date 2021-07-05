<template>
    <div id="searchbar-container">
        <input type="text" id="search-bar" :style="setStyles" v-model="userGithub" @keyup.enter="searchUser">
        <i class="fas fa-search" @click="searchUser"></i>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
    name: 'SearchBar',
    components: {
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
            userNameTemp: null,
            fullNameTemp: null,
            publicReposTemp: null,
            locationTemp: null,
            followersTemp: null,
            userAvatarTemp: null,
            companyTemp: null,
            repositoriesTemp: [],
            showFriendlyMsg: false
        }
    },
    methods: {
        async searchRepos(){
            const response = await fetch(`https://api.github.com/users/${this.userGithub}/repos`)
            const data = await response.json()
            this.repositoriesTemp = data
            this.setRepositories(this.repositoriesTemp)

        //ff the req is satisfactory, send to results page to show the user.
            if(response.status === 200){
                this.$router.push({path: '/results'})
            } else {
                alert('O usuário não existe, por favor, tente novamente')
            }
        },

        async searchStarred(){
            //define the starred as the length of the called array.
            const response = await fetch(`https://api.github.com/users/${this.userGithub}/starred`)
            const data = await response.json()
            this.setStarred(data.length)
        },

        async searchUser(){
            //defines all user data
            const response = await fetch(`https://api.github.com/users/${this.userGithub}`)
            const data = await response.json()
            this.userNameTemp = data.login
            this.fullNameTemp = data.name
            this.publicReposTemp = data.public_repos
            this.locationTemp = data.location
            this.followersTemp = data.followers
            this.userAvatarTemp = data.avatar_url
            this.companyTemp = data.company
            
            this.setUserName(this.userNameTemp)
            this.setFullName(this.fullNameTemp)
            this.setPublicRepos(this.publicReposTemp)
            this.setLocation(this.locationTemp)
            this.setFollowers(this.followersTemp)
            this.setUserAvatar(this.userAvatarTemp)
            this.setCompany(this.companyTemp)

            this.searchRepos()
            this.searchStarred()
        },
        ...mapMutations(['setUserName', 'setFullName', 'setPublicRepos', 'setLocation', 'setFollowers', 'setUserAvatar', 'setCompany', 'setRepositories', 'setStarred']),
    },

    
    computed: {
        setStyles(){
            return{
                width: this.searchWidth
            }
        },
        ...mapState(['userName', 'fullName', 'publicRepos', 'location', 'followers', 'userAvatar', 'company'])
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

i {
    font-size: 12px;
    color: white;
    background-color: black;
    padding: 8px 18px;
}

.friendlyMsg {
    font-family: 'Rubik';
    font-size: 0.8rem;
    padding-top: 0.5rem;
}

@media screen and (min-width: 768px){

    i {
        font-size: 14px;
    }
}

@media screen and (max-width: 465px){

    #search-bar{
        width: 100%!important;
    }
}

</style>
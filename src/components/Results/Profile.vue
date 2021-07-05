<template>

<div id="profile-content" v-if="userName !== null">
    <img :src="userAvatar" alt="Foto do usuário" id="profile-picture">
    <h2>{{fullName}}</h2>
    <h3>{{userName}}</h3>

    <div id="data-icons">
        <div class="icon" v-if="company !== null">
            <img src="/images/icons/organization.svg" alt="">
            <p>{{company}}</p>
            
        </div>
        
        <div class="icon" v-if="location !== null">
            <img src="/images/icons/location.svg" alt="">
            <p>{{location}}</p>
        </div>
        
        <div class="icon">
            <img src="/images/icons/star.svg" alt="">
            <p>{{starred}}</p>
        </div>
        
        <div class="icon" v-if="publicRepos !== null">
            <img src="/images/icons/repositories.svg" alt="">
            <p>{{publicRepos}}</p>
        </div>
        
        <div class="icon" v-if="followers !== null">
            <img src="/images/icons/followers.svg" alt="">
            <p>{{followers}}</p>
        </div>

    </div>
</div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'Profile',
    computed: {
        ...mapState(['userName', 'fullName', 'publicRepos', 'location', 'followers', 'userAvatar', 'company', 'starred'])
    }
}
</script>

<style scoped>

#profile-content {
    font-family: "Rubik";
}

#profile-content h2 {
    margin-top: 0.5rem;
    color: #000;
    font-weight: 300;
    font-size: 1.5rem;
}

#profile-content h3 {
    color: #757575;
    font-weight: 300;
    font-size: 1rem;
}

#profile-picture {
    width: 100%;
}

#data-icons {
    margin-top: 36px;
}

.icon {
    display: flex;
    align-items: center;
    margin-top: 8px;
}

.icon p {
    margin-left: 10px;
    color: #757575;
    font-weight: 300;
}

@media screen and (max-width: 640px) {
    #profile-picture{
        width: 280px;
    }

    #profile-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
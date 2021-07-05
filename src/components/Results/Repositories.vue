<template>
<div v-if="repositories.length > 0">
    
    <div class="repositories" v-for="(repo, index) in repositories" :key="index">
        <h2><a :href="repo.html_url" target="_blank">{{repo.name}}</a></h2>
        <p v-if="repo.description !== null">Descrição: {{repo.description}}</p>
        <p v-else>Este repositório não tem descrição</p>
        <div id="stars">
            <img src="/images/icons/star.svg" alt="Reputação do Repositório">
            <p>{{repo.stargazers_count}}</p>
            
        </div>
    </div>
</div>

</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'Repositories',
    data(){
        return {
            // filterText: ''
        }
    },
    computed: {
        ...mapState(['repositories'])
    }

}
</script>

<style scoped>

.repositories {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 1.8rem;
}

.repositories h2, .repositories p {
    font-weight: 300;
    font-family: "Rubrik";
}

.repositories p {
    color: #757575;
}

#stars {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

#stars p {
    font-weight: 300;
}

@media screen and (max-width: 640px) {
    .repositories {
        margin-top: 1rem;
        align-items: center;
        padding: 0 0.5rem;
    }
}
</style>
<template>

<div id="profile-content">
    <img :src="image" alt="Foto de perfil do usuario" id="profile-picture">
    <h2>Elvis Gannem</h2>
    <h3>elvisgannem</h3>

    <div id="data-icons">
        <div class="icon">
            <img src="/images/icons/organization.svg" alt="">
            <p>Lux One</p>
        </div>
        
        <div class="icon">
            <img src="/images/icons/location.svg" alt="">
            <p>Fortaleza, CE</p>
        </div>
        
        <div class="icon">
            <img src="/images/icons/star.svg" alt="">
            <p>0</p>
        </div>
        
        <div class="icon">
            <img src="/images/icons/repositories.svg" alt="">
            <p>20</p>
        </div>
        
        <div class="icon">
            <img src="/images/icons/followers.svg" alt="">
            <p>4</p>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'Profile',
    data(){
        return {
            image: 'https://github.com/elvisgannem.png'
        }
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
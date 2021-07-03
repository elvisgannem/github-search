<template>
<div class="repositories">
    <h2>sistema-comentario</h2>
    <p>Descrição: Experimentações - Sistema de comentários usando vue-js</p>
    <div id="stars">
        <img src="/images/icons/star.svg" alt="Reputação do Repositório">
        <p>0</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Repositories'
}
</script>

<style scoped>

.repositories {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
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
    }
}
</style>
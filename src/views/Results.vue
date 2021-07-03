<template>
  <div class="results">
    <Header />

    <div class="grid">
      <Profile />
      <Repositories />
    </div>
  </div>
</template>

<script>

import Header from '../components/Results/Header.vue'
import Profile from '../components/Results/Profile.vue'
import Repositories from '../components/Results/Repositories.vue'
export default {
  components: {
    Header,
    Profile,
    Repositories,
  }
}
</script>

<style scoped>

  .results {
    width: 97%;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 240px 1fr;
    margin-top: 2rem;
    column-gap: 4rem;
  }

  @media screen and (max-width: 640px){
    .grid {
      grid-template-columns: 1fr;
      column-gap: 0;
    }
  } 
    

</style>

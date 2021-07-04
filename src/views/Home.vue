<template>
  <div class="home">
    <Title :size="fontSize" />
    <SearchBar :searchWidth="searchWidth"/>
  </div>
</template>

<script>

import SearchBar from '../components/SearchBar.vue'
import Title from '../components/Title.vue'
import { mapState } from 'vuex'

export default {
  components: {
    SearchBar,
    Title,
  },
  data(){
    return {
      fontSize: '35px',
      searchWidth: '370px'
    }
  },
  methods: {
    
  },
  computed: {
    ...mapState(['number'])
  }
}
</script>

<style scoped>

.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}



</style>

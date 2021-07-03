<template>
  <div class="home">
    <Title :size="fontSize" />
    <div>
      <SearchBar :searchWidth="searchWidth"/>
      <SearchIcon @send="show" />
    </div>
  </div>
</template>

<script>

import SearchBar from '../components/SearchBar.vue'
import SearchIcon from '../components/SearchIcon.vue'
import Title from '../components/Title.vue'

export default {
  components: {
    SearchBar,
    SearchIcon,
    Title,
  },
  data(){
    return {
      fontSize: '35px',
      searchWidth: '370px'
    }
  },
  methods: {
    show(){
      console.log('diste clic')
    }
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

.home div {
  display: flex;
}

i {
    font-size: 12px;
    color: white;
    background-color: black;
    padding: 7px 18px;
}

@media screen and (min-width: 768px){

    i {
        font-size: 14px;
    }
}

</style>

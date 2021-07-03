<template>
<h1 :style="titleStyles">Github <span>Search</span></h1>
</template>


<script>
export default{
    name: 'Title',
    props: {
      size: {
        type: String,
        default: '30px'
      }
    },
    computed: {
      titleStyles(){
        return {
          "font-size": this.size
        }
      }
    }
}
</script>

<style scoped>
h1 {
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
}

h1 span {
  font-weight: 300;
  font-style: italic;
}

@media screen and (min-width: 768px){
    h1{
      font-size: 2.2rem;
    }
}
</style>
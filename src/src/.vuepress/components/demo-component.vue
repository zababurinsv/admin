<template>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'ffff'
      }
    },
    beforeMount() {
      let frontmatter = this.$frontmatter
      console.log(frontmatter)
      this.msg = frontmatter.component
    },
    methods: {
        greet (event) {

       }
    }
  }
</script>

<template>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
  export default {
    data() {
      return {
        msg: ''
      }
    },
    beforeMount() {
      let frontmatter = this.$frontmatter
      this.msg = frontmatter.component
    },
    methods: {
        greet (event) {

       }
    }
  }
</script>

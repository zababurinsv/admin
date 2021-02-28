<template>
  <p class="demo">
    {{ title }}
  </p>
</template>

<script>
  export default {
    props: {
      title: ''
    },
    data() {
      console.log('dddddddddddddddddd', this)
      return {
        msg: this.title
      }
    },
    methods: {
      greet (event) {
      }
    }
  }
</script>

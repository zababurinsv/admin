<template></template>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    let script = document.createElement('script')
    script.type = 'module'
    script.src = '/static/html/components/page-external/page-external.mjs'
    // let url = (location.hostname === 'localhost')?'http://localhost:5000':'https://tunnel-reverse.herokuapp.com'
    let url = 'https://zababurinsv.github.io/auction/'
    this.$el.insertAdjacentHTML('beforeend',`<page-external data-url=${url} data-height=60></page-external>`)
    this.$el.appendChild(script)
  },
  methods: {
    set (event) {
      axios.get(`${location.hostname}`).then((src)=>{
        console.log('event:', src.data.message)
      }).catch((e)=>{
        console.log('error', e)
      })
    },
    get (event) {
      axios.get(`${location.hostname}`).then((src)=>{
        console.log('event:', src.data.message)
      }).catch((e)=>{
        console.log('error', e)
      })
    },
    del (event) {
      axios.get(`${location.hostname}`).then((src)=>{
        console.log('event:', src.data.message)
      }).catch((e)=>{
        console.log('error', e)
      })
    },
    move (event) {
      axios.get(`${location.hostname}`).then((src)=>{
        console.log('event:', src.data.message)
      }).catch((e)=>{
        console.log('error', e)
      })
    }
  }
}
</script>
<style>
.s__main {
  display: flex;
  height: 60vh;
}
</style>
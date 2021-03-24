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
    let url = (location.hostname === 'localhost')?'http://localhost:9876':'https://zababurinsv.github.io'
    url = `${url}/moderator/import`
    this.$el.insertAdjacentHTML('beforeend',`<page-external data-url=${url} data-height=100></page-external>`)
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
.s__moderator {
  display: flex;
  height: 100vh;
}
</style>
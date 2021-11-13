<template>
  <div>
    <p class="demo">
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    let component = axios.get('/static/html/components/manager-board/manager-board.mjs')
    component.then((module)=>{
      let script = document.createElement('script')
      script.type = 'module'
      script.src = '/static/html/components/manager-board/manager-board.mjs'
      this.$el.insertAdjacentHTML('beforeend',`<manager-board preset="index" ></manager-board>`)
      this.$el.appendChild(script)
    })
    let frontmatter = this.$frontmatter
    this.msg = frontmatter.component
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
<template>
  <div class="app__words">
    <button
        class="button_default app__words_set"
        @click="set"
    > Получить список слов</button>
    <button
        class="button_default app__words_get"
        @click="get"
    > Добавить слово</button>
    <button
        class="button_default app__words_del"
        @click="del"
    > Удалить выбранные слова</button>
    <button
        class="button_default app__words_move"
        @click="move"
    > Переместить слово в ...</button>
  </div>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
  let msgServer;
  export default {
    data() {
      return {
        msg: ''
      }
    },
    mounted() {
      const evtSource = new EventSource("http://localhost:9876/events", { withCredentials: false } )

      evtSource.onmessage = function(event) {
        console.log('~~~~~~~~~~~~~~~~~', event.data)
      }
      evtSource.addEventListener("ping", function(event) {
        console.log('~~~~~~~~~ping~~~~~~~~', event.data)
      });
    },
    beforeDestroy() {
      msgServer.close();
    },
    beforeMount() {
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
<style>
  .app__words {
    display: flex;
    flex-direction: column;
    background: #c5c1c7;
    margin-top: 2vw;
    margin-bottom: 2vw;
    border-radius: 0.3vw;
  }
  .button_default {
    box-sizing: border-box;
    padding: 1vw;
    margin: 1vw;
    cursor: pointer;
    border-radius: 0.3vw;
  }
  .button_default:hover {
    color: #37b637;
  }
</style>

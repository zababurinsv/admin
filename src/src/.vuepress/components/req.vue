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
      move (event) {
        console.log('event', event)
      },
      del (event) {
          console.log('event', event)
      },
      get (event) {
        console.log('event', event)
      },
      set (event) {
        console.log('event', event)
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

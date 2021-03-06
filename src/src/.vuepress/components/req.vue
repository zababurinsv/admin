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
    //   (async () => {
    //     try {
    //       console.log('~~~~~~~~~~~~~~', window, document)
          // Store SSE object at a higher scope
          // msgServer = await Vue.$sse('http://localhost:9876/events', { format: 'json' }); // omit for no format pre-processing

          // Catch any errors (ie. lost connections, etc.)
          // msgServer.onError(e => {
          //   console.error('lost connection; giving up!', e);

            // If you don't want SSE to automatically reconnect (if possible),
            // then uncomment the following line:
            // msgServer.close();
          // });

          // Listen for messages without a specified event
          // msgServer.subscribe('', (data, rawEvent) => {
          //   console.warn('Received a message w/o an event!', data);
          // });

          // Listen for messages based on their event (in this case, "chat")
          // msgServer.subscribe('chat', (message, rawEvent) => {
          //   this.messages.push(message);
          // });

          // Unsubscribes from event-less messages after 7 seconds
          // setTimeout(() => {
          //   msgServer.unsubscribe('');
          //
          //   console.log('Stopped listening to event-less messages!');
          // }, 7000);

          // Unsubscribes from chat messages after 7 seconds
          // setTimeout(() => {
          //   msgServer.unsubscribe('chat');

            // console.log('Stopped listening to chat messages');
          // }, 14000);
        // } catch (err) {
          // When this error is caught, it means the initial connection to the
          // events server failed.  No automatic attempts to reconnect will be made.
          // console.error('Failed to connect to server', err);
        // }
      // })();
    },
    beforeDestroy() {
      // Make sure to close the connection with the events server
      // when the component is destroyed, or we'll have ghost connections!
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

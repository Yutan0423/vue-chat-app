const Balloon = {
    template:
    `<div class="conversation-balloon" :class="speaker">
        <div class="avatar">
            <img src="../images/ahiruguchi_man.png">
            <p class="name">{{ name }}</p>
        </div>
        <p class="message">{{ message }}</p>
    </div>`,
    props: {
        name: {
            type: String
        },
        speaker: {
            type: String
        },
        message: {
            type: String
        },
    }
};

const ChatForm = {
    template:
    `<div class="chat-form">
        <div class="form-container">
            <input type="text" class="message" v-model="message">
            <button class="submit" @click="submit">送信</button>
        </div>
    </div>`,
    props: {
        applyEvent: {
            type: String
        }
    },
    data() {
        return {
            message: ''
        }
    },
    methods: {
        submit() {
            this.$emit(this.applyEvent, this.message);
            this.message = '';
        }
    }
};

const app = new Vue({
    el: '#app',
    components: {
        balloon: Balloon,
        chatForm: ChatForm
    },
    data() {
        return {
            chatLogs: []
        }
    },
    methods: {
        submit(value) {
            this.chatLogs.push({
                name: 'Me',
                speaker: 'me',
                message: value
            })

            this.botSubmit();
            this.scrollDown();
        },
        botSubmit() {
            setTimeout(() => {
                this.chatLogs.push({
                    name: 'Bot',
                    speaker: 'bot',
                    message: 'Hello Vue.js !'
                })
                this.scrollDown();
            },1000);

        },
        scrollDown() {
            const target = this.$el.querySelector('.chat-timeline');
            setTimeout(() => {
              const height = target.scrollHeight - target.offsetHeight;
              target.scrollTop += 10;

              if(height <= target.scrollTop) {
                return;
              } else {
                this.scrollDown();
              }
            }, 0);
          }
    }
})


// const Balloon = {
//   template:
//   `<div class="conversation-balloon" :class="speaker">
//     <div class="avatar">
//       <img src="../images/ahiruguchi_man.png">
//       <p class="name">{{ name }}</p>
//     </div>
//     <p class="message">{{ message }}</p>
//   </div>`,
//   props: {
//     name: {
//       type: String
//     },
//     speaker: {
//       type: String
//     },
//     message: {
//       type: String
//     }
//   }
// };

// const ChatForm = {
//   template:
//   `<div class="chat-form">
//     <div class="form-container">
//       <input type="text" class="message" v-model="message">
//       <button class="submit" @click="submit">送信</button>
//     </div>
//   </div>`,
//   props: {
//     applyEvent: {
//       type: String
//     }
//   },
//   data() {
//     return {
//       message: ''
//     }
//   },
//   methods: {
//     submit() {
//       this.$emit(this.applyEvent, this.message);
//       this.message = '';
//     }
//   }
// };

// const app = new Vue({
//   el: '#app',
//   components: {
//     balloon: Balloon,
//     chatForm: ChatForm
//   },
//   data() {
//     return {
//       chatLogs: []
//     }
//   },
//   methods: {
//     submit(value) {
//       this.chatLogs.push({
//         name: 'Me',
//         speaker: 'me',
//         message: value
//       });

//       this.botSubmit();
//       this.scrollDown();
//     },
//     botSubmit() {
//       setTimeout(() => {
//         this.chatLogs.push({
//           name: 'Bot',
//           speaker: 'bot',
//           message: 'Hello Vue.js !'
//         });

//         this.scrollDown();
//       }, 1000);
//     },
//     scrollDown() {
//       const target = this.$el.querySelector('.chat-timeline');
//       setTimeout(() => {
//         const height = target.scrollHeight - target.offsetHeight;
//         target.scrollTop += 10;

//         if(height <= target.scrollTop) {
//           return;
//         } else {
//           this.scrollDown();
//         }
//       }, 0);
//     }
//   }
// });

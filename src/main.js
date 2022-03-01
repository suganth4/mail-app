import Vue from 'vue'
import App from './App.vue'
import Sent from "./components/sent.vue"
import Inbox from "./components/inbox.vue"
import Important from "./components/important.vue"
import Trash from "./components/trash.vue"
Vue.config.productionTip = false
export var eventBus = new Vue()

Vue.component("Sent", Sent)
Vue.component("Inbox", Inbox)
Vue.component("Important", Important)
Vue.component("trash", Trash)

new Vue({
  render: h => h(App),
}).$mount('#app')



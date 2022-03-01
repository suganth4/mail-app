<template>
  <div id="app1">
      <Sidebar :deletes = "deletes" :mail = "mail" :important = "important"></Sidebar>
      <Content :deletes = "deletes" :mail = "mail" :important = "important"></Content>
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'
import Content from './components/content.vue'

export default {
  name: 'App',
  data(){
    return{
      deletes: [],
      mail: [],
      important: []
    }
  },
  components: {
    Sidebar,
    Content
  }
}
</script>
home setting
<style>
 #app1{
   display: flex;
   justify-content: center;
 }
</style>

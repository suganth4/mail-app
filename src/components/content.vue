<template>
    <div>
        <div id="inbox">
            <p> Inbox </p>
        </div>
        <div>
            <keep-alive>
                <component :is="title" :deletes = "deletes" :mail = "mail" :important = "important"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import { eventBus } from '../main'

export default {
    name:"content",
    data(){
        return{
            title: "",
        }
    },
    props:["deletes", "mail", "important"],
    created(){
        console.log(typeof(this.title));
        eventBus.$on("componentEvent", (data)=>{
            this.title = data.components

            console.log(data.components);
        })
    }
}
</script>
<style scoped>
    #inbox{
        background-color: rgb(7, 151, 115);
        opacity: 0.8;
        color: white;
        font-size: 20px;
        padding-top:18px;
        padding-bottom:18px;
        padding-left: 20px;
        padding-right: 20px;
        width: 800px;
    }
    p{
        margin: 0px;
    }
</style>
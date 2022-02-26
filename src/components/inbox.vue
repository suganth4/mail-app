<template>
    <div id="table">
        <div v-if="!success">
            <div>
                <button @click="add"><i class="fas fa-sync-alt"></i>Refresh</button>
            </div>
            <div id="grid">
                <div class = "row" v-for="(data,index) in mail" :key="index">
                    <input type="checkbox">
                    <span @click="addImp($event, data)" :ref="data.subject" ><i class="far fa-star"></i></span>
                    <div id="subject" @click="hide(data)">
                        <p>{{ data.from.name }}</p>
                        <p>{{ data.subject }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div>
                <button @click="back()" id="back"><i class="fas fa-arrow-left"></i>Back</button>
                <button @click="remove(message)" id="delete" ref="delete"><i class="fas fa-sync-alt"></i>Delete</button>
                <button @click="read = !read" :class="{ unread : read, read: !read }" ><i class="fas fa-sync-alt"></i>Mark as unread</button>
                <button @click="read = !read" :class="{ read: read, unread: !read }"><i class="fas fa-sync-alt"></i>Mark as read</button>
            </div>
            <div>
                <div>
                    <b>Date</b>
                </div>
                <div>
                    <b>From : </b>
                    <span>{{ message.from.email }}</span>
                </div>
                <div>
                    <div v-html="message.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mails from "../mails"
export default {
    data(){
        return {
            success: false,
            message: "",
            read: true
        }
    },
    props:["deletes", "mail", "important"],
    methods : {
        back(){
            this.success = false
        },
        add(){
            this.mail.push(mails[Math.floor(Math.random() * (mails.length))])
        },
        addImp(event, data){
            // this.$refs.imp[0].style.color = "orange"
            event.target.style.color = "orange"
            this.important.push(data)
        },
        hide(data){
            this.success = true
            this.message = data
        },
        remove(message1){
            var index = this.mail.findIndex(function(obj){
                return obj.subject == message1.subject
            })
            // var index = this.mail.findIndex(function(obj){
            //     return obj.subject == data
            // })
            this.mail.splice(index,1)
            this.$refs.delete.innerHTML = '<i class="fas fa-sync-alt"></i> Deleted'
            this.$refs.delete.disabled = true
            this.deletes.push(message1)
        }
    }
}
</script>
<style scoped>
    #table{
        margin-left:10px ;
        margin-top:10px ;
    }
    button{
        padding:8px 10px 8px 10px;
        opacity: 0.5;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0,0.5);
        margin-bottom:10px ;
        margin-right: 10px;
    }
    .fas{
        padding-right:5px;
    }
    #back{
        background-color: blue;
        opacity: 1;
        color: white;
    }
    #back:hover{
        opacity: 0.7;
    }
    #delete{
        background-color: red;
        opacity: 1;
        color: white;
    }
    #grid{
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
    .row{
        display: grid;
        grid-template-columns: 50px 50px 450px 50px 200px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px;
    }
    p{
        margin: 0px;
    }
    #subject{
        display: grid;
        grid-template-columns: 150px 300px ;
    }
    .read{
        background-color: blue;
        opacity: 1;
    }
    .unread{
        background-color:blue ;
        opacity: 0.7;
    }
</style>
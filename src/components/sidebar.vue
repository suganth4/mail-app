<template>
    <div id="sidebar">
        <div id="top">
            <img src="../assets/luffy.png" alt="fsdfdsf">
            <span>
                <p>suganth</p>
                <p>suganthsuganth6@gmail.com</p>
            </span>
        </div>
        <div id="bottom">
            <ul>
                <li @click="change('Inbox')"><div><i class="fas fa-inbox"></i><span>Inbox</span></div><span id="inbox">{{ mail.length }}</span></li>
                <li @click="change('Sent')"><div><i class="far fa-envelope"></i><span>Sent</span></div><span id="sent">{{ Inbox }}</span></li>
                <li @click="change('Important')"><div><i class="far fa-trash-alt"></i><span>Important</span></div><span id="important">{{ important.length }}</span></li>
                <li @click="change('trash')"><div><i class="far fa-trash-alt"></i><span>Trash</span></div><span id="trash">{{ deletes.length }}</span></li>
            </ul>
        </div>
    </div>
</template>
<script>

import { eventBus } from '../main.js'

export default {
    props:["deletes", "mail", "important"],
    methods: {
        change(component){
            console.log(component)
            eventBus.$emit("componentEvent", {
                components : component
            })
        }
    }
}
</script>
<style scoped>
    #sidebar{
        width: 270px;
        background-color: rgba(0, 0, 0, 0.1);
    }
    img{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        float: left;
    }
    p{
        margin:0px;
        margin-left: 50px;
        opacity: 0.8;
        font-size: 15px;
    }
    #top{
        background-color: rgb(7, 134, 151);
        opacity: 0.8;
        color: white;
        padding-top:10px;
        padding-bottom:15px;
        padding-left: 10px;
    }
    ul{
        list-style: none;
        padding: 0px;
        margin: 0px;
    }
    li{
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    li:hover{
        cursor: pointer
    }
    li div{
        width: 100px;
    }
    i{
        width: 15px;
        margin-right: 10px;
    }
    #inbox{
        background-color: red;
        padding: 3px 6px 3px 6px;
        font-size: 11px;
        font-weight: bold;
    }
    #sent{
        background-color: black;
        padding: 3px 6px 3px 6px;
        margin: 0px;
        font-size: 10px;
        font-weight: bold;
        color:white
    }
    #important{
        background-color: rgb(255, 238, 0);
        padding: 3px 6px 3px 6px;
        font-size: 11px;
        font-weight: bold;
        color:white
    }
    #trash{
        background-color: blue;
        padding: 3px 6px 3px 6px;
        font-size: 11px;
        font-weight: bold;
        color:white
    }

</style>
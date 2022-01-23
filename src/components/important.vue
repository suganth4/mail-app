<template>
    <div id="table">
        <div id="grid">
            <div class = "row" v-for="(data,index) in important" :key="index" @click="hide(data)">
                    <input type="checkbox">
                    <i class="far fa-star"></i>
                    <p>{{ data.from.name }}</p>
                    <p>{{ data.subject }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["deletes", "mail", "important"],
}
</script>
<style scoped>
    #table{
        margin-left:10px ;
        margin-top:10px ;
    }
    #grid{
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
    .row{
        display: grid;
        grid-template-columns: 50px 50px 150px 300px 50px 200px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px;
    }
    p{
        margin: 0px;
    }
</style>
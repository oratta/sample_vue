<template>
    <form>
        <label for="name">氏名: </label>
        <input type="text" id="name"
               v-on:keyup.esc="clear()"
               v-on:keyup.ctrl.81="help"
               v-model="name" />
    </form>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data: ()=>({
            name: '匿名'
        }),
        methods: {
            clear: function(){
                this.name = "";
            },
            help: function(){
                window.alert('氏名を漢字で入力してください')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>

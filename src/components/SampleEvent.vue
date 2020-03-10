<template>
    <div class="container">
        <form>
            <label for="name">氏名: </label>
            <input type="text" id="name"
                   v-on:keyup.esc="clear()"
                   v-on:keyup.ctrl.81="help"
                   v-model="name" />
        </form>
        <div id="mouth"
             v-on:click.left="onLeftClick"
             v-on:click.right.prevent="onRightClick">
            ボタンの右クリックでコンテキストメニューを表示します
        </div>
        <ul class="cxt" v-bind:style="mousePos" v-show="showMenu">
            <li><a href="">ヘルプ</a></li>
            <li><a href="">テスト</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: ()=>({
            name: '匿名',
            showMenu: false,
            mousePos: {
                left: 0,
                top: 0,
            },
        }),
        methods: {
            onLeftClick: function(){
                this.showMenu = false;
            },
            onRightClick: function(e){
                this.mousePos = {
                    top: e.pageY + 'px',
                    left: e.pageX + 'px',
                }
                this.showMenu = true;
            },
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

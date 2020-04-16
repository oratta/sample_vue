<template>
    <div container>
        <div class="counter-lavel">
            {{ count }}
        </div>
        <div class="counter-button">
            <input type="button" value="-" v-on:click="minus" />
            <input type="button" value="+" v-on:click="plus" />
        </div>

        <div class="module">
            メイン : {{mainUpdated}} <br />
            サブ : {{subUpdated}} <br />
            <input type="button" value="更新" v-on:click="setUpdated" />
        </div>

    </div>
</template>

<script>
export default {
    name: 'VuexSample',
    computed: {
        count : function(){
            return this.$store.state.count;
        },
        mainUpdated: function(){
            return this.$store.state.mainmain.updated;
        },
        subUpdated: function(){
            return this.$store.state.sub.updated;
        }
    },
    methods: {
        minus: function(){
            this.$store.commit('minus');
        },
        plus: function(){
            this.$store.commit('plus');
        },
        setUpdated: function(){
            this.$store.commit('mainmain/setUpdated');
            this.$store.commit('sub/setUpdated')
        }
    }
}
</script>
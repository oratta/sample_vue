<template>
    <div container>
        <div class="counter-lavel">
            {{ count }}
        </div>
        <div class="counter-button">
            <input type="button" value="-" v-on:click="minus" />
            <input type="button" value="+" v-on:click="plus" />
        </div>

    </div>
</template>

<script>
export default {
    name: 'VuexSample',
    computed: {
        count : function(){
            return this.$store.state.count;
        }
    },
    methods: {
        minus: function(){
            this.$store.commit('minus');
        },
        plus: function(){
            this.$store.commit('plus');
        }
    }
}
</script>
<template>
    <div id="container">
        <component v-bind:is="currentBanner"></component>
    </div>
</template>

<script>
    import BannerMember from './sample_switch_component/BannerMember.vue';
    import BannerNew from './sample_switch_component/BannerNew.vue';
    import BannerEnv from './sample_switch_component/BannerEnv.vue';

    export default {
        name: 'App',
        components: {
            BannerMember,
            BannerNew,
            BannerEnv,
        },
        created: function() {
            let that = this;
            this.interval = setInterval(function(){
                that.current = (that.current + 1) % that.components.length;
            },3000);
        },
        beforeDestroy: function(){
            clearInterval(this.interval)
        },
        data: ()=>({
            current: 0,
            components: ['Member', 'New', 'Env']
        }),
        computed: {
            currentBanner: function() {
                return 'Banner' + this.components[this.current];
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

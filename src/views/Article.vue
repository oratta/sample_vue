<template>
    <div>
        <div>記事コード : {{ aid }}</div>
        <span>
            <router-link v-bind:to="'/article/'+ aid + '/pages/1'" >
                Page: 1
            </router-link>
        </span>
        |
        <span>
            <router-link v-bind:to="'/article/'+ aid + '/pages/2'">
                Page: 2
            </router-link>
        </span>

        <hr />
        <router-view />
    </div>
</template>

<script>
//公開期限が切れている記事のアクセスをガードするナビゲーションガード
let timeGuard = function(to, from, next){
    //記事ごとの制限時間
    //fixme DBで管理する
    let data = {
        13: new Date(2020, 10, 30),
        108: new Date(2018, 10, 30)
    };
    //移動先のaidからゆうコプ期限を取得
    let limitDate = data[to.params.aid] ? data[to.params.aid] : new Date(2999, 12, 31);

    let currentDate = new Date();
    if(limitDate && limitDate.getTime() > currentDate.getTime()){
        next();
    }
    else {
        window.alert('the article has expired');
        next(false);
    }

}

export default{
    name: 'Article',
    beforeRouteEnter: timeGuard,
    beforeRouteUpdate: timeGuard,
    props: {
        aid: String
    }
}
</script>
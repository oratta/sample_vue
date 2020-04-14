<template>
    <div class="container">
        <div class="books_counter">
            <h2>Books counter</h2>
            <p>書籍数 : {{booksCount}}</p>
            <ul>
                <li v-for="b of getBooksByPrice(2500)" v-bind:key="b.isbn">
                    {{b.title}} ({{b.price}}円)<br />
                    ISBN : {{b.isbn}}
                </li>
            </ul>
        </div>
        <div class="books_register">
            <form v-on:submit.prevent="register">
                <label for="isbn">ISBN : </label>
                <input type="text" id="isbn" v-model="isbn" /><br />
                <label for="title">Title : </label>
                <input type="text" id="text" v-model="title" /><br />
                <label for="price">Price : </label>
                <input type="number" id="price" v-model="price" /><br />
                <input type="submit" value="登録" />
            </form>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data (){
        return {
            isbn: '',
            title: '',
            price: 0
        }
    },
    methods: {
        register(){
            this.$store.commit('addBook', {
                book: {
                    isbn: this.isbn,
                    title: this.title,
                    price: this.price,
                }
            })
        }
    },
    computed: mapGetters(['booksCount', 'getBooksByPrice'])
}
</script>
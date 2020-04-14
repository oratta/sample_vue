import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    count: 0,
    books: [
      {
        isbn: '111',
        title: 'ムフフなモフフ',
        price: 200000,
      },
      {
        isbn: '222',
        title: 'ゲゲゲのとほほ',
        price: 10,
      },
      {
        isbn: '333',
        title: 'レレレのとほほ',
        price: 20,
      }
    ]
  },
  getters: {
    booksCount(state){
      return state.books.length;
    },
    getBooksByPrice(state){
      return price => {
        return state.books.filter(book => book.price < price);
      };
    }
  },
  mutations: {
    minus(state){
      state.count--;
    },
    plus(state){
      state.count++;
    },
    addBook(state, payload){
      state.books.push(payload.book);
    }
  },
  actions: {
  },
  modules: {
  }
})

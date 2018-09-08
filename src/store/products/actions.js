import productServices from '../../services/products'

export default {
  get({ commit, state }) {

      return productServices
        .get(null, state.page * 20)
        .then((data) => {
            commit('setProducts', data)
        })
  },
  loadMore({ commit, state, dispatch }, page = null) {
    if (page) {
      commit('setNextPage', page)
    } else {
      commit('setNextPage', state.page + 1)
    }
    dispatch('get')
  }
}

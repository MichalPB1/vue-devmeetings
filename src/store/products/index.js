import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  products: [],
  page: 1
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

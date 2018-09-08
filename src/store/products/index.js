import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  products: [
    {
      id: 1,
      name: 'Apple',
      price: 10.99
    },
    {
      id: 2,
      name: 'Orange',
      price: 15.99
    },
    {
      id: 3,
      name: 'Lemon',
      price: 19.99
    },
    {
      id: 3,
      name: 'Bannana',
      price: 199.99
    }
  ]
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

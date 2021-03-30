export const state = () => ({
 
})

export const mutations = {
  
}
export const actions = { 
  nuxtServerInit ({ dispatch }) {
    dispatch('users/loadUsers', '1')
  }
}
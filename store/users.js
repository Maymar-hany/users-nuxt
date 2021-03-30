
 export const state = () => ({
    usersData: [],
    user: {},
    total: ' ',
    currentPage: '',
    lastuser:1,
    token:''

  })

  export const mutations = { 
    SAVE_USERS (state, users) {
      state.usersData= users
    },
    TOTAL_USERS (state, total) {
      state.lastuser = total +1
    },

    TOTAL_PAGES (state, total) {
      state.total = total 
    },
    USER_PROFILE (state, userid) {
      state.user = state.usersData.find(u => u.id === userid)
    },
    DELETE_USER (state, user) {
      var index = state.usersData.findIndex(u => u.id === user)
      state.usersData.splice(index, 1)
    },

    UPDATE_USER (state, payload) {
      state[payload.name] = payload.data

      var index = state.usersData.findIndex(u => u.id === payload.data.id)
      state.usersData.splice(index, 1, payload.data)
    },
    CURRENT_PAGE (state, payload) {
      state.currentPage = payload
    },
    ADD_USER(state, payload){
      state.lastuser = state.lastuser + 1
      state.usersData.push(payload)
    }

  }
  export const actions = { 
    loadUsers ({ commit }, payload) {
      this.$axios.get('https://reqres.in/api/users?page=' + payload).then(function (data) {
        commit('TOTAL_PAGES', data.data.total_pages)
        commit('SAVE_USERS', data.data.data)
        commit('TOTAL_USERS', data.data.total)
      })
    },
    getUser ({ commit }, payload) {
      commit('USER_PROFILE', payload)
    },
    addUser({ commit }, payload) {
    commit('ADD_USER', payload)
   
  },
  
  
  }
  export const getters = {

    userData: state => {
      return state.user
    },
    getUserById: (state) => (id) => {
      return state.usersData.find(user => user.id === id)
    },
    getUsers: (state) => {
      return state.usersData
    },
    getPage: (state) => {
      return state.currentPage
    }

  }
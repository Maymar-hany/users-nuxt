
 export const state = () => ({
    users: [],
    user: {},
    total: ' ',
    currentPage: '',
    lastuser:1,
    token:''

  })

  export const mutations = { 
    saveUsers (state, users) {
      state.users = users
    },
    totalUsers (state, total) {
      state.lastuser = total +1
    },

    totalPages (state, total) {
      state.total = total 
    },
    User_Profile (state, userid) {
      state.user = state.users.find(u => u.id === userid)
    },
    DELETE_USER (state, user) {
      var index = state.users.findIndex(u => u.id === user)
      state.users.splice(index, 1)
    },

    setData (state, payload) {
      state[payload.name] = payload.data

      var index = state.users.findIndex(u => u.id === payload.data.id)
      state.users.splice(index, 1, payload.data)
    },
    Current_Page (state, payload) {
      state.currentPage = payload
    },
    Add_User(state, payload){
      state.lastuser = state.lastuser + 1
      state.users.push(payload)
    }

  }
  export const actions = { 
    loadUsers ({ commit }, payload) {
      this.$axios.get('https://reqres.in/api/users?page=' + payload).then(function (data) {
        commit('totalPages', data.data.total_pages)
        commit('saveUsers', data.data.data)
        commit('totalUsers', data.data.total)
      })
    },
    getUser ({ commit }, payload) {
      commit('User_Profile', payload)
    },
    addUser({ commit }, payload) {
    commit('Add_User', payload)
   
  },
  
 async nuxtServerInit ({ dispatch }) {
    
   await dispatch('loadUsers', '1')
         
    }
  
  }
  export const getters = {

    userData: state => {
      return state.user
    },
    getUserById: (state) => (id) => {
      return state.users.find(user => user.id === id)
    },
    getUsers: (state) => {
      return state.users
    },
    getPage: (state) => {
      return state.currentPage
    }

  }



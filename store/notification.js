
   export const state = () => ({
      message: ''
    })
  
    export const  mutations = {
      Show_message (state, payload) {
        state.message = payload
      }
    }
    export const actions = {
      showMessage ({ commit }, payload) {
     /*   toast({
          message: payload,
          type: 'is-primary',
          position: 'bottom-right',
          closeOnClick: true,
          pauseOnHover: true,
          opacity: 0.8
        })   */
        this.$toast.global.mytoast({
          message: payload
        })
         
        commit('Show_message', payload)
      }
  
    }
    

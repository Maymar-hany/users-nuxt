<template>
<div id="login" class="column is-half
is-offset-one-quarter">
            <section class="section">

                    <form class="box" @submit.prevent="login">
                        <div class="field">
                          <label class="label">Email</label>
                          <div class="control">
                            <input class="input" v-model="Email" type="email" placeholder="Email">
                          </div>
                        </div>

                        <div class="field">
                          <label class="label">Password</label>
                          <div class="control">
                            <input class="input" v-model="Password" type="password" placeholder="Password">
                          </div>
                        </div>
                      <p id="msg" class ="has-text-danger"></p>
                        <button class="button is-primary ">Sign In</button>
                      </form>

              </section>

        </div>
</template>

<script>

export default {
  name: 'Login',
  components: {

  },

  methods: {
    login () {
      var nav = this.$router
      var navigate = this.$route
      var store = this.$store
      if (this.Email !== '' && this.Password !== '') {
        this.$axios.post('https://reqres.in/api/login', {
          email: this.Email,
          password: this.Password
        }).then(function (response) {
        
           store.dispatch('users/userToken', response.data.token)
           //  store.state.token = response.data.token
      
           

          if (store.state.token != null) {
           console.log(store.state.token)
            
            if (navigate.params.nextUrl != null) {
              nav.push(navigate.params.nextUrl)
            } else {
              nav.push({ name: 'UserList' })
            } 
          }  
          
          nav.push({ name: 'UserList' })

        })
          .catch(function (error) {
            console.log(error)
            
            document.getElementById('msg').innerHTML = 'A email or password is incorrect'
          })
      } else {
        document.getElementById('msg').innerHTML = 'A email and password must be present'
      }
    }

  },
  computed: {

  },
  data () {
    return {

      Email: '',
      Password: ''
    }
  },
  created () {
   
  }
}
</script>

<style scoped lang="sass">

</style>

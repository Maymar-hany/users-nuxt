<template>
  <div id="list" >
    <Edit v-show="openEdit" />
    <Delete v-show="openDelete" :id="this.userid" />

          <section class="hero is-primary is-align-items-center">
            <div class="hero-body">
              <p class="title">
                Users
              </p>

            </div>
          </section>
            <section class="section">
                <div class="column is-half
                      is-offset-one-fifth">
                      
                        <input id="search" class="input is-primary" type="text" v-model="search"  placeholder="Search Users By First Name">
                          
                  <table class="table is-bordered is-striped is-narrow is-fullwidth">
                    <thead>
                      <tr>
                        <th >Id</th>
                        <th>Users
                           <button class="button is-primary" > 
                          <nuxt-link :to="'/addUser'"> Add User</nuxt-link></button>
                          </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="user.id" v-for="user in searchUsers">
                        <td >{{user.id}}</td>

                        <td>{{user.first_name}} {{user.last_name}}

                           <button class="button is-primary" @click="deleteProfile(user.id)" > Delete
                          </button>
                           <button class="button is-primary" @click="editProfile(user.id)" > Edit
                          </button>
                           

                            <button class="button is-primary" @click="viewProfile(user.id)" >
                          <nuxt-link :to="'/Profile/'+ user.id"> View profile</nuxt-link></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous" title="This is the first page" @click="getPreviousData" :disabled="currentPage==first">Previous</a>
  <a class="pagination-next" @click="updatePage" :disabled="currentPage==TotalPages">Next page</a>
  <ul class="pagination-list">
    <li :key="index" v-for="index of TotalPages">
      <a v-bind:class="['pagination-link', { 'is-current' : index==currentPage }]" @click="getResource(index)" aria-label="Page 1" aria-current="page">{{index}}</a>
    </li>

  </ul>
</nav>
                </div>
              </section>

        </div>
</template>

<script>
import Edit from '../components/editUser'
import Delete from '../components/deleteUser'
import { mapGetters } from 'vuex'
export default {
  
  name: 'Userlist',
  components: {
    Edit,
    Delete

  },
  props: {

  },
  data () {
    return {

      currentPage: 1,
      TotalPages: '',
      first: 1,
      openEdit: false,
      openDelete: false,
      open:true,
      userid:'',
      search:''

    }
  },
   mounted() {
    this.$fbCustomerChat.setOptions({
      theme_color: '#2c3e50'
    })},
  methods: {
    updatePage () {
      if (this.currentPage !== this.TotalPages) {
        this.currentPage += 1
        this.getResource(this.currentPage)
      }
    },

    getPreviousData () {
      if (this.currentPage !== this.first) {
        this.currentPage -= 1
      }
      this.getResource(this.currentPage)
    },

    getResource (page) {
      this.TotalPages = this.$store.state.users.total
      this.$store.commit('users/CURRENT_PAGE', page)
      this.$store.dispatch('users/loadUsers', this.getpage)
      this.currentPage = page
    },
    viewProfile (userid) {
      this.$store.dispatch('users/getUser', userid)
    },
    editProfile (userid) {
      
      this.$store.dispatch('users/getUser', userid)
       this.$store.dispatch('users/openEdit', this.open)
      this.openEdit=true
      
      
     
    },
    deleteProfile(userid){
      this.userid=userid
      this.$store.dispatch('users/openDelete', this.open)
      this.openDelete=true
      
    }

  },
  created () {
   
  },

  computed: {

   ...mapGetters(
      {      
        users:'users/getUsers',
        getpage:'users/getPage'
      }), 
       searchUsers(){
                const lowercaseSearch = this.search.toLowerCase().trim()

            return this.users.filter((user) => {
                return user.first_name.toLowerCase().trim().match(lowercaseSearch)
            });
    
        }
  }

}
</script>

<style scoped>
button{
  float: right;
   margin: 5px
}
 a {

     color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
li{
  color: aquamarine;
}
.pagination-link.is-current,.pagination-next,.pagination-previous{
  background:#00D1B2 !important
}
a.pagination-link{
  color: black;
}
a.pagination-link.is-current{
  color: #fff;
}
#search{
  margin-bottom: 10px;
}
</style>

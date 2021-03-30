<template>
  <div id="list" >
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
                      <button class="button is-primary" >
                          <nuxt-link :to="'/addUser'"> Add User</nuxt-link></button>
                  <table class="table is-bordered is-striped is-narrow is-fullwidth">
                    <thead>
                      <tr>
                        <th >Id</th>
                        <th>Users</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="user.id" v-for="user in users">
                        <td >{{user.id}}</td>

                        <td>{{user.first_name}} {{user.last_name}}

                           <Delete :id="user.id" />
                           <Edit :id="user.id" />
                           

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
      first: 1

    }
  },
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
      this.TotalPages = this.$store.state.total
      this.$store.commit('Current_Page', page)
      this.$store.dispatch('loadUsers', this.$store.getters.getPage)
      this.currentPage = page
    },
    viewProfile (userid) {
      this.$store.dispatch('getUser', userid)
    }

  },
  created () {
   
   
  },

  computed: {

     users () {
      return this.$store.getters.getUsers
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
</style>

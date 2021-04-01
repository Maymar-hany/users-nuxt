<template>
  <div id="edit">


    <div id="ID" :class="['modal', { 'is-active' : clicked }]">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title"> Edit User </p>
      <button id="close" class="delete" aria-label="close"  @click="isClosed">  </button>
    </header>
    <section class="modal-card-body">
     <form @submit.prevent="edit()" >
         <div class="field">
    <label class="label">First Name</label>
    <div class="control">
      <input class="input" type="text" id="fname" v-model="newuser.first_name">
    </div>
  </div>
  <div class="field">
    <label class="label">Last Name</label>
    <div class="control">
      <input class="input" type="text" id="lname" v-model="newuser.last_name">
    </div>
  </div>
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" id="email" v-model="newuser.email">
    </div>
  </div>
<button  class="button is-primary">Save Changes</button>
</form>
    </section>

  </div>
</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Edit',
  components: {

  },
  data () {
    return {
      clicked: '',
      user: {
        first_name: '',
        last_name: '',
        email: ''
      },
      newuser: {}

    }
  },
  props: {
    
    
  },
  methods: {
    
    isClosed () {
      this.$store.dispatch('users/openPage', !this.clicked)
    },

    edit () {
      this.$store.commit('users/UPDATE_USER', {
        name: 'user',
        data: this.newuser
      })

      this.$store.dispatch('users/openPage', !this.clicked)
      this.$store.dispatch('notification/showMessage', 'saved successfully')
    }

  },
  computed: {

    ...mapGetters(
      {      
        userdata:'users/userData',
        openPage:'users/openPage'
      }
    )
  },
  watch:{
  userdata(newdata){
    this.newuser = Object.assign({}, newdata)
  },
  openPage(newvalue){
    this.clicked= newvalue
     
  }
  
  },

  created () {
   // this.clicked= this.openPage
   
    
  }
}
</script>

<style scoped>
button{
  float: right;
  margin: 5px;

}

</style>

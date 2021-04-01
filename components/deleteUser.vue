<template>
  <div id="edit">


    <div id="ID" :class="['modal', { 'is-active' : clicked }]">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title"> Delete User </p>
      <button id="close" class="delete" aria-label="close"  @click="isClosed">  </button>
    </header>
<section class="modal-card-body">
  <p> Are you sure you want to delete this user </p>
<button  class="button is-dark"  @click="isClosed">No</button>
<button  class="button is-danger" @click="deleteUser">Yes</button>

    </section>

  </div>
</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Delete',
  components: {

  },
  data () {
    return {
    clicked: ''
    }
  },
  props: {
    id: ''
  },
  methods: {
    deleteUser () {
      this.$store.commit('users/DELETE_USER', this.id)
      this.$store.dispatch('users/openPage', !this.clicked)
       this.$store.dispatch('notification/showMessage', 'Deleted successfully')
      this.clicked=false
    }, isClosed () {
      this.$store.dispatch('users/openPage', !this.clicked)
    },
  }, computed: {

    ...mapGetters(
      {      
        openPage:'users/openPage'
      }
    )
  },
  watch:{
 
  openPage(newvalue){
    this.clicked= newvalue
     
  }
  
  }
}
</script>

<style scoped>
button{
  float: right;
  margin: 5px;
}

</style>
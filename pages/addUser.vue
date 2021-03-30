<template>
  
<div id="add" class="column is-half
is-offset-one-quarter">
            <section class="section">
   
     <form class="box" @submit.prevent="add()" >
         <div class="field">
    <label class="label">First Name</label>
    <div class="control">
      <input class="input" type="text" id="fname" required v-model="newUser.first_name">
    </div>
  </div>
  <div class="field">
    <label class="label">Last Name</label>
    <div class="control">
      <input class="input" type="text" id="lname" required v-model="newUser.last_name">
    </div>
  </div>
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" id="email" required v-model="newUser.email">
    </div>
     <div class="field">
    <label class="label">Upload Photo</label>
    <div class="control">
      <input type="file" accept="image/*"  @change='uploadImage'>
       <img :src="newUser.avatar" class="uploading-image" />
    </div>
     </div>
  </div>
<button  class="button is-primary">Add User</button>
</form>
            </section>
  </div>
</template>

<script>

export default {
  name: 'Add',
  components: {

  },
  data () {
    return {
        newUser:{
        first_name:'',
        last_name:'',
        email:'',
        avatar:'',
        id:''
        }
    
    }
  },
  props: {
    
  },
  methods: {

    add () {
     this.newUser.id= this.$store.state.lastuser 
    this.$store.dispatch('addUser',this.newUser)
    this.$store.dispatch('notification/showMessage', 'Added successfully')
    this.$router.push({ name: 'UserList' })
    },
     uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.newUser.avatar = e.target.result;
                   
                }}

  },
  computed: {

  },

  created () {
   
  }
}
</script>

<style scoped>


</style>
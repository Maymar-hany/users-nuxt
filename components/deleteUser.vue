<template>
  <div id="edit">

    <button class="button is-primary"  @click="deleteUser(id)"> Delete User </button>
  </div>
</template>

<script>

export default {
  name: 'Delete',
  components: {

  },
  data () {
    return {

    }
  },
  props: {
    id: Number
  },
  methods: {
    deleteUser (user) {
      this.$store.commit('users/DELETE_USER', user)
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
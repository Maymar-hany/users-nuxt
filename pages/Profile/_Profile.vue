<template>

      <div id="profile" class="column is-one-third
is-offset-one-quarter">

            <div class="section">
                <div class="container">
                 <div class="card">

                  <div class="column is-offset-one-quarter">
                    <div class="card-image">

                  <figure class="image is-128x128">
                    <img  :src="user.avatar" alt="User image">
                  </figure>

                </div>
                    <div>
                      <p class="title is-4">{{user.first_name}} {{user.last_name}} </p>
                    </div>

                     <div>
                      <span class="icon-text">
                        <span class="icon">
                           <fa :icon="['fas', 'envelope']" />
                        </span>
                        <span>{{user.email}}</span>
                      </span>
                    </div>
                  </div>

                    </div>
                </div>

                  </div>
                </div>

</template>

<script>


import { mapGetters } from 'vuex'
export default {
  
  name: 'Profile', 
  computed: {
   ...mapGetters(
      {      
        user:'users/userData'
      })
  }

}
</script>

<style>

</style>

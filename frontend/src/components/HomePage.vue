

<template>


  <v-container>

    
      <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/jmuplannerlogo.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the JMU personal planner application
        </h1>
        <p class="subheading font-weight-regular">
          This project was developed for ISAT 340
        </p>
      </v-flex>

    </v-layout>
    <template>
  <div>
    <v-layout row wrap>
    </v-layout>

    <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
  </div>
</template>
  </v-container>
  

  
</template>



 <script>
  export default {
    name: "homepage"
}
</script>

<style>

</style>

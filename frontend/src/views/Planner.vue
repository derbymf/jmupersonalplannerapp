<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Daily Assignments</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
            <v-container fill-height>
          <v-layout align-center>
            <strong class="display-4 font-weight-regular mr-4">{{ format(date, 'D') }}</strong>
            <v-layout column justify-end>
              <div class="headline font-weight-light">{{ format(date, 'dddd') }}</div>
              <div class="text-uppercase font-weight-light">{{ format(date, 'MMMM YYYY') }}</div>
            
             <v-flex xs12 sm6>
          <v-text-field
            value=""
            label = "Class"

          ></v-text-field>

        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            value=""
            label="assignment"

          ></v-text-field>
           </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            value=""
            label="Due Date"

          ></v-text-field>
        </v-flex>
        
            </v-layout>
          </v-layout>
        </v-container>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>
            

            <!-- <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile> -->
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { format } from "date-fns";
export default {
  data: () => ({
    date: null
  }),
  methods: {
    format: format
  },
  mounted() {
    let d = this.$route.params.date.split("-");
    this.date = new Date(+d[0], +d[1] - 1, +d[2]);
    console.log(this.$route.params, this.date);
  }
}
</script>
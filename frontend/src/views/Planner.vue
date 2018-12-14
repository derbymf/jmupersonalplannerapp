<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-toolbar color="cyan" dark>
            <v-toolbar-title>Daily Assignments</v-toolbar-title>
          </v-toolbar>
          <v-container fill-height>
            <v-layout align-center>
              <strong class="display-4 font-weight-regular mr-4">{{ format(date, 'D') }}</strong>
              <v-layout column justify-end>
                <div class="headline font-weight-light">{{ format(date, 'dddd') }}</div>
                <div class="text-uppercase font-weight-light">{{ format(date, 'MMMM YYYY') }}</div>
                <v-flex xs12 sm6>
                  <v-container fill-height>
                    <v-layout wrap fill-height>
                      <v-flex v-for="assignment of assignments" :key="assignment.id" xs4>
                        <v-card>
                          <v-toolbar color="secondary" dark>
                            <v-toolbar-title>{{ assignment.class }}</v-toolbar-title>
                          </v-toolbar>
                          <v-card-text>{{ assignment.description }}</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex v-if="assignments.length === 0" xs12 align-center justify-center>
                        no assignments to display 
                      </v-flex>
                    </v-layout>
                  </v-container>   
                </v-flex>
              </v-layout>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="cyan" dark>
            <v-toolbar-title>Add Assignment</v-toolbar-title>
          </v-toolbar>
          <v-container fill-height>
            <v-layout align-center>
              <form>
                <v-select
                  v-model="assignment.class_id"
                  label="Pick a Class"
                  :items="classes"
                  item-text="description"
                  item-value="id"
                  item-key="id"
                ></v-select>
                <v-textarea
                  v-model="assignment.description"
                  v-validate="'required|max:350'"
                  :counter="350"
                  :error-messages="errors.collect('description')"
                  label="Description*"
                  data-vv-name="description"
                  required
                ></v-textarea>
                <v-btn @click="submit" class="secondary">Add</v-btn>
              </form>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { format } from "date-fns";
import { getAssignments, updateAssignment, addAssignment } from "@/services/assignments";
import { getClasses} from "@/services/classes";

export default {
  data: () => ({
    date: null,
    assignments: [],
    assignment: {
      class_id: null, 
      description: ""
    },
    dictionary: {

    }
  }),
  methods: {
    format: format,
    async submit(){
      const valid = await this.$validator.validateAll();
      console.log(this.assignment);
      if(valid){
        try {
          let assn = this.assignment;
          assn.due_date = this.$route.params.date;
          assn = await addAssignment(assn);
          assn.class = this.classes.filter(c => c.id === assn.class_id)[0].description;
          this.assignments.push(assn);
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  asyncComputed: {
    assignments:{
      async get() {
        let query = {

          query: {
            $limit: 20,
            due_date: this.$route.params.date
          }
        };
        const assn = await getAssignments( query );
        console.log(assn.data);
        return assn.data;
      },
      default: []  
    },
    classes: {
      async get(){
        let c = await getClasses({query:{$limit: 50, $sort:{description: 1}}});
        console.log(c)
        return c.data;
      },
      default: []
    }
  },
  mounted() {
    let d = this.$route.params.date.split("-");
    this.date = new Date(+d[0], +d[1] - 1, +d[2]);
    console.log(this.$route.params, this.date);
    this.$validator.localize("en", this.dictionary);
  },
  $_veeValidate: {
    validator: "new"
  }
};
</script>
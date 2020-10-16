<template>
    <div >
      <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" >
              <SelectPCategory @pCategoryChange="setPCategory"/>
          </v-col>
          <v-col cols="12" md="3" >
            <SelectPType :pCategory="selectedPCategory" @pTypeChange="setPType"/>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field v-model="pName" @change="enableSubmit" label="Nombre" required></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn @click="submitNewDesign">Crear Diseño</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
  
</template>


<script>
// import axios from 'axios';
import SelectPCategory from './SelectPCategory.vue'
import SelectPType from './SelectPType.vue'
import axios from 'axios';
export default {
  name: 'NewDesignForm',
   components: {
     SelectPCategory,
     SelectPType,
   },
   data () {
        return {
            valid: true,
            pName: '',
            selectedPCategory: null,
            selectedPType: null,
        }
    },
    methods: {
        setPCategory(newValue) {
            console.log("NewFormselectedPCategory: " + newValue);
            this.selectedPCategory = newValue;
        },
        setPType(newValue) {
            console.log("NewFormSelectedPType: " + newValue);
            this.selectedPType = newValue;
        },
        enableSubmit(){
          if(this.pName.length > 2 && this.selectedPType.length >2){
            this.loading= false;
          }
        },
        async submitNewDesign(){
            console.log("Submit New Design: " + this.selectedPCategory + " - " + 
            this.selectedPType + " - " + this.pName)

            //Define pDesign id
            let id = this.selectedPCategory + '_' + this.selectedPType + '_' + this.pName.trim().toLowerCase().replace(/\s/g, '');
            let title = this.selectedPCategory + '-' + this.selectedPType + '_' + this.pName;
            let pDesign = {
              "id" : id, 
              "title" : title, 
              "pCategory" : this.selectedPCategory,  
              "pType" : this.selectedPType };
              axios.post("http://localhost:8080/pdesign", pDesign).then(result => {
                console.log(result.data);
              })
              .catch(error => {
                console.log(error);
              });

        }
    },

}
</script>
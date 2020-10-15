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
        submitNewDesign(){
            console.log("Submit New Design: " + this.selectedPCategory + " - " + 
            this.selectedPType + " - " + this.pName)
            //   axios.get("http://localhost:8080/poption/pcategory").then((result) => {
            // let categories = result.data.categories;
            // this.categories = categories;
            // console.log(categories);
    })
        }
    },

}
</script>
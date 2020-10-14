<template>
    <div >
      <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" >
              <SelectPCategory @pCategoryChange="setPCategory"/>
          </v-col>
          <v-col cols="12" md="4" >
            <SelectPType :pCategory="selectedPCategory"/>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="pName" label="Nombre" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
  
</template>


<script>
import SelectPCategory from './SelectPCategory.vue'
import SelectPType from './SelectPType.vue'
// import SubmitNewDesign from './SubmitNewDesign.vue'
export default {
  name: 'NewDesignForm',
   components: {
     SelectPCategory,
     SelectPType,
    //  SubmitNewDesign
   },
   data () {
        return {
            valid: true,
            pName: '',
            selectedPCategory: 'box'
        }
    },
    methods: {
        setPCategory(newValue) {
            console.log("NewFormselectedPCategory: " + newValue);
            this.selectedPCategory = newValue;
        }
    },

}
</script>
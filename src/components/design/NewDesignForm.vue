<template>
    <div class="hello">
        <!-- <h3>Crear Diseño</h3>
        
        <div class="p-d-flex p-flex-column p-flex-md-row">
            <div class="p-mb-2 p-mr-2">
                <label for="pCategory">Categoría</label>
                <SelectPCategory @selected-pcategory="selectPCategory"/>
            </div>
            <div class="p-mb-2 p-mr-2">
                <label for="pType">Tipo</label>
                <SelectPType :pCategory="selectedPCategory"/>
            </div>
            <div class="p-mb-2 p-mr-2">
                <label for="pName">Nombre</label>
                <InputText id="pName" type="text" placeholder="Modelo" />
            </div>
            <div class="p-mb-2 p-mr-2">
                <SubmitNewDesign/>
            </div>
        </div> -->


     <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" >
            <!-- <SelectPCategory @selected-pcategory="selectPCategory"/> -->
            <SelectPCategory/>
        </v-col>

        <v-col cols="12" md="4" >
           <!-- <v-select
          :items="items"
          label="Standard"></v-select> -->
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
// import SelectPType from './SelectPType.vue'
// import SubmitNewDesign from './SubmitNewDesign.vue'
export default {
  name: 'NewDesignForm',
   components: {
     SelectPCategory,
    //  SelectPType,
    //  SubmitNewDesign
   },
   data () {
        return {
            valid: true,
            pName: ''
            // selectedPCategory: 'box'
        }
    },
    // methods: {
    //     selectPCategory(pCategory) {
    //         console.log("NewFormselectedPCategory: " + pCategory);
    //         this.selectedPCategory = pCategory;
    //     }
    // }

}
</script>
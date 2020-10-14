<template>
  <div>
    categoria seleccionada: {{pCategory}}
    <!-- <input type="text" :value="pCategory" /> -->
      <v-select :items="types" label="Tipo de Producto"  item-value='id' item-text='title' ></v-select>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SelectPType',
  props: {
    pCategory: String
  }, 
  methods: {
    selectPType (event){
          console.log('selectedPType: ' + event.value);
      },
      updatePTypes(newPCategory){
         axios.get("http://localhost:8080/poption/pcategory").then((result) => {
        let categories = result.data.categories;
        let filteredCategory = categories.filter(res=>res.id==newPCategory);
        this.types = filteredCategory[0].ptypes;
    })
      }
  }, 
    data() {
        return {
            selectedType: null,
            types: []
        }
    },
  watch: { 
      pCategory: function() {
        this.updatePTypes(this.pCategory);
      }
    } 

}
</script>
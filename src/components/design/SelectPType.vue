<template>
  <div>
    categoria seleccionada: {{pCategory}}
    <Dropdown inputId="selectPType" v-model="selectedType" @change="selectPType" :options="types" optionLabel="title" optionValue="id" placeholder="Tipo" /> 
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SelectPType',
    async created() {
    axios.get("http://localhost:8080/poption/pcategory").then((result) => {
        let categories = result.data.categories;
        let filteredCategory = categories.filter(res=>res.id=='box');
        this.types = filteredCategory[0].ptypes;
    })
  },
  // props: {
  //   prop-pCategory
  // }, 
  methods: {
    selectPType (event){
          console.log('selectedPType: ' + event.value);
        //   this.$emit('setPCategory', event.value.id);
      }
  }, 
    data() {
        return {
            pCategory: this.category,
            selectedType: null,
            types: []
        }
    },
  watch: { 
      pCategory: function() { // watch it
        console.log('change')
      }
    }
}
</script>
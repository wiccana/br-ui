<template>
    <Dropdown inputId="selectPType" v-model="selectedType" @change="selectPType" :options="types" optionLabel="title" optionValue="id" placeholder="Tipo" /> 
</template>

<script>
import axios from 'axios';
export default {
  name: 'SelectPType',
    async created() {
    axios.get("http://localhost:8080/poption/pcategory").then((result) => {
        let categories = result.data.categories;
        let filteredCategory = categories.filter(res=>res.id==this.pCategory);
        this.types = filteredCategory[0].ptypes;
    })
  },
  props: {
    pCategory: { 
        type: String, 
        default: 'box'
    }
  }, 
  methods: {
    selectPType (event){
          console.log('selectedPType: ' + event.value);
        //   this.$emit('setPCategory', event.value.id);
      }
  }, 
    data() {
        return {
            selectedType: null,
            types: []
        }
    },
  // watch: { 
  //     pCategory: function(newVal, oldVal) { // watch it
  //       console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  //     }
  //   }
}
</script>
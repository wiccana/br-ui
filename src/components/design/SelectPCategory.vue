<template>
     <Dropdown inputId="pCategory" v-model="selectedCategory" @change="selectPCategory" :options="categories" optionLabel="title" optionValue="id" placeholder="Categoría" />
</template>

<script>
import axios from 'axios';
export default {
  name: 'SelectPCategory',
    async created() {
    axios.get("http://localhost:8080/poption/pcategory").then((result) => {
        let categories = result.data.categories;
        this.categories = categories;
    //   console.log(categories);
    console.log(result);
    })
  },
  methods : {
      selectPCategory (event){
          console.log('selectedCategory: ' + event.value);
           //   this.$emit('setPCategory', event.value.id);
      }
  },
   data() {
        return {
            selectedCategory: null,
            categories: []
        }
    }
}
</script>

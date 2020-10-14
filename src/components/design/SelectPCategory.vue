<template>
     <!-- <Dropdown inputId="pCategory" :value="selectedCategory" @change="onChangePCategory" :options="categories" optionLabel="title" optionValue="id" placeholder="Categoría" /> -->
      <v-select :items="items" label="Categoría"  item-value='id' item-text='title' ></v-select>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SelectPCategory',
    async created() {
    axios.get("http://localhost:8080/poption/pcategory").then((result) => {
        let categories = result.data.categories;
        this.items = categories;
    //   console.log(categories);
        console.log(categories);
    })
  },
//   props : {
//       value : String,
//       modelValue : String
//   },
  // methods : {
  //     onChangePCategory (event){
  //       console.log('onChangePCategory: ' + event.value);
  //       this.selectedCategory = event.value;
  //       this.$emit('selected-pcategory', event.value);
  //     }
  // },
   data() {
        return {
            // selectedCategory: null,
            // items: [],
             items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            // modelValue: 'box'
        }
    },
    //  watch: { 
    //   selectedCategory: function() { // watch it
    //   this.modelValue = this.selectedCategory
    //     console.log('this.selectedCategory ');
    //   }
    // }
}
</script>
<style scoped>

</style>

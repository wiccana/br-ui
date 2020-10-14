<template>
    <div class="hello">
        <h3>Crear Diseño</h3>
        
        <div class="p-d-flex p-flex-column p-flex-md-row">
            <div class="p-mb-2 p-mr-2">
                <label for="state">Categoría</label>
                <SelectPCategory @selected-pcategory="selectPCategory"/>
            </div>
            <div class="p-mb-2 p-mr-2">
                <label for="state">Tipo</label>
                <SelectPType :pCategory="pCategory"/>
            </div>
            <div class="p-mb-2 p-mr-2">
                <label for="state">Nombre</label>
                <InputText id="firstname5" type="text" placeholder="Modelo" />
            </div>
            <div class="p-mb-2 p-mr-2">
                <SubmitNewDesign/>
            </div>
        </div>

    </div>
  
</template>


<script>
import SelectPCategory from './SelectPCategory.vue'
import SelectPType from './SelectPType.vue'
import SubmitNewDesign from './SubmitNewDesign.vue'
export default {
  name: 'NewDesignForm',
   components: {
     SelectPCategory,
     SelectPType,
     SubmitNewDesign
   },
   data () {
        return {
            pCategory: null,

        }
    },
    methods: {
        // Define method that will use the payload to update the data property
        selectPCategory(pCategory) {
            console.log("NewFormselectedPCategory: " + pCategory);
            this.pCategory = pCategory;
        }
    }

}
</script>
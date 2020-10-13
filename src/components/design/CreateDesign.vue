<template>
  <div class="hello">
   <h3>Crear Diseño</h3>
    <div class="p-d-flex p-flex-column p-flex-md-row">
       <div class="p-mb-2 p-mr-2">
          <label for="state">Categoría</label>
          <Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" />
        </div>
        <div class="p-mb-2 p-mr-2">
          <label for="state">Tipo de Producto</label>
          <Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" />
        </div>
         <div class="p-mb-2 p-mr-2">
            <label for="firstname5" class="p-sr-only">Nombre</label>
            <InputText id="firstname5" type="text" placeholder="Modelo" />
        </div>
        <Button type="button" label="Submit" />
  </div>

  </div>
</template>

<script>
export default {
  name: 'CreateDesign',
   data() {
        return {
            selectedState: null,
            states: [
                {name: 'Arizona', code: 'Arizona'},
                {name: 'California', value: 'California'},
                {name: 'Florida', code: 'Florida'},
                {name: 'Ohio', code: 'Ohio'},
                {name: 'Washington', code: 'Washington'}
            ],
            cities1: [],
            cities2: [],
            city1: null,
            city2: null
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

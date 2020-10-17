<template>
  <div>
      Design Steps by BR
      Titulo: {{pDesign.title}}
      
  </div>
  
</template>

<script>
// import NewDesignForm from './NewDesignForm.vue'
// import DesignSteps from './DesignSteps.vue'
// import axios from 'axios';
export default {
  name: 'DesignSteps',
//    components: {
//      NewDesignForm,
//      DesignSteps
//    },
//    created() {
//       this.checkUnfinished();
//    },
    props: {
        pDesign: Object
    }
//    data () {
//       return {
//         unfinished: false 
//     }
//    },
//    methods: {
//      checkUnfinished(){
//         axios.get("http://localhost:8080/pdesign?finished=false", null).then(result => {
//                 console.log("unfinished: " + result.data);
//                 if(result.data.length > 0) this.unifinished = true;
//               })
//               .catch(error => {
//                 console.log(error);
//               });
//      }
//    }
 }
</script>


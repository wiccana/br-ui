<template>
  <div>
    <div  v-show="showPendingDesign">
    <DesignSteps/>
    </div>
    <div v-show="!showPendingDesign">
      <NewDesignForm/>
    </div>
  </div>
  
</template>

<script>
import NewDesignForm from './NewDesignForm.vue'
import DesignSteps from './DesignSteps.vue'
import axios from 'axios';
export default {
  name: 'CreateDesign',
   components: {
     NewDesignForm,
     DesignSteps
   },
   created() {
      this.checkUnfinished();
   },
   data () {
      return {
        unfinished: false 
    }
   },
  computed:{
      showPendingDesign(){
      return this.unfinished;
       }
    },
   methods: {
     checkUnfinished(){
        axios.get("http://localhost:8080/pdesign?finished=false", null).then(result => {
          if(result.data.length > 0){
            console.log("unfinished: " + result.data + " length " + result.data.length, " new Form should not be displayed");
              this.unfinished = true;
              this.showPendingDesign();
            }
              })
              .catch(error => {
                console.log(error);
              });
     }
   }
 }
</script>

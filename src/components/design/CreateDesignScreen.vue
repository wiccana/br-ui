<template>
  <div>
    <div  v-show="showPendingDesign">
      <DesignSteps :pDesign="pendingDesign"/>
    </div>
    <div v-show="!showPendingDesign">
      <NewDesignForm @design-created="showPDesign"/>
    </div>
  </div>
  
</template>

<script>
import NewDesignForm from './NewDesignForm.vue'
import DesignSteps from './DesignSteps.vue'
import axios from 'axios';
export default {
  name: 'CreateDesignScreen',
   components: {
     NewDesignForm,
     DesignSteps
   },
   created() {
      this.checkUnfinished();
   },
   data () {
      return {
        unfinished: false, 
        pendingDesign: { "id": "book_coloring_pepitalatrolita",
                "title": "book-coloring_Pepita la trolita",
                "description": null,
                "pCategory": "book",
                "pType": "coloring",
                "finished": false,
                "steps": null
        }
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
     },
     showPDesign(pdesign){
       this.pendingDesign = pdesign;
       this.unfinished = true;
     }
   }
 }
</script>

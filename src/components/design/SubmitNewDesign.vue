<template>
        <Button type="button" label="Submit" @click="submit" />
</template>

<script>
import axios from 'axios';
export default {
  name: 'SubmitNewDesign',
    created() {
    axios.get("http://localhost:8080/poption/pcategory").then((result) => {
      console.log(result.data);
    })
  },
   methods: {
    submit: function() {
      this.$emit("inputData", this.tempMessage);
      this.tempMessage = "";
    }
  }
}
</script>
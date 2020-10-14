<script>
import axios from 'axios'
export default {
  name: 'PTypesFetch',
    created() {
        fetchData()
    },
  methods:{
      fetchData() {
        axios.get("http://localhost:8080/poption/pcategory").then((result) => {
            this.$emit(result)
        }).catch(error => console.log(error))
    }
  }
 
}
</script>
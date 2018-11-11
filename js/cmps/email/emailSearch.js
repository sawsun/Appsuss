export default{
    template:`<section class="search-container">
    <!-- <input type="text" id="search-bar" placeholder="Search your emails">
    <a href="#"><img class="search-icon" src="../../../img/search-icon.png"></a> -->
    <input class="inputSearch" v-model="str"  @input="filterMail" type="text" placeholder="🔍 Search" name="search">
  </section>`
  ,
  data(){
    return {
      str:''
    }
  },
  methods:{
    filterMail(){
      this.$emit('setSearch',this.str);
    }
  }
}
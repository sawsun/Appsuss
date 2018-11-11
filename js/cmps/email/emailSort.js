export default {
  template: `
  <select v-model="sort" @change="setSort" class="search search-select">
  <option value="" disabled selected>Sort</option>
          <option value="date">Date</option>
          <option value="subject">Subject</option>
  </select>
`,
  data() {
    return {
      sort: ''
    }
  },
  methods: {
    setSort() {
      this.$emit('setSort', this.sort);
    }
  }
}

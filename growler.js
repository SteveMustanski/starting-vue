const growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: '',
    searchIndex: 'beers',
    selectedSearchIndex: 'beers'
  },
  methods: {
    executeSearch: function () {
      alert(`Searching for ${this.query}...`);
    }
  }
})
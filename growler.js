const growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Growler',
    query: '',
    searchIndex: 'beers',
    selectedSearchIndex: 'beers',
    beerList: [
      'Beer 1',
      'Beer 2',
      'Beer 3'
    ]
  },
  methods: {
    executeSearch: function () {
      alert(`Searching for ${this.query}...`);
    }
  }
})
<head>
  <link rel="stylesheet"
        href="https://unpkg.com/bulma@0.7.4/css/bulma.css"/>
</head>
<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <h1>Input User ID</h1>
      </div>
      <input v-model="user_id"
             @keyup.enter="get_info"
             class="input"
             type="text"
             placeholder="Untappd ID"/>
      <button class="button is-info" v-on:click="get_info">
        Let's get drunk!
      </button>
    </header>
    <ul>
      <template v-for="item in beers">
        <h3>{{ item.beer.beer_name }} ({{item.beer.beer_style}}) (Rate:{{item.rating_score}})</h3>
      </template>
      <select v-model="selected">
        <option value="Major">Major</option>
        <option value="Minor">Minor</option>
      </select>
    </ul>
  </div>
</template>

<script>
  import {bus} from '../main'
  import Graph from "./Graph";

  export default {
    name: 'HelloWorld',
    components: {Graph},
    data() {
      return {
        beers: '',
        client_id: 'client_id=C95B72B6E5FD605C8A905F905649A5D77F0955BF',
        client_secret: 'client_secret=82EFFF80693DE99820A19DC94CDA2BDF553E1808',
        user_id: '',
        limit: 'limit=100',
        sort: 'sort=highest_rated_you',
        sort_name: '',
        each_line: '',
        final_info: '',
        beer_type: [],
        selected: 'Major',
      }
    },
    methods: {
      get_info: function () {
        this.$axios.get(
          'https://api.untappd.com/v4/user/beers/' + this.user_id + '?' +
          this.client_id + '&' + this.client_secret + '&' + this.limit + '&' + this.sort
        ).then((response) => {
          this.data_obj = response.data.response;
          this.beers = this.data_obj.beers.items;
          this.sort_name = this.data_obj.sort_name;

          for (let i = 0; i < this.beers.length; i++) {
            let beer_style = this.beers[i].beer.beer_style;
            if (this.selected === "Major") {
              beer_style = beer_style.split('-')[0]
            }
            this.beer_type.push(beer_style);
          }

          // FIXME: total amount of beers
          // FIXME_2: dynamic major, minor function
          let count_beer_type = {};
          this.beer_type.forEach(function (x) {
            count_beer_type[x] = (count_beer_type[x] || 0) + 1;
          });
          bus.$emit('updateDonut', count_beer_type);
        });
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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

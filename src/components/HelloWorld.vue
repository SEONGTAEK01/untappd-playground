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
             class="input"
             type="text"
             placeholder="Untappd Name"/>
      <button class="button is-info" @click="get_info">
        Let's get drunk!
      </button>
    </header>
    <ul>
      <template v-for="item in beers">
        <h3>{{ item.beer.beer_name }}({{item.beer.beer_style}})(Rate:{{item.rating_score}})</h3>
      </template>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        beers: '',
        client_id: 'client_id=C95B72B6E5FD605C8A905F905649A5D77F0955BF',
        client_secret: 'client_secret=82EFFF80693DE99820A19DC94CDA2BDF553E1808',
        user_id: '',
        limit: 'limit=20',
        sort: 'sort=highest_rated_you',
        sort_name: '',
        each_line: '',
        final_info: '',
      }
    },
    methods: {
      get_info: function () {
        console.log(this.user_id);

        this.$axios.get(
          'https://api.untappd.com/v4/user/beers/' + this.user_id + '?' +
          this.client_id + '&' + this.client_secret + '&' + this.limit + '&' + this.sort
        ).then((response) => {
          this.data_obj = response.data.response;
          this.beers = this.data_obj.beers.items;
          this.sort_name = this.data_obj.sort_name;

          console.log(this.data_obj.beers.items);
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

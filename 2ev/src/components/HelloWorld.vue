<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import API from './api'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      api: {},
      posts: []
    }
  },
  async created() {
    this.api = new API('https://jsonplaceholder.typicode.com')
    this.posts = await this.api.getPosts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

const fetch = require('node-fetch')
const assert = require('assert')

class API {
  constructor(url) {
    this.url = url
  }

  async getPosts() {
    let result = await fetch(`${this.url}/posts`,
    {
      headers: {
        'Content-type': 'application/json'
      }
    })

    return await result.json()
  }

  async getTrue() {
    return false
  }

  async getPostByUser(userId) {
    return 0
  }

  async countPostsByUser(userId) {
    return 0
  }

  async getPostsWithWordCount() {
    // debe devolver una estructura de posts a la que añadimos la
    // cuenta de palabras que tiene el body
    return 0
  }

  async startWithSameLetter() {
    // debe devolver aquellos posts en los que el título y el body
    // empiecen por la misma letra
    return 0
  }
}

async function main() {
  let api = new API('https://jsonplaceholder.typicode.com')

  let data = await api.getTrue()
  assert.strictEqual(data, true)

  data = await api.getPosts()
  assert.strictEqual(data.length, 100)
  // for (let user of data) {
  //   console.log(`user ${JSON.stringify(user)}`)
  // }

  data = await api.getPostByUser(1)
  assert.strictEqual(data.length, 10)
  // for (let user of data) {
  //   console.log(`user ${JSON.stringify(user)}`)
  // }

  data = await api.countPostsByUser(2)
  assert.strictEqual(data, 10)
  // console.log(`total posts of user 1 ${data}`)

  data = await api.getPostsWithWordCount()
  assert.strictEqual(data[0].totalWords, 20)
  assert.strictEqual(data[1].totalWords, 28)
  // for (let post of data) {
  //   console.log(`post ${JSON.stringify(post)}`)
  // }

  data = await api.startWithSameLetter()
  assert.strictEqual(data.length, 8)
  // console.log(`items which starts with same letter: ${data.length}`)
  // for (let post of data) {
  //   console.log(`post ${JSON.stringify(post)}`)
  // }
}


main()
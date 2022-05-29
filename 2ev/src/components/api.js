export default class API {
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

  async doLike(idPost) {
    let result = await fetch(`${this.url}/${idPost}/like`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    })

    return await result.json()
  }
}
`{
    article(id: $id) {
        title body
        author {
            id
            username
        }
    }
}`

`{
  article(id: 2) {
    title
    snippet
    author {
      username
    }
  }
}`

`{
    article(id: 2) {
        title
        body
        author {
            username
        }
    }
}`
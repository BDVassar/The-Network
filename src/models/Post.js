export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.createdAt = data.createdAt
    this.creatorId = data.creatorId
    this.imgUrl = data.imgUrl
    this.likes = data.likes
    this.creator = data.creator
  }
}
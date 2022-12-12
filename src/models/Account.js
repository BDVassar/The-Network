export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email || 'example@example.com'
    this.name = data.name
    this.picture = data.picture || 'no Image'
    // TODO add additional properties if needed
    this.bio = data.bio || 'Bio goes here'
    this.coverImg = data.coverImg
    this.createdAt = data.createdAt
    this.graduated = data.graduated
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class || 'Class goes here'
  }
}

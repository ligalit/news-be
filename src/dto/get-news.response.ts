export default class NewsResponse {
  id: number
  header: string
  description: string
  tags: string[]
  author:number
  authorNickname: string
  authorFirstName?: string
  authorLastName?: string

  constructor(props: NewsResponse) {
    this.id = props.id
    this.header = props.header
    this.description = props.description
    this.tags = props.tags
    this.author = props.author
    this.authorNickname = props.authorNickname
    this.authorFirstName = props.authorFirstName
    this.authorLastName = props.authorLastName
  }
}

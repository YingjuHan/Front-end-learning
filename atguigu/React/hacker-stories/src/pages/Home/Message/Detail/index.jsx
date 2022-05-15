import React, { Component } from 'react'

const data = [
    {id: '01', content: '你好中国'},
    {id: '02', content: '你好英国'},
    {id: '03', content: '你好美国'},
]

export default class Detail extends Component {
  render() {
      console.log(this.props)
      const {id, title} = this.props.match.params
      const findResult = data.find((obj) => {
          return obj.id === id
      })
    return (
      <ul>
          <li>Id: {id}</li>
          <li>Tilte: {title}</li>
          <li>Content: {findResult.content}</li>
      </ul>  
    )
  }
}

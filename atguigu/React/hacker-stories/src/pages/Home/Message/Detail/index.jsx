import React, { Component } from 'react'
import qs from 'qs'

const data = [
    {id: '01', content: '你好中国'},
    {id: '02', content: '你好英国'},
    {id: '03', content: '你好美国'},
]

export default class Detail extends Component {
  render() {
      console.log(this.props)
      const {search} = this.props.location
      const {id, title} = qs.parse(search.slice(1))
      console.log(id, title)
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

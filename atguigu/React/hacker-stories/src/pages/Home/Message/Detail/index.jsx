import React, { Component } from "react";
import qs from "qs";

const DetailData = [
  { id: "01", content: "你好中国" },
  { id: "02", content: "你好英国" },
  { id: "03", content: "你好美国" },
];

export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 接收state参数
    const { id, title } = this.props.location.state || {};
    console.log(id, title);
    const findResult =
      DetailData.find((detailObj) => {
        return detailObj.id === id;
      }) || {};
    return (
      <ul>
        <li>Id: {id}</li>
        <li>Tilte: {title}</li>
        <li>Content: {findResult.content}</li>
      </ul>
    );
  }
}

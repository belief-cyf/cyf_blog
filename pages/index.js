import React, { Component } from 'react'

export default class app extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: 'cyf'
    }
  }

  render() {
    return (
      <div className="index main">
        <h3>大半年没写react已经忘得差不多了。。。</h3>
        <h3>本站将基于React、Next、Antd、React-router、React-redux、redux构建一个采用服务端渲染的个人博客</h3>
        <h2>by:{this.state.userName}</h2>
      </div>
    )
  }
}
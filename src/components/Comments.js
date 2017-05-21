import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  constructor (){
    super()
    this.state = {
        list: [
          {body:'comment 1', username:'dtrump', timestamp:'10:30'},
          {body:'comment 2', username:'hclinton', timestamp:'10:34'},
          {body:'comment 3', username:'gjohnson', timestamp:'10:39'}
        ]
    }
  }

  render(){
    const commentList = this.state.list.map((comment, i) => {
      return(
        <li><Comment currentComment={comment}/></li>
      )
    })
    return(
      <div>
        <h2>Comments: Zone 1</h2>
        <div style={{padding:12, background:'deeppink', border:'1px solid #000' }}>
          <ul>
            {commentList}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
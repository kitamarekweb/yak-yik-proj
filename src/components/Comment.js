import React, { Component } from 'react'

class Comment extends Component {

  render(){
    return(
      <div>
        {this.props.currentComment.body}
      </div>
    )
  }
}

export default Comment
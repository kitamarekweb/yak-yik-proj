import React, { Component } from 'react'

class CreateComment extends Component {
  constructor(){
    super()
    this.state = {
      comment: {

      }
    }
  }


  updateComment(event){
    console.log('updateComment: ' + event.target.id + '==' + event.target.value)
  }

  render(){
    return(
      <div>
        <h3>Create Comment</h3>
        <input id="username" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Username"/><br/>
        <input id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment"/><br/>
        <button className="btn btn-info">Submit Comment</button>
      </div>
    )
  }
}

export default CreateComment
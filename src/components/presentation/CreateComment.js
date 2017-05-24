import React, { Component } from 'react'

class CreateComment extends Component {
  render(){
    return(
      <div>
        <h3>Create Comment</h3>
        <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username"/><br/>
        <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment"/><br/>
        <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
      </div>
    )
  }
}

export default CreateComment
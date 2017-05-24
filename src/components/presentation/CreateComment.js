import React, { Component } from 'react'

class CreateComment extends Component {
  render(){
    return(
      <div>
        <h3>Create Comment</h3>
        <input className="form-control" type="text" placeholder="Username"/><br/>
        <input className="form-control" type="text" placeholder="Comment"/><br/>
        <button className="btn btn-info">Submit Comment</button>
      </div>
    )
  }
}

export default CreateComment
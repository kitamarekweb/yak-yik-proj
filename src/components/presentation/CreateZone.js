import React, { Component } from 'react'

class CreateZone extends Component {
  render() {
    return (
      <div>
        <input id="name" className="form-control" type="text" placeholder="Name"/><br/>
        <input id="zipCode" className="form-control" type="text" placeholder="Zip Code"/><br/>
        <button className="btn btn-danger">Add Zone</button>
      </div>
    )
  }
}

export default CreateZone
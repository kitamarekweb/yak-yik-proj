import React, { Component } from 'react'

class CreateZone extends Component {
  constructor(){
    super()
    this.state = {
      zone: {}
    }
  }

  updateZone(event){
    let updated = Object.assign({}, this.state.zone)
    updated[event.target.id] = event.target.value
    this.setState({
      zone: updated
    })
  }

  submitZone(event){
    console.log('submitZone: ' +JSON.stringify(this.state.zone))
    let updated = Object.assign({}, this.state.zone)
    updated['zipCodes'] = updated.zipCode.split(',') //backend is expecting Array, so we have to take string and convert to array
    this.props.onCreate(this.state.zone)
  }

  render() {
    return (
      <div>
        <h3>Create Zone</h3>
        <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name"/><br/>
        <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"/><br/>
        <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Add Zone</button>
      </div>
    )
  }
}

export default CreateZone
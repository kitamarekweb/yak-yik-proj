import React, {Component} from 'react'
import Zone from '../presentation/Zone'

class Zones extends Component {
  //creating state
  constructor() {
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      list: [
        {name: 'Zone 1', zipCode: '10012', numComments: 10},
        {name: "Zone 2", zipCode: '10013', numComments: 20},
        {name: 'Zone 3', zipCode: '10014', numComments: 30},
        {name: 'Zone 4', zipCode: '10015', numComments: 40},
        {name: 'Zone 5', zipCode: '10015', numComments: 40}
      ]
    }
  }

  updateZone (event){
    console.log('updateZone: ' +event.target.id+ '==' +event.target.value)

    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[event.target.id] = event.target.value
    this.setState ({
      zone: updatedZone
    })
  }

  addZone (){
    console.log('ADD ZONE: '+JSON.stringify(this.state.zone))
  }


  render() {

    const listItems = this.state.list.map((zone, i) => {
      return(
        <li key={i}><Zone currentZone={zone}/></li>
      )
    })

    return (
      <div>
        <ol>
          {listItems}
        </ol>

        <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name"/><br/>
        <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code"/><br/>
        <button onClick={this.addZone.bind(this)} className="btn btn-danger">Add Zone</button>

      </div>
    )
  }
}

export default Zones
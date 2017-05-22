import React, {Component} from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

class Zones extends Component {
  //creating state
  constructor() {
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      list: []
    }
  }

  //its React function, this function gets called when the component show up
  //we now implement it ourselves to then change its reaction for our own to run when its called
  componentDidMount(){
    console.log('componentDidMount')
    superagent
      .get('/api/zone')
      .query()
      .set()
      .end()

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

    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.zone)
    this.setState({
      list: updatedList
    })
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
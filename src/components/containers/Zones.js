import React, {Component} from 'react'
import Zone from '../presentation/Zone'
import { APIManager } from '../../utils'


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

    // this is to communicate with backend
    APIManager.get('/api/zone', null, (err, response) => {
      if(err){
        alert('ERROR: ' +err.message)
        return
      }

      // console.log('RESULTS: ' +JSON.stringify(response.results))
      this.setState({
        list: response.results
      })
    })

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

    let updatedZone = Object.assign({}, this.state.zone)
    // updatedZone['zipCodes'] -> this is to create property 'zipCodes' inside updatedZone so we can store array of zip codes
    updatedZone['zipCodes'] = updatedZone.zipCode.split(',') //backend is expecting Array, so we have to take string and convert to array
    console.log('ADD ZONE: '+JSON.stringify(updatedZone))

    APIManager.post('/api/zone', updatedZone, (err, response) => {
      if (err){
        alert('ERROR: ' +err.message)
        return
      }

      console.log('ZONE CREATED: '+JSON.stringify(response))
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
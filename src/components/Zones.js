import React, {Component} from 'react'
import Zone from './Zone'

class Zones extends Component {
  //creating state
  constructor() {
    super()
    this.state = {
      list: [
        {name: 'Zone 1', zipCode: '10012', numComments: 10},
        {name: "Zone 2", zipCode: '10013', numComments: 20},
        {name: 'Zone 3', zipCode: '10014', numComments: 30},
        {name: 'Zone 4', zipCode: '10015', numComments: 40}
      ]
    }
  }

  render() {

    return (
      <div>
        <ol>
          <li><Zone currentZone={firstZone}/></li>
          <li><Zone currentZone={secondZone}/></li>
          <li><Zone currentZone={thirdZone}/></li>
          <li><Zone currentZone={fourthZone}/></li>
        </ol>
      </div>
    )
  }
}

export default Zones
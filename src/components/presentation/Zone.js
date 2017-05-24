import React, {Component} from 'react'
import styles from './styles'

class Zone extends Component {

  render() {
    const style = styles.zone
    const zipCode = this.props.currentZone.zipCodes[0]
    const title = (this.props.isSelected ? 'Selected' : 'Not selected')

    return (
      <div style={style.container}>
        <h2 style={style.header}>
          { title }
        </h2>
        <span className="detail">{zipCode}</span><br/>
        <span className="detail">{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}

export default Zone
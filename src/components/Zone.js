import React, {Component} from 'react'

class Zone extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>
          <a style={styles.title} href="">{this.props.currentZone.name}</a>
        </h2>
        <span>{this.props.currentZone.zipCode}</span><br/>
        <span>{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}

  const
  styles = {
    container: {
      padding: 16,
      background: 'pink',
      marginTop: 12,
      border: '1px solid #000'
    },
    header: {
      marginBottom: 3 + 'px'
    },
    title: {
      textDecoration: 'none',
      color: 'red'
    }
  }


export default Zone
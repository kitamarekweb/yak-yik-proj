import React, {Component} from 'react'
import Comment from '../presentation/Comment'
import styles from '../presentation/styles'

class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        username: '',
        body: ''
      },
      list: [
        {body: 'comment 1', username: 'dtrump', timestamp: '10:30'},
        {body: 'comment 2', username: 'hclinton', timestamp: '10:34'},
        {body: 'comment 3', username: 'gjohnson', timestamp: '10:39'}
      ]
    }
  }

  submitComment(){
    console.log('submitComment: ' +JSON.stringify(this.state.comment))
  }

  updateUsername(event){
    console.log('updateUsername: '+ event.target.value)
    //this.state.comment['username'] = event.target.value // WRONG

    //we create a copy of full state
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = event.target.value
    this.setState({
      comment: updatedComment
    })
  }

  updateBody(event){
    console.log('updateBody: '+ event.target.value)

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = event.target.value
    this.setState({
      comment: updatedComment
    })

  }

  render() {
    const commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}><Comment currentComment={comment}/></li>
      )
    })

    return (
      <div>
        <h2>Comments: Zone 1</h2>
        <div style={styles.comment.commentsBox}>
          <ul style={styles.comment.commentsList}>
            {commentList}
          </ul>

          <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username"/><br/>
          <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment"/><br/>
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>

        </div>
      </div>
    )
  }
}

export default Comments
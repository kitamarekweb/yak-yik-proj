import React, {Component} from 'react'
import { CreateComment, Comment } from '../presentation/'
import styles from '../presentation/styles'
import { APIManager } from '../../utils'

class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        username: '',
        body: ''
      },
      list: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount-Comments')
    // this is to communicate with backend
    APIManager.get('/api/comment', null, (err, response) => {
      if(err){
        alert('ERROR: ' +err.message)
        return
      }

      this.setState({
        list: response.results
      })
    })
  }

  submitComment(){
    console.log('submitComment: ')

    // console.log('submitComment: ' +JSON.stringify(this.state.comment))
    //
    // APIManager.post('api/comment', this.state.comment, (err, response) => {
    //   if (err){
    //     alert(err)
    //     return
    //   }
    //
    //   console.log(JSON.stringify(response))
    //   let updatedList = Object.assign([], this.state.list)
    //   updatedList.push(response.result)
    //   this.setState({
    //     list: updatedList
    //   })
    // })
  }

  updateUsername(event){
    // console.log('updateUsername: '+ event.target.value)
    //this.state.comment['username'] = event.target.value // WRONG

    //we create a copy of full state
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = event.target.value
    this.setState({
      comment: updatedComment
    })
  }

  updateBody(event){
    // console.log('updateBody: '+ event.target.value)

    let updatedComment = Object.assign({}, this.state.comment) //copy of object 'comment' from state, that how React works, always do copy of element before change
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

          <CreateComment onCreate={this.submitComment.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default Comments
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const commentDetailsContainer = []

// Write your code here
class Comments extends Component {
  state = {commentDetails: commentDetailsContainer, name: '', comment: ''}

  username = event => {
    this.setState({name: event.target.value})
  }

  userComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const selectedColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      date: formatDistanceToNow(new Date()),
      initialBackgroundColor: `logo ${selectedColor}`,
    }
    console.log(newComment)

    this.setState(prevState => ({
      commentDetails: [...prevState.commentDetails, newComment],
      name: '',
      comment: '',
    }))
  }

  changeLikeButton = id => {
    const {commentDetails} = this.state
    this.setState(prevState => ({
      commentDetails: prevState.commentDetails.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  deleteSpecificComment = id => {
    const {commentDetails} = this.state
    const remainingDetails = commentDetails.filter(each => each.id !== id)
    this.setState({commentDetails: remainingDetails})
  }

  render() {
    const {commentDetails, name, comment} = this.state
    const hasComments = commentDetails.length !== 0

    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="comments-title">Comments</h1>
          <div className="inner-container">
            <form>
              <p className="say-something">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
                onChange={this.username}
                value={name}
              />
              <textarea
                rows="10"
                cols="38"
                placeholder="Your Comment"
                className="placeholder-text"
                onChange={this.userComment}
                value={comment}
              >
                {' '}
              </textarea>
              <br />
              <button
                type="submit"
                className="add-button"
                onClick={this.addComment}
              >
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img-size"
            />
          </div>
          <hr />
          <div>
            <div className="counts-container">
              <p className="comments-count">{commentDetails.length}</p>
              <p className="comments-text">Comments</p>
            </div>
            <ul>
              {hasComments &&
                commentDetails.map(each => (
                  <CommentItem
                    commentDetails={each}
                    key={each.id}
                    changeLikeButton={this.changeLikeButton}
                    deleteSpecificComment={this.deleteSpecificComment}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments

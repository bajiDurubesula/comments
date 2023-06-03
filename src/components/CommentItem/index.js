// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, changeLikeButton, deleteSpecificComment} = props
  const {
    id,
    name,
    comment,
    date,
    isLiked,
    initialBackgroundColor,
  } = commentDetails

  const likedButton = () => {
    changeLikeButton(id)
  }

  const deleteComment = () => {
    deleteSpecificComment(id)
  }

  return (
    <li className="li-container">
      <div className="logo-container">
        <p className={initialBackgroundColor}>{name[0]}</p>
        <div>
          <div className="name-date-container">
            <p className="commenter-name">{name}</p>
            <p className="commenter-date-posted">{date}</p>
          </div>
          <p className="commenter-comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        {!isLiked && (
          <div className="like-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
            <button
              className="like-container"
              type="button"
              onClick={likedButton}
            >
              Like
            </button>
          </div>
        )}
        {isLiked && (
          <div className="liked-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="like"
            />
            <button
              type="button"
              className="liked-container"
              onClick={likedButton}
            >
              Like
            </button>
          </div>
        )}
        <button
          type="button"
          data-testid="delete"
          onClick={deleteComment}
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem

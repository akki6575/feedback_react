// Write your React code here.
import {Component} from 'react'
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClicked} = props
  const {imageUrl, name} = emojiDetails

  return (
    <li className="emoji">
      <button className="button" type="button" onClick={onClicked}>
        <img src={imageUrl} alt={name} className="emoji-img" />
      </button>
      <p className="emoji-name">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {isClicked: false}

  onClicked = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    if (!isClicked) {
      return (
        <div className="app-container">
          <div className="card">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emoji-list">
              {emojis.map(each => (
                <EmojiCard
                  key={each.id}
                  onClicked={this.onClicked}
                  emojiDetails={each}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div className="app-container">
        <div className="card">
          <img src={loveEmojiUrl} className="image" alt="love emoji" />
          <h1 className="heading">Thank You!</h1>
          <p className="para">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
